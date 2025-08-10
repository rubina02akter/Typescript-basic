## 🧩 Task Breakdown
-------------------------------------------
# 📘 Part 1: TypeScript Introduction & Setup
-------------------------------------------
## Task 1: TypeScript Setup

* তোমার কম্পিউটারে TypeScript ইন্সটল করো।
* একটি নতুন প্রজেক্ট ফোল্ডার তৈরি করো (ts-practice).
* তাতে tsconfig.json কনফিগার করো নিচের সেটিংস সহ:
* noEmitOnError: true
* rootDir: "./src"
* outDir: "./dist/ অন্য নাম"

## Task 2: Compilation

* src ফোল্ডারে একটি app.ts ফাইল তৈরি করো।
* কিছু টাইপ ব্যবহার করে কোড লেখো (যেমন: string, number)।
* এরপর সেটাকে compile করে dist/ বা অন্য ফোল্ডারে app.js এ পরিণত করো।

------------------------
# 📘 Part 2: Basic Types
------------------------

## Task 3: Basic Types Practice

* একটি basicTypes.ts ফাইল তৈরি করো এবং নিচের টাইপ ব্যবহার করে কিছু ভ্যারিয়েবল ডিক্লেয়ার করো:
string, number, boolean
null,  any
void function

## Task 4: Arrays & Tuples

* একটি string এর অ্যারে তৈরি করো
* একটি tuple তৈরি করো যা [number, string] টাইপের

## Task 5: Enum 

* একটি Enum তৈরি করো Roles নামে, যেখানে Admin, User, ও Guest থাকবে
এর একাধিক ভ্যালু কনসোলে প্রিন্ট করো

------------------------
# 📘 Part 3: Type System
------------------------

## Task 6: Type Inference

* এমন কিছু ভ্যারিয়েবল তৈরি করো যেগুলোর টাইপ TypeScript নিজেই বুঝে নেয় (type inference)

## Task 7: Type Annotation

* manually টাইপ ডিক্লেয়ার করো (যেমনঃ let age: number = 25;)

## Task 8: Union Types

* একটি ভ্যারিয়েবল তৈরি করো যেটা string বা number হতে পারে
* এরপর সেটা দিয়ে কিছু লজিক করো (যেমন টাইপ চেক করে কিছু return করা)

## Task 9: Type Alias

* type ID = number | string; এই টাইপ আলিয়াস ব্যবহার করে একটা ফাংশন তৈরি করো
* ফাংশনটি ID হিসেবে নাম্বার বা স্ট্রিং নেবে

## Task 10: Literal Types

* একটি ভ্যারিয়েবল তৈরি করো যা শুধুমাত্র "yes" বা "no" হতে পারে
যদি "yes" হয় তাহলে কিছু একটা কনসোলে প্রিন্ট করো


