import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Pagination,
  PaginationItem,
  PaginationLink,
  Input,
  Row,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class HandleCategory extends Component {
  constructor(props) {
    super(props);
    /*state as model of db structure*/
    this.state = {
      id: 0,
      name: "",
      comments: ""
    };
  }

  handleClick(e, index) {
    e.preventDefault();

    this.setState({
      currentPage: index
    });
  }

  render() {
    return (
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify" />
              <h2> Agregar Categoria de Productos </h2>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col md="12" xs="12" style={{ paddingTop: "5px" }}>
                    <Input bsSize="sm" placeholder="Nombre" id="nombre" />
                  </Col>
                  <Col md="12" xs="12" style={{ paddingTop: "5px" }}>
                    <Input bsSize="sm" placeholder="Descripcion" id="desc" />
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

export default HandleCategory;
