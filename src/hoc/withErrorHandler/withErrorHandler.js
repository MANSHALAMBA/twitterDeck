import React, { Component } from "react";
//import Modal from "@material-ui/core/Modal";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import Aux from "../Aux/Aux";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.reqIntercetor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      this.resIntercetor = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
    }
    state = {
      error: null
    };

    // componentDidMount() {
    //   axios.interceptors.request.use(req => {
    //     this.setState({ error: null });
    //     return req;
    //   });

    //   axios.interceptors.response.use(
    //     res => res,
    //     error => {
    //       this.setState({ error: error });
    //     }
    //   );
    // }

    //ejecting interceptors that are required no more
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqIntercetor);
      axios.interceptors.response.eject(this.resIntercetor);
    }

    errorDismissHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <WrappedComponent {...this.props} />
          {/* <Modal
            open={this.state.error != null}
            onClose={this.errorDismissHandler}
          >
            <div
              style={{
                position: "fixed",
                width: 400,
                height: 200,
                backgroundColor: "white",
                border: "2px solid #000",
                left: "15%",
                top: "30%",
                padding: "2px"
              }}
            >
              {this.state.error ? this.state.error.message : null}
            </div>
          </Modal> */}
          <Modal
            title="Error"
            visible={this.state.error != null}
            onOk={this.errorDismissHandler}
            centered
            maskClosable={false}
            closable={false}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
