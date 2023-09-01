import React from "react";
import { Modal, View, Text } from "react-native";
import { MapView } from "expo";
import Button from "../components/Button";
import { transformName } from "../config/helpers";
// import styles from "./styles/profileStyles";

const UserDetails = ({ selectedUser, closeModal }) => {
  if (!selectedUser) return null;

  return (
    <Modal
      visible={selectedUser !== null}
      animationType="slide"
      onRequestClose={closeModal}
    >
      <View style={styles.container}>
        <View style={styles.userMetaContainer}>
          <View style={styles.userAvtar}>
            <Text style={styles.userAvtarText}>
              {transformName(selectedUser.name)}
            </Text>
          </View>
          <View style={styles.userMeta}>
            <Text>{selectedUser.name}</Text>
            <Text>{selectedUser.email}</Text>
          </View>
        </View>

        <View>
          <View>
            <View>
              <Text>الاختصاص</Text>
              <Text>{selectedUser.profile.speialization}</Text>
            </View>
            <View style={styles.infoCell}>
              <Text style={styles.infoTitle}>العنوان</Text>
              <Text style={styles.infoText}>
                {selectedUser.profile.address}
              </Text>
            </View>
            <View style={styles.infoCell}>
              <Text style={styles.infoTitle}>ساعات العمل</Text>
              <Text style={styles.infoText}>
                {selectedUser.profile.workingHours}
              </Text>
            </View>
            <View style={styles.lastCell}>
              <Text style={styles.infoTitle}>رقم الهاتف</Text>
              <Text style={styles.infoText}>{selectedUser.profile.phone}</Text>
            </View>
          </View>
        </View>
        {selectedUser.latitude && (
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: selectedUser.latitude,
                longitude: selectedUser.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              <MapView.Marker
                coordinate={{
                  latitude: selectedUser.latitude,
                  longitude: selectedUser.longitude,
                }}
              />
            </MapView>
          </View>
        )}
        <Button
          text="Back"
          buttonStyles={styles.backButton}
          onPress={closeModal}
        />
      </View>
    </Modal>
  );
};

export default UserDetails;
