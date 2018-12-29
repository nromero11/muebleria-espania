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

const TableHeader = props => {
  return <th style={{ width: "25%" }}>{props.name}</th>;
};

class MakeTable extends Component {
  constructor(props) {
    super(props);
    this.pageSize = 4;
    this.pagesCount = Math.ceil(this.props.data.length / this.pageSize);
    this.state = {
      title: this.props.title,
      data: this.props.data,
      currentFilter: null,
      header: this.props.header,
      currentPage: 0
    };
    this.searchTyping = this.searchTyping.bind(this);
  }

  handleClick(e, index) {
    e.preventDefault();

    this.setState({
      currentPage: index
    });
  }

  searchTyping(event) {
    let datos = this.state.data;
    datos = datos.filter(clientes => {
      let nombre = clientes.nombre.toLowerCase();
      return nombre.indexOf(event.target.value.toLowerCase()) !== -1;
    });
    this.pagesCount = Math.ceil(datos.length / this.pageSize);
    datos = datos.length === 0 ? [{ nombre: "No hay datos" }] : datos;
    this.setState({
      currentFilter: datos,
      currentPage: 0
    });
  }

  render() {
    const { currentPage, currentFilter, data } = this.state;
    return (
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify" />
              <h2> {this.state.title}</h2>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <FormGroup
                    tag="fieldset"
                    className="filtroFieldset col-12 col-md-5"
                  >
                    <legend className="col-form-label col-sm-3">
                      <h6>Filtro</h6>
                    </legend>

                    <Input
                      bsSize="sm"
                      placeholder="Escribe para buscar..."
                      id="nombre"
                      onChange={this.searchTyping}
                    />
                  </FormGroup>
                  <Col md="2" />
                  <FormGroup
                    tag="fieldset"
                    className="filtroFieldset col-12 col-md-5"
                  >
                    <legend className="col-form-label col-sm-3">
                      <h6>Acciones</h6>
                    </legend>

                    <Button
                      color="info"
                      size="sm"
                      className="btn-agregar-categoria-productos"
                      onClick={e => this.handleClick(e, currentPage)}
                    >
                      Agregar +
                    </Button>
                  </FormGroup>
                </Row>
              </Form>
              <Row style={{ minHeight: "220px" }}>
                <Col>
                  <Table
                    hover
                    bordered
                    striped
                    resposive="true"
                    size="sm"
                    style={{
                      textAlign: "center",
                      width: "100%"
                    }}
                  >
                    <thead>
                      <tr>
                        {this.state.header.map((Hval, index) => {
                          return <TableHeader name={Hval} key={index} />;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {currentFilter === null
                        ? data
                            .slice(
                              currentPage * this.pageSize,
                              (currentPage + 1) * this.pageSize
                            )
                            .map((Rval, index) => {
                              return (
                                <tr key={index}>
                                  <td style={{ width: "25%" }}>
                                    {Rval.nombre}
                                  </td>
                                  <td style={{ width: "25%" }}>
                                    {Rval.nombre}
                                  </td>
                                  <td style={{ width: "25%" }}>
                                    {Rval.nombre}
                                  </td>
                                  <FilaBotonesModal
                                    data={Rval}
                                    llave={index}
                                    style={{ width: "25%" }}
                                  />
                                </tr>
                              );
                            })
                        : currentFilter
                            .slice(
                              currentPage * this.pageSize,
                              (currentPage + 1) * this.pageSize
                            )
                            .map((Rval, index) => {
                              var retornar;
                              Rval.nombre !== "No hay datos"
                                ? (retornar = (
                                    <tr key={index}>
                                      <td style={{ width: "25%" }}>
                                        {Rval.nombre}
                                      </td>
                                      <td style={{ width: "25%" }}>
                                        {Rval.nombre}
                                      </td>
                                      <td style={{ width: "25%" }}>
                                        {Rval.nombre}
                                      </td>
                                      <FilaBotonesModal
                                        data={Rval}
                                        llave={index}
                                        style={{ width: "25%" }}
                                      />
                                    </tr>
                                  ))
                                : (retornar = (
                                    <td colSpan={this.state.header.length}>
                                      {" "}
                                      {Rval.nombre}
                                    </td>
                                  ));
                              return retornar;
                            })}
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <nav>
                <Pagination>
                  <PaginationItem disabled={currentPage <= 0}>
                    <PaginationLink
                      onClick={e => this.handleClick(e, currentPage - 1)}
                      previous
                      href="#"
                    />
                  </PaginationItem>
                  {[...Array(this.pagesCount)].map((page, i) => (
                    <PaginationItem active={i === currentPage} key={i}>
                      <PaginationLink
                        onClick={e => this.handleClick(e, i)}
                        href="#"
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
                    <PaginationLink
                      onClick={e => this.handleClick(e, currentPage + 1)}
                      next
                      href="#"
                    />
                  </PaginationItem>
                </Pagination>
              </nav>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

class Listar extends Component {
  constructor() {
    super();
    this.state = {
      _data: [
        {
          nombre: "España"
        },
        {
          nombre: "Centenario"
        },
        {
          nombre: "General"
        }
      ],
      _title: "Listado de almacenes",
      _header: ["NOMBRE", "CATEGORIA", "PRECIO", "DETALLES"]
    };
  }
  render() {
    return (
      <div>
        <MakeTable
          title={this.state._title}
          header={this.state._header}
          data={this.state._data}
        />
      </div>
    );
  }
}

class FilaBotonesModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nombre: props.data.nombre,
      comment: props.data.comment,
      location: props.data.location
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <React.Fragment>
        <td>
          <Button
            className="cui-note icons"
            color="info"
            size="sm"
            onClick={this.toggle}
          >
            Ver
          </Button>{" "}
          <Button
            className="cui-note icons"
            color="warning"
            size="sm"
            onClick={this.toggle}
          >
            Edt
          </Button>
        </td>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Detalle del almacen</ModalHeader>
          <ModalBody>
            Nombre: {this.state.nombre}
            <br />
            Comentario: {this.state.comment}
            <br />
            Dirección: {this.state.location}
          </ModalBody>
          <ModalFooter />
        </Modal>
      </React.Fragment>
    );
  }
}

export default Listar;
