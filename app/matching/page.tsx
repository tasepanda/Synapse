const people = [
  {
    name: "高瀬 圭祐",
    role: "制御ソフト管理G",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "服部 将道",
    role: "電技構造改革G",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "高田 光太",
    role: "モダナイズG",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "小島 和輝",
    role: "修行派遣がんばってねG",
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
          マッチング成功しました！
        </h2>
        <p className="mt-6 mb-6 text-lg/8 text-gray-600">
          あなたのプロフィールから相性があう4人を導き出しました.
          <br></br>
          ここから合コンを設定して、おしゃべりしましょう♪
        </p>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-4 sm:grid-cols-2 sm:gap-y-16 xl:col-span-4"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                {/* <img
                  alt=""
                  src={person.imageUrl}
                  className="size-64 rounded-full"
                /> */}
                <Image
                  className="rounded-full"
                  src={person.imageUrl}
                  alt="person face"
                  width={256}
                  height={256}
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
