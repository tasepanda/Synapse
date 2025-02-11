const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Shohei Ohtani",
    role: "Baseball Player",
    imageUrl:
      "https://www.jsports.co.jp/img/web/page/baseball/mlb/player/shoheiohtani_2024.jpg",
  },
  {
    name: "Masamichi Hattori",
    role: "TMC Player",
    imageUrl:
      "https://www.jsports.co.jp/img/web/page/baseball/mlb/player/shoheiohtani_2024.jpg",
  },
];

import Image from "next/image";

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 ld:px-8 text-center">
        {/* text-centerを追加 */}
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl text-center">
            今週のマッチングが決まりました！
          </h2>
          <p className="mt-6 mb-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-4 sm:grid-cols-2 sm:gap-y-16 xl:col-span-4"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="size-64 rounded-full"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
