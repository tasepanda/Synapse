"use client";

import { useState, ChangeEvent } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Field, Label, Switch } from "@headlessui/react";

export default function Example() {
  const [agreed, setAgreed] = useState(false);
  const [position, setAge] = useState("");
  const [roles, setRoles] = useState<string[]>([]); // 役割を管理するstate

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const handleRoleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const role = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setRoles([...roles, role]); // 選択された役割を追加
    } else {
      setRoles(roles.filter((r) => r !== role)); // 選択解除された役割を削除
    }
  };

  return (
    // <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="isolate bg-[url('https://sozaino.site/wp-content/uploads/2023/10/okumono-art10.png')] bg-cover bg-no-repeat px-6 py-24 sm:py-32 lg:px-8">
      {/* コンテンツ */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          登録画面
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">Synapseへようこそ!</p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              苗字
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              名前
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="Department"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              部署・室
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="department"
                    name="department"
                    autoComplete="department"
                    aria-label="department"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>開発・製造IT推進部</option>
                    <option>ビジネスIT推進部</option>
                    <option>情報トラスト・セキュリティ</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
                <input
                  id="division"
                  name="division"
                  type="text"
                  placeholder="⚪︎⚪︎室"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            {" "}
            {/* 年齢層の選択式 */}
            <label
              htmlFor="age"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              職位
            </label>
            <div className="mt-2.5">
              <select
                id="position"
                name="position"
                value={position}
                onChange={handleAgeChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              >
                <option value="">選択してください</option>
                <option value="指導職以下">指導職以下</option>
                <option value="主任">主任</option>
                <option value="主幹">主幹</option>
                <option value="主査">主査</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-2">
            {" "}
            {/* 役割の複数選択 */}
            <label
              className="block text-sm/6 font-semibold text-gray-900"
              style={{ color: "black" }}
            >
              役割 (複数選択可)
            </label>
            <div
              className="mt-2.5 flex flex-col gap-2"
              style={{ color: "black" }}
            >
              {" "}
              {/* flex-colで縦に並べる */}
              <label>
                <input
                  type="checkbox"
                  value="PM"
                  checked={roles.includes("PM")}
                  onChange={handleRoleChange}
                  className="mr-2" // checkboxとlabelの間にスペース
                />
                PM
              </label>
              <label>
                <input
                  type="checkbox"
                  value="運用維持"
                  checked={roles.includes("運用維持")}
                  onChange={handleRoleChange}
                  className="mr-2"
                />
                運用維持
              </label>
              <label>
                <input
                  type="checkbox"
                  value="企画"
                  checked={roles.includes("企画")}
                  onChange={handleRoleChange}
                  className="mr-2"
                />
                企画
              </label>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              領域
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="problem"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              課題
            </label>
            <div className="mt-2.5">
              <textarea
                id="problem"
                name="problem"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                defaultValue={""}
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-checked:bg-indigo-600"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="size-4 transform rounded-full bg-white ring-1 shadow-xs ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm/6 text-gray-600">
              By selecting this, you agree to our{" "}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            登録
          </button>
        </div>
      </form>
    </div>
  );
}
