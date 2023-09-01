import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import DynamicForm from "@coffeebeanslabs/react-native-form-builder";
import { CheckBox } from "react-native-elements";
import { RadioButton } from "react-native-paper";
import { Calendar } from "react-native-calendars";
import TextInputValidation from "../components/TextInputValidation";
import { Dropdown } from "react-native-element-dropdown";

function RegistrationFormScreen(props) {
  const [currentSection, setCurrentSection] = useState(1); // Tracks the current section
  const [privacyPolicy, setPrivacyPolicy] = useState(false); // Tracks the privacy policy checkbox
  const [attendance, setAttendance] = useState("yes");
  const [attendancei, setAttendancei] = useState("yes");
  const [attendanceii, setAttendanceii] = useState("yes");
  const [invitation, setInvitation] = useState();
  const [invitationi, setInvitationi] = useState();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDatei, setSelectedDatei] = useState(null);
  const [socialEvents, setSocialEvents] = useState();
  const [dietaryRequirements, setDietaryRequierments] = useState();
  const [selectedDateArrival, setSelectedDateArrival] = useState(null);
  const [selectedDateArrivali, setSelectedDateArrivali] = useState(null);
  const [SC, setSC] = useState();
  const [SCi, setSCi] = useState();
  const [SCii, setSCii] = useState();
  const [SCiii, setSCiii] = useState();
  const [SCiv, setSCiv] = useState();
  const [SCv, setSCv] = useState();
  const [SCvi, setSCvi] = useState();
  const [SCvii, setSCvii] = useState();
  const [hotel, setHotel] = useState();
  const [lastRadio, setLastRadio] = useState();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [title, setTitle] = useState("");
  const [surname, setSurname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [jurisdiction, setJurisdiction] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [value, setValue] = useState(null);
  const [membership, setMembership] = useState(null);
  const [jurisdictioni, setJurisdictioni] = useState("");
  const [organization, setOrganization] = useState("");
  const [jurisdictionii, setJurisdictionii] = useState("");
  const [organizationi, setOrganizationi] = useState("");

  const privacyPolicyUrl = "https://google.com";
  const maxCharacters = 5;

  const openPrivacyPolicy = () => {
    Linking.openURL(privacyPolicyUrl);
  };

  const handleNext = () => {
    setCurrentSection(currentSection + 1);
  };

  const handleBack = () => {
    setCurrentSection(currentSection - 1);
  };

  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  const onSubmit = () => {
    // Actions on submit button click.
    //console.log("Form submitted with fields: ", formFields);
    setCurrentSection(currentSection + 1);
  };
  const handleSubmit = () => {
    if (
      (attendance === "yes" || attendance === "no") &&
      (attendancei === "yes" || attendancei === "no") &&
      (attendanceii === "yes" || attendanceii === "no") &&
      privacyPolicy
    ) {
      setCurrentSection(currentSection + 1);
    } else {
      alert("Please complete all required fields");
    }
  };
  const handleSubmit1 = () => {
    if (
      title.trim().length > 0 &&
      surname.trim().length > 0 &&
      firstname.trim().length > 0 &&
      jobTitle.trim().length > 0 &&
      address.trim().length > 0 &&
      city.trim().length > 0 &&
      state.trim().length > 0 &&
      jurisdiction.trim().length > 0 &&
      phoneNumber.trim().length > 0 &&
      emailAddress.trim().length > 0
    ) {
      setCurrentSection(currentSection + 1);
    } else {
      alert(
        "Please complete all required fields before proceeding to the next section"
      );
    }
  };
  const handleSubmit2 = () => {
    if (membership === "ordinary" || membership === "associate") {
      setCurrentSection(currentSection + 1);
    } else {
      alert("Please complete all required fields");
    }
  };
  const handleSubmit3 = () => {
    if (organization.trim().length > 0 && jurisdictioni.trim().length > 0) {
      setCurrentSection(currentSection + 1);
    } else {
      alert("Please complete all required fields");
    }
  };
  const handleSubmit4 = () => {
    if (organizationi.trim().length > 0 && jurisdictionii.trim().length > 0) {
      setCurrentSection(currentSection + 1);
    } else {
      alert("Please complete all required fields");
    }
  };

  const handleSubmit8 = () => {
    if (
      (invitation === "yes" || invitation === "no") &&
      (invitationi === "yes" || invitationi === "no")
    ) {
      setCurrentSection(currentSection + 1);
    } else {
      alert("Please complete all required fields");
    }
  };
  const handleSubmit9 = () => {
    if (socialEvents === "yes" || socialEvents === "no") {
      setCurrentSection(currentSection + 1);
    } else {
      alert("Please complete all required fields");
    }
  };
  const handleSubmit10 = () => {
    if (selectedDateArrival && selectedDateArrivali) {
      setCurrentSection(currentSection + 1);
    } else {
      alert("Please complete all required fields");
    }
  };
  const handleSubmit11 = () => {
    if (
      SC === "yes" ||
      (SC === "no" && SCi === "yes") ||
      (SCi === "no" && SCii === "yes") ||
      (SCii === "no" && SCiii === "yes") ||
      SCiii === "no"
    ) {
      setCurrentSection(currentSection + 1);
    } else {
      alert("Please complete all required fields");
    }
  };
  const handleSubmit12 = () => {
    if (hotel) {
      setCurrentSection(currentSection + 1);
    } else {
      alert("Please complete all required fields");
    }
  };
  const handleSubmit13 = () => {
    if (lastRadio) {
      setCurrentSection(currentSection + 1);
    } else {
      alert("Please complete all required fields");
    }
  };
  const handleConfirm = () => {
    alert("Your registration has been submitted");
    props.navigation.navigate("Home", {
      alert: {
        messages: "Your registration has been submitted",
        type: "success",
      },
    });

    setShowConfirmation(false);
  };
  const handleCancel = () => {
    setShowConfirmation(false); // Close the confirmation dialog
  };
  return (
    <View style={styles.container}>
      {currentSection === 1 && (
        <View>
          <Image
            source={require("../assets/iosco.gif")}
            style={{ alignSelf: "center" }}
          />
          <Image source={require("../assets/fra.gif")} style={styles.image} />
          <Image
            source={require("../assets/conf.gif")}
            style={{ alignSelf: "center" }}
          />
          <Text style={styles.text}>
            IOSCO Growth and Emerging Markets Committee Annual meeting and
            Public Conference 2023
          </Text>
          <Text style={styles.text}>ONLINE REGISTRATION FORM</Text>

          <KeyboardAvoidingView behavior="padding" enabled>
            <View style={styles.buttonContainer}>
              <Button title="start" onPress={handleNext} />
            </View>
          </KeyboardAvoidingView>
        </View>
      )}
      {/* Section 1 */}
      {currentSection === 2 && (
        <View>
          <Text style={styles.left}>A. PERSONAL INFORMATION</Text>
          <ScrollView contentContainerStyle={styles.scrollViewStyle}>
            <View>
              <TextInputValidation
                label="Title"
                placeholder="Dr., Mr., Mrs., Ms., etc."
                maxLength={30}
                onValueChange={(newValue) => setTitle(newValue)}
              />
              <TextInputValidation
                label="Surname"
                placeholder="Enter surname.."
                maxLength={30}
                onValueChange={(newValue) => setSurname(newValue)}
              />
              <TextInputValidation
                label="First Name"
                placeholder="Enter first name.."
                maxLength={30}
                onValueChange={(newValue) => setFirstname(newValue)}
              />
              <TextInputValidation
                label="Job Title / Position"
                placeholder="Enter Job Title / Position.."
                maxLength={30}
                onValueChange={(newValue) => setJobTitle(newValue)}
              />
              <TextInputValidation
                label="Address"
                placeholder="Enter Address.."
                maxLength={30}
                onValueChange={(newValue) => setAddress(newValue)}
              />
              <TextInputValidation
                label="City"
                placeholder="Enter city.."
                maxLength={30}
                onValueChange={(newValue) => setCity(newValue)}
              />
              <TextInputValidation
                label="State"
                placeholder="Enter state.."
                maxLength={30}
                onValueChange={(newValue) => setState(newValue)}
              />
              <TextInputValidation
                label="Jurisdiction"
                placeholder="Enter Jurisdiction.."
                maxLength={30}
                onValueChange={(newValue) => setJurisdiction(newValue)}
              />
              <TextInputValidation
                label="Phone Number"
                placeholder="Enter phone number.."
                maxLength={30}
                onValueChange={(newValue) => setPhoneNumber(newValue)}
              />
              <TextInputValidation
                label="Email adress"
                placeholder="Enter email address.."
                maxLength={30}
                onValueChange={(newValue) => setEmailAddress(newValue)}
              />
            </View>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "blue" }]}
              onPress={handleSubmit1}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </ScrollView>
          <KeyboardAvoidingView behavior="padding" enabled>
            <Button title="Back" onPress={handleBack} />
            {/* <Button title="Next" onPress={handleNext} /> */}
          </KeyboardAvoidingView>
        </View>
      )}

      {/* Section 2 */}
      {currentSection === 3 && (
        <View>
          <Text style={styles.left}>B. Representing</Text>
          <Text>IOSCO member:</Text>
          {/* Add input fields for the additional information */}
          <ScrollView contentContainerStyle={styles.scrollViewStyle}>
            <Text style={styles.label}>Type of membership</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setMembership(newValue)}
              value={membership}
            >
              <View style={styles.radioButtonContainer}>
                <View>
                  <Text>Ordinary</Text>
                  <RadioButton value="ordinary" />
                </View>
                <View style={styles.day}>
                  <Text>Associate</Text>
                  <RadioButton value="associate" />
                </View>
              </View>
            </RadioButton.Group>
            <Dropdown
              data={data}
              placeholder="Organization / Entity"
              labelField={"label"}
              valueField={"value"}
              searchField={"label"}
              onChange={(item) => setValue(item)}
              onChangeText={(item) => setValue(item)}
            />
            <Dropdown
              data={data}
              placeholder="Jurisdiction"
              labelField={"label"}
              valueField={"value"}
              searchField={"label"}
              onChange={(item) => setValue(item)}
              onChangeText={(item) => setValue(item)}
            />
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "blue" }]}
              onPress={handleSubmit2}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </ScrollView>
          <KeyboardAvoidingView behavior="padding" enabled>
            <Button title="Back" onPress={handleBack} />
            {/* <Button title="Next" onPress={handleNext} /> */}
          </KeyboardAvoidingView>
        </View>
      )}
      {currentSection === 4 && (
        <View>
          <Text style={styles.left}>B. Representing</Text>
          <Text>Non IOSCO member:</Text>
          {/* Add input fields for the additional information */}
          <ScrollView contentContainerStyle={styles.scrollViewStyle}>
            <TextInputValidation
              label="Organization / Entity"
              placeholder="Enter Organization / Entity.."
              maxLength={30}
              onValueChange={(newValue) => setOrganization(newValue)}
            />
            <TextInputValidation
              label="Jurisdiction"
              placeholder="Enter Jurisdiction.."
              maxLength={30}
              onValueChange={(newValue) => setJurisdictioni(newValue)}
            />
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "blue" }]}
              onPress={handleSubmit3}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </ScrollView>
          <KeyboardAvoidingView behavior="padding" enabled>
            <Button title="Back" onPress={handleBack} />
            {/* <Button title="Next" onPress={handleNext} /> */}
          </KeyboardAvoidingView>
        </View>
      )}
      {currentSection === 5 && (
        <View>
          <Text style={styles.left}>B. Representing</Text>
          <Text>External speaker:</Text>
          {/* Add input fields for the additional information */}
          <ScrollView contentContainerStyle={styles.scrollViewStyle}>
            <TextInputValidation
              label="Organization / Entity"
              placeholder="Enter Organization / Entity.."
              maxLength={30}
              onValueChange={(newValue) => setOrganizationi(newValue)}
            />
            <TextInputValidation
              label="Jurisdiction"
              placeholder="Enter Jurisdiction.."
              maxLength={30}
              onValueChange={(newValue) => setJurisdictionii(newValue)}
            />
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "blue" }]}
              onPress={handleSubmit4}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </ScrollView>
          <KeyboardAvoidingView behavior="padding" enabled>
            <Button title="Back" onPress={handleBack} />
            {/* <Button title="Next" onPress={handleNext} /> */}
          </KeyboardAvoidingView>
        </View>
      )}

      {/* Add more sections as needed */}
      {currentSection === 6 && (
        <View>
          <Text style={styles.left}>
            C. I will attend the following meetings
          </Text>
          <ScrollView contentContainerStyle={styles.scrollViewStyle}>
            <Text style={styles.day}>Day 1</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setAttendance(newValue)}
              value={attendance}
            >
              <View>
                <Text>Yes</Text>
                <RadioButton value="yes" />
              </View>
              <View>
                <Text>No</Text>
                <RadioButton value="no" />
              </View>
            </RadioButton.Group>
            <Text style={styles.day}>Day 2</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setAttendancei(newValue)}
              value={attendancei}
            >
              <View>
                <Text>Yes</Text>
                <RadioButton value="yes" />
              </View>
              <View>
                <Text>No</Text>
                <RadioButton value="no" />
              </View>
            </RadioButton.Group>
            <Text style={styles.day}>Day 3</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setAttendanceii(newValue)}
              value={attendanceii}
            >
              <View>
                <Text>Yes</Text>
                <RadioButton value="yes" />
              </View>
              <View>
                <Text>No</Text>
                <RadioButton value="no" />
              </View>
            </RadioButton.Group>
            <CheckBox
              title={""}
              checked={privacyPolicy}
              onPress={() => setPrivacyPolicy(!privacyPolicy)}
            ></CheckBox>
            <Text>
              I have read and understood the{" "}
              <TouchableOpacity onPress={openPrivacyPolicy}>
                <Text style={{ textDecorationLine: "underline" }}>
                  Privacy Policy
                </Text>
              </TouchableOpacity>
              applied to my attendance at this event and acknowledge that the
              event is recorded and my attendance requires the assignment of my
              image rights in accordance with such policy
            </Text>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "blue" }]}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            {/* <DynamicForm formTemplate={formTemplateiii} onSubmit={onSubmit} /> */}
          </ScrollView>
          <Button title="Back" onPress={handleBack} />
          {/* <Button style={styles.button} title="Next" onPress={handleNext} /> */}
        </View>
      )}
      {currentSection === 7 && (
        <View>
          <Text style={styles.left}>D. Visa information</Text>
          <ScrollView contentContainerStyle={styles.scrollViewStyle}>
            <Text>
              For information about visa requirements consult the{" "}
              <TouchableOpacity onPress={openPrivacyPolicy}>
                <Text style={{ textDecorationLine: "underline" }}>
                  Visa Requirements
                </Text>
              </TouchableOpacity>
              or
              <TouchableOpacity onPress={openPrivacyPolicy}>
                <Text style={{ textDecorationLine: "underline" }}>
                  click here
                </Text>
              </TouchableOpacity>
              to visit Passport and Immigration Office website.
            </Text>
            <Text style={styles.day}>Do you need a letter of invitation?</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setInvitation(newValue)}
              value={invitation}
            >
              <View style={styles.radioButtonContainer}>
                <View>
                  <Text>Yes</Text>
                  <RadioButton value="yes" />
                </View>
                <View style={styles.day}>
                  <Text>No</Text>
                  <RadioButton value="no" />
                </View>
              </View>
            </RadioButton.Group>
            <Text style={styles.day}>Do you need a visa support letter?</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setInvitationi(newValue)}
              value={invitationi}
            >
              <View style={styles.radioButtonContainer}>
                <View>
                  <Text>Yes</Text>
                  <RadioButton value="yes" />
                </View>
                <View style={styles.day}>
                  <Text>No</Text>
                  <RadioButton value="no" />
                </View>
              </View>
            </RadioButton.Group>
            {invitationi === "yes" && (
              <View>
                <Text>Full name as in Passport</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter additional information"
                />
                <Text>Passport Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter additional information"
                />
                <Text>Country in which passport was issued</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter additional information"
                />
                <Text>Date of issue</Text>
                <Calendar
                  onDayPress={(day) => {
                    setSelectedDate(day.dateString);
                  }}
                  markedDates={{
                    [selectedDate]: {
                      selectedDate: true,
                      disableTouchEvent: true,
                      selectedDotColor: "orange",
                    },
                  }}
                />
                <Text>Selected Date: {selectedDate}</Text>
                <Text>Expiry date</Text>
                <Calendar
                  onDayPress={(day) => {
                    setSelectedDatei(day.dateString);
                  }}
                  markedDates={{
                    [selectedDatei]: {
                      selectedDatei: true,
                      disableTouchEvent: true,
                      selectedDotColor: "orange",
                    },
                  }}
                  minDate="2021-01-01"
                />
                <Text>Selected Date: {selectedDatei}</Text>
              </View>
            )}
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "blue" }]}
              onPress={handleSubmit8}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </ScrollView>
          <Button title="Back" onPress={handleBack} />
          {/* <Button title="Next" onPress={handleNext} /> */}
        </View>
      )}
      {currentSection === 8 && (
        <View>
          <Text style={styles.left}>E. Accompanying persons</Text>
          <ScrollView contentContainerStyle={styles.scrollViewStyle}>
            <Text>I will be accompanied to social events:</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setSocialEvents(newValue)}
              value={socialEvents}
            >
              <View style={styles.radioButtonContainer}>
                <View>
                  <Text>Yes</Text>
                  <RadioButton value="yes" />
                </View>
                <View style={styles.day}>
                  <Text>No</Text>
                  <RadioButton value="no" />
                </View>
              </View>
            </RadioButton.Group>
            {socialEvents === "yes" && (
              <View>
                <Text style={styles.day}>Details of accompanying person:</Text>
                <Text>Accompanying person title</Text>
                <TextInput style={styles.input} placeholder=""></TextInput>
                <Text>Accompanying person first name</Text>
                <TextInput style={styles.input} placeholder=""></TextInput>
                <Text>Accompanying person last name</Text>
                <TextInput style={styles.input} placeholder=""></TextInput>
                <Text>Accompanying person dietary requirements</Text>
                <RadioButton.Group
                  onValueChange={(newValue) => setDietaryRequierments(newValue)}
                  value={dietaryRequirements}
                >
                  <View style={styles.radioButtonContainer}>
                    <View>
                      <Text>Vegetarian</Text>
                      <RadioButton value="vegetarian" />
                    </View>
                    <View style={styles.day}>
                      <Text>Other</Text>
                      <RadioButton value="other" />
                    </View>
                  </View>
                </RadioButton.Group>
                {dietaryRequirements === "other" && (
                  <View>
                    <Text>Other dietary requirements</Text>
                    <TextInput style={styles.input} placeholder=""></TextInput>
                  </View>
                )}
              </View>
            )}
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "blue" }]}
              onPress={handleSubmit9}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </ScrollView>
          <Button title="Back" onPress={handleBack} />
        </View>
      )}
      {currentSection === 9 && (
        <View>
          <Text style={styles.left}>F. Flight details</Text>
          <ScrollView contentContainerStyle={styles.scrollViewStyle}>
            <Text>Date of arrival</Text>
            <Calendar
              onDayPress={(day) => {
                setSelectedDateArrival(day.dateString);
              }}
              markedDates={{
                [selectedDateArrival]: {
                  selectedDateArrival: true,
                  disableTouchEvent: true,
                  selectedDotColor: "orange",
                },
              }}
              minDate="2021-01-01"
            />
            <Text>Selected Date: {selectedDateArrival}</Text>
            <Text>Time of arrival</Text>
            <TextInput style={styles.input} placeholder=""></TextInput>
            <Text>Arrival flight number</Text>
            <TextInput style={styles.input} placeholder=""></TextInput>
            <Text>Departure date</Text>
            <Calendar
              onDayPress={(day) => {
                setSelectedDateArrivali(day.dateString);
              }}
              markedDates={{
                [selectedDateArrivali]: {
                  selectedDateArrivali: true,
                  disableTouchEvent: true,
                  selectedDotColor: "orange",
                },
              }}
              minDate="2021-01-01"
            />
            <Text>Selected Date: {selectedDateArrivali}</Text>
            <Text>Time of departure</Text>
            <TextInput style={styles.input} placeholder=""></TextInput>
            <Text>Departure flight number</Text>
            <TextInput style={styles.input} placeholder=""></TextInput>
            <Text>
              Flights details are to be provided for Host's information only,
              please note that participants are to make their own transfer
              arrangements from/to airport and hotels
            </Text>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "blue" }]}
              onPress={handleSubmit10}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </ScrollView>
          <Button title="Back" onPress={handleBack} />
        </View>
      )}
      {currentSection === 10 && (
        <View>
          <Text style={styles.left}>G. Social Events</Text>
          <ScrollView contentContainerStyle={styles.scrollViewStyle}>
            <Text>
              For more information on the social events, please{" "}
              <TouchableOpacity onPress={openPrivacyPolicy}>
                <Text style={{ textDecorationLine: "underline" }}>
                  click here
                </Text>
              </TouchableOpacity>
            </Text>
            <Text>I will attend the welcome Cocktail/Dinner on [Date]</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setSC(newValue)}
              value={SC}
            >
              <View style={styles.radioButtonContainer}>
                <View>
                  <Text>Yes</Text>
                  <RadioButton value="yes" />
                </View>
                <View style={styles.day}>
                  <Text>No</Text>
                  <RadioButton value="no" />
                </View>
              </View>
            </RadioButton.Group>
            <Text>I will attend the Cocktail/Dinner on [Date]</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setSCi(newValue)}
              value={SCi}
            >
              <View style={styles.radioButtonContainer}>
                <View>
                  <Text>Yes</Text>
                  <RadioButton value="yes" />
                </View>
                <View style={styles.day}>
                  <Text>No</Text>
                  <RadioButton value="no" />
                </View>
              </View>
            </RadioButton.Group>
            <Text>I will attend the Gala Dinner on [Date]</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setSCii(newValue)}
              value={SCii}
            >
              <View style={styles.radioButtonContainer}>
                <View>
                  <Text>Yes</Text>
                  <RadioButton value="yes" />
                </View>
                <View style={styles.day}>
                  <Text>No</Text>
                  <RadioButton value="no" />
                </View>
              </View>
            </RadioButton.Group>
            <Text>I will attend the excursion on [Date]</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setSCiii(newValue)}
              value={SCiii}
            >
              <View style={styles.radioButtonContainer}>
                <View>
                  <Text>Yes</Text>
                  <RadioButton value="yes" />
                </View>
                <View style={styles.day}>
                  <Text>No</Text>
                  <RadioButton value="no" />
                </View>
              </View>
            </RadioButton.Group>
            <Text style={styles.day}>Accompanying guest</Text>
            <Text>I wish to register my accompanying guest for: </Text>
            <Text> Welcome Cocktail/Dinner on [Date]</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setSCiv(newValue)}
              value={SCiv}
            >
              <View style={styles.radioButtonContainer}>
                <View>
                  <Text>Yes</Text>
                  <RadioButton value="yes" />
                </View>
                <View style={styles.day}>
                  <Text>No</Text>
                  <RadioButton value="no" />
                </View>
              </View>
            </RadioButton.Group>
            <Text>Cocktail/Dinner on [Date]</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setSCv(newValue)}
              value={SCv}
            >
              <View style={styles.radioButtonContainer}>
                <View>
                  <Text>Yes</Text>
                  <RadioButton value="yes" />
                </View>
                <View style={styles.day}>
                  <Text>No</Text>
                  <RadioButton value="no" />
                </View>
              </View>
            </RadioButton.Group>
            <Text>Gala dinner on [Date]</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setSCvi(newValue)}
              value={SCvi}
            >
              <View style={styles.radioButtonContainer}>
                <View>
                  <Text>Yes</Text>
                  <RadioButton value="yes" />
                </View>
                <View style={styles.day}>
                  <Text>No</Text>
                  <RadioButton value="no" />
                </View>
              </View>
            </RadioButton.Group>
            <Text>the excursion on [Date]</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setSCvii(newValue)}
              value={SCvii}
            >
              <View style={styles.radioButtonContainer}>
                <View>
                  <Text>Yes</Text>
                  <RadioButton value="yes" />
                </View>
                <View style={styles.day}>
                  <Text>No</Text>
                  <RadioButton value="no" />
                </View>
              </View>
            </RadioButton.Group>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "blue" }]}
              onPress={handleSubmit11}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </ScrollView>
          <Button title="Back" onPress={handleBack} />
        </View>
      )}
      {currentSection === 11 && (
        <View>
          <Text style={styles.left}>H. Accommodation</Text>
          <ScrollView contentContainerStyle={styles.scrollViewStyle}>
            <Text>
              You are kindly requested to make your reservation directly with
              the hotels. For more information in accommodation, please{" "}
              <TouchableOpacity onPress={openPrivacyPolicy}>
                <Text style={{ textDecorationLine: "underline" }}>
                  click here
                </Text>
                <Text>I will be staying at: </Text>
                <RadioButton.Group
                  onValueChange={(newValue) => setHotel(newValue)}
                  value={hotel}
                >
                  <View style={styles.radioButtonContainer}>
                    <View style={styles.radioButtonOption}>
                      <Text>Hotel 1</Text>
                      <RadioButton value="1" />
                    </View>
                    <View style={styles.radioButtonContainer}>
                      <Text>Hotel 2</Text>
                      <RadioButton value="2" />
                    </View>
                    <View style={styles.radioButtonContainer}>
                      <Text>Hotel 3</Text>
                      <RadioButton value="3" />
                    </View>
                    <View style={styles.radioButtonContainer}>
                      <Text>Other</Text>
                      <RadioButton value="other" />
                    </View>
                  </View>
                </RadioButton.Group>
                {hotel === "other" && (
                  <View>
                    <Text>Name of Hotel</Text>
                    <TextInput style={styles.input} placeholder=""></TextInput>
                    <Text>Address</Text>
                    <TextInput style={styles.input} placeholder=""></TextInput>
                  </View>
                )}
              </TouchableOpacity>
            </Text>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "blue" }]}
              onPress={handleSubmit12}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </ScrollView>
          <Button title="Back" onPress={handleBack} />
        </View>
      )}
      {currentSection === 12 && (
        <View>
          <Text style={styles.left}>I. Special requests</Text>
          <ScrollView contentContainerStyle={styles.scrollViewStyle}>
            <Text>
              Please mention any special request concerning travel, dietary
              preferences, etc.
            </Text>
            <TextInput
              style={styles.input1}
              multiline={true}
              placeholder="Enter here.."
              maxLength={maxCharacters}
            ></TextInput>

            <Text style={[styles.spaceAbove, { fontWeight: "bold" }]}>
              Dietary preferences
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setLastRadio(newValue)}
              value={lastRadio}
            >
              <View>
                <View style={styles.radioButtonOption}>
                  <Text>Vegetarian</Text>
                  <RadioButton value="i" />
                </View>
                <View style={styles.radioButtonOption}>
                  <Text>Other</Text>
                  <RadioButton value="ii" />
                </View>
              </View>
            </RadioButton.Group>
            {lastRadio === "ii" && (
              <View>
                <Text>If other please specify</Text>
                <TextInput
                  style={[styles.input1, { marginBottom: 20 }]}
                  placeholder="Enter here.."
                ></TextInput>
              </View>
            )}
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "blue" }]}
              onPress={handleSubmit13}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </ScrollView>
          <Button title="Back" onPress={handleBack} />
        </View>
      )}
      {currentSection === 13 && (
        <View>
          <Text style={styles.left}>J. Any other information</Text>
          <ScrollView contentContainerStyle={styles.scrollViewStyle}>
            <TextInput
              style={[styles.input1, { marginTop: 20 }]}
              multiline={true}
              placeholder="Enter here.."
            ></TextInput>
          </ScrollView>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "red" }]}
            onPress={() => setShowConfirmation(true)}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          {showConfirmation &&
            Alert.alert(
              "Confirmation",
              "Are you sure you want to submit?",
              [
                { text: "Cancel", onPress: handleCancel, style: "cancel" },
                { text: "Submit", onPress: handleConfirm },
              ],
              { cancelable: false }
            )}
          <Button title="Back" onPress={handleBack} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 50,
    //underline
    textDecorationLine: "underline",
  },
  left: {
    textAlign: "left",
    fontSize: 20,
    marginTop: 50,
    //left on the screen
    marginRight: 200,
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 10,
    borderRadius: 100,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 10,
    fontSize: 16,
    width: 300,
    textAlign: "center",
  },
  input1: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 70,
    paddingHorizontal: 15,
    paddingVertical: 40,
  },
  labeli: {
    flex: 2,
    fontWeight: "bold",
    width: 60,
  },
  label: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 50,
  },
  buttonContainer: {
    marginTop: 10,
  },
  image: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: "contain",
    //image centered
    alignSelf: "center",
  },
  day: {
    textAlign: "left",
    fontSize: 20,
    alignItems: "center",
  },
  spaceAbove: {
    marginTop: 20,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  radioButtonOption: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  button: {
    width: "40%",
    height: 50,
    alignSelf: "center",
    margin: 0,
    color: "red",
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  requiredStar: {
    position: "absolute",
    top: -4,
    left: 30,
    color: "red", // or any color you prefer
    fontSize: 18,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    paddingLeft: 30, // Add some space for the star icon
    marginTop: 10,
  },
  errorInput: {
    borderColor: "red", // Apply border color to indicate error
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
export default RegistrationFormScreen;
