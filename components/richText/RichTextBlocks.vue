<script lang="ts" setup>
import type { RichTextBlocks, RichTextBlockChild } from "./types";

import {
  RichTextBlockChildType,
  RichTextBlockFormat,
  RichTextBlockType,
} from "./types";

defineProps<{
  data?: RichTextBlocks[];
}>();

function renderList(block: RichTextBlocks) {
  let html = "";
  block.children.forEach((child) => {
    html += "<li>";
    child.children.forEach((childChild) => {
      if (childChild.type === RichTextBlockChildType.text) {
        if (childChild.bold) html += `<strong>${childChild.text}</strong>`;
        else if (childChild.italic) html += `<i>${childChild.text}</i>`;
        else if (childChild.underline) html += `<u>${childChild.text}</u>`;
        else if (childChild.strikethrough) html += `<s>${childChild.text}</s>`;
        else html += childChild.text;
      }
    });
    html += "</li>";
  });

  return html;
}

function renderText(children: RichTextBlockChild[]) {
  let html = "";
  children.forEach((childChild) => {
    if (childChild.type === RichTextBlockChildType.text) {
      if (childChild.bold) html += `<strong>${childChild.text}</strong>`;
      else if (childChild.italic) html += `<i>${childChild.text}</i>`;
      else if (childChild.underline) html += `<u>${childChild.text}</u>`;
      else if (childChild.strikethrough) html += `<s>${childChild.text}</s>`;
      else html += childChild.text;
    }
  });

  return html;
}
</script>

<template>
  <div class="prose prose-slate prose-a:text-blue-600">
    <template v-for="(block, index) in data" :key="index">
      <!-- Paragraph -->
      <p v-if="block && block.type === RichTextBlockType.paragraph">
        <template
          v-for="(child, childIndex) in block.children"
          :key="`${childIndex}-${index}`"
        >
          <strong
            v-if="child.type === RichTextBlockChildType.text && child.bold"
            >{{ child.text }}</strong
          >
          <i
            v-else-if="
              child.type === RichTextBlockChildType.text && child.italic
            "
            >{{ child.text }}</i
          >
          <u
            v-else-if="
              child.type === RichTextBlockChildType.text && child.underline
            "
            >{{ child.text }}</u
          >
          <s
            v-else-if="
              child.type === RichTextBlockChildType.text && child.strikethrough
            "
            >{{ child.text }}</s
          >
          <code
            v-else-if="child.type === RichTextBlockChildType.text && child.code"
            >{{ child.text }}</code
          >
          <a
            v-else-if="child.type === RichTextBlockChildType.link && child.url"
            :href="child.url"
            v-html="renderText(child.children)"
          />
          <template v-else-if="child.type === RichTextBlockChildType.text">
            {{ child.text }}
          </template>
        </template>
      </p>

      <!-- Lists -->
      <ul
        v-if="
          block &&
          block.type === RichTextBlockType.list &&
          block.format === RichTextBlockFormat.unordered
        "
        v-html="renderList(block)"
      />
      <ol
        v-if="
          block &&
          block.type === RichTextBlockType.list &&
          block.format === RichTextBlockFormat.ordered
        "
        v-html="renderList(block)"
      />

      <!-- Headings -->
      <h1
        v-if="
          block && block.type === RichTextBlockType.heading && block.level === 1
        "
        v-html="renderText(block.children)"
      />
      <h2
        v-if="
          block && block.type === RichTextBlockType.heading && block.level === 2
        "
        v-html="renderText(block.children)"
      />
      <h3
        v-if="
          block && block.type === RichTextBlockType.heading && block.level === 3
        "
        v-html="renderText(block.children)"
      />
      <h4
        v-if="
          block && block.type === RichTextBlockType.heading && block.level === 4
        "
        v-html="renderText(block.children)"
      />
      <h5
        v-if="
          block && block.type === RichTextBlockType.heading && block.level === 5
        "
        v-html="renderText(block.children)"
      />
      <h6
        v-if="
          block && block.type === RichTextBlockType.heading && block.level === 6
        "
        v-html="renderText(block.children)"
      />
    </template>
  </div>
</template>
