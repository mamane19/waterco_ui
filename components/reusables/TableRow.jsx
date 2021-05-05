import React from "react";
import PropTypes from "prop-types";
import { Columns } from "react-bulma-components";

export default function TableRow(props) {
  return (
    <Columns className={props.className}>
      <Columns.Column>
        <p className="is-size-6 title">{props.client}</p>
      </Columns.Column>
      <Columns.Column>
        <p className="is-size-6 title">{props.route}</p>
      </Columns.Column>
      <Columns.Column>
        <p className="is-size-6 title">{props.lastPaymentDate}</p>
      </Columns.Column>
      <Columns.Column>
        <p className="is-size-6 title">{props.premises}</p>
      </Columns.Column>
      <Columns.Column>
        <p className="is-size-6 title">{props.energy}</p>
      </Columns.Column>
    </Columns>
  );
}

TableRow.propTypes = {
  client: PropTypes.string.isRequired,
  route: PropTypes.object.isRequired,
  lastPaymentDate: PropTypes.object.isRequired,
  premises: PropTypes.object.isRequired,
  energy: PropTypes.object.isRequired,
  className:PropTypes.string
};
