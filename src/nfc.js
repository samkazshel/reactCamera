import React from 'react';

function nfc() {
    const scan = async () => {
        if ("NDEFReader" in window) {
            try {
                const ndef = new window.NDEFReader();
                await ndef.scan();

                console.log("Scan started successfully.");
                ndef.onreading = () => {
                    console.log("Cannot read data from the NFC tag. Try another one?");
                };
                ndef.onreading = (event) => {
                    console.log("NDEF message read.");
                    onReading(event);
                };
            } catch (error) {
                console.log(`Error! Scan failed to start: ${error}`);
            }
        }
    };

    const onReading = ({message, serialNumber}) => {
        console.log(serialNumber);
        for(const record of message.records) {
            switch (record.recordType) {
                case "text":
                    const textDecoder = new TextDecoder(record.encoding);
                    console.log("Message", textDecoder.decode(record.data));
                break;
            }
        }
    };

    return(

        <div>
            <button onClick={scan}> Scan! </button>
        </div>
    );


}

export default nfc;