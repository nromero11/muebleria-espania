import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';


const TableHeader = (props) => {
  return(
    <th>{props.name}</th>
  );
}

const TableRows = (props) => {
  return(
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.nombre}</td>
      <td>{props.data.fecha}</td>
      <td>Acciones</td>
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
        <Col xs='12' lg='6'>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> {this.state.title}
            </CardHeader>
            <CardBody>
              <Table hover bordered striped resposive size='sm'>
                <thead>
                  {this.state.header.map((Hval,index)=>{
                    return <TableHeader name = {Hval} key = {index}/>
                  })}
                </thead>
                <tbody>
                {this.state.data.map(Rval=>{
                  return   <TableRows data = {Rval} key = {Rval.id}/>
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
      data_pending:[{id:'1',nombre:'bhagwan',fecha:'2018-09-22'},
      {id:'2',nombre:'bhagwan',fecha:'2018-09-23'}],
      title_pending:'Cuentas pendientes',
      header_pending: ['ID','NOMBRE','FECHA','Acciones'],
      data_close:[{id:'3',nombre:'bhagwan',fecha:'2018-09-22'},
      {id:'4',nombre:'bhagwan',fecha:'2018-09-23'}],
      title_close:'Cuentas terminadas',
      header_close: ['ID','NOMBRE','FECHA','Acciones'],
    };
  }
    render(){
        return(
          <Row>
          <MakeTable title={this.state.title_pending} header ={this.state.header_pending} data={this.state.data_pending}/>
          <MakeTable title={this.state.title_close} header ={this.state.header_close} data={this.state.data_close}/>
          <MakeTable title={this.state.title_close} header ={this.state.header_close} data={this.state.data_close}/>

          </Row>
        );
      }
}
export default Listar;
