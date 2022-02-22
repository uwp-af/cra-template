// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => {
    return {
        Navigate: () => {return <span></span>},
        Link: () => {return <span></span>},
        Outlet: () => {return <span></span>},
        useNavigate: () => {},
        useLocation: () => {return {}}
    }
})

jest.mock('reactfire', () => {
    return {
        useAuth: () => {},
        useUser: () => {return {data: {email: "matt@test.com"}}},
        useSigninCheck: () => {return {data: true, status: "success"}}
    }
})