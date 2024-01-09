<template>
  <table role="table" aria-busy="false" aria-colcount="5" class="content-table">
    <thead role="rowgroup" class="content-table-head">
      <tr role="row" class="">
        <th
          v-for="(column, index) in props.columns"
          :key="index"
          role="columnheader"
          scope="col"
          class="content-table-header content-table-cell text-center"
        >
          {{ column.text }}
        </th>
      </tr>
    </thead>
    <tbody role="rowgroup">
      <tr
        v-for="(row, index) in props.data"
        :key="index"
        role="row"
        class="content-table-row"
      >
        <td
          v-for="(value, key, index) in row"
          :key="key"
          :data-label="props.columns[index].text"
          role="cell"
          class="content-table-cell text-graphic"
          :class="{
            'cursor-pointer hover:text-red-800': props.columns[index].canCopy,
          }"
          @click="
            props.columns[index].canCopy && !isMedia(value) && copy(value)
          "
        >
          <img v-if="isMedia(value)" :src="value.url" :alt="value.alt" />

          <NuxtLink
            v-else-if="props.columns[index].isLink"
            :to="value"
            target="_blank"
            class="content-table-content"
          >
            <slot :name="key + '-icon'" />
          </NuxtLink>

          <span v-else class="content-table-content">
            <slot :name="key + '-icon'" />
            {{ value }}
          </span>

          <button
            v-if="props.columns[index].canCopy"
            @click.stop="!isMedia(value) && copy(value)"
            class="p-2 ml-auto"
          >
            <Icon
              name="copy"
              class="cursor-pointer w-5 h-5 inline-block"
              aria-label="Copy to clipboard"
            />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
// TODO: make column settings or smth
type Header = {
  text: string;
  isLink: boolean;
  canCopy: boolean;
  isImage: boolean;
};

type Media = {
  url: string;
  alt: string;
};

const props = defineProps<{
  columns: Header[];
  data: Record<string, string | Media>[];
}>();

function copy(value: string) {
  navigator.clipboard.writeText(value);
}

function isMedia(value: string | Media): value is Media {
  return typeof value === "object";
}
</script>

<style scoped>
.content-table {
  border-collapse: collapse;
  width: 100%;
  vertical-align: top;
  border: 1px solid #4f4c4c;
}

.content-table-head {
  background-color: #e1e1e1;
}

@media screen and (max-width: 990px) {
  .content-table-head {
    display: none;
  }

  .content-table-row {
    display: block;
  }

  .content-table-cell {
    display: flex;
    align-items: center;
    border-bottom: none !important;
  }

  .content-table-cell + .content-table-cell {
    border-top: 1px solid #4f4c4c;
    border-left: none !important;
  }

  .content-table-cell:before {
    content: attr(data-label);
    float: left;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    flex: 0 0 125px;
    text-align: left;
  }
}

.content-table-header {
  padding: 0.5rem 1rem;
  font-weight: bold;
  border-bottom: 1px solid #4f4c4c;
}

.content-table-row + .content-table-row {
  border-top: 1px solid #4f4c4c;
}

.content-table-row:nth-child(even) {
  background-color: #e1e1e1;
}

.content-table-cell {
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #4f4c4c;
}

.content-table-cell + .content-table-cell {
  border-left: 1px solid #4f4c4c;
}

.content-table-content {
  word-break: break-all;
}
</style>
