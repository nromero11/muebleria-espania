import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Row
} from "reactstrap";

class HandleStores extends Component {
  constructor(props) {
    super(props);
    /*state as model of db structure*/
    this.state = {
      id: null
    };
  }

  render() {
    return (
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify" />
              <h2> {this.state.id == null ? "Agregar" : "Editar"} almacen </h2>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col md="12" xs="12" style={{ paddingTop: "5px" }}>
                    <Input bsSize="sm" placeholder="Nombre" id="nombre" />
                  </Col>
                  <Col md="12" xs="12" style={{ paddingTop: "5px" }}>
                    <Input bsSize="sm" placeholder="Descripción" id="desc" />
                  </Col>
                  <Col md="12" xs="12" style={{ paddingTop: "5px" }}>
                    <Input bsSize="sm" placeholder="Dirección" id="nombre" />
                  </Col>
                  <Col
                    md="12"
                    xs="12"
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                    className="clearfix"
                  >
                    <Button
                      color="success"
                      size="sm"
                      className="btn btn-agregar-categoria float-right"
                    >
                      Confirmar
                    </Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default HandleStores;
