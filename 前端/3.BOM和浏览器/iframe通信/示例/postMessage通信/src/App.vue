<script setup lang="ts">
import { ref, onMounted } from 'vue';

/**
 * 需求
 * 1. 点击按钮，将对应的文本插入到iframe中
 * 2. 将文本插入到光标中
 * 方法：postMesage
 */

const iframeSrc = "http://192.168.0.106:5500/iframe.html"

const iframeRef = ref<HTMLIFrameElement | null>(null);

const inserTo = (text: string) => {
  // iframeRef.value.contextWindow.postMessage(text, '*');
  if(!(iframeRef.value && iframeRef.value.contentWindow)) {
    return
  }

  // 获取iframe中的window对象
  const iframeWindow = iframeRef.value.contentWindow;
  // 获取iframe中的document对象
  const iframeDocument = iframeRef.value?.contentDocument;

  console.log(iframeWindow);

  iframeWindow.postMessage({
    type: 'insertText',
    text
  }, iframeSrc)
}

onMounted(() => {
  window.addEventListener('message', (e) => {
    console.log(e.data);
  })
})
</script>

<template>
  <iframe ref="iframeRef" height="400px" width="600px" :src="iframeSrc"></iframe>
  <div>
    <div>
      <p>你好</p>
      <button @click="inserTo('你好')">插入</button>
    </div>
    <div>
      <p>我好</p>
      <button @click="inserTo('我好')">插入</button>
    </div>
    <div>
      <p>大家好</p>
      <button @click="inserTo('大家好')">插入</button>
    </div>
  </div>
</template>

<style scoped>

</style>
