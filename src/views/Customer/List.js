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
    this.searchTypingApellido = this.searchTypingApellido.bind(this);
    this.searchTypingCedula = this.searchTypingCedula.bind(this);
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

  searchTypingApellido(event) {
    let datos = this.state.data;
    datos = datos.filter(clientes => {
      let nombre = clientes.apellido.toLowerCase();
      return nombre.indexOf(event.target.value.toLowerCase()) !== -1;
    });
    this.pagesCount = Math.ceil(datos.length / this.pageSize);
    datos = datos.length === 0 ? [{ nombre: "No hay datos" }] : datos;
    this.setState({
      currentFilter: datos,
      currentPage: 0
    });
  }

  searchTypingCedula(event) {
    let datos = this.state.data;
    datos = datos.filter(clientes => {
      let nombre = clientes.cedula.toLowerCase();
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
                <FormGroup tag="fieldset" className="filtroFieldset" row>
                  <legend
                    className="col-form-label col-sm-2"
                    style={{ width: "auto" }}
                  >
                    <h6>Filtros</h6>
                  </legend>
                  <Row>
                    <Col md="3" xs="12" style={{ paddingTop: "5px" }}>
                      <Input
                        bsSize="sm"
                        placeholder="Nombre"
                        onChange={this.searchTyping}
                        id="nombre"
                      />
                    </Col>
                    <Col md="3" xs="12" style={{ paddingTop: "5px" }}>
                      <Input
                        bsSize="sm"
                        placeholder="Apellido"
                        onChange={this.searchTypingApellido}
                        id="apellido"
                      />
                    </Col>
                    <Col md="3" xs="12" style={{ paddingTop: "5px" }}>
                      <Input
                        bsSize="sm"
                        placeholder="Cédula"
                        onChange={this.searchTypingCedula}
                        id="cedula"
                      />
                    </Col>

                    <Col
                      md="3"
                      xs="12"
                      style={{ paddingTop: "5px", paddingBottom: "5px" }}
                    >
                      <Button
                        color="danger"
                        size="sm"
                        style={{ width: "100%" }}
                      >
                        Limpiar
                      </Button>
                    </Col>
                  </Row>
                </FormGroup>
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
                                    {Rval.apellido}
                                  </td>
                                  <td style={{ width: "25%" }}>
                                    {Rval.cedula}
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
                                        {Rval.apellido}
                                      </td>
                                      <td style={{ width: "25%" }}>
                                        {Rval.cedula}
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
          nombre: "Bhagwan",
          apellido: "Komalram",
          cedula: "9-845-256",
          cel: "62221548"
        },
        {
          nombre: "Ban",
          apellido: "Romero",
          cedula: "9-845-256",
          cel: "62221548"
        },
        {
          nombre: "Gwan",
          apellido: "Torres",
          cedula: "9-845-256",
          cel: "62221548"
        },
        {
          nombre: "Hag",
          apellido: "Komalram",
          cedula: "9-845-256",
          cel: "62221548"
        },
        {
          nombre: "Hag1",
          apellido: "Komalram",
          cedula: "9-845-256",
          cel: "62221548"
        },
        {
          nombre: "Hag2",
          apellido: "Komalram",
          cedula: "9-845-256",
          cel: "62221548"
        },
        {
          nombre: "Hag3",
          apellido: "Komalram",
          cedula: "9-845-256",
          cel: "62221548"
        },
        {
          nombre: "Hag4",
          apellido: "Komalram",
          cedula: "9-845-256",
          cel: "62221548"
        },
        {
          nombre: "Hag5",
          apellido: "Komalram",
          cedula: "9-845-256",
          cel: "62221548"
        }
      ],
      _title: "Clientes Activos",
      _header: ["NOMBRE", "APELLIDO", "CÉDULA", "ACCION"]
    };
  }
  render() {
    return (
      <Container>
        <MakeTable
          title={this.state._title}
          header={this.state._header}
          data={this.state._data}
        />
      </Container>
    );
  }
}

class FilaBotonesModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nombre: props.data.nombre,
      apellido: props.data.apellido,
      cedula: props.data.cedula,
      cel: props.data.cel
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
          <ButtonGroup size="sm">
            <Button
              className="fa fa-info-circle"
              color="primary"
              onClick={this.toggle}
            >
              <a>Ver</a>
            </Button>
            <Button className="cui-note icons" color="info">
              Edt
            </Button>
          </ButtonGroup>
        </td>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Detalle del cliente</ModalHeader>
          <ModalBody>
            Nombre: {this.state.nombre}
            <br />
            Apellido: {this.state.apellido}
            <br />
            Cédula: {this.state.cedula}
            <br />
            Celular: {this.state.cel}
            <br />
            Dirección: Arraijan, Nvo Chorrillo, Brisas del Golf Arraijan.
          </ModalBody>
          <ModalFooter />
        </Modal>
      </React.Fragment>
    );
  }
}

export default Listar;
