<template>
  <div class="mt-3 ml-3 mr-3">
    <div class="text-left">
      <p class="text-h5" style="font-weight: bold">
        <span class="title">▍</span>基本的な文法・型
      </p>
      <hr />
      <p>Firebaseのjsonデータを削除する。</p>
      <v-icon class="mb-1">mdi-folder-file-outline</v-icon
      ><span class="filename">test.html</span>
      <pre style="font-size: 14px">&lt;v-table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th class=&quot;text-left&quot;&gt;Name&lt;/th&gt;
      &lt;th class=&quot;text-left&quot;&gt;Age&lt;/th&gt;
      &lt;th class=&quot;text-left&quot;&gt;Tel&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    <span class=comment>&lt;!--keyはデータを認識する一意のもの。indexだと順序が変になる可能性がある。--&gt;</span>
    &lt;tr v-for=&quot;(item, key) in data.fire_data&quot; v-bind:key=&quot;key&quot;&gt;
      &lt;td class=&quot;text-left&quot;&gt;
        &lt;v-btn
          density=&quot;compact&quot;
          icon=&quot;mdi-delete&quot;
          class=&quot;mr-2 mb-1&quot;
          v-on:click=&quot;delData(key)&quot;
        &gt;&lt;/v-btn
        &gt;｛｛ item.name ｝｝
      &lt;/td&gt;
      &lt;td class=&quot;text-left&quot;&gt;｛｛ item.age ｝｝&lt;/td&gt;
      &lt;td class=&quot;text-left&quot;&gt;｛｛ item.tel ｝｝&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/v-table&gt;</pre>
    </div>
  </div>
</template>

<script setup></script>
