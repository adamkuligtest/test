import { NFC } from 'nfc-pcsc';

const initializeNFC = () => {
    NFC.on('reader', reader => {
        console.log(`${reader.reader.name}  device attached`);
        reader.on('card', card => {
            console.log(`${reader.reader.name}  card detected`, card);
        });
        reader.on('card.off', card => {
            console.log(`${reader.reader.name}  card removed`, card);
        });
        reader.on('error', err => {
            console.log(`${reader.reader.name}  an error occurred`, err);
        });
        reader.on('end', () => {
            console.log(`${reader.reader.name}  device removed`);
        });
    });
    NFC.on('error', err => {
        console.log('an error occurred', err);
    });
};

export default initializeNFC;
