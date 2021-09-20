import { useState } from "react"

export default function Contact() {
    const [messageType, setmessageType] = useState("buyer")

    const [emailInput, setEmailInput] = useState("")
    const [phoneInput, setPhoneInput] = useState("")
    const [messageInput, setMessageInput] = useState("")

    return (
        <div className="flex flex-col items-center w-11/12 mt-12 mb-5 sm:w-3/4">
            <div className="flex items-center justify-between w-full">
                <h1 className="text-4xl font-bold">Send us a message </h1>
                <a href="tel:(703)-201-7026" className="pb-1 text-3xl font-bold transition-colors border-b-2 border-transparent text-ffp-blue hover:border-ffp-blue">(702)-201-7026</a>
            </div>


            <div className="flex flex-col items-center w-11/12">
                <h2 className="mt-10 mr-auto text-2xl font-semibold">Are you a buyer or seller?</h2>
                <div className="flex items-center justify-between w-1/4 mt-2">
                    <div className="flex items-center">
                        <input type="radio" name="drone" value="huey"
                            checked={messageType === "buyer"} onClick={() => setmessageType("buyer")} />
                        <p className="ml-2">Buyer</p>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="drone" value="huey"
                            checked={messageType === "seller"} onClick={() => setmessageType("seller")} />
                        <p className="ml-2">Seller</p>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="drone" value="huey"
                            checked={messageType === "other"} onClick={() => setmessageType("other")} />
                        <p className="ml-2">Other</p>
                    </div>
                </div>

                <h2 className="mr-auto text-2xl font-semibold mt-7">What's your email?</h2>
                <div className="flex items-center justify-between w-3/4 mt-5">
                    <input className="w-full px-2 py-1 rounded-md" type="email" placeholder="Your email" value={emailInput} onChange={(e) => { setEmailInput(e.target.value) }} />
                </div>

                <h2 className="mr-auto text-2xl font-semibold mt-7">What's your phone number?</h2>
                <div className="flex items-center justify-between w-3/4 mt-5">
                    <input className="w-full px-2 py-1 rounded-md" type="tel" placeholder="Your phone number" value={phoneInput} onChange={(e) => { setPhoneInput(e.target.value) }} />
                </div>

                <h2 className="mr-auto text-2xl font-semibold mt-7">What's your message?</h2>
                <div className="flex items-center justify-between w-3/4 mt-5">
                    <textarea className="w-full px-2 py-1 rounded-md" style={{ minHeight: "200px" }} type="text" placeholder="Your message" value={messageInput} onChange={(e) => { setMessageInput(e.target.value) }} />
                </div>

                <div className="flex justify-end w-4/5 mt-10 mb-5">
                    <button className="px-3 py-1.5 text-lg font-semibold text-white rounded-md bg-ffp-blue hover:bg-ffp-green transition-colors">Send</button>
                </div>
            </div>


            {/* </div> */}
        </div>
    )
}