import React from "react";

// const AddExpensePage = () => <div>AddExpense page</div>;

class AddExpensePage extends React.Component {
  render() {
    return <div className="edit">AddExpense page</div>;
  }
  componentWillMount(e) {
    console.log(this);
  }
  componentDidMount() {
    const page = document.querySelector(".edit");

    setTimeout(() => {
      page.classList.add("fade");
    }, 100);

    console.log(page);
  }
  componentWillUnmount() {
    const page = document.querySelector(".edit");

    page.classList.remove("fade");
  }
}

export default AddExpensePage;
