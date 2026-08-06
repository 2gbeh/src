# LRU Cache

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

An LRU (Least Recently Used) Cache evicts the least recently accessed item when it hits capacity.

Typically implemented with a Map, which preserves insertion order for O(1).

## Setup

```sh
# Dependencies
node -v
npm -v
npm install -g typescript ts-node

# Directory
mkdir lru-cache && cd lru-cache
touch app.ts

# Execute
ts-node app
```

## Clarifications

- What other operations should be included asides Read & Write?
- Should the size of the Cache be mutable?

## Notes

#### Application areas

It works well when recently accessed data is likely to be accessed again (temporal locality), making it a simple and effective cache eviction strategy.

- Applications of an LRU (Least Recently Used) Cache:
- Web browsers – Cache recently visited pages, images, and scripts.
- Operating systems – Manage memory pages and file system caches.
- Databases – Cache frequently accessed queries, indexes, or data blocks.
- CPU caches – Approximate LRU policies help keep recently used data in cache.
- CDNs/Web servers – Store recently requested content for faster delivery.
- Key-value stores – Systems like Redis use LRU eviction to manage memory.
- Mobile apps – Cache images, API responses, and user data.
- Machine learning – Cache preprocessed data or model inference results.
- Compilers/IDEs – Cache parsed files, symbols, and compilation artifacts.

```sh
- Singly-linked list (SLL) x Doubly-linked list (DLL)
- - Why use Map
- Time complexity
- - 0(1) x 0(n)
- \_capacity, \_promote, read, write | size, LRU, MRU
- When reading MRU, any need to promote?
```

## Cheatsheet

#### Map Implementation

```ts
class LRUCache<K, V> {
  private capacity: number;
  private cache: Map<K, V>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map<K, V>();
  }

  get(key: K): V | undefined {
    if (!this.cache.has(key)) return undefined;

    const value = this.cache.get(key)!;
    // Move to most recently used position
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // Evict least recently used (first key in Map)
      const lruKey = this.cache.keys().next().value as K;
      this.cache.delete(lruKey);
    }
    this.cache.set(key, value);
  }

  has(key: K): boolean {
    return this.cache.has(key);
  }

  get size(): number {
    return this.cache.size;
  }
}

// Example usage
const cache = new LRUCache<string, number>(3);
cache.put("a", 1);
cache.put("b", 2);
cache.put("c", 3);
cache.get("a"); // "a" becomes most recently used
cache.put("d", 4); // evicts "b" (least recently used)
console.log(cache.has("b")); // false
```

#### DLL Implementation

```ts
class DLLNode<K, V> {
  key: K;
  value: V;
  prev: DLLNode<K, V> | null = null;
  next: DLLNode<K, V> | null = null;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }
}

class LRUCache<K, V> {
  private capacity: number;
  private map: Map<K, DLLNode<K, V>>;
  private head: DLLNode<K, V>; // most recently used side (dummy)
  private tail: DLLNode<K, V>; // least recently used side (dummy)

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map<K, DLLNode<K, V>>();

    // Dummy head/tail to avoid null checks
    this.head = new DLLNode<K, V>(null as unknown as K, null as unknown as V);
    this.tail = new DLLNode<K, V>(null as unknown as K, null as unknown as V);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  private removeNode(node: DLLNode<K, V>): void {
    const prev = node.prev!;
    const next = node.next!;
    prev.next = next;
    next.prev = prev;
  }

  private addToFront(node: DLLNode<K, V>): void {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next!.prev = node;
    this.head.next = node;
  }

  get(key: K): V | undefined {
    const node = this.map.get(key);
    if (!node) return undefined;

    this.removeNode(node);
    this.addToFront(node);
    return node.value;
  }

  put(key: K, value: V): void {
    const existing = this.map.get(key);
    if (existing) {
      existing.value = value;
      this.removeNode(existing);
      this.addToFront(existing);
      return;
    }

    if (this.map.size >= this.capacity) {
      const lru = this.tail.prev!;
      this.removeNode(lru);
      this.map.delete(lru.key);
    }

    const newNode = new DLLNode(key, value);
    this.addToFront(newNode);
    this.map.set(key, newNode);
  }

  has(key: K): boolean {
    return this.map.has(key);
  }

  get size(): number {
    return this.map.size;
  }
}

// Example usage
const cache = new LRUCache<string, number>(3);
cache.put("a", 1);
cache.put("b", 2);
cache.put("c", 3);
cache.get("a"); // "a" becomes most recently used
cache.put("d", 4); // evicts "b" (least recently used)
console.log(cache.has("b")); // false
```
