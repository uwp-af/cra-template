import { render } from "@testing-library/react";
import TemplateExpiry from ".";

test('Component smoke test', () => {
    render(<TemplateExpiry createDate={new Date()} expiryMonths={6} />)
})