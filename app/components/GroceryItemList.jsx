var React = require('react/addons');
var GroceryListAddItem = require('./GroceryListAddItem.jsx')

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Grocery Listify</h1>
				<div>
				{this.props.items.map(function(item, index){
					   return (
							<div>
								<h4 className={item.purchased ? "strikethrough" : ""}>{item.name}</h4>
							</div>
							  )									
				})
				}
				</div>
				<GroceryListAddItem />
			</div>
		)
	}
});
