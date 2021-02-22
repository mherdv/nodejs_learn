import { shallow, render, mount } from 'enzyme';
import { join } from 'path';

export default async () => ({
    "snapshotSerializers": [
        "enzyme-to-json/serializer"
    ],
    "globals": {
        shallow,
        render,
        mount
    },
    "setupFilesAfterEnv": [join(__dirname,'src','setupTests.ts')],
})