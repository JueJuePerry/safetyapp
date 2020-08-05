import React, { Component } from 'react';
import { Text, StyleSheet, ActivityIndicator, AsyncStorage, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../index';
import { ScrollView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen'
import { CustomInput, CustomErrorText, CustomPromptButton, Loader, CustomCheckBox, BottomMessage } from '../core';
import { submitUser, updateUserWithPhone, checkDuplicateUser } from '../service/apiService';

const Contact = ({ number, phone, email, setContactPhone, setContactEmail, contactErr, contactEmailErr, invalid }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <View style={styles.contact}>
        <TouchableOpacity style={styles.contactBtn}>
          <Text style={styles.contactNumber}>{number}</Text>
        </TouchableOpacity>
        <View style={[styles.input, { flex: 10 }]}>


          <CustomInput type='numeric' placeholderText='Phone' inputValue={phone} onChangeMethod={setContactPhone} iconname='phone' />
        </View>
      </View>
      <View style={styles.contact}>
        <View style={{ flex: 1 }}></View>
        <View style={[styles.input, { flex: 8 }]}>
          <CustomInput type='' placeholderText='Email' inputValue={email} onChangeMethod={setContactEmail} iconname='email' />
          {
            contactErr
              ?
              <CustomErrorText text='Please insert at least one contact!' />
              :
              null
          }
          {
            contactEmailErr
              ?
              <CustomErrorText text='Please insert email!' />
              :
              null
          }
          {
            invalid
              ?
              <CustomErrorText text='Invalid Email!' />
              :
              null
          }

        </View>
      </View>
    </View>
  );
}
const spinnerProps = { size: 'large', color: '#c23525', position: 'absolute' }

export class RegisterScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: '',
      loading: false,
      valid: true,
      secondContact: false,
      thirdContact: false,
      personalNameErr: false,
      personalPhoneErr: false,
      duplicatePhoneErr: false,
      personalEmailErr: false,
      contactErr: false,
      contactEmailErr: false,
      contact1EmailErr: false,
      contact2EmailErr: false,
      contact3mailErr: false,
      emergencyTextErr: false,
      emergencyCheckErr: false,
      consciousTextErr: false,
      consciousCheckErr: false,
      personal: {
        name: '',
        phone: '',
        email: ''
      },
      contact1: {
        phone: '',
        email: ''
      },
      contact2: {
        phone: '',
        email: ''
      },
      contact3: {
        phone: '',
        email: ''
      },
      emergency: {
        text: '',
        location: true,
        picture: true,
        video: true
      },
      conscious: {
        text: '',
        location: false,
        picture: false,
        video: false
      },
    }
  }

  componentDidMount() {
    SplashScreen.hide();
    AsyncStorage.clear()
    if (this.props.route.params.title == 'Edit Profile')
      this._retrieveData();
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('userprofile');
      const userProfile = JSON.parse(value);
      if (userProfile !== null) {
        console.log("Async Value>>" + JSON.stringify(userProfile));
        this.setState({
          ...userProfile
        })
      }
    } catch (error) {
      console.log("Async Error>>" + JSON.stringify(error))
    }
  };
  resetState() {
    this.setState(
      {
        message: '',
        valid: true,
        secondContact: false,
        thirdContact: false,
        personalNameErr: false,
        personalPhoneErr: false,
        duplicatePhoneErr: false,
        personalEmailErr: false,
        contactErr: false,
        contactEmailErr: false,
        contact1EmailErr: false,
        contact2EmailErr: false,
        contact3mailErr: false,
        emergencyTextErr: false,
        emergencyCheckErr: false,
        consciousTextErr: false,
        consciousCheckErr: false,
        personal: {
          name: '',
          phone: '',
          email: ''
        },
        contact1: {
          phone: '',
          email: ''
        },
        contact2: {
          phone: '',
          email: ''
        },
        contact3: {
          phone: '',
          email: ''
        },
        emergency: {
          text: '',
          location: true,
          picture: true,
          video: true
        },
        conscious: {
          text: '',
          location: false,
          picture: false,
          video: false
        },
      })
  }

  goSave() {
    this.setState({ loading: true })
    let valid = true;


    if (this.state.personal.name == '' || this.state.personal.name == null || this.state.personal.name == undefined) {
      this.setState({ personalNameErr: true })
      this.setState({ loading: false })
    }
    else {
      this.setState({ personalNameErr: false })
      if (this.state.personal.phone == '' || this.state.personal.phone == null || this.state.personal.phone == undefined) {
        this.setState({ personalPhoneErr: true })
        this.setState({ loading: false })
      }
      else {
        this.setState({ personalPhoneErr: false })
        checkDuplicateUser(this.state.personal.phone, this.props.route.params.title).then((result) => {
          if (!result) { // Duplicate
            this.setState({ duplicatePhoneErr: true })
            this.setState({ loading: false })
            console.log("Duplicate User...")
          }
          else {
            this.setState({ duplicatePhoneErr: false })
            console.log("Not Duplicate User...")
            console.log("Personal EMail..." + this.state.personal.email)
            let result = this.checkEmail(this.state.personal.email);
            if ((this.state.personal.email != '' && this.state.personal.email != null && this.state.personal.email != undefined && result) ||
              this.state.personal.email == '' || this.state.personal.email == null || this.state.personal.email == undefined) {
              console.log("Email ok");
              this.setState({ personalEmailErr: false })
              if ((this.state.contact1.phone == '' || this.state.contact1.phone == null || this.state.contact1.phone == undefined) &&
                (this.state.contact1.email == '' || this.state.contact1.email == null || this.state.contact1.email == undefined) &&
                (this.state.contact2.phone == '' || this.state.contact2.phone == null || this.state.contact2.phone == undefined) &&
                (this.state.contact2.email == '' || this.state.contact2.email == null || this.state.contact2.email == undefined) &&
                (this.state.contact3.phone == '' || this.state.contact3.phone == null || this.state.contact3.phone == undefined) &&
                (this.state.contact3.email == '' || this.state.contact3.email == null || this.state.contact3.email == undefined)
              ) { //No contacts
                this.setState({ contactErr: true })
                this.setState({ loading: false })
              }
              else if ((this.state.contact1.email == '' || this.state.contact1.email == null || this.state.contact1.email == undefined) &&
                (this.state.contact2.email == '' || this.state.contact2.email == null || this.state.contact2.email == undefined) &&
                (this.state.contact3.email == '' || this.state.contact3.email == null || this.state.contact3.email == undefined)
              ) { //No contact email
                this.setState({ contactErr: false })
                this.setState({ contactEmailErr: true })
                this.setState({ loading: false })
              }
              else {
                this.setState({ contactErr: false, contactEmailErr: false })
                let result = this.checkEmail(this.state.contact1.email);
                if ((this.state.contact1.email != '' && this.state.contact1.email != null && this.state.contact1.email != undefined && result) ||
                  this.state.contact1.email == '' || this.state.contact1.email == null || this.state.contact1.email == undefined) {
                  this.setState({ contact1EmailErr: false })

                  let result = this.checkEmail(this.state.contact2.email);
                  if ((this.state.contact2.email != '' && this.state.contact2.email != null && this.state.contact2.email != undefined && result) ||
                    this.state.contact2.email == '' || this.state.contact2.email == null || this.state.contact2.email == undefined) {
                    this.setState({ contact2EmailErr: false })
                    let result = this.checkEmail(this.state.contact3.email);
                    if ((this.state.contact3.email != '' && this.state.contact3.email != null && this.state.contact3.email != undefined && result) ||
                      this.state.contact3.email == '' || this.state.contact3.email == null || this.state.contact3.email == undefined) {
                      this.setState({ contact3EmailErr: false })



                      if (this.state.emergency.text == '' || this.state.emergency.text == null || this.state.emergency.text == undefined) {
                        this.setState({ emergencyTextErr: true })
                        this.setState({ loading: false })
                      }
                      else {
                        this.setState({ emergencyTextErr: false })
                        if (!this.state.emergency.location && !this.state.emergency.picture && !this.state.emergency.video) {
                          this.setState({ emergencyCheckErr: true })
                          this.setState({ loading: false })
                        }
                        else {
                          this.setState({ emergencyCheckErr: false })
                          if (this.state.conscious.text == '' || this.state.conscious.text == null || this.state.conscious.text == undefined) {
                            this.setState({ consciousTextErr: true })
                            this.setState({ loading: false })
                          }
                          else {
                            this.setState({ consciousTextErr: false })
                            if (!this.state.conscious.location && !this.state.conscious.picture && !this.state.conscious.video) {
                              this.setState({ consciousCheckErr: true })
                              this.setState({ loading: false })
                            }
                            else {
                              this.setState({ consciousCheckErr: false })
                              //Validation Success
                              console.log("Validation Successful..." + this.props.route.params.title);

                              let data =
                              {
                                personal: {
                                  name: this.state.personal.name,
                                  phone: this.state.personal.phone,
                                  email: this.state.personal.email
                                },
                                contact1: {
                                  phone: this.state.contact1.phone,
                                  email: this.state.contact1.email
                                },
                                contact2: {
                                  phone: this.state.contact2.phone,
                                  email: this.state.contact2.email
                                },
                                contact3: {
                                  phone: this.state.contact3.phone,
                                  email: this.state.contact3.email
                                },
                                emergency: {
                                  text: this.state.emergency.text,
                                  location: this.state.emergency.location,
                                  picture: this.state.emergency.picture,
                                  video: this.state.emergency.video
                                },
                                conscious: {
                                  text: this.state.conscious.text,
                                  location: this.state.conscious.location,
                                  picture: this.state.conscious.picture,
                                  video: this.state.conscious.video
                                }
                              }

                              if (this.props.route.params.title == 'Sign Up') {
                                console.log("Signup let's do it")
                                submitUser(this.state).then((result) => {
                                  console.log("Success Signup")
                                  this.setState({ loading: false, message: 'Registration successful!' })
                                  this.goHome(data);
                                }).catch((error) => {
                                  console.log("Error Signup")
                                  this.setState({ loading: false, message: 'Registration Fail, please try again!' })
                                  setTimeout(() => { this.setState({ message: '' }) }, 5000)
                                })
                              }
                              else {
                                console.log("Update user let's do it")
                                updateUserWithPhone(data).then((result) => {
                                  this.setState({ loading: false, message: 'Update successful!' })
                                  this.goHome(data);
                                }).catch((error) => {
                                  this.setState({ loading: false, message: 'Update Fail, please try again!' })
                                  setTimeout(() => { this.setState({ message: '' }) }, 5000)
                                })
                              }


                            }
                          }

                        }
                      }
                    }
                    else {
                      this.setState({ contact3EmailErr: true })
                      this.setState({ loading: false })
                    }
                  }
                  else {
                    this.setState({ contact2EmailErr: true })
                    this.setState({ loading: false })
                  }
                }
                else {
                  this.setState({ contact1EmailErr: true })
                  this.setState({ loading: false })
                }
              }
            }
            else {
              console.log("Email not ok");
              this.setState({ personalEmailErr: true })
              this.setState({ loading: false })
            }
          }
        }).catch((error) => {
          console.log("Failed checkDuplicateUser>>" + JSON.stringify(error));
          this.setState({ loading: false })
        })
      }
    }
  }
  goHome = async (data) => {

    this.setState({ message: '' })
    try {
      await AsyncStorage.setItem(
        'userprofile', JSON.stringify(data)
      );
      console.log("Success async saving data")
      this.props.navigation.navigate('HomeApp');
    } catch (error) {
      console.log("Error saving data" + JSON.stringify(error))
      this.props.navigation.navigate('HomeApp');
    }
  }
  checkEmail(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      return false;
    }
    else {
      console.log("Email is Correct");
      return true;
    }
  }
  changeInputState(type, index, text) {
    let obj;
    if (type == 'personal') {
      obj = {
        name: this.state.personal.name,
        phone: this.state.personal.phone,
        email: this.state.personal.email
      }
      if (index == 0)
        obj.name = text
      else if (index == 1)
        obj.phone = text
      else
        obj.email = text
    }
    else if (type.includes('contact')) {
      obj = {
        phone: this.state[type].phone,
        email: this.state[type].email
      }
      if (index == 1)
        obj.phone = text
      else
        obj.email = text
    }
    else if (type == 'emergency' || 'conscious') {
      obj = {
        text: text,
        location: this.state[type].location,
        picture: this.state[type].picture,
        video: this.state[type].video
      }
    }
    this.setState({
      [type]: obj
    })
  }
  changeCheckState(type, index) {
    let obj;
    if (index == 0) {
      obj = {
        text: this.state[type].text,
        location: !this.state[type].location,
        picture: this.state[type].picture,
        video: this.state[type].video
      }
    }
    else if (index == 1) {
      obj = {
        text: this.state[type].text,
        location: this.state[type].location,
        picture: !this.state[type].picture,
        video: this.state[type].video
      }
    }
    else {
      obj = {
        text: this.state[type].text,
        location: this.state[type].location,
        picture: this.state[type].picture,
        video: !this.state[type].video
      }
    }
    this.setState({
      [type]: obj
    })
  }


  showMoreContact = () => {
    if (!this.state.secondContact) {
      this.setState({ secondContact: true })
    }
    else {
      this.setState({ thirdContact: true })
    }
  }

  render() {
    let { navigation } = this.props;
    let { title, btnName } = this.props.route.params;
    let disable = false;
    if (title == 'Edit Profile')
      disable = true
    return (

      <SafeAreaView style={{ flex: 1 }}>

        <CustomHeader isHome={false} navigation={navigation}></CustomHeader>
        <Loader loading={this.state.loading} text="Saving..." />
        <ScrollView style={styles.body}>
          <Text style={styles.signup}>
            {title}
          </Text>

          <View style={styles.lower}>
            <Text style={styles.title}>
              Personal Info
            </Text>
            <View style={styles.input}>
              <CustomInput placeholderText='Name' inputValue={this.state.personal.name} iconname='account-outline'
                onChangeMethod={(text) => this.changeInputState('personal', 0, text)}
              />
              {
                this.state.personalNameErr
                  ?
                  <CustomErrorText text='Please insert name!' />
                  :
                  null
              }
            </View>
            <View style={styles.input}>
              <CustomInput type='numeric' placeholderText='Phone' inputValue={this.state.personal.phone} iconname='phone'
                disable={disable} onChangeMethod={(text) => this.changeInputState('personal', 1, text)}
              />
              {
                this.state.personalPhoneErr
                  ?
                  <CustomErrorText text='Please insert phone number!' />
                  :
                  null
              }
              {
                this.state.duplicatePhoneErr
                  ?
                  <CustomErrorText text='Already has an account with this phone number!' />
                  :
                  null
              }


            </View>
            <View style={styles.input}>

              <CustomInput placeholderText='Email' inputValue={this.state.personal.email} iconname='email'
                onChangeMethod={(text) => this.changeInputState('personal', 2, text)}
              />
              {
                this.state.personalEmailErr
                  ?
                  <CustomErrorText text='Invalid Email!' />
                  :
                  null
              }
            </View>
          </View>
          {/*  Personal View */}


          <View style={styles.lower}>
            <Text style={[styles.title, { paddingBottom: 20 }]}>
              Contact Info
            </Text>

            {/* Contact 1 Info */}
            <Contact number={1} phone={this.state.contact1.phone} email={this.state.contact1.email}
              setContactPhone={(text) => this.setState({ contact1: { phone: text, email: this.state.contact1.email } })}
              setContactEmail={(text) => this.setState({ contact1: { email: text, phone: this.state.contact1.phone } })}
              contactErr={this.state.contactErr} contactEmailErr={this.state.contactEmailErr} invalid={this.state.contact1EmailErr} />
            {
              this.state.secondContact
                ?
                <Contact number={2} phone={this.state.contact2.phone} email={this.state.contact2.email}
                  setContactPhone={(text) => this.setState({ contact2: { phone: text, email: this.state.contact2.email } })}
                  setContactEmail={(text) => this.setState({ contact2: { email: text, phone: this.state.contact2.phone } })}
                  invalid={this.state.contact2EmailErr} />
                :
                null
            }
            {
              this.state.thirdContact
                ?
                <Contact number={3} phone={this.state.contact3.phone} email={this.state.contact3.email}
                  setContactPhone={(text) => this.setState({ contact3: { phone: text, email: this.state.contact3.email } })}
                  setContactEmail={(text) => this.setState({ contact3: { email: text, phone: this.state.contact3.phone } })}
                  invalid={this.state.contact3EmailErr} />
                :
                null
            }


            {
              !this.state.thirdContact
                ?
                <View style={{ alignItems: 'center' }}>
                  <TouchableOpacity
                    onPress={() => this.showMoreContact()}
                    style={[styles.contactBtn, { width: 50, height: 50, marginTop: 10 }]}>
                    <Text style={styles.plus}>+</Text>
                  </TouchableOpacity>
                </View>
                :
                null
            }


          </View>



          <View style={[styles.lower]}>

            <View>
              <Text style={[styles.title, { color: 'red' }]}>
                Emergency Setting
  </Text>

              <CustomInput placeholderText='Hi! I am in danger!' inputValue={this.state.emergency.text}
                onChangeMethod={(text) => this.changeInputState('emergency', 0, text)} />
              {
                this.state.emergencyTextErr
                  ?
                  <CustomErrorText text='Please insert emergency text!' />
                  :
                  null
              }
              <CustomCheckBox title='Send Location' checked={this.state.emergency.location}
                onCheckChange={() => this.changeCheckState('emergency', 0)} />
              <CustomCheckBox title='Send Picture' checked={this.state.emergency.picture}
                onCheckChange={() => this.changeCheckState('emergency', 1)} />
              <CustomCheckBox title='Send Video' checked={this.state.emergency.video} no={25}
                onCheckChange={() => this.changeCheckState('emergency', 2)} />
              {
                this.state.emergencyCheckErr
                  ?
                  <CustomErrorText text='Please check at least one checkbox!' />
                  :
                  null
              }

            </View>
          </View>


          <View style={[styles.lower]}>
            <View>
              <Text style={[styles.title, { color: 'orange' }]}>
                Conscious Setting
              </Text>
              <CustomInput placeholderText='Hi! I think someone is following me!' inputValue={this.state.conscious.text}
                onChangeMethod={(text) => this.changeInputState('conscious', 0, text)} />
              {
                this.state.consciousTextErr
                  ?
                  <CustomErrorText text='Please insert conscious text!' />
                  :
                  null
              }

              <CustomCheckBox title='Send Location' checked={this.state.conscious.location}
                onCheckChange={() => this.changeCheckState('conscious', 0)} />
              <CustomCheckBox title='Send Picture' checked={this.state.conscious.picture}
                onCheckChange={() => this.changeCheckState('conscious', 1)} />
              <CustomCheckBox title='Send Video' checked={this.state.conscious.video} no={25}
                onCheckChange={() => this.changeCheckState('conscious', 2)} />

              {
                this.state.consciousCheckErr
                  ?
                  <CustomErrorText text='Please check at least one checkbox!' />
                  :
                  null
              }

            </View>
          </View>

          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
            <CustomPromptButton title="Cancel" pressButton={() => navigation.goBack()} />
            <CustomPromptButton title={btnName} pressButton={() => this.goSave()} />
          </View>

        </ScrollView>
        {
          this.state.message != ''
            ?
            <BottomMessage message={this.state.message} />
            :
            null
        }

      </SafeAreaView>

    );
  }
}


const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'

  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#c23525'
  },
  contact: {
    flexDirection: 'row',
    flex: 1
  },
  contactBtn: {
    backgroundColor: '#a85232',
    width: 30,
    height: 30,
    borderRadius: 160,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 10,
  },
  contactNumber: {
    color: 'white',
    fontSize: 18
  },
  plus: {
    color: 'white',
    fontSize: 25
  },
  inputContainer: {
    borderBottomColor: 'lightgray'
  },
  input: {
    //  padding: 10,
    marginBottom: -13
  },
  input2: {
    fontSize: 16,
    marginBottom: 0
  },
  address: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    marginLeft: 5,
    marginTop: 5
  },
  checkbox: {
    fontSize: 28
  },
  checkView: {
    width: 230,
    padding: 5
  },
  label: {
    paddingLeft: 7,
    color: 'gray',
    fontSize: 15,
    paddingTop: 10
  },
  selectBox: {
    borderWidth: 1,
  },
  selectView: {
    borderWidth: 1,
    marginLeft: 5,
    borderRadius: 5,
    borderColor: 'gray',
    marginTop: 5
  },
  lower: {
    //  borderTopLeftRadius: 22,
    //borderTopRightRadius: 22,
    borderRadius: 22,
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 22,
    flexGrow: 1,
    marginHorizontal: 10,
    paddingBottom: 16,
    marginTop: 14,
    borderWidth: 0.3,
    borderColor: '#a85232'
  },
  emergency: {
    borderWidth: 1,
    borderColor: 'red'
  },
  title: {
    fontSize: 21,
    paddingTop: 7,
    paddingLeft: 10,
    paddingBottom: 10,
    color: '#a85232'
  },
  body: {
    //backgroundColor: 'black',
    flex: 1
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center'
  },
  forget: {
    position: 'absolute',
    right: 0,
    marginTop: -19,
    color: '#376fde'
  },
  welcome: {
    fontSize: 29,
    color: '#44464a'
  },
  signup: {
    fontSize: 30,
    color: '#c23525',
    textAlign: 'left',
    paddingLeft: 16,
    paddingTop: 40,
    paddingBottom: 20
  },
  btn: {
    backgroundColor: 'white',
    marginTop: 20,
    //marginLeft: 16, 
    //marginRight: 16,
    width: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black'
  },


})
