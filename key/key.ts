import {AllKeyFileTypes, readKeyFile} from "@avalabs/avalanche-wallet-sdk";

const key: AllKeyFileTypes = {
    "version": "6.0",
    "salt": "4BV2dRw62uzVUoXBwovGGjoW6sM2",
    "activeIndex": 0,
    "keys": [{
        "key": "6qYpf71hoGswED6DdoMqwuSaSxfck9k1GXt6FxxXp9qLHYoMf4Z8mD6ySUcd4ymwppvSqciPJvJU3SM5n8dXv7PvnigzDeCBu15QmV1ASLNrD7XijCQC3jCRSwBw7pvEnyiq2jY8KzNoFTqs7orEV9JdjkEdvAsbQKynTfWVwvnQj1PpinXPRVWv7JPNnexiJFVev3njEGvN41CPrkGfKRiAjRLPnt6h5SKCwqiqGjWwmr",
        "iv": "8AXFVeALUK7JDbhnZpz9vJ",
        "type": "mnemonic"
    }]
}
const pass = "teria114514";
(async () => {
    try {
        const re = await readKeyFile(key, pass);
        console.log(re);
    } catch (e) {
        console.log(e)
    }

})()
