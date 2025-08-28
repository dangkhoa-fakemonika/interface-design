function LoginPage() {
    return (
        <div className={"w-screen flex items-center justify-center"}>
            <div className={"w-full max-w-sm backdrop-blur-xl bg-background-pop/20 rounded-md p-8"}>
                <h2 className={"text-heading-1 font-bold mb-6 text-center"}>Log In</h2>

                <form className={"space-y-4"}>
                    <div>
                        <label className={"block mb-1 text-label font-medium"}>Email address:</label>
                        <input
                            type={"email"}
                            placeholder={"Email address"}
                            className={"w-full border rounded-md px-3 py-2 text-normal-text font-medium focus:outline-none focus:ring-2 focus:ring-background-pop"}
                        />
                    </div>

                    <div>
                        <label className={"block mb-1 text-label font-medium"}>Password:</label>
                        <input
                            type={"password"}
                            placeholder={"Password"}
                            className={"w-full border rounded-md px-3 py-2 text-normal-text font-medium focus:outline-none focus:ring-2 focus:ring-background-pop"}
                        />
                    </div>

                    <button
                        type={"submit"}
                        className={"w-full bg-background-pop py-2 rounded-md text-label font-medium cursor-pointer hover:bg-background-pop/80 transition"}
                    >
                        Log In
                    </button>
                </form>

                <div className={"mt-6 text-center"}>
                    <p className={"text-label font-medium"}>Forget your Password ?</p>
                    <p className={"text-normal-text  "}>
                        no worries, <span className={"hover:underline cursor-pointer"}>click here</span> to reset your password.
                    </p>
                </div>


                <div className={"mt-8 text-center"}>
                    <p className={"text-label font-semibold mb-2"}>New user?</p>
                    <button
                        onClick={() => navigate("/register")}
                        className={"w-full border border-background-pop py-2 rounded-md text-label font-medium cursor-pointer hover:bg-background-pop/80 transition"}
                    >
                        Create New Account
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;