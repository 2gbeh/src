/**
 * LRU Cache
 *
 * @author Northwind AI <northwindai.org>
 * @date 2026-08-06
 */

class LRUCache<K, V> {
  private _cache = new Map<K, V>();

  constructor(private _capacity: number) {}

  get capacity() {
    return this._capacity;
  }

  private promote(key: K, value: V) {
    this._cache.delete(key);
    this._cache.set(key, value);
  }

  write(key: K, value: V) {
    if (this._cache.has(key)) {
      this.promote(key, value);
      return;
    }

    if (this._cache.size >= this._capacity) {
      const leastKey = this._cache.keys().next().value;
      this._cache.delete(leastKey!);
    }

    this._cache.set(key, value);
  }

  read(key: K) {
    const value = this._cache.get(key);

    if (value) {
      const mostKey = [...this._cache.keys()].pop();

      if (key !== mostKey) this.promote(key, value);

      return value;
    }
  }

  render() {
    console.log(this._cache);
  }
}

/**
 * TODO: Implement LRU Cache
 *
 * - Basic implementation ✅
 * - Add validation ✅
 * - Extend features ✅
 */

const cache = new LRUCache<string, string>(4);

cache.write("php", "PHP");
cache.write("ts", "TypeScript");
cache.write("py", "Python");
cache.write("cs", "C#");
cache.render();

cache.write("sol", "Solidity");
cache.write("go", "Go");
cache.render();

cache.read("sol");
cache.render();
