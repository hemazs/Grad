// for I2C Communication
#include <Wire.h>
#include <PN532_I2C.h>
#include <PN532.h>
#include <NfcAdapter.h>
#include <MifareClassic.h>
PN532_I2C pn532_i2c(Wire);
NfcAdapter nfc = NfcAdapter(pn532_i2c);
String tagId = "None";
byte nuidPICC[4];
void setup(void) {
 	Serial.begin(115200);
 	Serial.println("System initialized");
 	nfc.begin();
}
void loop() {
 	readNFC();
}
void readNFC() {
 	if (nfc.tagPresent())
 	{
     boolean success = nfc.format();
   }
}
 	// 		NdefMessage message = NdefMessage();
  //       //message.addTextRecord("My First NFC Tag Write"); // Text Message you want to Record
  //       //message.addUriRecord("http://allaboutcircuits.com"); // Website you want to Record
  //       message.addTextRecord("pornhub.com");
  //       boolean success = nfc.write(message);
  //       if (success) {
  //           Serial.println("Good Job, now read it with your phone!"); // if it works you will see this message 
  //       } else {
  //           Serial.println("Write failed"); // If the the rewrite failed you will see this message
  //       }
  //  }
