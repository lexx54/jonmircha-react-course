import propType from "prop-types";


export default function Properties(props) {
  return (
    <div>
      <h2>{props.byDefault}</h2>
      <ul>
        <li>{props.string}</li>
        <li>{props.number}</li>
        <li>{props.boolean ? "true" : "false"}</li>
        <li>{props.array}</li>
        <li>{props.object.name}</li>
        <li>{props.reactElement}</li>
        <li>{props.array.map(item => props.function(item))}</li>
        <li>{props.reactComponent}</li>
      </ul>
    </div>
  )
}

//default values
Properties.defaultProps = {
  byDefault: "The Props"
}

//properties values
Properties.propType = {
  number: propType.number.isRequired
}