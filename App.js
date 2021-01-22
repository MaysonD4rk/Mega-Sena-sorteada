import React from "react";
import {View, Text, StyleSheet, Button, ScrollView, SafeAreaView} from "react-native";
import Mega from "./components/mega/mega";

//import DigiteSeuNome from "./components/digiteSeuNome"

//import Lista2 from "./components/produtos/ListaProdutosV2.js"
//import Lista from "./components/produtos/ListaProdutos.js"
//import UsuarioLogado from "./components/usuarioLogado.js"; 

const App = ()=>{        
        
    return (
    <SafeAreaView style={MainStyle.main}>
            <Mega/>
            
            {
                /*
                <DigiteSeuNome />
                <Lista2 />
                <UsuarioLogado usuario={{nome:"Mayson", email: "mayson@gmail.com"}} />
                <Lista />
                <UsuarioLogado usuario={{nome:"joão"}} />
                <UsuarioLogado usuario={{nome:"joão", email: 'ola@ola.com'}} />
                */
            }
   </SafeAreaView>
    )
    }


    const MainStyle = StyleSheet.create({
        main:{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        }
    })


export default App;