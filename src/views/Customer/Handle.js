import React, { Component } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Container,
  Col,
  Row
} from "reactstrap";

const GeneralesCliente = props => {
  return (
    <Row style={{ display: props.display }}>
      <Col xs="12" md="12">
        <InputGroup className="spaceInput">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Nombre: </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Ejemplo: Juan" />
        </InputGroup>
        <InputGroup className="spaceInput">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Apellido: </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Ejemplo: Perez" />
        </InputGroup>
        <InputGroup className="spaceInput">
          <InputGroupAddon addonType="prepend">
            <InputGroupText style={{ minWidth: "87.9px" }}>ID: </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Cédula o Pasaporte." />
        </InputGroup>
        <InputGroup className="spaceInput">
          <InputGroupAddon addonType="prepend">
            <InputGroupText style={{ minWidth: "87.9px" }}>
              Tel:{" "}
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Ejemplo: 50762024836" />
        </InputGroup>
      </Col>
    </Row>
  );
};

const DireccionCliente = props => {
  return (
    <Row style={{ display: props.display }}>
      <Col>
        <InputGroup className="spaceInput">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Dirección: </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Ejemplo: Edificio Ghetto Place Apt-23" />
        </InputGroup>
        <InputGroup className="spaceInput">
          <InputGroupAddon addonType="prepend">
            <InputGroupText style={{ minWidth: "95.5px" }}>
              E-Mail:{" "}
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Ejemplo: bk@muebleria-espania.com" />
        </InputGroup>
      </Col>
    </Row>
  );
};

const NotificacionesCliente = props => {
  return (
    <Container style={{ display: props.display }}>
      <Row>
        <Label check>
          <Input type="checkbox" /> Acepto notificaciones automaticas por
          Whatsapp.
        </Label>
      </Row>
      <Row>
        <Label check>
          <Input type="checkbox" /> Acepto notificaciones automaticas por
          E-mail.
        </Label>
      </Row>
    </Container>
  );
};

class multiSteps extends Component {
  constructor() {
    super();
    this.state = { tab: 0 };
    this.step = this._step.bind(this);
  }

  _step(whre) {
    this.setState({
      tab: whre
    });
  }

  render() {
    var intActualStep = this.state.tab;
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h2>Registro de cliente </h2>
              </CardHeader>
              <CardBody
                style={this.state.tab === 2 ? { marginLeft: "10%" } : null}
              >
                <GeneralesCliente
                  display={this.state.tab === 0 ? "block" : "none"}
                />
                <DireccionCliente
                  display={this.state.tab === 1 ? "block" : "none"}
                />
                <NotificacionesCliente
                  display={this.state.tab === 2 ? "block" : "none"}
                />
              </CardBody>
              <CardFooter>
                <Row>
                  <Col
                    style={{
                      textAlign: "center",
                      paddingLeft: "0",
                      paddingRight: "0"
                    }}
                  >
                    <Button
                      color="danger"
                      style={{ width: "100%" }}
                      onClick={
                        intActualStep > 0
                          ? () => this.step(intActualStep - 1)
                          : null
                      }
                    >
                      Regresar
                    </Button>
                  </Col>
                  <Col
                    style={{
                      textAlign: "center",
                      paddingLeft: "0",
                      paddingRight: "0"
                    }}
                  >
                    <Label
                      className={this.state.tab > 0 ? "stepready" : "stepsobre"}
                    />
                    <Label
                      className={
                        this.state.tab > 1
                          ? "stepready"
                          : this.state.tab === 1
                            ? "stepsobre"
                            : "step"
                      }
                    />
                    <Label
                      className={
                        this.state.tab > 2
                          ? "stepready"
                          : this.state.tab === 2
                            ? "stepsobre"
                            : "step"
                      }
                    />
                  </Col>
                  <Col
                    style={{
                      textAlign: "center",
                      paddingLeft: "0",
                      paddingRight: "0"
                    }}
                  >
                    <Button
                      color="primary"
                      style={{ width: "100%" }}
                      onClick={() => this.step(intActualStep + 1)}
                    >
                      Continuar
                    </Button>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default multiSteps;
