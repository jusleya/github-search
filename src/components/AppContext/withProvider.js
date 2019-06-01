import React from "react";
import firebase from "../../firebase";
import { Provider } from "./index";

const withProvider = Component => {
  return class WithProvider extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isLoadingFirebase: true,
        userAuth: null,
        userScope: null,
        userStatus: ""
      };
    }

    componentDidMount() {
      firebase.auth().onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userScope = await this.getScope(userAuth).catch(err => {
            console.log(err);
            alert("Ops, ocorreu um erro =(");
          });
          this.setState({ userAuth, userScope, isLoadingFirebase: false });

          console.log("State Changed");
          // console.log(this.state.userStatus);
        } else {
          this.setState({
            userAuth: null,
            userScope: null,
            isLoadingFirebase: false
          });
        }
      });
    }

    getScope = currentUser => {
      return currentUser.getIdToken().then(idToken => {
        // Parse the ID token.
        const payload = JSON.parse(atob(idToken.split(".")[1]));
        return payload.scope;
        // this.setState({userScope : payload.scope});
      });
    };

    render() {
      return (
        <Provider
          value={{
            ...this.state
          }}
        >
          {this.state.isLoadingFirebase ? (
            <div />
          ) : (
            <Component {...this.props} />
          )}
        </Provider>
      );
    }
  };
};

export default withProvider;
