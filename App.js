import React from 'react';
import {View,Text,ScrollView,Image,ImageBackground,TouchableHighlight} from 'react-native';
import {Container, Card, CardItem, H1, Left, Thumbnail, Body, Form, Textarea, Button,Footer,FooterTab, Content} from 'native-base';
import ViewPager from '@react-native-community/viewpager';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator,DrawerActions} from 'react-navigation-drawer'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import {style} from './src/style/Style'
import shopScreen from './src/screens/Tiket'
const stackoption =(props)=> {
  return{
    headerstyle :{
      backgroundColor:'black'
    },
    headerTittle:(
      <View style={style.header}>
      </View>
    ),
    headerRight :()=>
<TouchableHighlight onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
         >
  <Image style={{width:30,height:30}} source ={{uri:'https://img.icons8.com/fluent/240/ffffff/menu.png'}}/>
</TouchableHighlight>

    
  }
}

function App(props) {
  return (
    <View style={style.wrapper}>
      <View style={style.header}>
<Text style={style.title}> Asep Travel</Text>
    </View>
    
   

<Container>
            <ScrollView>
              
                  
           <Card> 
               <CardItem> 
                   <H1 style={{textAlign:'center'}}> Raja Tour & Travel Tiket Pesawat </H1>
               </CardItem>
               <CardItem>
                   <Text note style={{textAlign:'center', width:'100%'}}>
                   Layanan Raja Tour & Travel
                   </Text>
               </CardItem>
               <CardItem cardBody>
                <Image style= {{ height:200,width:null,flex:1}}source={require ('./src/images/p1.jpg')}/>

               </CardItem>
               <CardItem >
                <Text style={{textAlign:'justify'}}>Cek Tiket Pesawat Garuda Indonesia.E-tiket pesawat Garuda Indonesia bisa kamu dapatkan dengan mudah di Asep Travel. Pesan tiketnya sekaligus sehingga kamu bisa langsung mengajak teman, keluarga, atau pasangan untuk pergi liburan ke tempat impian. Bukan cuma itu lho, tiket.com juga punya banyak promo tiket pesawat Garuda Indonesia yang bisa kamu gunakan untuk mendapatkan potongan harga atau penawaran menarik lainnya.</Text>
               
               </CardItem>
                <CardItem>
           <Left style={{backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
      <Button style={{backgroundColor:'yellow',justifyContent:'center',alignItems:'center'}}
      onPress={() => props.navigation.navigate("Tiket")}>
         
            <Text>Pesan Tiket Garuda Indonesia Sekarang</Text>
        </Button>
    </Left>
    </CardItem>
               <Card><CardItem cardBody>
                <Image style= {{ height:200,width:null,flex:1}}source={require ('./src/images/p2.jpg')}/>

               </CardItem>
               <CardItem >
                <Text style={{textAlign:'justify'}}>Cek Tiket Pesawat AirAsia.E-tiket pesawat AirAsia bisa kamu dapatkan dengan mudah di tiket.com. Pesan tiketnya sekaligus sehingga kamu bisa langsung mengajak teman, keluarga, atau pasangan untuk pergi liburan ke tempat impian. Bukan cuma itu lho, tiket.com juga punya banyak promo tiket pesawat AirAsia yang bisa kamu gunakan untuk mendapatkan potongan harga atau penawaran menarik lainnya.</Text>
               </CardItem></Card>
               
               </Card>
        
           <CardItem>
           <Left style={{backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
      <Button style={{backgroundColor:'yellow',justifyContent:'center',alignItems:'center'}}
      onPress={() => props.navigation.navigate("Tiket")}>
         
            <Text>Pesan Tiket Air Asia Sekarang</Text>
        </Button>
    </Left>

    </CardItem>
    <Card><CardItem cardBody>
                <Image style= {{ height:200,width:null,flex:1}}source={require ('./src/images/p3.jpg')}/>

               </CardItem>
               <CardItem >
                <Text style={{textAlign:'justify'}}>Cek Tiket Pesawat Sriwijaya Air.E-tiket pesawat Sriwijaya Air bisa kamu dapatkan dengan mudah di tiket.com. Pesan tiketnya sekaligus sehingga kamu bisa langsung mengajak teman, keluarga, atau pasangan untuk pergi liburan ke tempat impian. Bukan cuma itu lho, tiket.com juga punya banyak promo tiket pesawat Sriwijaya Air yang bisa kamu gunakan untuk mendapatkan potongan harga atau penawaran menarik lainnya.</Text>
               </CardItem></Card>
               <CardItem>
           <Left style={{backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
      <Button style={{backgroundColor:'yellow',justifyContent:'center',alignItems:'center'}}
      onPress={() => props.navigation.navigate("Tiket")}>
         
            <Text>Pesan Tiket Sriwijaya Air Sekarang</Text>
        </Button>
    </Left>

    </CardItem>
    <Card><CardItem cardBody>
                <Image style= {{ height:200,width:null,flex:1}}source={require ('./src/images/p4.jpg')}/>

               </CardItem>
               <CardItem >
                <Text style={{textAlign:'justify'}}>Cek Tiket Pesawat Lion Air.E-tiket pesawat Lion Air bisa kamu dapatkan dengan mudah di tiket.com. Pesan tiketnya sekaligus sehingga kamu bisa langsung mengajak teman, keluarga, atau pasangan untuk pergi liburan ke tempat impian. Bukan cuma itu lho, tiket.com juga punya banyak promo tiket pesawat Lion Air yang bisa kamu gunakan untuk mendapatkan potongan harga atau penawaran menarik lainnya.</Text>
               </CardItem></Card>
               <CardItem>
           <Left style={{backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
      <Button style={{backgroundColor:'yellow',justifyContent:'center',alignItems:'center'}}
      onPress={() => props.navigation.navigate("Tiket")}>
         
            <Text>Pesan Tiket Lion Air Sekarang</Text>
        </Button>
    </Left>

    </CardItem>
    
    <Footer> 
            <FooterTab>
                <Button full>
                    <Text> Asep Andriyanto</Text>
                </Button>
            </FooterTab>
        </Footer>
    
           </ScrollView>
           
       </Container>


    </View>


  );
}
const drawernavigator=createDrawerNavigator({
  Home:{
    screen:createBottomTabNavigator({
      Home: {
screen:App,
      },
Tiket:{
  screen:shopScreen
}
    })
  },
  Tiket:{
    screen:shopScreen
  }
})
const appNavigator =createStackNavigator ({
  Home: {
    screen: drawernavigator,
    navigationOptions : stackoption

    },
    Tiket : {
      screen:shopScreen
    }

})

export default createAppContainer(appNavigator);
