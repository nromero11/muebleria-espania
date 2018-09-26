import React, { Component } from 'react';
import { Button, Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const TableHeader = (props) => {
  return(
    <th>{props.name}</th>
  );
}

const TableRows = (props) => {
  return(
    <tr>
      <td>{props.data.nombre}</td>
      <td>{props.data.cedula}</td>
      <td>{props.data.cel}</td>
      <td style={{ width: "1%"}}>
      <Button className='fa fa-info-circle' color='primary' size='sm'/>
      </td>
    </tr>
  );
}

class MakeTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      title : this.props.title,
      data : this.props.data,
      header: this.props.header
    };
  }

  render() {
    return(
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> {this.state.title}
            </CardHeader>
            <CardBody>
              <Table hover bordered striped resposive size='sm' style={{ textAlign: "center" }}>
                <thead>
                  {this.state.header.map((Hval,index)=>{
                    return <TableHeader name = {Hval} key = {index}/>
                  })}
                </thead>
                <tbody>
                {this.state.data.map(Rval=>{
                  return   <ModalExample data = {Rval} key = {Rval.id}/>
                })}
                </tbody>
              </Table>
              <nav>
                <Pagination>
                  <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                </Pagination>
              </nav>
            </CardBody>
          </Card>
        </Col>
    );
  }
}

class Listar extends Component {
  constructor(){
    super();
    this.state = {
      _data:[{nombre:'Bhagwan Komalram',cedula:'9-845-256', cel:'62221548'},
      {nombre:'Ban Komalram',cedula:'9-845-256', cel:'62221548'},
      {nombre:'Gwan Komalram',cedula:'9-845-256', cel:'62221548'},
      {nombre:'Hag Komalram',cedula:'9-845-256', cel:'62221548'}],
      _title:'Clientes Activos',
      _header: ['NOMBRE','CEDULA','CELULAR','ACCIONES']
    };
  }
    render(){
        return(
          <Row>
          <MakeTable title={this.state._title} header ={this.state._header} data={this.state._data}/>
          </Row>
        );
      }
}

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nombre: props.data.nombre,
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
      <tr>
        <td>{this.state.nombre}</td>
        <td>{this.state.cedula}</td>
        <td>{this.state.cel}</td>
        <td style={{ width: "1%"}}>
        <Button className='fa fa-info-circle' color='primary' size='sm' onClick={this.toggle}></Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Nombre: {this.state.nombre}<br/>
            Cedula: {this.state.cedula}<br/>
            Celular: {this.state.cel}<br/>
            Dirección: Arraijan, Nvo Chorrillo, Brisas del Golf Arraijan.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </td>
      </tr>
    );
  }
}


export default Listar;
