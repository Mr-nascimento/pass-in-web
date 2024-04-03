import {faker} from '@faker-js/faker'


export const attendees = Array.from({length: 212}).map(() => {
    return {
        id: faker.number.int({min: 10500, max: 20500}),
        name: faker.person.fullName(),
        email: faker.internet.email().toLowerCase(),
        createAt: faker.date.recent({days: 30}),
        checkedInAt: faker.date.recent({days: 10})
    }
})