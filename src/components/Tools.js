import React from "react";


class Tools extends React.Component {
  render() {
    const {
         children ,onAction
         } = this.props;


   const onlyChild=  React.Children.only(children)
   const Count   = React.Children.count(onlyChild.props.Children);

    return (
      <div>
                <div className="list-header">
                <select onChange={onAction}  name="status">
                    <option value="all">all</option>
                    <option value="active">Active</option>
                    <option value="non-active">NonActive</option>
                </select>
                </div>

                     <div>
                      {children}
                    </div>

        <div className="list-footer">total {Count} items</div>
      </div>
    );
  }
}

export default Tools;
