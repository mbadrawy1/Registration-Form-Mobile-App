import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  statsHead: {
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  container: {
    width: '100%',
    backgroundColor: '#fbfbfb',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#fcfcfc',
    shadowOpacity: 1,
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 5
    },
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  bullets: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 20,
  },
    image: {
        width: 280, // Adjust the width as needed
        height: 200, // Adjust the height as needed
        resizeMode: "contain",
        alignSelf: "center",
        marginRight: 58,
        borderRadius: 7,
      },
      itemContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        fontSize: 16,
        textAlign: 'justify',
        paddingHorizontal: 20,
      },
      textContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default styles;