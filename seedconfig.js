import faker from "faker";
import _ from 'lodash';
import utils from "./core/utils";

faker.locale = "id_ID";

export default {
    default_times: 30,
    entities: {
        User: {
            full_name: faker.name.findName,
            email: faker.internet.email,
            password: {
                wrap: utils.hash,
                method: faker.internet.password
            },
            phone: faker.phone.phoneNumber,
            id_card: () => '/dev/null/',
            type: () => 'owner',
            active: () => 1,
            last_login: () => null
        },
        Place: {
            name: faker.company.bsBuzz,
            room_length: () => _.sample([2.9, 2.5, 3, 4]),
            room_width: () => _.sample([2.5, 4.5, 4, 3.5]),
            dispenser: () => _.sample([true, false]),
            bed: () => _.sample([true, false]),
            wardrobe: () => _.sample([true, false]),
            tv: () => _.sample([true, false]),
            ac: () => _.sample([true, false]),
            desk: () => _.sample([true, false]),
            wifi: () => _.sample([true, false]),
            chair: () => _.sample([true, false]),
            family_stay: () => _.sample([true, false]),
            in_bathroom: () => _.sample([true, false]),
            out_bathroom: () => _.sample([true, false]),
            sit_toilet: () => _.sample([true, false]),
            shower: () => _.sample([true, false]),
            living_room: () => _.sample([true, false]),
            kitchen: () => _.sample([true, false]),
            clothesline: () => _.sample([true, false]),
            balcon: () => _.sample([true, false]),
            full_day_access: () => _.sample([true, false]),
            two_wheels_parking: () => _.sample([true, false]),
            four_wheels_parking: () => _.sample([true, false]),
            user_id: {
                table: 'User'
            }
        }
    }
};