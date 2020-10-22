(function() {var implementors = {};
implementors["ink_env"] = [{"text":"impl RefUnwindSafe for ReturnFlags","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AccountId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Hash","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DefaultEnvironment","synthetic":true,"types":[]},{"text":"impl&lt;E, Callee, GasLimit, TransferredValue, Args, RetType&gt; RefUnwindSafe for CallBuilder&lt;E, Callee, GasLimit, TransferredValue, Args, RetType&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Callee: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;GasLimit: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;RetType: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;TransferredValue: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E, Args, R&gt; RefUnwindSafe for CallParams&lt;E, Args, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as Environment&gt;::AccountId: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as Environment&gt;::Balance: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E, CodeHash, GasLimit, Endowment, Args, R&gt; RefUnwindSafe for CreateBuilder&lt;E, CodeHash, GasLimit, Endowment, Args, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;CodeHash: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Endowment: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;GasLimit: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E, Args, R&gt; RefUnwindSafe for CreateParams&lt;E, Args, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as Environment&gt;::Balance: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as Environment&gt;::Hash: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Args&gt; RefUnwindSafe for ExecutionInput&lt;Args&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Selector","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for ReturnType&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Set&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Unset&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Head, Rest&gt; RefUnwindSafe for ArgumentList&lt;Head, Rest&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Head: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;Rest: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Argument&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ArgumentListEnd","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CallData","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChainSpec","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EmittedEvent","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for DefaultAccounts&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Environment&gt;::AccountId: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Sha2x256","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Keccak256","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Blake2x256","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Blake2x128","synthetic":true,"types":[]}];
implementors["ink_lang"] = [{"text":"impl&lt;'a, T&gt; RefUnwindSafe for EnvAccess&lt;'a, T&gt;","synthetic":true,"types":[]}];
implementors["ink_lang_ir"] = [{"text":"impl&lt;'a, C&gt; RefUnwindSafe for CallableWithSelector&lt;'a, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Config","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Constructor","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Contract","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Event","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for InkTest","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for InkTrait","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for InkTraitConstructor&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for InkTraitMessage&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for InputsIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ItemImpl","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ItemMod","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for IterConstructors&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for IterEvents&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for IterInkTraitItems&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for IterItemImpls&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for IterMessages&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Message","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Namespace","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Selector","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Storage","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CallableKind","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ImplItem","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for InkItem","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for InkTraitItem&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Item","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Receiver","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Visibility","synthetic":true,"types":[]}];
implementors["ink_metadata"] = [{"text":"impl&lt;F&gt; RefUnwindSafe for ConstructorSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Selector&gt; RefUnwindSafe for ConstructorSpecBuilder&lt;Selector&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; RefUnwindSafe for ContractSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; RefUnwindSafe for ContractSpecBuilder&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; RefUnwindSafe for EventParamSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EventParamSpecBuilder","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; RefUnwindSafe for EventSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EventSpecBuilder","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; RefUnwindSafe for MessageParamSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MessageParamSpecBuilder","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; RefUnwindSafe for MessageSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Selector, Mutates, IsPayable, Returns&gt; RefUnwindSafe for MessageSpecBuilder&lt;Selector, Mutates, IsPayable, Returns&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; RefUnwindSafe for ReturnTypeSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Selector","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; RefUnwindSafe for TypeSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for InkProject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LayoutKey","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; RefUnwindSafe for CellLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; RefUnwindSafe for HashLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HashingStrategy","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; RefUnwindSafe for ArrayLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; RefUnwindSafe for StructLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; RefUnwindSafe for FieldLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Discriminant","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; RefUnwindSafe for EnumLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; RefUnwindSafe for Layout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CryptoHasher","synthetic":true,"types":[]}];
implementors["ink_primitives"] = [{"text":"impl RefUnwindSafe for Key","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for KeyPtr","synthetic":true,"types":[]}];
implementors["ink_storage"] = [{"text":"impl&lt;T&gt; !RefUnwindSafe for Box&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !RefUnwindSafe for Vec&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !RefUnwindSafe for Lazy&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Memory&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Pack&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DynamicAllocation","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ContractPhase","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !RefUnwindSafe for BinaryHeap&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for BitStash","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Bitvec","synthetic":true,"types":[]},{"text":"impl&lt;K, V, H&nbsp;=&nbsp;Blake2x256&gt; !RefUnwindSafe for HashMap&lt;K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, N&gt; !RefUnwindSafe for SmallVec&lt;T, N&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !RefUnwindSafe for Stash&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !RefUnwindSafe for Iter&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !RefUnwindSafe for IterMut&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Reverse&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !RefUnwindSafe for PeekMut&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for BitRefMut&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for ChunkRef&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for BitsIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !RefUnwindSafe for BitsIterMut&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, H&gt; !RefUnwindSafe for Iter&lt;'a, K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, H&gt; !RefUnwindSafe for IterMut&lt;'a, K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K&gt; !RefUnwindSafe for Keys&lt;'a, K&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, H&gt; !RefUnwindSafe for Values&lt;'a, K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, H&gt; !RefUnwindSafe for ValuesMut&lt;'a, K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; !RefUnwindSafe for OccupiedEntry&lt;'a, K, V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; !RefUnwindSafe for VacantEntry&lt;'a, K, V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; !RefUnwindSafe for Entry&lt;'a, K, V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, N&gt; !RefUnwindSafe for Iter&lt;'a, T, N&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, N&gt; !RefUnwindSafe for IterMut&lt;'a, T, N&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !RefUnwindSafe for Iter&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !RefUnwindSafe for IterMut&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for VacantEntry","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Entry&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !RefUnwindSafe for Iter&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !RefUnwindSafe for IterMut&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for IndexOutOfBounds","synthetic":true,"types":[]},{"text":"impl&lt;T, N&gt; RefUnwindSafe for LazyArray&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as ArrayLength&lt;CacheCell&lt;Option&lt;StorageEntry&lt;T&gt;&gt;&gt;&gt;&gt;::ArrayType: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !RefUnwindSafe for LazyCell&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;K, V, H&gt; !RefUnwindSafe for LazyHashMap&lt;K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;V&gt; !RefUnwindSafe for LazyIndexMap&lt;V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; !RefUnwindSafe for OccupiedEntry&lt;'a, K, V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; !RefUnwindSafe for VacantEntry&lt;'a, K, V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; !RefUnwindSafe for Entry&lt;'a, K, V&gt;","synthetic":true,"types":[]}];
implementors["scale_info"] = [{"text":"impl RefUnwindSafe for MetaType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Registry","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RegistryReadOnly","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for TypeDefComposite&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Field&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Path&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for TypeDefVariant&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Variant&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Type&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for TypeDefArray&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for TypeDefTuple&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for TypeDefSequence&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PathError","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for TypeDef&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TypeDefPrimitive","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; RefUnwindSafe for TypeBuilder&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for FieldsBuilder&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for VariantsBuilder&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NoFields","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NamedFields","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for UnnamedFields","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Fields","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NoVariants","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for VariantFields","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Fieldless","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Variants","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PathNotAssigned","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PathAssigned","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MetaForm","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CompactForm","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for UntrackedSymbol&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; RefUnwindSafe for Symbol&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Interner&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()