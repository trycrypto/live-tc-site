/* This example requires Tailwind CSS v2.0+ */
import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
} from "@heroicons/react/outline";

const supportLinks = [
  {
    name: "Sales",
    href: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    icon: PhoneIcon,
  },
  {
    name: "Technical Support",
    href: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    icon: SupportIcon,
  },
  {
    name: "Media Inquiries",
    href: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    icon: NewspaperIcon,
  },
];

export default function Example() {
  return (
    <div>
      {/* Header */}
      <div className="relative pb-16 ">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-gray-100 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-screen-2xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-12">
          <h1 className="text-5xl font-bold tracking-tight text-black md:text-5xl lg:text-6xl">
            About us
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames. Dui, amet, nec sit pulvinar.
          </p>
        </div>
      </div>
    </div>
  );
}
