<template>
  <div class="mt-3 ml-3 mr-3">
    <div class="text-left">
      <p class="text-h5" style="font-weight: bold; margin-top: 40px">
        <span class="title">▍</span>プリミティブ型
      </p>
      <hr style="margin-bottom: 20px" />
      <p>
        プリミティブとは「原始的な」という意味で、ここでは最も基本的な値を表す用語として使用されている。<br />
        主に「文字列、数値、真偽値、BigInt、null、undefined」である。
      </p>
      <p class="text-h5" style="font-weight: bold; margin-top: 40px">
        <span class="title">▍</span>数値リテラル
      </p>
      <hr style="margin-bottom: 20px" />
      <p>
        リテラルとは、何らかの値を生み出すための式のことである。<br />
        ここでは、2進数、8進数、16進数のリテラルと、極端に大きい数字、小さい数字を紹介する。
      </p>
      <v-icon class="mb-1">mdi-folder-file-outline</v-icon
      ><span class="filename">1_2.vue</span>
      <pre style="font-size: 14px">
const binary = 0b1010; <span class="comment">// 2進数リテラル</span>
const octal = 0o755; <span class="comment">// 8進数リテラル</span>
const hexadecimal = 0xff; <span class="comment">// 16進数リテラル</span>
console.log(binary, octal, hexadecimal); <span class="comment">// 10 493 255</span>

const big = 1e8; <span class="comment">// 1の後ろに0が8個</span>
const small = 4e-5; <span class="comment">// 4の前に0が5個</span>
console.log(big, small); <span class="comment">// 100000000 0.00004</span>

const million = 1_000_000; <span class="comment">// この書き方も許される</span>
console.log(million); <span class="comment">// 1000000</span></pre>
      <p class="text-h5" style="font-weight: bold; margin-top: 40px">
        <span class="title">▍</span>任意精度整数（BigInt）
      </p>
      <hr style="margin-bottom: 20px" />
      <p>
        BigIntとは、ES2020になってつかされた数値型である。<br />
        どれだけ大きな値でも、誤差なく表すことができる。一方で、計算速度はnumberの方が速い。
      </p>
      <v-icon class="mb-1">mdi-folder-file-outline</v-icon
      ><span class="filename">1_2.vue</span>
      <pre style="font-size: 14px">
const bignum: bigint = (123n + 456n) * 2n; <span class="comment">// BigIntリテラル</span>
console.log(bignum); <span class="comment">// 1158n</span>

const result = 5n / 2n; <span class="comment">// 丸め処理がされる</span>
console.log(result); <span class="comment">// 2n</span></pre>
      <p class="text-h5" style="font-weight: bold; margin-top: 40px">
        <span class="title">▍</span>文字列型とテンプレートリテラル
      </p>
      <hr style="margin-bottom: 20px" />
      <p>
        クオートで囲む書き方が文字列リテラル（文字を認識させるための書き方）である。<br />
        テンプレートリテラルは、バッククオートで囲むことで改行をしたり、特定の文字列が使用可能。${式}という構文を用いて変数が使用できる。
      </p>
      <v-icon class="mb-1">mdi-folder-file-outline</v-icon
      ><span class="filename">1_2.vue</span>
      <pre style="font-size: 14px">
const str1: string = 'Hello'; <span class="comment">// 文字列リテラル</span>
const str2: string = 'world!';
console.log(str1 + ',' + str2); <span class="comment">// Hello,world!</span>

const message: string = `Hello
world!`;
console.log(message);

console.log(`${str1}, ${str2}`); <span class="comment">// Hello, world!</span></pre>
      <p class="text-h5" style="font-weight: bold; margin-top: 40px">
        <span class="title">▍</span>真偽値リテラル、null、undefined
      </p>
      <hr style="margin-bottom: 20px" />
      <p>
        nullとundefinedがあるが、TypeScriptではundefinedの方がサポートが手厚い。<br />
      </p>
      <v-icon class="mb-1">mdi-f-fiolderle-outline</v-icon
      ><span class="filename">1_2.vue</span>
      <pre style="font-size: 14px">const no: boolean = false;
const yes: boolean = true;
console.log(yes, no); <span class="comment">// true false</span>

const val1 = null;
const val2 = undefined;
console.log(val1, val2); <span class="comment">// null undefined</span>

const n: null = null;
const u: undefined = undefined;
console.log(n, u); <span class="comment">// null undefined</span></pre>
      <p class="text-h5" style="font-weight: bold; margin-top: 40px">
        <span class="title">▍</span>プリミティブ同士の変換
      </p>
      <hr style="margin-bottom: 20px" />
      <p>
        nullとundefinedがあるが、TypeScriptではundefinedの方がサポートが手厚い。<br />
      </p>
      <v-icon class="mb-1">mdi-f-fiolderle-outline</v-icon
      ><span class="filename">1_2.vue</span>
      <pre style="font-size: 14px">const no: boolean = false;
const yes: boolean = true;
console.log(yes, no); <span class="comment">// true false</span>

const val1 = null;
const val2 = undefined;
console.log(val1, val2); <span class="comment">// null undefined</span>

const n: null = null;
const u: undefined = undefined;
console.log(n, u); <span class="comment">// null undefined</span></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
const value: number = 3 / 2;
console.log(value); // 1.5

const binary = 0b1010; // 2進数リテラル
const octal = 0o755; // 8進数リテラル
const hexadecimal = 0xff; // 16進数リテラル
console.log(binary, octal, hexadecimal); // 10 493 255

const big = 1e8; // 1の後ろに0が8個
const small = 4e-5; // 4の前に0が5個
console.log(big, small); // 100000000 0.00004

const million = 1_000_000; // この書き方も許される
console.log(million); // 1000000

const bignum: bigint = (123n + 456n) * 2n; // BigIntリテラル
console.log(bignum); // 1158n

const result = 5n / 2n; // 丸め処理がされる
console.log(result); // 2n

const str1: string = 'Hello'; // 文字列リテラル
const str2: string = 'world!';
console.log(str1 + ',' + str2); // Hello,world!

const message: string = `Hello
world!`;
console.log(message);

console.log(`${str1}, ${str2}`); // Hello, world!

const no: boolean = false;
const yes: boolean = true;
console.log(yes, no); // true false

const val1 = null;
const val2 = undefined;
console.log(val1, val2); // null undefined

const n: null = null;
const u: undefined = undefined;
console.log(n, u); // null undefined
</script>
