import React from "react"
import { Table, message, Popconfirm } from "antd"
import { Button, Form, Input, Modal, Select } from "antd"
import moment from "moment" // for parsing the ISO-8601 date into readable format

// CSRF token needed for multiple functions
// var token = document.querySelector('meta[name="csrf-token"]').content;



class Alerts extends React.Component {
  // for the edit form inside of the edit modal - do I need this?
  formRef = React.createRef();
// do I need a constructor? constructor is used to initialize state and/or bind method to event
  constructor(props) {
    super(props);
    this.state = {
			alerts: [],
			count: 0,
    };
  }


  componentDidMount = () => {
    this.getAlerts();
  }

// would it be better to do this with DidUpdate?
// This wil update the alerts array and the count anytime state changes
  updateAlerts = () => {
    console.log("inside update alerts!");
    this.setState({ alerts: [] });
    this.getAlerts();
  }

// get request to display all Alerts
  getAlerts = () => {
		const url = "/api/alerts";
    fetch(url) 
      .then(response => {
        if (response.ok) { 
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => {
        console.log(response);
        const count = response.length;
        response.forEach((alert) => {
        // need to refactor time conversion into function!!
          if (alert.created_at) {
            var parts = alert.created_at.slice(0, -1).split('T');
            var dateComponent = parts[0];
            var timeComponent = parts[1].slice(0, 5)
            var created = dateComponent + " at " + timeComponent;
            };
          if (alert.updated_at) {
            var parts2 = alert.updated_at.slice(0, -1).split('T');
            var dateComponent2 = parts2[0];
            var timeComponent2 = parts2[1].slice(0, 5)
            var updated = dateComponent2 + " at " + timeComponent2;
          };
          const newAlert = {
            key: alert.id,
            id: alert.id,
            user_id: alert.user_id,
            level: alert.level,
            created_at: created,
            updated_at: updated,
            };
          this.setState((prevState) => ({
            alerts: [...prevState.alerts, newAlert],
            count: count,
          }));
        });
      })
      .catch((err) => message.error("Error: " + err));
  };

// Delete request to delete Alert
  deleteAlert = (id) => {
    console.log("inside delete!")    
    const url = '/alerts/' + id
// const token = document.querySelector('meta[name="csrf-token"]').content;
    console.log(url);
    fetch(url, {
      method: "delete",
//      headers: {
//        'X-CSRF-Token' : token,
//      }
    })
    .then((response) => {
      if (response.ok) {
        this.updateAlerts();
        return response.json();
      }
      throw new Error("Network response was not ok");
    })
    .catch((err) => message.error("Error: " + err));
  };

// Edit Modal Handling
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

// Put Request to Edit Alert
// binding is at onFinish inside of form
  handleUpdate = (event) => {
    const url = '/alerts/623c66cb5d32edd9a1357806';
    let level = event.level;
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
//        'X-CSRF-Token' : token,
      },
      body: JSON.stringify({
        alert: {
          level: level,
//        user_id: "622a9d4d5d32ed3a44ba3db6",
//        local_time: "2022-03-10 19:52:51 -0500"
        }
      })
    })
    .then((response) => {
      if (response.ok) {
        console.log("response ok for update");
        this.updateAlerts();
        return response.json();
    }
    throw new Error("Network response was not ok");
    })
    .catch((err) => message.error("Error: " + err));
  };

// Post Request to create new Alert
// Need to implement authentcation session so that I can grab user ID
  handleSubmit = (event) => {
		//let post_url = "https://posthere.io/98d3-48ec-9176";
    event.preventDefault();
    console.log("inside handle submit!");
    let alert_level = event.target[0].value;
    fetch(('/api/alerts'), {      
      method: 'POST',    
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
//        'X-CSRF-Token' : token
      },
      body: JSON.stringify({
        alert: {
          level: alert_level,
          user_id: 1,
          }
        })
      })
      .then((response) => {
        if (response.ok) {
        console.log(this);
          this.updateAlerts();
          return response.json();
        }
        throw new Error("Network response was not ok")
        })
      .catch(err => console.log(err));
  };

  convertTime = (props) => {
    var parts = props.slice(0, -1).split('T');
    var dateComponent = parts[0];
    var timeComponent = parts[1];
    console.log(dateComponent);
    console.log(timeComponent);
    return dateComponent
  }
  
  testClick = (event) => {
    console.log("clicked");
  }

// table data
  columns = [
		{
			title: "Level",
			dataIndex: "level",
			key: "level",
    },
		{
			title: "User Id",
			dataIndex: "user_id",
			key: "user_id",
		},
    {
		title: "Created At:",
		dataIndex: "created_at",
			key: "created_at",
		},
		{
			title: "Updated At:",
			dataIndex: "updated_at",
			key: "updated_at",
    },
    {
      title: "",
      key: "action",
      render: (_text, record) => (
      <button type="primary" onClick={this.showModal}>Edit{" "}</button>
      )
    },
		{
			title: "",
			key: "action",
			render: (_text, record) => (
				<Popconfirm
					title="Are you sure?"
					onConfirm={() => this.deleteAlert(record.id)}
					okText="Yes"
					cancelText="No"
        >
					<button type="danger">
						Delete{" "}
					</button>
				</Popconfirm>
			),
		},
	];

  render() {
    // const { alerts } = this.state;
    // console.log("alerts array from render function:")
    // alerts && console.log(this.state.alerts)
 //   const str = "2022-03-25T23:08:46.169Z"
 //   var parts = str.slice(0, -1).split('T');
 //   var dateComponent = parts[0];
 //   var timeComponent = parts[1];
    
    return (
      <div>
        <h1>Test Button</h1><button onClick={this.testClick}>Click!</button>

        <h1>Total Alerts: {this.state.count}</h1>
        <h1>Add An Alert: </h1>
        <form onSubmit={this.handleSubmit}>
          <label>Level: <input type="integer" /></label>
          <button type="submit" class="btn btn-dark">Submit</button>
        </form>
      <Table className="table-striped-rows" dataSource={this.state.alerts} columns={this.columns} pagination={{ pageSize: 5 }} />
      <Modal visible={this.state.visible} onCancel={this.handleCancel} footer={null}>
        <Form ref={this.formRef} layout="vertical" onFinish={this.handleUpdate}>
          <Form.Item name="level" label="Level" rules={[{ required: true, message: "Please enter an alertness level" }]}>
            <Input placeholder="Enter Alert Level..."/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" >Submit</Button>
          </Form.Item>      
        </Form>
      </Modal>
      </div>
    );
  }
}

export default Alerts
