import {StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, Switch} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {Image} from 'react-native-elements';
import { SearchBar } from 'react-native-elements';


const { width, height } = Dimensions.get("window");

const MoreCategories = ({navigation}) => {
  return (
    <View
    style={{
      flex: 1,
      width: width,
      // justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.bgColor,
    }}>
        <View style={{
              marginTop: 28,
              width: 356,
              position: 'fixed',
              left: 3,
            
            }}>
              
            <SearchBar
             placeholder="Search..  "
             inputStyle={{
              backgroundColor: '#34363A',
            }}
             bgColor ={'#34363A'}    
             containerStyle ={{
              backgroundColor: '#34363A' ,
              borderRadius: 20,
              borderBottomColor: 'transparent',
              borderTopColor: 'transparent'
             
             }} 
             searchIcon = {  
              <Image source ={require('../../assets/icons/back.png')}
                style = {{
                  width: 28,
                  height: 28,
                
                  // position: 'absolute',
                  tintColor: '#fff'
                  
                }} onPress={() => navigation.goBack()}/>}
             round
             />
            </View>
           
            <View style={{
              marginTop: 120,
              
              position: 'absolute',
            
            }}>
              <Text style = {{
                color: '#fff',
                fontWeight: 'bold',
                zIndex: 5,
                fontSize: 18,
                marginLeft: 30,
                marginBottom: 20,
              }
              }>Categories of Tasks</Text>
             <View
             style={{
              flex:1,
              width: width,
              height: width *1.55,
             }}>
        <ScrollView
        
        style={{
          marginHorizontal: 20,
          flex: 1,
        }}>

      
                
              <View style={{
              flexDirection: 'row',
              marginBottom: 10,}}> 

              <View
                  style={{
                  position: "relative",
                  width: 105,
                  height: 105,
                  marginVertical: 10,
                  marginBottom: 2,
                  marginHorizontal: 10,
                  backgroundColor: '#7DAD2F',
                  borderRadius: 18,
                  alignItems: 'center',
                }}> 

                <Image source={require('../../assets/icons/walk.png')} style={{
                  height: 50,
                  width: 50,
                marginTop: 18 
                }}/>
                <Text style={{
                  color:'#fff',
                  fontSize: 12,
                  justifyContent:'center',
                  textAlign: 'center',
                  alignContent: 'center',
                  paddingLeft:13,
                  paddingRight:13,

                }}>{'Outdoor Active'}</Text>
              </View>

              <View
                  style={{
                  position: "relative",
                  width: 105,
                  height: 105,
                  marginVertical: 10,
                  marginBottom: 2,
                  marginHorizontal: 10,
                  backgroundColor: '#7DAD2F',
                  borderRadius: 18,
                  alignItems: 'center',
                }}> 

                <Image source={require('../../assets/icons/walk.png')} style={{
                  height: 50,
                  width: 50,
                marginTop: 18 
                }}/>
                <Text style={{
                  color:'#fff',
                  fontSize: 12,
                  justifyContent:'center',
                  textAlign: 'center',
                  alignContent: 'center',
                  paddingLeft:13,
                  paddingRight:13,

                }}>{'Outdoor Active'}</Text>
              </View>

              <View
                  style={{
                  position: "relative",
                  width: 105,
                  height: 105,
                  marginVertical: 10,
                  marginBottom: 2,
                  marginHorizontal: 10,
                  backgroundColor: '#7DAD2F',
                  borderRadius: 18,
                  alignItems: 'center',
                }}> 

                <Image source={require('../../assets/icons/walk.png')} style={{
                  height: 50,
                  width: 50,
                marginTop: 18 
                }}/>
                <Text style={{
                  color:'#fff',
                  fontSize: 12,
                  justifyContent:'center',
                  textAlign: 'center',
                  alignContent: 'center',
                  paddingLeft:13,
                  paddingRight:13,

                }}>{'Outdoor Active'}</Text>
              </View>

              </View>
             
              <View style={{
              flexDirection: 'row',
              marginBottom: 10,}}> 

              <View
                  style={{
                  position: "relative",
                  width: 105,
                  height: 105,
                  marginVertical: 10,
                  marginBottom: 2,
                  marginHorizontal: 10,
                  backgroundColor: '#7DAD2F',
                  borderRadius: 18,
                  alignItems: 'center',
                }}> 

                <Image source={require('../../assets/icons/walk.png')} style={{
                  height: 50,
                  width: 50,
                marginTop: 18 
                }}/>
                <Text style={{
                  color:'#fff',
                  fontSize: 12,
                  justifyContent:'center',
                  textAlign: 'center',
                  alignContent: 'center',
                  paddingLeft:13,
                  paddingRight:13,

                }}>{'Outdoor Active'}</Text>
              </View>

              <View
                  style={{
                  position: "relative",
                  width: 105,
                  height: 105,
                  marginVertical: 10,
                  marginBottom: 2,
                  marginHorizontal: 10,
                  backgroundColor: '#7DAD2F',
                  borderRadius: 18,
                  alignItems: 'center',
                }}> 

                <Image source={require('../../assets/icons/walk.png')} style={{
                  height: 50,
                  width: 50,
                marginTop: 18 
                }}/>
                <Text style={{
                  color:'#fff',
                  fontSize: 12,
                  justifyContent:'center',
                  textAlign: 'center',
                  alignContent: 'center',
                  paddingLeft:13,
                  paddingRight:13,

                }}>{'Outdoor Active'}</Text>
              </View>

              <View
                  style={{
                  position: "relative",
                  width: 105,
                  height: 105,
                  marginVertical: 10,
                  marginBottom: 2,
                  marginHorizontal: 10,
                  backgroundColor: '#7DAD2F',
                  borderRadius: 18,
                  alignItems: 'center',
                }}> 

                <Image source={require('../../assets/icons/walk.png')} style={{
                  height: 50,
                  width: 50,
                marginTop: 18 
                }}/>
                <Text style={{
                  color:'#fff',
                  fontSize: 12,
                  justifyContent:'center',
                  textAlign: 'center',
                  alignContent: 'center',
                  paddingLeft:13,
                  paddingRight:13,

                }}>{'Outdoor Active'}</Text>
              </View>

              </View>

              <View style={{
              flexDirection: 'row',
              marginBottom: 10,}}
              > 

              <View
                  style={{
                  position: "relative",
                  width: 105,
                  height: 105,
                  marginVertical: 10,
                  marginBottom: 2,
                  marginHorizontal: 10,
                  backgroundColor: '#7DAD2F',
                  borderRadius: 18,
                  alignItems: 'center',
                }}> 

                <Image source={require('../../assets/icons/walk.png')} style={{
                  height: 50,
                  width: 50,
                marginTop: 18 
                }}/>
                <Text style={{
                  color:'#fff',
                  fontSize: 12,
                  justifyContent:'center',
                  textAlign: 'center',
                  alignContent: 'center',
                  paddingLeft:13,
                  paddingRight:13,

                }}>{'Outdoor Active'}</Text>
              </View>

              <View
                  style={{
                  position: "relative",
                  width: 105,
                  height: 105,
                  marginVertical: 10,
                  marginBottom: 2,
                  marginHorizontal: 10,
                  backgroundColor: '#7DAD2F',
                  borderRadius: 18,
                  alignItems: 'center',
                }}> 

                <Image source={require('../../assets/icons/walk.png')} style={{
                  height: 50,
                  width: 50,
                marginTop: 18 
                }}/>
                <Text style={{
                  color:'#fff',
                  fontSize: 12,
                  justifyContent:'center',
                  textAlign: 'center',
                  alignContent: 'center',
                  paddingLeft:13,
                  paddingRight:13,

                }}>{'Outdoor Active'}</Text>
              </View>

              <View
                  style={{
                  position: "relative",
                  width: 105,
                  height: 105,
                  marginVertical: 10,
                  marginBottom: 2,
                  marginHorizontal: 10,
                  backgroundColor: '#7DAD2F',
                  borderRadius: 18,
                  alignItems: 'center',
                }}> 

                <Image source={require('../../assets/icons/walk.png')} style={{
                  height: 50,
                  width: 50,
                marginTop: 18 
                }}/>
                <Text style={{
                  color:'#fff',
                  fontSize: 12,
                  justifyContent:'center',
                  textAlign: 'center',
                  alignContent: 'center',
                  paddingLeft:13,
                  paddingRight:13,

                }}>{'Outdoor Active'}</Text>
              </View>

              </View>

              <View style={{
              flexDirection: 'row',
              marginBottom: 10,}}
              > 

              <View
                  style={{
                  position: "relative",
                  width: 105,
                  height: 105,
                  marginVertical: 10,
                  marginBottom: 2,
                  marginHorizontal: 10,
                  backgroundColor: '#7DAD2F',
                  borderRadius: 18,
                  alignItems: 'center',
                }}> 

                <Image source={require('../../assets/icons/walk.png')} style={{
                  height: 50,
                  width: 50,
                marginTop: 18 
                }}/>
                <Text style={{
                  color:'#fff',
                  fontSize: 12,
                  justifyContent:'center',
                  textAlign: 'center',
                  alignContent: 'center',
                  paddingLeft:13,
                  paddingRight:13,

                }}>{'Outdoor Active'}</Text>
              </View>

              <View
                  style={{
                  position: "relative",
                  width: 105,
                  height: 105,
                  marginVertical: 10,
                  marginBottom: 2,
                  marginHorizontal: 10,
                  backgroundColor: '#7DAD2F',
                  borderRadius: 18,
                  alignItems: 'center',
                }}> 

                <Image source={require('../../assets/icons/walk.png')} style={{
                  height: 50,
                  width: 50,
                marginTop: 18 
                }}/>
                <Text style={{
                  color:'#fff',
                  fontSize: 12,
                  justifyContent:'center',
                  textAlign: 'center',
                  alignContent: 'center',
                  paddingLeft:13,
                  paddingRight:13,

                }}>{'Outdoor Active'}</Text>
              </View>

              <View
                  style={{
                  position: "relative",
                  width: 105,
                  height: 105,
                  marginVertical: 10,
                  marginBottom: 2,
                  marginHorizontal: 10,
                  backgroundColor: '#7DAD2F',
                  borderRadius: 18,
                  alignItems: 'center',
                }}> 

                <Image source={require('../../assets/icons/walk.png')} style={{
                  height: 50,
                  width: 50,
                marginTop: 18 
                }}/>
                <Text style={{
                  color:'#fff',
                  fontSize: 12,
                  justifyContent:'center',
                  textAlign: 'center',
                  alignContent: 'center',
                  paddingLeft:13,
                  paddingRight:13,

                }}>{'Outdoor Active'}</Text>
              </View>

              </View>

              <View style={{
              flexDirection: 'row',
              marginBottom: 10,}}
              > 

              <View
                  style={{
                  position: "relative",
                  width: 105,
                  height: 105,
                  marginVertical: 10,
                  marginBottom: 2,
                  marginHorizontal: 10,
                  backgroundColor: '#7DAD2F',
                  borderRadius: 18,
                  alignItems: 'center',
                }}> 

                <Image source={require('../../assets/icons/walk.png')} style={{
                  height: 50,
                  width: 50,
                marginTop: 18 
                }}/>
                <Text style={{
                  color:'#fff',
                  fontSize: 12,
                  justifyContent:'center',
                  textAlign: 'center',
                  alignContent: 'center',
                  paddingLeft:13,
                  paddingRight:13,

                }}>{'Outdoor Active'}</Text>
              </View>

              <View
                  style={{
                  position: "relative",
                  width: 105,
                  height: 105,
                  marginVertical: 10,
                  marginBottom: 2,
                  marginHorizontal: 10,
                  backgroundColor: '#7DAD2F',
                  borderRadius: 18,
                  alignItems: 'center',
                }}> 

                <Image source={require('../../assets/icons/walk.png')} style={{
                  height: 50,
                  width: 50,
                marginTop: 18 
                }}/>
                <Text style={{
                  color:'#fff',
                  fontSize: 12,
                  justifyContent:'center',
                  textAlign: 'center',
                  alignContent: 'center',
                  paddingLeft:13,
                  paddingRight:13,

                }}>{'Outdoor Active'}</Text>
              </View>

              <View
                  style={{
                  position: "relative",
                  width: 105,
                  height: 105,
                  marginVertical: 10,
                  marginBottom: 2,
                  marginHorizontal: 10,
                  backgroundColor: '#7DAD2F',
                  borderRadius: 18,
                  alignItems: 'center',
                }}> 

                <Image source={require('../../assets/icons/walk.png')} style={{
                  height: 50,
                  width: 50,
                marginTop: 18 
                }}/>
                <Text style={{
                  color:'#fff',
                  fontSize: 12,
                  justifyContent:'center',
                  textAlign: 'center',
                  alignContent: 'center',
                  paddingLeft:13,
                  paddingRight:13,

                }}>{'Outdoor Active'}</Text>
              </View>

              </View>

              <View style={{
              flexDirection: 'row',
              marginBottom: 10,}}
              > 

              <View
                  style={{
                  position: "relative",
                  width: 105,
                  height: 105,
                  marginVertical: 10,
                  marginBottom: 2,
                  marginHorizontal: 10,
                  backgroundColor: '#7DAD2F',
                  borderRadius: 18,
                  alignItems: 'center',
                }}> 

                <Image source={require('../../assets/icons/walk.png')} style={{
                  height: 50,
                  width: 50,
                marginTop: 18 
                }}/>
                <Text style={{
                  color:'#fff',
                  fontSize: 12,
                  justifyContent:'center',
                  textAlign: 'center',
                  alignContent: 'center',
                  paddingLeft:13,
                  paddingRight:13,

                }}>{'Outdoor Active'}</Text>
              </View>

              <View
                  style={{
                  position: "relative",
                  width: 105,
                  height: 105,
                  marginVertical: 10,
                  marginBottom: 2,
                  marginHorizontal: 10,
                  backgroundColor: '#7DAD2F',
                  borderRadius: 18,
                  alignItems: 'center',
                }}> 

                <Image source={require('../../assets/icons/walk.png')} style={{
                  height: 50,
                  width: 50,
                marginTop: 18 
                }}/>
                <Text style={{
                  color:'#fff',
                  fontSize: 12,
                  justifyContent:'center',
                  textAlign: 'center',
                  alignContent: 'center',
                  paddingLeft:13,
                  paddingRight:13,

                }}>{'Outdoor Active'}</Text>
              </View>

              <View
                  style={{
                  position: "relative",
                  width: 105,
                  height: 105,
                  marginVertical: 10,
                  marginBottom: 2,
                  marginHorizontal: 10,
                  backgroundColor: '#7DAD2F',
                  borderRadius: 18,
                  alignItems: 'center',
                }}> 

                <Image source={require('../../assets/icons/walk.png')} style={{
                  height: 50,
                  width: 50,
                marginTop: 18 
                }}/>
                <Text style={{
                  color:'#fff',
                  fontSize: 12,
                  justifyContent:'center',
                  textAlign: 'center',
                  alignContent: 'center',
                  paddingLeft:13,
                  paddingRight:13,

                }}>{'Outdoor Active'}</Text>
              </View>

              </View>

              <View style={{
              flexDirection: 'row',
              marginBottom: 10,}}
              > 

              <View
                  style={{
                  position: "relative",
                  width: 105,
                  height: 105,
                  marginVertical: 10,
                  marginBottom: 2,
                  marginHorizontal: 10,
                  backgroundColor: '#7DAD2F',
                  borderRadius: 18,
                  alignItems: 'center',
                }}> 

                <Image source={require('../../assets/icons/walk.png')} style={{
                  height: 50,
                  width: 50,
                marginTop: 18 
                }}/>
                <Text style={{
                  color:'#fff',
                  fontSize: 12,
                  justifyContent:'center',
                  textAlign: 'center',
                  alignContent: 'center',
                  paddingLeft:13,
                  paddingRight:13,

                }}>{'Outdoor Active'}</Text>
              </View>

              <View
                  style={{
                  position: "relative",
                  width: 105,
                  height: 105,
                  marginVertical: 10,
                  marginBottom: 2,
                  marginHorizontal: 10,
                  backgroundColor: '#7DAD2F',
                  borderRadius: 18,
                  alignItems: 'center',
                }}> 

                <Image source={require('../../assets/icons/walk.png')} style={{
                  height: 50,
                  width: 50,
                marginTop: 18 
                }}/>
                <Text style={{
                  color:'#fff',
                  fontSize: 12,
                  justifyContent:'center',
                  textAlign: 'center',
                  alignContent: 'center',
                  paddingLeft:13,
                  paddingRight:13,

                }}>{'Outdoor Active'}</Text>
              </View>

              <View
                  style={{
                  position: "relative",
                  width: 105,
                  height: 105,
                  marginVertical: 10,
                  marginBottom: 2,
                  marginHorizontal: 10,
                  backgroundColor: '#7DAD2F',
                  borderRadius: 18,
                  alignItems: 'center',
                }}> 

                <Image source={require('../../assets/icons/walk.png')} style={{
                  height: 50,
                  width: 50,
                marginTop: 18 
                }}/>
                <Text style={{
                  color:'#fff',
                  fontSize: 12,
                  justifyContent:'center',
                  textAlign: 'center',
                  alignContent: 'center',
                  paddingLeft:13,
                  paddingRight:13,

                }}>{'Outdoor Active'}</Text>
              </View>

              </View>


            
            </ScrollView>
            </View>
              
            </View>
    
     
       
   
        

       
   

  

      
    
   
   

    </View>
  
  );
};

export default MoreCategories;

const styles = StyleSheet.create({
  featured: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 53,
    marginBottom: 20,
  },
});