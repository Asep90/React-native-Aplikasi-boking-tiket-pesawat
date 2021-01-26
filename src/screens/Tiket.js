import React from 'react';
import { Container, Form, H1, Item, Label, Input, Header, Content, Button, Card, CardItem, Body, Text,Center, Left, Right, Fab } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {View, ScrollView,Image} from 'react-native'
import {style} from '../style/Style'

function App(props) {
  const [action,setAction] = React.useState("")
  const [modal,setModal]= React.useState(false)
  const [data,setData]= React.useState([])
  const [Customer,setJudul]= React.useState("")
  const [Tujuan,setDeskripsi]= React.useState("")
  const [No_Pesan,setUserId]= React.useState("")
  const [id,setId]= React.useState("")
  const [dataDetail, setDataDetail] = React.useState([])

  const modalClick = (val="", valId="") => {
    setModal(!modal)
    setAction(val)
    if(val==="add"){
      dataNull()
      setAction("add")
    }else if(val==="edit"){
      setAction("edit")
      setId(valId)
      //Fetch Update
    }else{
      setAction("")
      dataNull()
    }
  }

  const showData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(val => setData(val))
  }

  const saveData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: Customer,
    body: Tujuan,
    userId: No_Pesan,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  }

  const updateData = () => {
    console.log("Update Data")
  }

  const deleteData = (id) => {
    console.log("Delete Data")
  }

  const dataNull = () => {
    setJudul("")
    setDeskripsi("")
  }

  React.useEffect(()=>{
    showData()
  },[])

  return (
    <ScrollView style={{flex:1}}>

      <Container>
        <Header>
          <Text style={style.title}>Pesan Tiket Pesawat</Text>
        </Header>

        <Content>  

    { !modal ? ( 
       data.map((val, i) =>( 
        <Card>
          <CardItem header bordered>
            <Text>{val.id}</Text>
          </CardItem>

          <CardItem>
            <Body>
              <H1>{val.title}</H1>
              <Text>{val.body}</Text>
            </Body>
          </CardItem>
          <CardItem cardBody>
                <Image style= {{ height:200,width:null,flex:1}}source={require ('./images/call.jpg')}/>

               </CardItem>
          
          <CardItem footer bordered>
            <Left>
              <Button danger onPress={() => deleteData(1)}><Text>Hapus</Text></Button>
            </Left>
            <Right>
              <Button info onPress={()=> modalClick("edit")}><Text>Edit</Text></Button>
            </Right>
          </CardItem>
         
        </Card>
       ))
        
    ):(

        <Card>
          <CardItem header bordered>
            <Text>{action==="edit" && "Edit" } {action==="add" && "Add" } Data</Text>
          </CardItem>

          <CardItem>
            <Body>
              <Form style={{width:'100%'}}>
                <Item stackedLabel>
                  <Label>Customer</Label>
                  <Input style={{marginTop:10}} value={Customer} onChangeText={(val) => setJudul(val)}/>
                </Item>
                <Item stackedLabel>
                  <Label>Tujuan</Label>
                  <Input style={{marginTop:10}} value={Tujuan} onChangeText={(val) => setDeskripsi(val)}/>
                </Item>
                <Item stackedLabel last>
                  <Label>Email</Label>
                  <Input style={{marginTop:10}} value={No_Pesan} onChangeText={(val) => setUserId(val)}/>
                </Item>
              </Form>
            </Body>
          </CardItem>

          <CardItem footer bordered>
              <Button primary onPress={action==="edit" ? updateData : saveData}><Text>Pesan</Text></Button>
              <Button danger onPress={()=> modalClick("")}><Text>Cancel</Text></Button>
          </CardItem>
        </Card>
       
    )}

        </Content>

        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={()=> modalClick("add")}>
          <Text>+</Text>
        </Fab>
        
      </Container>
    </ScrollView>
  );
}

export default App;