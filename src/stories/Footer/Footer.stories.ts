import { Meta, StoryObj } from "@storybook/react"
import FooterComponent from "./Footer"


const meta = {
    title : 'Example/Footer',
    component: FooterComponent,
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof FooterComponent>


export default meta;
type Story = StoryObj<typeof meta>;

export const Footer : Story = {
    args: {
        user: "Thang Pham"
    },
}
export const FooterLayout : Story = { 
    // args: {
    //     user: "Thang Pham"
    // },
}