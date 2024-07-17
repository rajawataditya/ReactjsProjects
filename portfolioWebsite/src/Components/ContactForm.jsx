import { Card, Input, Button, Typography } from "@material-tailwind/react";

function ContactForm() {
  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto py-10 flex  justify-center md:px-20 bg-white    dark:bg-gray-800  text-gray-900 dark:text-white "
    >
      <Card
        color="transparent"
        shadow={false}
        className="border-solid border-2 p-4 rounded-md  dark:text-white"
      >
        <Typography variant="h4" color="blue-gray">
          Contact Me
        </Typography>
        <Typography color="gray" className="mt-1 font-normal  dark:text-white">
          Nice to meet you! Enter your details for any Query.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          action="https://getform.io/f/anlexpea"
          method="POST"
          typeof="submit"
        >
          <div className="mb-1 flex flex-col gap-6 text-gray-800">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3  dark:text-white"
            >
              Your Name
            </Typography>
            <Input
              name="name"
              required={true}
              size="lg"
              placeholder="name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
            />

            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3  dark:text-white"
            >
              Your Email
            </Typography>
            <Input
              name="email"
              required={true}
              size="lg"
              placeholder="name@email.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3  dark:text-white"
            >
              Enter Your Query
            </Typography>
            <Input
              name="query"
              required={true}
              type="text"
              size="lg"
              placeholder="Enter your Message..."
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            />
          </div>

          <Button
            type="submit"
            className="mt-6 bg-sky-600 text-cyan-50 hover:bg-sky-700 w-full"
          >
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default ContactForm;
