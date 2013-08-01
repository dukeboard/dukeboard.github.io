(function () {
  'use strict';
  var _f = {
    f0: function () {
      return new Kotlin.ArrayList(0);
    },
    f1: function (f, x, y) {
      var xr = f(x);
      var yr = f(y);
      return xr.compareTo(yr);
    },
    f2: function () {
      return new Kotlin.ArrayList(0);
    },
    f3: function (f, x, y) {
      var xr = f(x);
      var yr = f(y);
      return xr.compareTo(yr);
    },
    f4: function () {
      return new Kotlin.ArrayList(0);
    },
    f5: function (f, x, y) {
      var xr = f(x);
      var yr = f(y);
      return xr.compareTo(yr);
    },
    f6: function (handler, e) {
      if (Kotlin.isType(e, MouseEvent)) {
        handler(e);
      }
    },
    f7: function (predicate, it) {
      return !predicate(it);
    },
    f8: function (it) {
      if (it == null)
        throw new Kotlin.IllegalArgumentException('null element in iterator ' + this.toString());
      else
        return it;
    },
    f9: function () {
      return new Kotlin.ArrayList(0);
    },
    fa: function (f, x, y) {
      var xr = f(x);
      var yr = f(y);
      return xr.compareTo(yr);
    },
    fb: function () {
      return new Kotlin.ArrayList(0);
    },
    fc: function (f, x, y) {
      var xr = f(x);
      var yr = f(y);
      return xr.compareTo(yr);
    },
    fd: function () {
      return new Kotlin.ArrayList(0);
    },
    fe: function (f, x, y) {
      var xr = f(x);
      var yr = f(y);
      return xr.compareTo(yr);
    },
    ff: function () {
      return new Kotlin.ArrayList(0);
    },
    fg: function (f, x, y) {
      var xr = f(x);
      var yr = f(y);
      return xr.compareTo(yr);
    },
    fh: function () {
      return new Kotlin.ArrayList(0);
    },
    fi: function (f, x, y) {
      var xr = f(x);
      var yr = f(y);
      return xr.compareTo(yr);
    },
    fj: function () {
      return new Kotlin.ArrayList(0);
    },
    fk: function (f, x, y) {
      var xr = f(x);
      var yr = f(y);
      return xr.compareTo(yr);
    },
    fl: function (block) {
      return !block();
    },
    fm: function (it) {
      return it.nodeType === Node.ELEMENT_NODE;
    },
    fn: function (it) {
      return it;
    },
    fo: function (name, it) {
      return it.nodeType === Node.ELEMENT_NODE && Kotlin.equals(it.nodeName, name);
    },
    fp: function (it) {
      return it;
    },
    fq: function (selector, it) {
      return _.kotlin.dom.hasClass(it, selector.substring(1));
    },
    fr: function (selector, it) {
      return _.kotlin.dom.hasClass(it, selector.substring(1));
    },
    fs: function () {
      return new Kotlin.ArrayList(0);
    },
    ft: function (f, x, y) {
      var xr = f(x);
      var yr = f(y);
      return xr.compareTo(yr);
    },
    fu: function () {
      return new Kotlin.ArrayList(0);
    },
    fv: function (f, x, y) {
      var xr = f(x);
      var yr = f(y);
      return xr.compareTo(yr);
    }
  }
  , classes = function () {
    var c0 = Kotlin.createTrait({
    })
    , c3 = Kotlin.createTrait({
    })
    , c1 = Kotlin.createTrait(c3, {
    })
    , c7 = Kotlin.createTrait({
    })
    , c2 = Kotlin.createTrait(c7, {
    })
    , c4 = Kotlin.createTrait({
      get_internal_eContainer: function () {
        return this.$internal_eContainer;
      },
      set_internal_eContainer: function (tmp$0) {
        this.$internal_eContainer = tmp$0;
      },
      get_internal_unsetCmd: function () {
        return this.$internal_unsetCmd;
      },
      set_internal_unsetCmd: function (tmp$0) {
        this.$internal_unsetCmd = tmp$0;
      },
      eContainer: function () {
        return this.get_internal_eContainer();
      },
      get_internal_containmentRefName: function () {
        return this.$internal_containmentRefName;
      },
      set_internal_containmentRefName: function (tmp$0) {
        this.$internal_containmentRefName = tmp$0;
      },
      get_internal_readOnlyElem: function () {
        return this.$internal_readOnlyElem;
      },
      set_internal_readOnlyElem: function (tmp$0) {
        this.$internal_readOnlyElem = tmp$0;
      },
      get_internal_recursive_readOnlyElem: function () {
        return this.$internal_recursive_readOnlyElem;
      },
      set_internal_recursive_readOnlyElem: function (tmp$0) {
        this.$internal_recursive_readOnlyElem = tmp$0;
      },
      setInternalReadOnly: function () {
        this.set_internal_readOnlyElem(true);
      },
      getRefInParent: function () {
        return this.get_internal_containmentRefName();
      },
      isReadOnly: function () {
        return this.get_internal_readOnlyElem();
      },
      isRecursiveReadOnly: function () {
        return this.get_internal_recursive_readOnlyElem();
      },
      setEContainer: function (container, unsetCmd, refNameInParent) {
        if (this.get_internal_readOnlyElem()) {
          return;
        }
        var tempUnsetCmd = this.get_internal_unsetCmd();
        this.set_internal_unsetCmd(null);
        if (tempUnsetCmd != null) {
          tempUnsetCmd.run();
        }
        this.set_internal_eContainer(container);
        this.set_internal_unsetCmd(unsetCmd);
        this.set_internal_containmentRefName(refNameInParent);
      },
      get_internal_modelElementListeners: function () {
        return this.$internal_modelElementListeners;
      },
      set_internal_modelElementListeners: function (tmp$0) {
        this.$internal_modelElementListeners = tmp$0;
      },
      fireModelEvent: function (evt) {
        if (this.get_internal_modelElementListeners() != null) {
          var tmp$0;
          {
            var tmp$1 = ((tmp$0 = this.get_internal_modelElementListeners()) != null ? tmp$0 : Kotlin.throwNPE()).iterator();
            while (tmp$1.hasNext()) {
              var lst = tmp$1.next();
              lst.elementChanged(evt);
            }
          }
        }
        this.fireModelEventOnTree(evt);
      },
      addModelElementListener: function (lst) {
        if (this.get_internal_modelElementListeners() == null) {
          this.set_internal_modelElementListeners(new Kotlin.ArrayList(0));
        }
        var tmp$0;
        ((tmp$0 = this.get_internal_modelElementListeners()) != null ? tmp$0 : Kotlin.throwNPE()).add(lst);
      },
      removeModelElementListener: function (lst) {
        if (this.get_internal_modelElementListeners() != null) {
          var tmp$0, tmp$1;
          ((tmp$0 = this.get_internal_modelElementListeners()) != null ? tmp$0 : Kotlin.throwNPE()).remove(lst);
          if (((tmp$1 = this.get_internal_modelElementListeners()) != null ? tmp$1 : Kotlin.throwNPE()).isEmpty()) {
            this.set_internal_modelElementListeners(null);
          }
        }
      },
      removeAllModelElementListeners: function () {
        if (this.get_internal_modelElementListeners() != null) {
          var tmp$0;
          ((tmp$0 = this.get_internal_modelElementListeners()) != null ? tmp$0 : Kotlin.throwNPE()).clear();
          this.set_internal_modelElementListeners(null);
        }
      },
      get_internal_modelTreeListeners: function () {
        return this.$internal_modelTreeListeners;
      },
      set_internal_modelTreeListeners: function (tmp$0) {
        this.$internal_modelTreeListeners = tmp$0;
      },
      fireModelEventOnTree: function (evt) {
        if (this.get_internal_modelTreeListeners() != null) {
          var tmp$0;
          {
            var tmp$1 = ((tmp$0 = this.get_internal_modelTreeListeners()) != null ? tmp$0 : Kotlin.throwNPE()).iterator();
            while (tmp$1.hasNext()) {
              var lst = tmp$1.next();
              lst.elementChanged(evt);
            }
          }
        }
        if (this.eContainer() != null) {
          this.eContainer().fireModelEventOnTree(evt);
        }
      },
      addModelTreeListener: function (lst) {
        if (this.get_internal_modelTreeListeners() == null) {
          this.set_internal_modelTreeListeners(new Kotlin.ArrayList(0));
        }
        var tmp$0;
        ((tmp$0 = this.get_internal_modelTreeListeners()) != null ? tmp$0 : Kotlin.throwNPE()).add(lst);
      },
      removeModelTreeListener: function (lst) {
        if (this.get_internal_modelTreeListeners() != null) {
          var tmp$0, tmp$1;
          ((tmp$0 = this.get_internal_modelTreeListeners()) != null ? tmp$0 : Kotlin.throwNPE()).remove(lst);
          if (((tmp$1 = this.get_internal_modelTreeListeners()) != null ? tmp$1 : Kotlin.throwNPE()).isEmpty()) {
            this.set_internal_modelTreeListeners(null);
          }
        }
      },
      removeAllModelTreeListeners: function () {
        if (this.get_internal_modelTreeListeners() != null) {
          var tmp$0;
          ((tmp$0 = this.get_internal_modelTreeListeners()) != null ? tmp$0 : Kotlin.throwNPE()).clear();
          this.set_internal_modelElementListeners(null);
        }
      }
    })
    , c5 = Kotlin.createTrait({
    })
    , c6 = Kotlin.createTrait(c5, {
    })
    , c8 = Kotlin.createTrait({
    })
    , c9 = Kotlin.createTrait({
    })
    , ca = Kotlin.createTrait(c3, {
    })
    , cb = Kotlin.createTrait({
    })
    , cc = Kotlin.createTrait(c3, {
    })
    , cd = Kotlin.createTrait({
    })
    , ce = Kotlin.createTrait({
      handleEvent: function (arg1) {
        noImpl;
      }
    })
    , cf = Kotlin.createClass(Kotlin.Iterator, {
      initialize: function () {
        this.$state = _.kotlin.support.State.get_NotReady();
        this.$nextValue = null;
      },
      get_state: function () {
        return this.$state;
      },
      set_state: function (tmp$0) {
        this.$state = tmp$0;
      },
      get_nextValue: function () {
        return this.$nextValue;
      },
      set_nextValue: function (tmp$0) {
        this.$nextValue = tmp$0;
      },
      hasNext: function () {
        _.kotlin.require(this.get_state() !== _.kotlin.support.State.get_Failed(), 'Failed requirement');
        var tmp$0 = this.get_state(), tmp$1;
        if (tmp$0 === _.kotlin.support.State.get_Done())
          tmp$1 = false;
        else if (tmp$0 === _.kotlin.support.State.get_Ready())
          tmp$1 = true;
        else
          tmp$1 = this.tryToComputeNext();
        return tmp$1;
      },
      next: function () {
        if (!this.hasNext())
          throw new Kotlin.NoSuchElementException();
        this.set_state(_.kotlin.support.State.get_NotReady());
        return this.get_nextValue();
      },
      peek: function () {
        if (!this.hasNext())
          throw new Kotlin.NoSuchElementException();
        return this.get_nextValue();
      },
      tryToComputeNext: function () {
        this.set_state(_.kotlin.support.State.get_Failed());
        this.computeNext();
        return this.get_state() === _.kotlin.support.State.get_Ready();
      },
      setNext: function (value) {
        this.set_nextValue(value);
        this.set_state(_.kotlin.support.State.get_Ready());
      },
      done: function () {
        this.set_state(_.kotlin.support.State.get_Done());
      }
    })
    , cg = Kotlin.createTrait({
    });
    return {c0: c0, c3: c3, c1: c1, c7: c7, c2: c2, c4: c4, c5: c5, c6: c6, c8: c8, c9: c9, ca: ca, cb: cb, cc: cc, cd: cd, ce: ce, cf: cf, cg: cg};
  }()
  , _ = {
    java: Kotlin.definePackage({
      io: Kotlin.definePackage({
        ByteArrayInputStream: Kotlin.createClass(classes.c0, {
          initialize: function (inputBytes) {
            this.$inputBytes = inputBytes;
          },
          get_inputBytes: function () {
            return this.$inputBytes;
          },
          readBytes: function () {
            return this.get_inputBytes();
          }
        }),
        InputStream: classes.c0,
        OutputStream: Kotlin.createClass({
          initialize: function () {
            this.$result = '';
          },
          flush: function () {
          },
          close: function () {
          },
          get_result: function () {
            return this.$result;
          },
          set_result: function (tmp$0) {
            this.$result = tmp$0;
          }
        }),
        PrintStream: Kotlin.createClass({
          initialize: function (oo) {
            this.$oo = oo;
            this.$result = '';
          },
          get_oo: function () {
            return this.$oo;
          },
          get_result: function () {
            return this.$result;
          },
          set_result: function (tmp$0) {
            this.$result = tmp$0;
          },
          println: function () {
            this.set_result(this.get_result() + '\n');
          },
          print: function (s) {
            this.set_result(this.get_result() + s);
          },
          println_0: function (s) {
            this.print(s);
            this.println();
          },
          print_0: function (s) {
            this.set_result(this.get_result() + s);
          },
          print_1: function (s) {
            this.set_result(this.get_result() + s);
          },
          print_2: function (s) {
            if (s) {
              this.set_result(this.get_result() + 'true');
            }
             else {
              this.set_result(this.get_result() + 'false');
            }
          },
          println_1: function (s) {
            this.print_0(s);
            this.println();
          },
          flush: function () {
            this.get_oo().set_result(this.get_result());
          },
          close: function () {
          }
        })
      }),
      lang: Kotlin.definePackage({
        StringBuilder: Kotlin.createClass({
          initialize: function (base) {
            this.$base = base;
            this.$content = this.get_base();
          },
          get_base: function () {
            return this.$base;
          },
          get_content: function () {
            return this.$content;
          },
          set_content: function (tmp$0) {
            this.$content = tmp$0;
          },
          append: function (sub) {
            this.set_content(this.get_content() + sub);
          },
          append_0: function (sub) {
            this.set_content(this.get_content() + sub);
          },
          toString: function () {
            return this.get_content();
          }
        })
      }),
      util: Kotlin.definePackage({
        Collections: Kotlin.definePackage({
        })
      })
    }),
    org: Kotlin.definePackage({
      cloud: Kotlin.definePackage({
        cloner: Kotlin.definePackage({
          ModelCloner: Kotlin.createClass({
            initialize: function () {
              this.$mainFactory = new _.org.cloud.factory.MainFactory();
            },
            clone: function (o) {
              return this.clone_0(o, false);
            },
            clone_0: function (o, readOnly) {
              return this.clone_1(o, readOnly, false);
            },
            cloneMutableOnly: function (o, readOnly) {
              return this.clone_1(o, readOnly, true);
            },
            clone_1: function (o, readOnly, mutableOnly) {
              if (Kotlin.isType(o, _.org.cloud.Cloud) || Kotlin.isType(o, _.org.cloud.impl.CloudImpl)) {
                var context = new Kotlin.ComplexHashMap(0);
                o.getClonelazy(context, this.get_mainFactory(), mutableOnly);
                return o.resolve(context, readOnly, mutableOnly);
              }
              if (Kotlin.isType(o, _.org.cloud.Node) || Kotlin.isType(o, _.org.cloud.impl.NodeImpl)) {
                var context_0 = new Kotlin.ComplexHashMap(0);
                o.getClonelazy(context_0, this.get_mainFactory(), mutableOnly);
                return o.resolve(context_0, readOnly, mutableOnly);
              }
              if (Kotlin.isType(o, _.org.cloud.Software) || Kotlin.isType(o, _.org.cloud.impl.SoftwareImpl)) {
                var context_1 = new Kotlin.ComplexHashMap(0);
                o.getClonelazy(context_1, this.get_mainFactory(), mutableOnly);
                return o.resolve(context_1, readOnly, mutableOnly);
              }
              return null;
            },
            get_mainFactory: function () {
              return this.$mainFactory;
            },
            set_mainFactory: function (tmp$0) {
              this.$mainFactory = tmp$0;
            },
            setCloudFactory: function (fct) {
              this.get_mainFactory().setCloudFactory(fct);
            }
          })
        }),
        Cloud: classes.c1,
        CloudFactory: classes.c2,
        Node: classes.ca,
        Software: classes.cc,
        compare: Kotlin.definePackage({
          ModelCompare: Kotlin.createClass({
            initialize: function () {
            },
            diff: function (origin, target) {
              return this.internal_diff(origin, target, false);
            },
            inter: function (origin, target) {
              return this.internal_diff(origin, target, true);
            },
            internal_diff: function (origin, target, inter) {
              var traces = new Kotlin.ArrayList(0);
              var objectsMap = new Kotlin.PrimitiveHashMap(0);
              traces.addAll(origin.generateDiffTraces(target, inter));
              {
                var tmp$0 = this.collectAll(origin).iterator();
                while (tmp$0.hasNext()) {
                  var child = tmp$0.next();
                  var childPath = child.path();
                  if (childPath != null) {
                    var tmp$1;
                    objectsMap.put((tmp$1 = child.path()) != null ? tmp$1 : Kotlin.throwNPE(), child);
                  }
                   else {
                    throw new Kotlin.Exception('Null child path ' + child);
                  }
                }
              }
              {
                var tmp$2 = this.collectAll(target).iterator();
                while (tmp$2.hasNext()) {
                  var child_0 = tmp$2.next();
                  var childPath_0 = child_0.path();
                  if (childPath_0 != null) {
                    if (objectsMap.containsKey(childPath_0)) {
                      if (inter) {
                        var tmp$3, tmp$4, tmp$5;
                        traces.add(new _.org.cloud.trace.ModelAddTrace((tmp$4 = ((tmp$3 = child_0.eContainer()) != null ? tmp$3 : Kotlin.throwNPE()).path()) != null ? tmp$4 : Kotlin.throwNPE(), (tmp$5 = child_0.getRefInParent()) != null ? tmp$5 : Kotlin.throwNPE(), child_0.path(), child_0.metaClassName()));
                      }
                      var tmp$6;
                      traces.addAll(((tmp$6 = objectsMap.get(childPath_0)) != null ? tmp$6 : Kotlin.throwNPE()).generateDiffTraces(child_0, inter));
                      objectsMap.remove(childPath_0);
                    }
                     else {
                      if (!inter) {
                        var tmp$7, tmp$8, tmp$9;
                        traces.add(new _.org.cloud.trace.ModelAddTrace((tmp$8 = ((tmp$7 = child_0.eContainer()) != null ? tmp$7 : Kotlin.throwNPE()).path()) != null ? tmp$8 : Kotlin.throwNPE(), (tmp$9 = child_0.getRefInParent()) != null ? tmp$9 : Kotlin.throwNPE(), child_0.path(), child_0.metaClassName()));
                        traces.addAll(child_0.generateDiffTraces(child_0, true));
                      }
                    }
                  }
                   else {
                    throw new Kotlin.Exception('Null child path ' + child_0);
                  }
                }
              }
              if (!inter) {
                {
                  var tmp$10 = objectsMap.values().iterator();
                  while (tmp$10.hasNext()) {
                    var diffChild = tmp$10.next();
                    var tmp$11, tmp$12, tmp$13;
                    traces.add(new _.org.cloud.trace.ModelAddTrace((tmp$12 = ((tmp$11 = diffChild.eContainer()) != null ? tmp$11 : Kotlin.throwNPE()).path()) != null ? tmp$12 : Kotlin.throwNPE(), (tmp$13 = diffChild.getRefInParent()) != null ? tmp$13 : Kotlin.throwNPE(), diffChild.path(), diffChild.metaClassName()));
                    traces.addAll(diffChild.generateDiffTraces(null, inter));
                  }
                }
              }
              return traces;
            },
            collectAll: function (obj) {
              var result = new Kotlin.ArrayList(0);
              {
                var tmp$0 = obj.containedElementsList().iterator();
                while (tmp$0.hasNext()) {
                  var child = tmp$0.next();
                  if (Kotlin.isType(child, Kotlin.ArrayList)) {
                    {
                      var tmp$1 = child.iterator();
                      while (tmp$1.hasNext()) {
                        var subChild = tmp$1.next();
                        var casted = subChild;
                        result.add(casted);
                        result.addAll(this.collectAll(casted));
                      }
                    }
                  }
                   else {
                    var casted_0 = child;
                    result.add(casted_0);
                    result.addAll(this.collectAll(casted_0));
                  }
                }
              }
              return result;
            }
          })
        }),
        container: Kotlin.definePackage({
          KMFContainer: classes.c3,
          KMFContainerImpl: classes.c4,
          RemoveFromContainerCommand: Kotlin.createClass({
            initialize: function (target, mutatorType, refName, element) {
              this.$target = target;
              this.$mutatorType = mutatorType;
              this.$refName = refName;
              this.$element = element;
            },
            get_target: function () {
              return this.$target;
            },
            get_mutatorType: function () {
              return this.$mutatorType;
            },
            get_refName: function () {
              return this.$refName;
            },
            get_element: function () {
              return this.$element;
            },
            run: function () {
              this.get_target().reflexiveMutator(this.get_mutatorType(), this.get_refName(), this.get_element());
            }
          })
        }),
        events: Kotlin.definePackage({
          ModelElementListener: classes.c5,
          ModelEvent: Kotlin.createClass({
            initialize: function (sourcePath, etype, elementAttributeType, elementAttributeName, value) {
              this.$sourcePath = sourcePath;
              this.$etype = etype;
              this.$elementAttributeType = elementAttributeType;
              this.$elementAttributeName = elementAttributeName;
              this.$value = value;
            },
            get_sourcePath: function () {
              return this.$sourcePath;
            },
            get_etype: function () {
              return this.$etype;
            },
            get_elementAttributeType: function () {
              return this.$elementAttributeType;
            },
            get_elementAttributeName: function () {
              return this.$elementAttributeName;
            },
            get_value: function () {
              return this.$value;
            },
            getSourcePath: function () {
              return this.get_sourcePath();
            },
            getType: function () {
              return this.get_etype();
            },
            getElementAttributeType: function () {
              return this.get_elementAttributeType();
            },
            getElementAttributeName: function () {
              return this.get_elementAttributeName();
            },
            getValue: function () {
              return this.get_value();
            },
            toString: function () {
              return 'ModelEvent[src:' + this.getSourcePath() + ', type:' + this.getType() + ', elementAttributeType:' + this.getElementAttributeType() + ', elementAttributeName:' + this.getElementAttributeName() + ', value:' + this.getValue() + ']';
            }
          }),
          ModelTreeListener: classes.c6
        }),
        factory: Kotlin.definePackage({
          KMFFactory: classes.c7,
          MainFactory: Kotlin.createClass(classes.c7, {
            initialize: function () {
              this.$factories = Kotlin.arrayFromFun(1, function (i) {
                return null;
              });
              {
                this.get_factories()[_.org.cloud.factory.Package.get_ORG_CLOUD()] = new _.org.cloud.impl.DefaultCloudFactory();
              }
            },
            get_factories: function () {
              return this.$factories;
            },
            set_factories: function (tmp$0) {
              this.$factories = tmp$0;
            },
            getFactoryForPackage: function (pack) {
              return this.get_factories()[pack];
            },
            getCloudFactory: function () {
              return this.get_factories()[_.org.cloud.factory.Package.get_ORG_CLOUD()];
            },
            setCloudFactory: function (fct) {
              this.get_factories()[_.org.cloud.factory.Package.get_ORG_CLOUD()] = fct;
            },
            create: function (metaClassName) {
              var tmp$0;
              return (tmp$0 = this.getFactoryForPackage(_.org.cloud.factory.Package.getPackageForName(metaClassName))) != null ? tmp$0.create(metaClassName) : null;
            }
          })
        }),
        impl: Kotlin.definePackage({
          CloudImpl: Kotlin.createClass(classes.c4, classes.c1, {
            initialize: function () {
              this.$internal_eContainer = null;
              this.$internal_containmentRefName = null;
              this.$internal_unsetCmd = null;
              this.$internal_readOnlyElem = false;
              this.$internal_recursive_readOnlyElem = false;
              this.$internal_modelElementListeners = null;
              this.$internal_modelTreeListeners = null;
              this.$_generated_KMF_ID = '';
              this.$_nodes_java_cache = null;
              this.$_nodes = new Kotlin.ComplexHashMap(0);
              this.$removeAllNodesCurrentlyProcessing = false;
            },
            get_internal_eContainer: function () {
              return this.$internal_eContainer;
            },
            set_internal_eContainer: function (tmp$0) {
              this.$internal_eContainer = tmp$0;
            },
            get_internal_containmentRefName: function () {
              return this.$internal_containmentRefName;
            },
            set_internal_containmentRefName: function (tmp$0) {
              this.$internal_containmentRefName = tmp$0;
            },
            get_internal_unsetCmd: function () {
              return this.$internal_unsetCmd;
            },
            set_internal_unsetCmd: function (tmp$0) {
              this.$internal_unsetCmd = tmp$0;
            },
            get_internal_readOnlyElem: function () {
              return this.$internal_readOnlyElem;
            },
            set_internal_readOnlyElem: function (tmp$0) {
              this.$internal_readOnlyElem = tmp$0;
            },
            get_internal_recursive_readOnlyElem: function () {
              return this.$internal_recursive_readOnlyElem;
            },
            set_internal_recursive_readOnlyElem: function (tmp$0) {
              this.$internal_recursive_readOnlyElem = tmp$0;
            },
            get_internal_modelElementListeners: function () {
              return this.$internal_modelElementListeners;
            },
            set_internal_modelElementListeners: function (tmp$0) {
              this.$internal_modelElementListeners = tmp$0;
            },
            get_internal_modelTreeListeners: function () {
              return this.$internal_modelTreeListeners;
            },
            set_internal_modelTreeListeners: function (tmp$0) {
              this.$internal_modelTreeListeners = tmp$0;
            },
            get__generated_KMF_ID: function () {
              return this.$_generated_KMF_ID;
            },
            set__generated_KMF_ID: function (tmp$0) {
              this.$_generated_KMF_ID = tmp$0;
            },
            get__nodes_java_cache: function () {
              return this.$_nodes_java_cache;
            },
            set__nodes_java_cache: function (tmp$0) {
              this.$_nodes_java_cache = tmp$0;
            },
            get__nodes: function () {
              return this.$_nodes;
            },
            setRecursiveReadOnly: function () {
              if (Kotlin.equals(this.get_internal_recursive_readOnlyElem(), true)) {
                return;
              }
              this.set_internal_recursive_readOnlyElem(true);
              {
                var tmp$0 = this.getNodes().iterator();
                while (tmp$0.hasNext()) {
                  var sub = tmp$0.next();
                  sub.setRecursiveReadOnly();
                }
              }
              this.setInternalReadOnly();
            },
            delete: function () {
              {
                var tmp$0 = _.kotlin.iterator(this.get__nodes());
                while (tmp$0.hasNext()) {
                  var el = tmp$0.next();
                  _.kotlin.get_value(el).delete();
                }
              }
              var tmp$1;
              (tmp$1 = this.get__nodes()) != null ? tmp$1.clear() : null;
              this.set__nodes_java_cache(null);
            },
            getGenerated_KMF_ID: function () {
              return this.get__generated_KMF_ID();
            },
            setGenerated_KMF_ID: function (generated_KMF_IDP) {
              if (this.isReadOnly()) {
                throw new Kotlin.Exception(_.org.cloud.util.Constants.get_READ_ONLY_EXCEPTION());
              }
              var oldPath = this.path();
              var oldId = this.internalGetKey();
              var previousParent = this.eContainer();
              var previousRefNameInParent = this.getRefInParent();
              this.set__generated_KMF_ID(generated_KMF_IDP);
              this.fireModelEvent(new _.org.cloud.events.ModelEvent(oldPath, _.org.cloud.util.ActionType.get_SET(), _.org.cloud.util.ElementAttributeType.get_ATTRIBUTE(), _.org.cloud.util.Constants.get_Att_generated_KMF_ID(), generated_KMF_IDP));
              if (previousParent != null) {
                var tmp$0;
                previousParent.reflexiveMutator(_.org.cloud.util.ActionType.get_RENEW_INDEX(), (tmp$0 = previousRefNameInParent) != null ? tmp$0 : Kotlin.throwNPE(), oldId);
              }
              this.fireModelEvent(new _.org.cloud.events.ModelEvent(oldPath, _.org.cloud.util.ActionType.get_RENEW_INDEX(), _.org.cloud.util.ElementAttributeType.get_REFERENCE(), _.org.cloud.util.Constants.get_Att_generated_KMF_ID(), this.path()));
            },
            getNodes: function () {
              return _.kotlin.toList_1(this.get__nodes().values());
            },
            setNodes: function (nodesP) {
              if (this.isReadOnly()) {
                throw new Kotlin.Exception(_.org.cloud.util.Constants.get_READ_ONLY_EXCEPTION());
              }
              if (nodesP == null) {
                throw new Kotlin.IllegalArgumentException(_.org.cloud.util.Constants.get_LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION());
              }
              this.set__nodes_java_cache(null);
              if (!Kotlin.equals(this.get__nodes(), nodesP)) {
                this.get__nodes().clear();
                {
                  var tmp$0 = nodesP.iterator();
                  while (tmp$0.hasNext()) {
                    var el = tmp$0.next();
                    this.get__nodes().put(el.internalGetKey(), el);
                  }
                }
                {
                  var tmp$1 = nodesP.iterator();
                  while (tmp$1.hasNext()) {
                    var elem = tmp$1.next();
                    elem.setEContainer(this, new _.org.cloud.container.RemoveFromContainerCommand(this, _.org.cloud.util.ActionType.get_REMOVE(), 'nodes', elem), 'nodes');
                  }
                }
                this.fireModelEvent(new _.org.cloud.events.ModelEvent(this.path(), _.org.cloud.util.ActionType.get_SET(), _.org.cloud.util.ElementAttributeType.get_CONTAINMENT(), _.org.cloud.util.Constants.get_Ref_nodes(), nodesP));
              }
            },
            addNodes: function (nodesP) {
              if (this.isReadOnly()) {
                throw new Kotlin.Exception(_.org.cloud.util.Constants.get_READ_ONLY_EXCEPTION());
              }
              this.set__nodes_java_cache(null);
              nodesP.setEContainer(this, new _.org.cloud.container.RemoveFromContainerCommand(this, _.org.cloud.util.ActionType.get_REMOVE(), 'nodes', nodesP), 'nodes');
              var _key_ = nodesP.internalGetKey();
              if (Kotlin.equals(_key_, '') || _key_ == null) {
                throw new Kotlin.Exception('Key empty : set the attribute key before adding the object');
              }
              this.get__nodes().put(_key_, nodesP);
              this.fireModelEvent(new _.org.cloud.events.ModelEvent(this.path(), _.org.cloud.util.ActionType.get_ADD(), _.org.cloud.util.ElementAttributeType.get_CONTAINMENT(), _.org.cloud.util.Constants.get_Ref_nodes(), nodesP));
            },
            addAllNodes: function (nodesP) {
              if (this.isReadOnly()) {
                throw new Kotlin.Exception(_.org.cloud.util.Constants.get_READ_ONLY_EXCEPTION());
              }
              this.set__nodes_java_cache(null);
              {
                var tmp$0 = nodesP.iterator();
                while (tmp$0.hasNext()) {
                  var el = tmp$0.next();
                  var _key_ = el.internalGetKey();
                  if (Kotlin.equals(_key_, '') || _key_ == null) {
                    throw new Kotlin.Exception('Key empty : set the attribute key before adding the object');
                  }
                  this.get__nodes().put(_key_, el);
                }
              }
              {
                var tmp$1 = nodesP.iterator();
                while (tmp$1.hasNext()) {
                  var el_0 = tmp$1.next();
                  el_0.setEContainer(this, new _.org.cloud.container.RemoveFromContainerCommand(this, _.org.cloud.util.ActionType.get_REMOVE(), 'nodes', el_0), 'nodes');
                }
              }
              this.fireModelEvent(new _.org.cloud.events.ModelEvent(this.path(), _.org.cloud.util.ActionType.get_ADD_ALL(), _.org.cloud.util.ElementAttributeType.get_CONTAINMENT(), _.org.cloud.util.Constants.get_Ref_nodes(), nodesP));
            },
            get_removeAllNodesCurrentlyProcessing: function () {
              return this.$removeAllNodesCurrentlyProcessing;
            },
            set_removeAllNodesCurrentlyProcessing: function (tmp$0) {
              this.$removeAllNodesCurrentlyProcessing = tmp$0;
            },
            removeNodes: function (nodesP) {
              if (this.isReadOnly()) {
                throw new Kotlin.Exception(_.org.cloud.util.Constants.get_READ_ONLY_EXCEPTION());
              }
              this.set__nodes_java_cache(null);
              if (this.get__nodes().size() !== 0 && this.get__nodes().containsKey(nodesP.internalGetKey())) {
                this.get__nodes().remove(nodesP.internalGetKey());
                var tmp$0;
                ((tmp$0 = nodesP) != null ? tmp$0 : Kotlin.throwNPE()).setEContainer(null, null, null);
                if (!this.get_removeAllNodesCurrentlyProcessing()) {
                  this.fireModelEvent(new _.org.cloud.events.ModelEvent(this.path(), _.org.cloud.util.ActionType.get_REMOVE(), _.org.cloud.util.ElementAttributeType.get_CONTAINMENT(), _.org.cloud.util.Constants.get_Ref_nodes(), nodesP));
                }
              }
            },
            removeAllNodes: function () {
              if (this.isReadOnly()) {
                throw new Kotlin.Exception(_.org.cloud.util.Constants.get_READ_ONLY_EXCEPTION());
              }
              this.set_removeAllNodesCurrentlyProcessing(true);
              var tmp$0, tmp$1;
              var temp_els = (tmp$0 = this.getNodes()) != null ? tmp$0 : Kotlin.throwNPE();
              {
                var tmp$2 = ((tmp$1 = temp_els) != null ? tmp$1 : Kotlin.throwNPE()).iterator();
                while (tmp$2.hasNext()) {
                  var el = tmp$2.next();
                  el.setEContainer(null, null, null);
                }
              }
              this.set__nodes_java_cache(null);
              this.get__nodes().clear();
              this.fireModelEvent(new _.org.cloud.events.ModelEvent(this.path(), _.org.cloud.util.ActionType.get_REMOVE_ALL(), _.org.cloud.util.ElementAttributeType.get_CONTAINMENT(), _.org.cloud.util.Constants.get_Ref_nodes(), temp_els));
              this.set_removeAllNodesCurrentlyProcessing(false);
            },
            getClonelazy: function (subResult, _factories, mutableOnly) {
              if (mutableOnly && this.isRecursiveReadOnly()) {
                return;
              }
              var selfObjectClone = _factories.getCloudFactory().createCloud();
              selfObjectClone.setGenerated_KMF_ID(this.getGenerated_KMF_ID());
              subResult.put(this, selfObjectClone);
              {
                var tmp$0 = this.getNodes().iterator();
                while (tmp$0.hasNext()) {
                  var sub = tmp$0.next();
                  sub.getClonelazy(subResult, _factories, mutableOnly);
                }
              }
            },
            resolve: function (addrs, readOnly, mutableOnly) {
              if (mutableOnly && this.isRecursiveReadOnly()) {
                return this;
              }
              var clonedSelfObject = addrs.get(this);
              {
                var tmp$0 = this.getNodes().iterator();
                while (tmp$0.hasNext()) {
                  var sub = tmp$0.next();
                  if (mutableOnly && sub.isRecursiveReadOnly()) {
                    clonedSelfObject.addNodes(sub);
                  }
                   else {
                    var interObj = addrs.get(sub);
                    if (interObj == null) {
                      throw new Kotlin.Exception('Non contained nodes from Cloud : ' + this.getNodes());
                    }
                    clonedSelfObject.addNodes(interObj);
                  }
                }
              }
              {
                var tmp$1 = this.getNodes().iterator();
                while (tmp$1.hasNext()) {
                  var sub_0 = tmp$1.next();
                  sub_0.resolve(addrs, readOnly, mutableOnly);
                }
              }
              if (readOnly) {
                clonedSelfObject.setInternalReadOnly();
              }
              return clonedSelfObject;
            },
            reflexiveMutator: function (mutationType, refName, value) {
              if (refName === _.org.cloud.util.Constants.get_Att_generated_KMF_ID()) {
                if (mutationType === _.org.cloud.util.ActionType.get_SET()) {
                  this.setGenerated_KMF_ID(value);
                }
                 else {
                  throw new Kotlin.Exception(_.org.cloud.util.Constants.get_UNKNOWN_MUTATION_TYPE_EXCEPTION() + mutationType);
                }
              }
               else if (refName === _.org.cloud.util.Constants.get_Ref_nodes()) {
                if (mutationType === _.org.cloud.util.ActionType.get_ADD()) {
                  this.addNodes(value);
                }
                 else if (mutationType === _.org.cloud.util.ActionType.get_ADD_ALL()) {
                  this.addAllNodes(value);
                }
                 else if (mutationType === _.org.cloud.util.ActionType.get_REMOVE()) {
                  this.removeNodes(value);
                }
                 else if (mutationType === _.org.cloud.util.ActionType.get_REMOVE_ALL()) {
                  this.removeAllNodes();
                }
                 else if (mutationType === _.org.cloud.util.ActionType.get_RENEW_INDEX()) {
                  if (this.get__nodes().size() !== 0 && this.get__nodes().containsKey(value)) {
                    var obj = this.get__nodes().get(value);
                    this.get__nodes().put(obj.internalGetKey(), obj);
                    this.get__nodes().remove(value);
                  }
                }
                 else {
                  throw new Kotlin.Exception(_.org.cloud.util.Constants.get_UNKNOWN_MUTATION_TYPE_EXCEPTION() + mutationType);
                }
              }
               else {
                throw new Kotlin.Exception('Can reflexively ' + mutationType + ' for ' + refName + ' on ' + this);
              }
            },
            internalGetKey: function () {
              return this.getGenerated_KMF_ID();
            },
            path: function () {
              var container = this.eContainer();
              if (container != null) {
                var parentPath = container.path();
                if (parentPath == null) {
                  return null;
                }
                 else {
                  var tmp$0;
                  if (Kotlin.equals(parentPath, '')) {
                    tmp$0 = '';
                  }
                   else {
                    tmp$0 = parentPath + '/';
                  }
                  return tmp$0 + this.get_internal_containmentRefName() + '[' + this.internalGetKey() + ']';
                }
              }
               else {
                return '';
              }
            },
            findNodesByID: function (key) {
              return this.get__nodes().get(key);
            },
            findByPath: function (query) {
              var firstSepIndex = _.js.indexOf(query, '[');
              var queryID = '';
              var extraReadChar = 2;
              var relationName = _.org.cloud.util.Constants.get_Ref_nodes();
              var optionalDetected = firstSepIndex !== 5;
              if (optionalDetected) {
                extraReadChar = extraReadChar - 2;
              }
              if (_.js.indexOf(query, '{') === 0) {
                queryID = query.substring(_.js.indexOf(query, '{') + 1, _.js.indexOf(query, '}'));
                extraReadChar = extraReadChar + 2;
              }
               else {
                if (optionalDetected) {
                  if (_.js.indexOf(query, '/') !== -1) {
                    queryID = query.substring(0, _.js.indexOf(query, '/'));
                  }
                   else {
                    queryID = query.substring(0, _.js.get_size(query));
                  }
                }
                 else {
                  queryID = query.substring(_.js.indexOf(query, '[') + 1, _.js.indexOf(query, ']'));
                }
              }
              var tmp$0, tmp$1;
              tmp$0 = query;
              if (optionalDetected) {
                tmp$1 = 0;
              }
               else {
                tmp$1 = _.js.get_size(relationName);
              }
              var subquery = tmp$0.substring(tmp$1 + _.js.get_size(queryID) + extraReadChar, _.js.get_size(query));
              if (_.js.indexOf(subquery, '/') !== -1) {
                subquery = subquery.substring(_.js.indexOf(subquery, '/') + 1, _.js.get_size(subquery));
              }
              var tmp$2;
              if (relationName === _.org.cloud.util.Constants.get_Ref_nodes()) {
                var objFound = this.findNodesByID(queryID);
                if (!Kotlin.equals(subquery, '') && objFound != null) {
                  tmp$2 = objFound.findByPath(subquery);
                }
                 else {
                  tmp$2 = objFound;
                }
              }
               else {
                tmp$2 = null;
              }
              return tmp$2;
            },
            deepModelEquals: function (similarObj) {
              if (!this.modelEquals(similarObj)) {
                return false;
              }
              var similarObjCasted = similarObj;
              {
                var tmp$0 = this.getNodes().iterator();
                while (tmp$0.hasNext()) {
                  var subElement = tmp$0.next();
                  var foundedElement = similarObjCasted.findNodesByID(subElement.getId());
                  if (foundedElement == null || !Kotlin.equals(foundedElement, subElement)) {
                    return false;
                  }
                }
              }
              return true;
            },
            modelEquals: function (similarObj) {
              if (similarObj == null || !Kotlin.isType(similarObj, _.org.cloud.Cloud) || !Kotlin.isType(similarObj, _.org.cloud.impl.CloudImpl)) {
                return false;
              }
              var similarObjCasted = similarObj;
              if (!Kotlin.equals(this.getGenerated_KMF_ID(), similarObjCasted.getGenerated_KMF_ID())) {
                return false;
              }
              if (this.getNodes().size() !== similarObjCasted.getNodes().size()) {
                return false;
              }
              return true;
            },
            containedElementsList: function () {
              var result = new Kotlin.ArrayList(1);
              result.add(this.get__nodes().values());
              return result;
            },
            metaClassName: function () {
              return 'org.cloud.Cloud';
            },
            generateDiffTraces: function (similarObj, inter) {
              var similarObjCasted = null;
              if (similarObj != null && (Kotlin.isType(similarObj, _.org.cloud.Cloud) || Kotlin.isType(similarObj, _.org.cloud.impl.CloudImpl))) {
                similarObjCasted = similarObj;
              }
              var traces = new Kotlin.ArrayList(0);
              var attVal = null;
              var attVal2 = null;
              var attVal2String = null;
              var hashLoop = null;
              var hashResult = null;
              attVal = this.getGenerated_KMF_ID();
              var tmp$0;
              attVal2 = (tmp$0 = similarObjCasted) != null ? tmp$0.getGenerated_KMF_ID() : null;
              if (!Kotlin.equals(attVal, attVal2)) {
                if (!inter) {
                  var tmp$1;
                  traces.add(new _.org.cloud.trace.ModelSetTrace((tmp$1 = this.path()) != null ? tmp$1 : Kotlin.throwNPE(), _.org.cloud.util.Constants.get_Att_generated_KMF_ID(), null, attVal2.toString(), null));
                }
              }
               else {
                if (inter) {
                  var tmp$2;
                  traces.add(new _.org.cloud.trace.ModelSetTrace((tmp$2 = this.path()) != null ? tmp$2 : Kotlin.throwNPE(), _.org.cloud.util.Constants.get_Att_generated_KMF_ID(), null, attVal2.toString(), null));
                }
              }
              return traces;
            }
          }),
          DefaultCloudFactory: Kotlin.createClass(classes.c2, {
            initialize: function () {
            },
            getVersion: function () {
              return '1.0.0-SNAPSHOT';
            },
            createCloud: function () {
              return new _.org.cloud.impl.CloudImpl();
            },
            createNode: function () {
              return new _.org.cloud.impl.NodeImpl();
            },
            createSoftware: function () {
              return new _.org.cloud.impl.SoftwareImpl();
            },
            create: function (metaClassName) {
              if (metaClassName === 'org.cloud.Cloud') {
                return this.createCloud();
              }
               else if (metaClassName === 'Cloud') {
                return this.createCloud();
              }
               else if (metaClassName === 'org.cloud.Node') {
                return this.createNode();
              }
               else if (metaClassName === 'Node') {
                return this.createNode();
              }
               else if (metaClassName === 'org.cloud.Software') {
                return this.createSoftware();
              }
               else if (metaClassName === 'Software') {
                return this.createSoftware();
              }
               else {
                return null;
              }
            }
          }),
          NodeImpl: Kotlin.createClass(classes.c4, classes.ca, {
            initialize: function () {
              this.$internal_eContainer = null;
              this.$internal_containmentRefName = null;
              this.$internal_unsetCmd = null;
              this.$internal_readOnlyElem = false;
              this.$internal_recursive_readOnlyElem = false;
              this.$internal_modelElementListeners = null;
              this.$internal_modelTreeListeners = null;
              this.$_id = '';
              this.$_softwares_java_cache = null;
              this.$_softwares = new Kotlin.ComplexHashMap(0);
              this.$removeAllSoftwaresCurrentlyProcessing = false;
            },
            get_internal_eContainer: function () {
              return this.$internal_eContainer;
            },
            set_internal_eContainer: function (tmp$0) {
              this.$internal_eContainer = tmp$0;
            },
            get_internal_containmentRefName: function () {
              return this.$internal_containmentRefName;
            },
            set_internal_containmentRefName: function (tmp$0) {
              this.$internal_containmentRefName = tmp$0;
            },
            get_internal_unsetCmd: function () {
              return this.$internal_unsetCmd;
            },
            set_internal_unsetCmd: function (tmp$0) {
              this.$internal_unsetCmd = tmp$0;
            },
            get_internal_readOnlyElem: function () {
              return this.$internal_readOnlyElem;
            },
            set_internal_readOnlyElem: function (tmp$0) {
              this.$internal_readOnlyElem = tmp$0;
            },
            get_internal_recursive_readOnlyElem: function () {
              return this.$internal_recursive_readOnlyElem;
            },
            set_internal_recursive_readOnlyElem: function (tmp$0) {
              this.$internal_recursive_readOnlyElem = tmp$0;
            },
            get_internal_modelElementListeners: function () {
              return this.$internal_modelElementListeners;
            },
            set_internal_modelElementListeners: function (tmp$0) {
              this.$internal_modelElementListeners = tmp$0;
            },
            get_internal_modelTreeListeners: function () {
              return this.$internal_modelTreeListeners;
            },
            set_internal_modelTreeListeners: function (tmp$0) {
              this.$internal_modelTreeListeners = tmp$0;
            },
            get__id: function () {
              return this.$_id;
            },
            set__id: function (tmp$0) {
              this.$_id = tmp$0;
            },
            get__softwares_java_cache: function () {
              return this.$_softwares_java_cache;
            },
            set__softwares_java_cache: function (tmp$0) {
              this.$_softwares_java_cache = tmp$0;
            },
            get__softwares: function () {
              return this.$_softwares;
            },
            setRecursiveReadOnly: function () {
              if (Kotlin.equals(this.get_internal_recursive_readOnlyElem(), true)) {
                return;
              }
              this.set_internal_recursive_readOnlyElem(true);
              {
                var tmp$0 = this.getSoftwares().iterator();
                while (tmp$0.hasNext()) {
                  var sub = tmp$0.next();
                  sub.setRecursiveReadOnly();
                }
              }
              this.setInternalReadOnly();
            },
            delete: function () {
              {
                var tmp$0 = _.kotlin.iterator(this.get__softwares());
                while (tmp$0.hasNext()) {
                  var el = tmp$0.next();
                  _.kotlin.get_value(el).delete();
                }
              }
              var tmp$1;
              (tmp$1 = this.get__softwares()) != null ? tmp$1.clear() : null;
              this.set__softwares_java_cache(null);
            },
            getId: function () {
              return this.get__id();
            },
            setId: function (idP) {
              if (this.isReadOnly()) {
                throw new Kotlin.Exception(_.org.cloud.util.Constants.get_READ_ONLY_EXCEPTION());
              }
              var oldPath = this.path();
              var oldId = this.internalGetKey();
              var previousParent = this.eContainer();
              var previousRefNameInParent = this.getRefInParent();
              this.set__id(idP);
              this.fireModelEvent(new _.org.cloud.events.ModelEvent(oldPath, _.org.cloud.util.ActionType.get_SET(), _.org.cloud.util.ElementAttributeType.get_ATTRIBUTE(), _.org.cloud.util.Constants.get_Att_id(), idP));
              if (previousParent != null) {
                var tmp$0;
                previousParent.reflexiveMutator(_.org.cloud.util.ActionType.get_RENEW_INDEX(), (tmp$0 = previousRefNameInParent) != null ? tmp$0 : Kotlin.throwNPE(), oldId);
              }
              this.fireModelEvent(new _.org.cloud.events.ModelEvent(oldPath, _.org.cloud.util.ActionType.get_RENEW_INDEX(), _.org.cloud.util.ElementAttributeType.get_REFERENCE(), _.org.cloud.util.Constants.get_Att_id(), this.path()));
            },
            getSoftwares: function () {
              return _.kotlin.toList_1(this.get__softwares().values());
            },
            setSoftwares: function (softwaresP) {
              if (this.isReadOnly()) {
                throw new Kotlin.Exception(_.org.cloud.util.Constants.get_READ_ONLY_EXCEPTION());
              }
              if (softwaresP == null) {
                throw new Kotlin.IllegalArgumentException(_.org.cloud.util.Constants.get_LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION());
              }
              this.set__softwares_java_cache(null);
              if (!Kotlin.equals(this.get__softwares(), softwaresP)) {
                this.get__softwares().clear();
                {
                  var tmp$0 = softwaresP.iterator();
                  while (tmp$0.hasNext()) {
                    var el = tmp$0.next();
                    this.get__softwares().put(el.internalGetKey(), el);
                  }
                }
                {
                  var tmp$1 = softwaresP.iterator();
                  while (tmp$1.hasNext()) {
                    var elem = tmp$1.next();
                    elem.setEContainer(this, new _.org.cloud.container.RemoveFromContainerCommand(this, _.org.cloud.util.ActionType.get_REMOVE(), 'softwares', elem), 'softwares');
                  }
                }
                this.fireModelEvent(new _.org.cloud.events.ModelEvent(this.path(), _.org.cloud.util.ActionType.get_SET(), _.org.cloud.util.ElementAttributeType.get_CONTAINMENT(), _.org.cloud.util.Constants.get_Ref_softwares(), softwaresP));
              }
            },
            addSoftwares: function (softwaresP) {
              if (this.isReadOnly()) {
                throw new Kotlin.Exception(_.org.cloud.util.Constants.get_READ_ONLY_EXCEPTION());
              }
              this.set__softwares_java_cache(null);
              softwaresP.setEContainer(this, new _.org.cloud.container.RemoveFromContainerCommand(this, _.org.cloud.util.ActionType.get_REMOVE(), 'softwares', softwaresP), 'softwares');
              var _key_ = softwaresP.internalGetKey();
              if (Kotlin.equals(_key_, '') || _key_ == null) {
                throw new Kotlin.Exception('Key empty : set the attribute key before adding the object');
              }
              this.get__softwares().put(_key_, softwaresP);
              this.fireModelEvent(new _.org.cloud.events.ModelEvent(this.path(), _.org.cloud.util.ActionType.get_ADD(), _.org.cloud.util.ElementAttributeType.get_CONTAINMENT(), _.org.cloud.util.Constants.get_Ref_softwares(), softwaresP));
            },
            addAllSoftwares: function (softwaresP) {
              if (this.isReadOnly()) {
                throw new Kotlin.Exception(_.org.cloud.util.Constants.get_READ_ONLY_EXCEPTION());
              }
              this.set__softwares_java_cache(null);
              {
                var tmp$0 = softwaresP.iterator();
                while (tmp$0.hasNext()) {
                  var el = tmp$0.next();
                  var _key_ = el.internalGetKey();
                  if (Kotlin.equals(_key_, '') || _key_ == null) {
                    throw new Kotlin.Exception('Key empty : set the attribute key before adding the object');
                  }
                  this.get__softwares().put(_key_, el);
                }
              }
              {
                var tmp$1 = softwaresP.iterator();
                while (tmp$1.hasNext()) {
                  var el_0 = tmp$1.next();
                  el_0.setEContainer(this, new _.org.cloud.container.RemoveFromContainerCommand(this, _.org.cloud.util.ActionType.get_REMOVE(), 'softwares', el_0), 'softwares');
                }
              }
              this.fireModelEvent(new _.org.cloud.events.ModelEvent(this.path(), _.org.cloud.util.ActionType.get_ADD_ALL(), _.org.cloud.util.ElementAttributeType.get_CONTAINMENT(), _.org.cloud.util.Constants.get_Ref_softwares(), softwaresP));
            },
            get_removeAllSoftwaresCurrentlyProcessing: function () {
              return this.$removeAllSoftwaresCurrentlyProcessing;
            },
            set_removeAllSoftwaresCurrentlyProcessing: function (tmp$0) {
              this.$removeAllSoftwaresCurrentlyProcessing = tmp$0;
            },
            removeSoftwares: function (softwaresP) {
              if (this.isReadOnly()) {
                throw new Kotlin.Exception(_.org.cloud.util.Constants.get_READ_ONLY_EXCEPTION());
              }
              this.set__softwares_java_cache(null);
              if (this.get__softwares().size() !== 0 && this.get__softwares().containsKey(softwaresP.internalGetKey())) {
                this.get__softwares().remove(softwaresP.internalGetKey());
                var tmp$0;
                ((tmp$0 = softwaresP) != null ? tmp$0 : Kotlin.throwNPE()).setEContainer(null, null, null);
                if (!this.get_removeAllSoftwaresCurrentlyProcessing()) {
                  this.fireModelEvent(new _.org.cloud.events.ModelEvent(this.path(), _.org.cloud.util.ActionType.get_REMOVE(), _.org.cloud.util.ElementAttributeType.get_CONTAINMENT(), _.org.cloud.util.Constants.get_Ref_softwares(), softwaresP));
                }
              }
            },
            removeAllSoftwares: function () {
              if (this.isReadOnly()) {
                throw new Kotlin.Exception(_.org.cloud.util.Constants.get_READ_ONLY_EXCEPTION());
              }
              this.set_removeAllSoftwaresCurrentlyProcessing(true);
              var tmp$0, tmp$1;
              var temp_els = (tmp$0 = this.getSoftwares()) != null ? tmp$0 : Kotlin.throwNPE();
              {
                var tmp$2 = ((tmp$1 = temp_els) != null ? tmp$1 : Kotlin.throwNPE()).iterator();
                while (tmp$2.hasNext()) {
                  var el = tmp$2.next();
                  el.setEContainer(null, null, null);
                }
              }
              this.set__softwares_java_cache(null);
              this.get__softwares().clear();
              this.fireModelEvent(new _.org.cloud.events.ModelEvent(this.path(), _.org.cloud.util.ActionType.get_REMOVE_ALL(), _.org.cloud.util.ElementAttributeType.get_CONTAINMENT(), _.org.cloud.util.Constants.get_Ref_softwares(), temp_els));
              this.set_removeAllSoftwaresCurrentlyProcessing(false);
            },
            getClonelazy: function (subResult, _factories, mutableOnly) {
              if (mutableOnly && this.isRecursiveReadOnly()) {
                return;
              }
              var selfObjectClone = _factories.getCloudFactory().createNode();
              selfObjectClone.setId(this.getId());
              subResult.put(this, selfObjectClone);
              {
                var tmp$0 = this.getSoftwares().iterator();
                while (tmp$0.hasNext()) {
                  var sub = tmp$0.next();
                  sub.getClonelazy(subResult, _factories, mutableOnly);
                }
              }
            },
            resolve: function (addrs, readOnly, mutableOnly) {
              if (mutableOnly && this.isRecursiveReadOnly()) {
                return this;
              }
              var clonedSelfObject = addrs.get(this);
              {
                var tmp$0 = this.getSoftwares().iterator();
                while (tmp$0.hasNext()) {
                  var sub = tmp$0.next();
                  if (mutableOnly && sub.isRecursiveReadOnly()) {
                    clonedSelfObject.addSoftwares(sub);
                  }
                   else {
                    var interObj = addrs.get(sub);
                    if (interObj == null) {
                      throw new Kotlin.Exception('Non contained softwares from Node : ' + this.getSoftwares());
                    }
                    clonedSelfObject.addSoftwares(interObj);
                  }
                }
              }
              {
                var tmp$1 = this.getSoftwares().iterator();
                while (tmp$1.hasNext()) {
                  var sub_0 = tmp$1.next();
                  sub_0.resolve(addrs, readOnly, mutableOnly);
                }
              }
              if (readOnly) {
                clonedSelfObject.setInternalReadOnly();
              }
              return clonedSelfObject;
            },
            reflexiveMutator: function (mutationType, refName, value) {
              if (refName === _.org.cloud.util.Constants.get_Att_id()) {
                if (mutationType === _.org.cloud.util.ActionType.get_SET()) {
                  this.setId(value);
                }
                 else {
                  throw new Kotlin.Exception(_.org.cloud.util.Constants.get_UNKNOWN_MUTATION_TYPE_EXCEPTION() + mutationType);
                }
              }
               else if (refName === _.org.cloud.util.Constants.get_Ref_softwares()) {
                if (mutationType === _.org.cloud.util.ActionType.get_ADD()) {
                  this.addSoftwares(value);
                }
                 else if (mutationType === _.org.cloud.util.ActionType.get_ADD_ALL()) {
                  this.addAllSoftwares(value);
                }
                 else if (mutationType === _.org.cloud.util.ActionType.get_REMOVE()) {
                  this.removeSoftwares(value);
                }
                 else if (mutationType === _.org.cloud.util.ActionType.get_REMOVE_ALL()) {
                  this.removeAllSoftwares();
                }
                 else if (mutationType === _.org.cloud.util.ActionType.get_RENEW_INDEX()) {
                  if (this.get__softwares().size() !== 0 && this.get__softwares().containsKey(value)) {
                    var obj = this.get__softwares().get(value);
                    this.get__softwares().put(obj.internalGetKey(), obj);
                    this.get__softwares().remove(value);
                  }
                }
                 else {
                  throw new Kotlin.Exception(_.org.cloud.util.Constants.get_UNKNOWN_MUTATION_TYPE_EXCEPTION() + mutationType);
                }
              }
               else {
                throw new Kotlin.Exception('Can reflexively ' + mutationType + ' for ' + refName + ' on ' + this);
              }
            },
            internalGetKey: function () {
              return this.getId();
            },
            path: function () {
              var container = this.eContainer();
              if (container != null) {
                var parentPath = container.path();
                if (parentPath == null) {
                  return null;
                }
                 else {
                  var tmp$0;
                  if (Kotlin.equals(parentPath, '')) {
                    tmp$0 = '';
                  }
                   else {
                    tmp$0 = parentPath + '/';
                  }
                  return tmp$0 + this.get_internal_containmentRefName() + '[' + this.internalGetKey() + ']';
                }
              }
               else {
                return '';
              }
            },
            findSoftwaresByID: function (key) {
              return this.get__softwares().get(key);
            },
            findByPath: function (query) {
              var firstSepIndex = _.js.indexOf(query, '[');
              var queryID = '';
              var extraReadChar = 2;
              var relationName = _.org.cloud.util.Constants.get_Ref_softwares();
              var optionalDetected = firstSepIndex !== 9;
              if (optionalDetected) {
                extraReadChar = extraReadChar - 2;
              }
              if (_.js.indexOf(query, '{') === 0) {
                queryID = query.substring(_.js.indexOf(query, '{') + 1, _.js.indexOf(query, '}'));
                extraReadChar = extraReadChar + 2;
              }
               else {
                if (optionalDetected) {
                  if (_.js.indexOf(query, '/') !== -1) {
                    queryID = query.substring(0, _.js.indexOf(query, '/'));
                  }
                   else {
                    queryID = query.substring(0, _.js.get_size(query));
                  }
                }
                 else {
                  queryID = query.substring(_.js.indexOf(query, '[') + 1, _.js.indexOf(query, ']'));
                }
              }
              var tmp$0, tmp$1;
              tmp$0 = query;
              if (optionalDetected) {
                tmp$1 = 0;
              }
               else {
                tmp$1 = _.js.get_size(relationName);
              }
              var subquery = tmp$0.substring(tmp$1 + _.js.get_size(queryID) + extraReadChar, _.js.get_size(query));
              if (_.js.indexOf(subquery, '/') !== -1) {
                subquery = subquery.substring(_.js.indexOf(subquery, '/') + 1, _.js.get_size(subquery));
              }
              var tmp$2;
              if (relationName === _.org.cloud.util.Constants.get_Ref_softwares()) {
                var objFound = this.findSoftwaresByID(queryID);
                if (!Kotlin.equals(subquery, '') && objFound != null) {
                  throw new Kotlin.Exception('KMFQL : rejected sucessor' + relationName + ' from Node');
                }
                 else {
                  tmp$2 = objFound;
                }
              }
               else {
                tmp$2 = null;
              }
              return tmp$2;
            },
            deepModelEquals: function (similarObj) {
              if (!this.modelEquals(similarObj)) {
                return false;
              }
              var similarObjCasted = similarObj;
              {
                var tmp$0 = this.getSoftwares().iterator();
                while (tmp$0.hasNext()) {
                  var subElement = tmp$0.next();
                  var foundedElement = similarObjCasted.findSoftwaresByID(subElement.getName());
                  if (foundedElement == null || !Kotlin.equals(foundedElement, subElement)) {
                    return false;
                  }
                }
              }
              return true;
            },
            modelEquals: function (similarObj) {
              if (similarObj == null || !Kotlin.isType(similarObj, _.org.cloud.Node) || !Kotlin.isType(similarObj, _.org.cloud.impl.NodeImpl)) {
                return false;
              }
              var similarObjCasted = similarObj;
              if (!Kotlin.equals(this.getId(), similarObjCasted.getId())) {
                return false;
              }
              if (this.getSoftwares().size() !== similarObjCasted.getSoftwares().size()) {
                return false;
              }
              return true;
            },
            containedElementsList: function () {
              var result = new Kotlin.ArrayList(1);
              result.add(this.get__softwares().values());
              return result;
            },
            metaClassName: function () {
              return 'org.cloud.Node';
            },
            generateDiffTraces: function (similarObj, inter) {
              var similarObjCasted = null;
              if (similarObj != null && (Kotlin.isType(similarObj, _.org.cloud.Node) || Kotlin.isType(similarObj, _.org.cloud.impl.NodeImpl))) {
                similarObjCasted = similarObj;
              }
              var traces = new Kotlin.ArrayList(0);
              var attVal = null;
              var attVal2 = null;
              var attVal2String = null;
              var hashLoop = null;
              var hashResult = null;
              attVal = this.getId();
              var tmp$0;
              attVal2 = (tmp$0 = similarObjCasted) != null ? tmp$0.getId() : null;
              if (!Kotlin.equals(attVal, attVal2)) {
                if (!inter) {
                  var tmp$1;
                  traces.add(new _.org.cloud.trace.ModelSetTrace((tmp$1 = this.path()) != null ? tmp$1 : Kotlin.throwNPE(), _.org.cloud.util.Constants.get_Att_id(), null, attVal2.toString(), null));
                }
              }
               else {
                if (inter) {
                  var tmp$2;
                  traces.add(new _.org.cloud.trace.ModelSetTrace((tmp$2 = this.path()) != null ? tmp$2 : Kotlin.throwNPE(), _.org.cloud.util.Constants.get_Att_id(), null, attVal2.toString(), null));
                }
              }
              return traces;
            }
          }),
          SoftwareImpl: Kotlin.createClass(classes.c4, classes.cc, {
            initialize: function () {
              this.$internal_eContainer = null;
              this.$internal_containmentRefName = null;
              this.$internal_unsetCmd = null;
              this.$internal_readOnlyElem = false;
              this.$internal_recursive_readOnlyElem = false;
              this.$internal_modelElementListeners = null;
              this.$internal_modelTreeListeners = null;
              this.$_name = '';
            },
            get_internal_eContainer: function () {
              return this.$internal_eContainer;
            },
            set_internal_eContainer: function (tmp$0) {
              this.$internal_eContainer = tmp$0;
            },
            get_internal_containmentRefName: function () {
              return this.$internal_containmentRefName;
            },
            set_internal_containmentRefName: function (tmp$0) {
              this.$internal_containmentRefName = tmp$0;
            },
            get_internal_unsetCmd: function () {
              return this.$internal_unsetCmd;
            },
            set_internal_unsetCmd: function (tmp$0) {
              this.$internal_unsetCmd = tmp$0;
            },
            get_internal_readOnlyElem: function () {
              return this.$internal_readOnlyElem;
            },
            set_internal_readOnlyElem: function (tmp$0) {
              this.$internal_readOnlyElem = tmp$0;
            },
            get_internal_recursive_readOnlyElem: function () {
              return this.$internal_recursive_readOnlyElem;
            },
            set_internal_recursive_readOnlyElem: function (tmp$0) {
              this.$internal_recursive_readOnlyElem = tmp$0;
            },
            get_internal_modelElementListeners: function () {
              return this.$internal_modelElementListeners;
            },
            set_internal_modelElementListeners: function (tmp$0) {
              this.$internal_modelElementListeners = tmp$0;
            },
            get_internal_modelTreeListeners: function () {
              return this.$internal_modelTreeListeners;
            },
            set_internal_modelTreeListeners: function (tmp$0) {
              this.$internal_modelTreeListeners = tmp$0;
            },
            get__name: function () {
              return this.$_name;
            },
            set__name: function (tmp$0) {
              this.$_name = tmp$0;
            },
            setRecursiveReadOnly: function () {
              if (Kotlin.equals(this.get_internal_recursive_readOnlyElem(), true)) {
                return;
              }
              this.set_internal_recursive_readOnlyElem(true);
              this.setInternalReadOnly();
            },
            delete: function () {
            },
            getName: function () {
              return this.get__name();
            },
            setName: function (nameP) {
              if (this.isReadOnly()) {
                throw new Kotlin.Exception(_.org.cloud.util.Constants.get_READ_ONLY_EXCEPTION());
              }
              var oldPath = this.path();
              var oldId = this.internalGetKey();
              var previousParent = this.eContainer();
              var previousRefNameInParent = this.getRefInParent();
              this.set__name(nameP);
              this.fireModelEvent(new _.org.cloud.events.ModelEvent(oldPath, _.org.cloud.util.ActionType.get_SET(), _.org.cloud.util.ElementAttributeType.get_ATTRIBUTE(), _.org.cloud.util.Constants.get_Att_name(), nameP));
              if (previousParent != null) {
                var tmp$0;
                previousParent.reflexiveMutator(_.org.cloud.util.ActionType.get_RENEW_INDEX(), (tmp$0 = previousRefNameInParent) != null ? tmp$0 : Kotlin.throwNPE(), oldId);
              }
              this.fireModelEvent(new _.org.cloud.events.ModelEvent(oldPath, _.org.cloud.util.ActionType.get_RENEW_INDEX(), _.org.cloud.util.ElementAttributeType.get_REFERENCE(), _.org.cloud.util.Constants.get_Att_name(), this.path()));
            },
            getClonelazy: function (subResult, _factories, mutableOnly) {
              if (mutableOnly && this.isRecursiveReadOnly()) {
                return;
              }
              var selfObjectClone = _factories.getCloudFactory().createSoftware();
              selfObjectClone.setName(this.getName());
              subResult.put(this, selfObjectClone);
            },
            resolve: function (addrs, readOnly, mutableOnly) {
              if (mutableOnly && this.isRecursiveReadOnly()) {
                return this;
              }
              var clonedSelfObject = addrs.get(this);
              if (readOnly) {
                clonedSelfObject.setInternalReadOnly();
              }
              return clonedSelfObject;
            },
            reflexiveMutator: function (mutationType, refName, value) {
              if (refName === _.org.cloud.util.Constants.get_Att_name()) {
                if (mutationType === _.org.cloud.util.ActionType.get_SET()) {
                  this.setName(value);
                }
                 else {
                  throw new Kotlin.Exception(_.org.cloud.util.Constants.get_UNKNOWN_MUTATION_TYPE_EXCEPTION() + mutationType);
                }
              }
               else {
                throw new Kotlin.Exception('Can reflexively ' + mutationType + ' for ' + refName + ' on ' + this);
              }
            },
            internalGetKey: function () {
              return this.getName();
            },
            path: function () {
              var container = this.eContainer();
              if (container != null) {
                var parentPath = container.path();
                if (parentPath == null) {
                  return null;
                }
                 else {
                  var tmp$0;
                  if (Kotlin.equals(parentPath, '')) {
                    tmp$0 = '';
                  }
                   else {
                    tmp$0 = parentPath + '/';
                  }
                  return tmp$0 + this.get_internal_containmentRefName() + '[' + this.internalGetKey() + ']';
                }
              }
               else {
                return '';
              }
            },
            findByPath: function (query) {
              return null;
            },
            deepModelEquals: function (similarObj) {
              if (!this.modelEquals(similarObj)) {
                return false;
              }
              var similarObjCasted = similarObj;
              return true;
            },
            modelEquals: function (similarObj) {
              if (similarObj == null || !Kotlin.isType(similarObj, _.org.cloud.Software) || !Kotlin.isType(similarObj, _.org.cloud.impl.SoftwareImpl)) {
                return false;
              }
              var similarObjCasted = similarObj;
              if (!Kotlin.equals(this.getName(), similarObjCasted.getName())) {
                return false;
              }
              return true;
            },
            containedElementsList: function () {
              var result = new Kotlin.ArrayList(0);
              return result;
            },
            metaClassName: function () {
              return 'org.cloud.Software';
            },
            generateDiffTraces: function (similarObj, inter) {
              var similarObjCasted = null;
              if (similarObj != null && (Kotlin.isType(similarObj, _.org.cloud.Software) || Kotlin.isType(similarObj, _.org.cloud.impl.SoftwareImpl))) {
                similarObjCasted = similarObj;
              }
              var traces = new Kotlin.ArrayList(0);
              var attVal = null;
              var attVal2 = null;
              var attVal2String = null;
              var hashLoop = null;
              var hashResult = null;
              attVal = this.getName();
              var tmp$0;
              attVal2 = (tmp$0 = similarObjCasted) != null ? tmp$0.getName() : null;
              if (!Kotlin.equals(attVal, attVal2)) {
                if (!inter) {
                  var tmp$1;
                  traces.add(new _.org.cloud.trace.ModelSetTrace((tmp$1 = this.path()) != null ? tmp$1 : Kotlin.throwNPE(), _.org.cloud.util.Constants.get_Att_name(), null, attVal2.toString(), null));
                }
              }
               else {
                if (inter) {
                  var tmp$2;
                  traces.add(new _.org.cloud.trace.ModelSetTrace((tmp$2 = this.path()) != null ? tmp$2 : Kotlin.throwNPE(), _.org.cloud.util.Constants.get_Att_name(), null, attVal2.toString(), null));
                }
              }
              return traces;
            }
          })
        }),
        loader: Kotlin.definePackage({
          JSONModelLoader: Kotlin.createClass(classes.c8, {
            initialize: function () {
              this.$mainFactory = new _.org.cloud.factory.MainFactory();
            },
            get_mainFactory: function () {
              return this.$mainFactory;
            },
            loadModelFromString: function (str) {
              var bytes = Kotlin.numberArrayOfSize(str.length);
              var i = 0;
              while (i < str.length) {
                bytes[i] = str.charAt(i);
                i = i + 1;
              }
              return this.deserialize(new _.java.io.ByteArrayInputStream(bytes));
            },
            loadModelFromStream: function (inputStream) {
              return this.deserialize(inputStream);
            },
            deserialize: function (instream) {
              var reader = new _.org.cloud.loader.JsonReader(instream);
              var context = new _.org.cloud.loader.LoadingContext();
              while (reader.hasNext() && reader.peek() !== _.org.cloud.loader.JsonToken.get_END_DOCUMENT()) {
                reader.beginObject();
                var nextKey = reader.nextName();
                if (Kotlin.equals(nextKey, 'eClass')) {
                  var eclassValue = reader.nextString();
                  var loadedRootsSize = context.get_loadedRoots().size();
                  if (Kotlin.equals(eclassValue, 'org.cloud:Cloud')) {
                    context.get_loadedRoots().add(this.loadCloud(reader, context, '/' + loadedRootsSize));
                  }
                   else if (Kotlin.equals(eclassValue, 'org.cloud:Node')) {
                    context.get_loadedRoots().add(this.loadNode(reader, context, '/' + loadedRootsSize));
                  }
                   else if (Kotlin.equals(eclassValue, 'org.cloud:Software')) {
                    context.get_loadedRoots().add(this.loadSoftware(reader, context, '/' + loadedRootsSize));
                  }
                   else {
                    Kotlin.println("Unknown root type '" + eclassValue + "'. Loading of this element aborted.");
                  }
                }
                 else {
                  Kotlin.println("Ignored key '" + nextKey + "' while looking for the root element 'eClass'");
                }
                reader.endObject();
              }
              {
                var tmp$0 = context.get_resolvers().iterator();
                while (tmp$0.hasNext()) {
                  var res = tmp$0.next();
                  res.run();
                }
              }
              return context.get_loadedRoots();
            },
            unescapeJSON: function (src) {
              var builder = null;
              var i = 0;
              while (i < src.length) {
                var c = src.charAt(i);
                if (c === '&') {
                  if (builder == null) {
                    builder = src.substring(0, i);
                  }
                  if (src.charAt(i + 1) === 'a') {
                    var tmp$0;
                    builder = ((tmp$0 = builder) != null ? tmp$0 : Kotlin.throwNPE()) + "'";
                    i = i + 6;
                  }
                   else if (src.charAt(i + 1) === 'q') {
                    var tmp$1;
                    builder = ((tmp$1 = builder) != null ? tmp$1 : Kotlin.throwNPE()) + '"';
                    i = i + 6;
                  }
                   else {
                    Kotlin.println('Could not unescaped chain:' + src.charAt(i) + src.charAt(i + 1));
                  }
                }
                 else {
                  if (builder != null) {
                    var tmp$2;
                    builder = ((tmp$2 = builder) != null ? tmp$2 : Kotlin.throwNPE()) + c;
                  }
                  i++;
                }
              }
              if (builder != null) {
                var tmp$3;
                return (tmp$3 = builder) != null ? tmp$3 : Kotlin.throwNPE();
              }
               else {
                return src;
              }
            },
            loadCloud: function (reader, context, elementId) {
              var modelElem = this.get_mainFactory().getCloudFactory().createCloud();
              context.get_map().put(elementId, modelElem);
              while (reader.hasNext()) {
                var nextName = reader.nextName();
                if (nextName === 'generated_KMF_ID') {
                  var tmp$0;
                  modelElem.setGenerated_KMF_ID(this.unescapeJSON((tmp$0 = reader.nextString()) != null ? tmp$0 : Kotlin.throwNPE()));
                }
                 else if (nextName === 'nodes') {
                  reader.beginArray();
                  while (reader.hasNext()) {
                    reader.beginObject();
                    var i = context.get_elementsCount().get(elementId + '/@nodes') !== null ? context.get_elementsCount().get(elementId + '/@nodes') : 0;
                    var nodesElementId = elementId + '/@nodes.' + i;
                    var loadedElem = this.loadNode(reader, context, nodesElementId);
                    modelElem.addNodes(loadedElem);
                    context.get_elementsCount().put(elementId + '/@nodes', i + 1);
                    reader.endObject();
                  }
                  reader.endArray();
                }
                 else if (nextName === 'eClass') {
                  reader.nextString();
                }
                 else {
                  Kotlin.println('Tag unrecognized: ' + nextName + ' in Cloud');
                }
              }
              return modelElem;
            },
            loadNode: function (reader, context, elementId) {
              var modelElem = this.get_mainFactory().getCloudFactory().createNode();
              context.get_map().put(elementId, modelElem);
              while (reader.hasNext()) {
                var nextName = reader.nextName();
                if (nextName === 'id') {
                  var tmp$0;
                  modelElem.setId(this.unescapeJSON((tmp$0 = reader.nextString()) != null ? tmp$0 : Kotlin.throwNPE()));
                }
                 else if (nextName === 'softwares') {
                  reader.beginArray();
                  while (reader.hasNext()) {
                    reader.beginObject();
                    var i = context.get_elementsCount().get(elementId + '/@softwares') !== null ? context.get_elementsCount().get(elementId + '/@softwares') : 0;
                    var softwaresElementId = elementId + '/@softwares.' + i;
                    var loadedElem = this.loadSoftware(reader, context, softwaresElementId);
                    modelElem.addSoftwares(loadedElem);
                    context.get_elementsCount().put(elementId + '/@softwares', i + 1);
                    reader.endObject();
                  }
                  reader.endArray();
                }
                 else if (nextName === 'eClass') {
                  reader.nextString();
                }
                 else {
                  Kotlin.println('Tag unrecognized: ' + nextName + ' in Node');
                }
              }
              return modelElem;
            },
            loadSoftware: function (reader, context, elementId) {
              var modelElem = this.get_mainFactory().getCloudFactory().createSoftware();
              context.get_map().put(elementId, modelElem);
              while (reader.hasNext()) {
                var nextName = reader.nextName();
                if (nextName === 'name') {
                  var tmp$0;
                  modelElem.setName(this.unescapeJSON((tmp$0 = reader.nextString()) != null ? tmp$0 : Kotlin.throwNPE()));
                }
                 else if (nextName === 'eClass') {
                  reader.nextString();
                }
                 else {
                  Kotlin.println('Tag unrecognized: ' + nextName + ' in Software');
                }
              }
              return modelElem;
            }
          }),
          JsonReader: Kotlin.createClass({
            initialize: function (ins) {
              this.$PEEKED_NONE = 0;
              this.$PEEKED_BEGIN_OBJECT = 1;
              this.$PEEKED_END_OBJECT = 2;
              this.$PEEKED_BEGIN_ARRAY = 3;
              this.$PEEKED_END_ARRAY = 4;
              this.$PEEKED_TRUE = 5;
              this.$PEEKED_FALSE = 6;
              this.$PEEKED_NULL = 7;
              this.$PEEKED_SINGLE_QUOTED = 8;
              this.$PEEKED_DOUBLE_QUOTED = 9;
              this.$PEEKED_UNQUOTED = 10;
              this.$PEEKED_BUFFERED = 11;
              this.$PEEKED_SINGLE_QUOTED_NAME = 12;
              this.$PEEKED_DOUBLE_QUOTED_NAME = 13;
              this.$PEEKED_UNQUOTED_NAME = 14;
              this.$PEEKED_LONG = 15;
              this.$PEEKED_NUMBER = 16;
              this.$PEEKED_EOF = 17;
              this.$lexer = new _.org.cloud.loader.Lexer(ins);
              this.$token = null;
            },
            get_PEEKED_NONE: function () {
              return this.$PEEKED_NONE;
            },
            get_PEEKED_BEGIN_OBJECT: function () {
              return this.$PEEKED_BEGIN_OBJECT;
            },
            get_PEEKED_END_OBJECT: function () {
              return this.$PEEKED_END_OBJECT;
            },
            get_PEEKED_BEGIN_ARRAY: function () {
              return this.$PEEKED_BEGIN_ARRAY;
            },
            get_PEEKED_END_ARRAY: function () {
              return this.$PEEKED_END_ARRAY;
            },
            get_PEEKED_TRUE: function () {
              return this.$PEEKED_TRUE;
            },
            get_PEEKED_FALSE: function () {
              return this.$PEEKED_FALSE;
            },
            get_PEEKED_NULL: function () {
              return this.$PEEKED_NULL;
            },
            get_PEEKED_SINGLE_QUOTED: function () {
              return this.$PEEKED_SINGLE_QUOTED;
            },
            get_PEEKED_DOUBLE_QUOTED: function () {
              return this.$PEEKED_DOUBLE_QUOTED;
            },
            get_PEEKED_UNQUOTED: function () {
              return this.$PEEKED_UNQUOTED;
            },
            get_PEEKED_BUFFERED: function () {
              return this.$PEEKED_BUFFERED;
            },
            get_PEEKED_SINGLE_QUOTED_NAME: function () {
              return this.$PEEKED_SINGLE_QUOTED_NAME;
            },
            get_PEEKED_DOUBLE_QUOTED_NAME: function () {
              return this.$PEEKED_DOUBLE_QUOTED_NAME;
            },
            get_PEEKED_UNQUOTED_NAME: function () {
              return this.$PEEKED_UNQUOTED_NAME;
            },
            get_PEEKED_LONG: function () {
              return this.$PEEKED_LONG;
            },
            get_PEEKED_NUMBER: function () {
              return this.$PEEKED_NUMBER;
            },
            get_PEEKED_EOF: function () {
              return this.$PEEKED_EOF;
            },
            get_lexer: function () {
              return this.$lexer;
            },
            set_lexer: function (tmp$0) {
              this.$lexer = tmp$0;
            },
            get_token: function () {
              return this.$token;
            },
            set_token: function (tmp$0) {
              this.$token = tmp$0;
            },
            hasNext: function () {
              if (this.get_token() == null) {
                this.doPeek();
              }
              var t = this.get_token();
              return t.get_tokenType() !== _.org.cloud.loader.Type.get_RIGHT_BRACE() && t.get_tokenType() !== _.org.cloud.loader.Type.get_RIGHT_BRACKET();
            },
            doPeek: function () {
              this.set_token(this.get_lexer().nextToken());
              var t = this.get_token();
              if (t.get_tokenType() === _.org.cloud.loader.Type.get_COLON() || t.get_tokenType() === _.org.cloud.loader.Type.get_COMMA())
                this.doPeek();
              return this.get_token();
            },
            peek: function () {
              if (this.get_token() == null)
                this.doPeek();
              var t = this.get_token();
              var tmp$0 = t.get_tokenType();
              if (tmp$0 === _.org.cloud.loader.Type.get_LEFT_BRACE())
                return _.org.cloud.loader.JsonToken.get_BEGIN_OBJECT();
              else if (tmp$0 === _.org.cloud.loader.Type.get_RIGHT_BRACE())
                return _.org.cloud.loader.JsonToken.get_END_OBJECT();
              else if (tmp$0 === _.org.cloud.loader.Type.get_LEFT_BRACKET())
                return _.org.cloud.loader.JsonToken.get_BEGIN_ARRAY();
              else if (tmp$0 === _.org.cloud.loader.Type.get_RIGHT_BRACKET())
                return _.org.cloud.loader.JsonToken.get_END_ARRAY();
              else if (tmp$0 === _.org.cloud.loader.Type.get_VALUE())
                return _.org.cloud.loader.JsonToken.get_NAME();
              else if (tmp$0 === _.org.cloud.loader.Type.get_EOF())
                return _.org.cloud.loader.JsonToken.get_END_DOCUMENT();
              else
                return _.org.cloud.loader.JsonToken.get_NULL();
            },
            beginObject: function () {
              if (this.get_token() == null) {
                this.doPeek();
              }
              var t = this.get_token();
              if (t.get_tokenType() === _.org.cloud.loader.Type.get_LEFT_BRACE()) {
                this.set_token(null);
              }
               else {
                throw new Kotlin.IllegalStateException('Expected LEFT_BRACE but was ' + this.peek());
              }
            },
            endObject: function () {
              if (this.get_token() == null)
                this.doPeek();
              var t = this.get_token();
              if (t.get_tokenType() === _.org.cloud.loader.Type.get_RIGHT_BRACE()) {
                this.set_token(null);
              }
               else {
                throw new Kotlin.IllegalStateException('Expected RIGHT_BRACE but was ' + this.peek());
              }
            },
            beginArray: function () {
              if (this.get_token() == null)
                this.doPeek();
              var t = this.get_token();
              if (t.get_tokenType() === _.org.cloud.loader.Type.get_LEFT_BRACKET()) {
                this.set_token(null);
              }
               else {
                throw new Kotlin.IllegalStateException('Expected LEFT_BRACKET but was ' + this.peek());
              }
            },
            endArray: function () {
              if (this.get_token() == null)
                this.doPeek();
              var t = this.get_token();
              if (t.get_tokenType() === _.org.cloud.loader.Type.get_RIGHT_BRACKET()) {
                this.set_token(null);
              }
               else {
                throw new Kotlin.IllegalStateException('Expected RIGHT_BRACKET but was ' + this.peek());
              }
            },
            nextBoolean: function () {
              if (this.get_token() == null)
                this.doPeek();
              var t = this.get_token();
              var ret = false;
              if (t.get_tokenType() === _.org.cloud.loader.Type.get_VALUE()) {
                var tmp$0 = t.get_value();
                if (tmp$0 === true || tmp$0 === 'true')
                  ret = true;
                else if (tmp$0 === false || tmp$0 === 'false')
                  ret = false;
                else
                  ret = false;
                this.set_token(null);
              }
               else {
                throw new Kotlin.IllegalStateException('Expected VALUE(Boolean) but was ' + this.peek());
              }
              return ret;
            },
            nextString: function () {
              if (this.get_token() == null) {
                this.doPeek();
              }
              var t = this.get_token();
              var ret = '';
              if (t.get_tokenType() === _.org.cloud.loader.Type.get_VALUE()) {
                ret = t.get_value();
                this.set_token(null);
              }
               else {
                throw new Kotlin.IllegalStateException('Expected VALUE(String) but was ' + this.peek());
              }
              return ret;
            },
            nextInt: function () {
              if (this.get_token() == null)
                this.doPeek();
              var t = this.get_token();
              var ret = 42;
              if (t.get_tokenType() === _.org.cloud.loader.Type.get_VALUE()) {
                var tret = _.java.lang.IntegerParser.parseInt(t.get_value());
                if (tret != null) {
                  ret = tret;
                }
                this.set_token(null);
              }
               else {
                throw new Kotlin.IllegalStateException('Expected VALUE(Int) but was ' + this.peek());
              }
              return ret;
            },
            nextName: function () {
              if (this.get_token() == null) {
                this.doPeek();
              }
              var t = this.get_token();
              var ret = '';
              if (t.get_tokenType() === _.org.cloud.loader.Type.get_VALUE()) {
                ret = t.get_value();
                this.set_token(null);
              }
               else {
                throw new Kotlin.IllegalStateException('Expected VALUE(Name) but was ' + this.peek());
              }
              return ret;
            }
          }),
          JSONResolveCommand: Kotlin.createClass(classes.c9, {
            initialize: function (context, target, mutatorType, refName, ref) {
              this.$context = context;
              this.$target = target;
              this.$mutatorType = mutatorType;
              this.$refName = refName;
              this.$ref = ref;
            },
            get_context: function () {
              return this.$context;
            },
            get_target: function () {
              return this.$target;
            },
            get_mutatorType: function () {
              return this.$mutatorType;
            },
            get_refName: function () {
              return this.$refName;
            },
            get_ref: function () {
              return this.$ref;
            },
            run: function () {
              var referencedElement = this.get_context().get_map().get(this.get_ref());
              var i = 0;
              while (referencedElement == null && i < this.get_context().get_loadedRoots().size()) {
                var tmp$0;
                referencedElement = (tmp$0 = this.get_context().get_loadedRoots().get(i++)) != null ? tmp$0.findByPath(this.get_ref()) : null;
              }
              if (referencedElement != null) {
                this.get_target().reflexiveMutator(this.get_mutatorType(), this.get_refName(), referencedElement);
                return;
              }
              if (Kotlin.equals(this.get_ref(), '/0/') || Kotlin.equals(this.get_ref(), '/')) {
                referencedElement = this.get_context().get_map().get('/0');
                if (referencedElement != null) {
                  this.get_target().reflexiveMutator(this.get_mutatorType(), this.get_refName(), referencedElement);
                  return;
                }
              }
              throw new Kotlin.Exception('KMF Load error : reference ' + this.get_ref() + ' not found in map when trying to ' + this.get_mutatorType() + ' ' + this.get_refName() + ' on ' + this.get_target().toString());
            }
          }),
          Token: Kotlin.createClass({
            initialize: function (tokenType, value) {
              this.$tokenType = tokenType;
              this.$value = value;
            },
            get_tokenType: function () {
              return this.$tokenType;
            },
            get_value: function () {
              return this.$value;
            },
            toString: function () {
              var tmp$0;
              if (this.get_value() != null) {
                tmp$0 = ' (' + this.get_value() + ')';
              }
               else {
                tmp$0 = '';
              }
              var v = tmp$0;
              var result = this.get_tokenType().toString() + v;
              return result;
            }
          }),
          Lexer: Kotlin.createClass({
            initialize: function (inputStream) {
              this.$inputStream = inputStream;
              this.$bytes = this.get_inputStream().readBytes();
              this.$EOF = new _.org.cloud.loader.Token(_.org.cloud.loader.Type.get_EOF(), null);
              this.$index = 0;
              this.$BOOLEAN_LETTERS = null;
              this.$DIGIT = null;
            },
            get_inputStream: function () {
              return this.$inputStream;
            },
            get_bytes: function () {
              return this.$bytes;
            },
            get_EOF: function () {
              return this.$EOF;
            },
            get_index: function () {
              return this.$index;
            },
            set_index: function (tmp$0) {
              this.$index = tmp$0;
            },
            isSpace: function (c) {
              return c === ' ' || c === '\r' || c === '\n' || c === '\t';
            },
            nextChar: function () {
              var tmp$0, tmp$1;
              return this.get_bytes()[tmp$0 = this.get_index(), tmp$1 = tmp$0, this.set_index(tmp$0 + 1), tmp$1];
            },
            peekChar: function () {
              return this.get_bytes()[this.get_index()];
            },
            isDone: function () {
              return this.get_index() >= this.get_bytes().length;
            },
            get_BOOLEAN_LETTERS: function () {
              return this.$BOOLEAN_LETTERS;
            },
            set_BOOLEAN_LETTERS: function (tmp$0) {
              this.$BOOLEAN_LETTERS = tmp$0;
            },
            isBooleanLetter: function (c) {
              if (this.get_BOOLEAN_LETTERS() == null) {
                this.set_BOOLEAN_LETTERS(new Kotlin.PrimitiveHashSet());
                var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5, tmp$6, tmp$7;
                ((tmp$0 = this.get_BOOLEAN_LETTERS()) != null ? tmp$0 : Kotlin.throwNPE()).add('f');
                ((tmp$1 = this.get_BOOLEAN_LETTERS()) != null ? tmp$1 : Kotlin.throwNPE()).add('a');
                ((tmp$2 = this.get_BOOLEAN_LETTERS()) != null ? tmp$2 : Kotlin.throwNPE()).add('l');
                ((tmp$3 = this.get_BOOLEAN_LETTERS()) != null ? tmp$3 : Kotlin.throwNPE()).add('s');
                ((tmp$4 = this.get_BOOLEAN_LETTERS()) != null ? tmp$4 : Kotlin.throwNPE()).add('e');
                ((tmp$5 = this.get_BOOLEAN_LETTERS()) != null ? tmp$5 : Kotlin.throwNPE()).add('t');
                ((tmp$6 = this.get_BOOLEAN_LETTERS()) != null ? tmp$6 : Kotlin.throwNPE()).add('r');
                ((tmp$7 = this.get_BOOLEAN_LETTERS()) != null ? tmp$7 : Kotlin.throwNPE()).add('u');
              }
              var tmp$8;
              return ((tmp$8 = this.get_BOOLEAN_LETTERS()) != null ? tmp$8 : Kotlin.throwNPE()).contains(c);
            },
            get_DIGIT: function () {
              return this.$DIGIT;
            },
            set_DIGIT: function (tmp$0) {
              this.$DIGIT = tmp$0;
            },
            isDigit: function (c) {
              if (this.get_DIGIT() == null) {
                this.set_DIGIT(new Kotlin.PrimitiveHashSet());
                var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5, tmp$6, tmp$7, tmp$8, tmp$9;
                ((tmp$0 = this.get_DIGIT()) != null ? tmp$0 : Kotlin.throwNPE()).add('0');
                ((tmp$1 = this.get_DIGIT()) != null ? tmp$1 : Kotlin.throwNPE()).add('1');
                ((tmp$2 = this.get_DIGIT()) != null ? tmp$2 : Kotlin.throwNPE()).add('2');
                ((tmp$3 = this.get_DIGIT()) != null ? tmp$3 : Kotlin.throwNPE()).add('3');
                ((tmp$4 = this.get_DIGIT()) != null ? tmp$4 : Kotlin.throwNPE()).add('4');
                ((tmp$5 = this.get_DIGIT()) != null ? tmp$5 : Kotlin.throwNPE()).add('5');
                ((tmp$6 = this.get_DIGIT()) != null ? tmp$6 : Kotlin.throwNPE()).add('6');
                ((tmp$7 = this.get_DIGIT()) != null ? tmp$7 : Kotlin.throwNPE()).add('7');
                ((tmp$8 = this.get_DIGIT()) != null ? tmp$8 : Kotlin.throwNPE()).add('8');
                ((tmp$9 = this.get_DIGIT()) != null ? tmp$9 : Kotlin.throwNPE()).add('9');
              }
              var tmp$10;
              return ((tmp$10 = this.get_DIGIT()) != null ? tmp$10 : Kotlin.throwNPE()).contains(c);
            },
            isValueLetter: function (c) {
              return c === '-' || c === '+' || c === '.' || this.isDigit(c) || this.isBooleanLetter(c);
            },
            nextToken: function () {
              if (this.isDone()) {
                return this.get_EOF();
              }
              var tokenType = _.org.cloud.loader.Type.get_EOF();
              var c = this.nextChar();
              var currentValue = new _.java.lang.StringBuilder('');
              var jsonValue = null;
              while (!this.isDone() && this.isSpace(c)) {
                c = this.nextChar();
              }
              if ('"' === c) {
                tokenType = _.org.cloud.loader.Type.get_VALUE();
                if (!this.isDone()) {
                  c = this.nextChar();
                  while (this.get_index() < this.get_bytes().length && c !== '"') {
                    currentValue.append_0(c);
                    if (c === '\\' && this.get_index() < this.get_bytes().length) {
                      c = this.nextChar();
                      currentValue.append_0(c);
                    }
                    c = this.nextChar();
                  }
                  jsonValue = currentValue.toString();
                }
                 else {
                  throw new Kotlin.RuntimeException('Unterminated string');
                }
              }
               else if ('{' === c) {
                tokenType = _.org.cloud.loader.Type.get_LEFT_BRACE();
              }
               else if ('}' === c) {
                tokenType = _.org.cloud.loader.Type.get_RIGHT_BRACE();
              }
               else if ('[' === c) {
                tokenType = _.org.cloud.loader.Type.get_LEFT_BRACKET();
              }
               else if (']' === c) {
                tokenType = _.org.cloud.loader.Type.get_RIGHT_BRACKET();
              }
               else if (':' === c) {
                tokenType = _.org.cloud.loader.Type.get_COLON();
              }
               else if (',' === c) {
                tokenType = _.org.cloud.loader.Type.get_COMMA();
              }
               else if (!this.isDone()) {
                while (this.isValueLetter(c)) {
                  currentValue.append_0(c);
                  if (!this.isValueLetter(this.peekChar())) {
                    break;
                  }
                   else {
                    c = this.nextChar();
                  }
                }
                var v = currentValue.toString();
                if (Kotlin.equals('true', v.toLowerCase())) {
                  jsonValue = true;
                }
                 else if (Kotlin.equals('false', v.toLowerCase())) {
                  jsonValue = false;
                }
                 else {
                  jsonValue = v.toLowerCase();
                }
                tokenType = _.org.cloud.loader.Type.get_VALUE();
              }
               else {
                tokenType = _.org.cloud.loader.Type.get_EOF();
              }
              return new _.org.cloud.loader.Token(tokenType, jsonValue);
            }
          }),
          LoadingContext: Kotlin.createClass({
            initialize: function () {
              this.$loadedRoots = new Kotlin.ArrayList(0);
              this.$map = new Kotlin.PrimitiveHashMap(0);
              this.$elementsCount = new Kotlin.PrimitiveHashMap(0);
              this.$resolvers = new Kotlin.ArrayList(0);
              this.$stats = new Kotlin.PrimitiveHashMap(0);
            },
            get_loadedRoots: function () {
              return this.$loadedRoots;
            },
            set_loadedRoots: function (tmp$0) {
              this.$loadedRoots = tmp$0;
            },
            get_map: function () {
              return this.$map;
            },
            get_elementsCount: function () {
              return this.$elementsCount;
            },
            get_resolvers: function () {
              return this.$resolvers;
            },
            get_stats: function () {
              return this.$stats;
            }
          }),
          ModelLoader: classes.c8,
          ResolveCommand: classes.c9
        }),
        serializer: Kotlin.definePackage({
          JSONModelSerializer: Kotlin.createClass(classes.cb, {
            initialize: function () {
            },
            serialize: function (oMS) {
              var oo = new _.java.io.OutputStream();
              this.serialize_0(oMS, oo);
              oo.flush();
              return oo.get_result();
            },
            serialize_0: function (oMS, ostream) {
              var wt = new _.java.io.PrintStream(ostream);
              if (Kotlin.isType(oMS, _.org.cloud.impl.CloudImpl) || Kotlin.isType(oMS, _.org.cloud.Cloud)) {
                var context = this.getCloudJsonAddr(oMS, '/');
                this.CloudtoJson(oMS, context, wt);
              }
               else if (Kotlin.isType(oMS, _.org.cloud.impl.NodeImpl) || Kotlin.isType(oMS, _.org.cloud.Node)) {
                var context_0 = this.getNodeJsonAddr(oMS, '/');
                this.NodetoJson(oMS, context_0, wt);
              }
               else if (Kotlin.isType(oMS, _.org.cloud.impl.SoftwareImpl) || Kotlin.isType(oMS, _.org.cloud.Software)) {
                var context_1 = this.getSoftwareJsonAddr(oMS, '/');
                this.SoftwaretoJson(oMS, context_1, wt);
              }
               else {
              }
              wt.flush();
              wt.close();
            },
            escapeJson: function (ostream, chain) {
              var i = 0;
              while (i < _.js.get_size(chain)) {
                var c = chain.charAt(i);
                if (c === '"') {
                  ostream.print('&quot;');
                }
                 else if (c === "'") {
                  ostream.print('&apos;');
                }
                 else {
                  ostream.print_0(c);
                }
                i = i + 1;
              }
            },
            getCloudJsonAddr: function (selfObject, previousAddr) {
              var subResult = new Kotlin.ComplexHashMap(0);
              if (Kotlin.equals(previousAddr, '/')) {
                subResult.put(selfObject, '//');
              }
              var i = 0;
              {
                var tmp$0 = selfObject.getNodes().iterator();
                while (tmp$0.hasNext()) {
                  var sub = tmp$0.next();
                  var subPath_nodes = sub.path();
                  if (subPath_nodes != null) {
                    subResult.put(sub, subPath_nodes);
                  }
                   else {
                    subResult.put(sub, previousAddr + '/@nodes.' + i);
                  }
                  subResult.putAll(this.getNodeJsonAddr(sub, previousAddr + '/@nodes.' + i));
                  i = i + 1;
                }
              }
              return subResult;
            },
            CloudtoJson: function (selfObject, addrs, ostream) {
              {
                ostream.print_0('{');
                ostream.print(' "eClass":"org.cloud:Cloud" ');
                if (!Kotlin.equals(selfObject.getGenerated_KMF_ID().toString(), '')) {
                  ostream.println_1(',');
                  ostream.print(' "generated_KMF_ID":');
                  ostream.print('"');
                  this.escapeJson(ostream, selfObject.getGenerated_KMF_ID());
                  ostream.print_0('"');
                }
                if (selfObject.getNodes().size() > 0) {
                  ostream.println_1(',');
                  ostream.println_0('"nodes": [');
                  var iloop_first_nodes = true;
                  {
                    var tmp$0 = selfObject.getNodes().iterator();
                    while (tmp$0.hasNext()) {
                      var so = tmp$0.next();
                      if (!iloop_first_nodes) {
                        ostream.println_1(',');
                      }
                      this.NodetoJson(so, addrs, ostream);
                      iloop_first_nodes = false;
                    }
                  }
                  ostream.println_1(']');
                }
                ostream.println_1('}');
              }
            },
            getNodeJsonAddr: function (selfObject, previousAddr) {
              var subResult = new Kotlin.ComplexHashMap(0);
              if (Kotlin.equals(previousAddr, '/')) {
                subResult.put(selfObject, '//');
              }
              var i = 0;
              {
                var tmp$0 = selfObject.getSoftwares().iterator();
                while (tmp$0.hasNext()) {
                  var sub = tmp$0.next();
                  var subPath_softwares = sub.path();
                  if (subPath_softwares != null) {
                    subResult.put(sub, subPath_softwares);
                  }
                   else {
                    subResult.put(sub, previousAddr + '/@softwares.' + i);
                  }
                  subResult.putAll(this.getSoftwareJsonAddr(sub, previousAddr + '/@softwares.' + i));
                  i = i + 1;
                }
              }
              return subResult;
            },
            NodetoJson: function (selfObject, addrs, ostream) {
              {
                ostream.print_0('{');
                ostream.print(' "eClass":"org.cloud:Node" ');
                if (!Kotlin.equals(selfObject.getId().toString(), '')) {
                  ostream.println_1(',');
                  ostream.print(' "id":');
                  ostream.print('"');
                  this.escapeJson(ostream, selfObject.getId());
                  ostream.print_0('"');
                }
                if (selfObject.getSoftwares().size() > 0) {
                  ostream.println_1(',');
                  ostream.println_0('"softwares": [');
                  var iloop_first_softwares = true;
                  {
                    var tmp$0 = selfObject.getSoftwares().iterator();
                    while (tmp$0.hasNext()) {
                      var so = tmp$0.next();
                      if (!iloop_first_softwares) {
                        ostream.println_1(',');
                      }
                      this.SoftwaretoJson(so, addrs, ostream);
                      iloop_first_softwares = false;
                    }
                  }
                  ostream.println_1(']');
                }
                ostream.println_1('}');
              }
            },
            getSoftwareJsonAddr: function (selfObject, previousAddr) {
              var subResult = new Kotlin.ComplexHashMap(0);
              if (Kotlin.equals(previousAddr, '/')) {
                subResult.put(selfObject, '//');
              }
              return subResult;
            },
            SoftwaretoJson: function (selfObject, addrs, ostream) {
              {
                ostream.print_0('{');
                ostream.print(' "eClass":"org.cloud:Software" ');
                if (!Kotlin.equals(selfObject.getName().toString(), '')) {
                  ostream.println_1(',');
                  ostream.print(' "name":');
                  ostream.print('"');
                  this.escapeJson(ostream, selfObject.getName());
                  ostream.print_0('"');
                }
                ostream.println_1('}');
              }
            }
          }),
          ModelSerializer: classes.cb
        }),
        trace: Kotlin.definePackage({
          Event2Trace: Kotlin.createClass({
            initialize: function () {
              this.$compare = new _.org.cloud.compare.ModelCompare();
            },
            get_compare: function () {
              return this.$compare;
            },
            convert: function (event) {
              var result = new Kotlin.ArrayList(0);
              var tmp$0 = event.getType();
              if (tmp$0 === _.org.cloud.util.ActionType.get_REMOVE()) {
                var tmp$1, tmp$2, tmp$3;
                result.add(new _.org.cloud.trace.ModelRemoveTrace((tmp$1 = event.getSourcePath()) != null ? tmp$1 : Kotlin.throwNPE(), (tmp$2 = event.getElementAttributeName()) != null ? tmp$2 : Kotlin.throwNPE(), (tmp$3 = event.getValue().path()) != null ? tmp$3 : Kotlin.throwNPE()));
              }
               else if (tmp$0 === _.org.cloud.util.ActionType.get_REMOVE()) {
                var tmp$4, tmp$5;
                result.add(new _.org.cloud.trace.ModelRemoveAllTrace((tmp$4 = event.getSourcePath()) != null ? tmp$4 : Kotlin.throwNPE(), (tmp$5 = event.getElementAttributeName()) != null ? tmp$5 : Kotlin.throwNPE()));
              }
               else if (tmp$0 === _.org.cloud.util.ActionType.get_ADD()) {
                var casted = event.getValue();
                var traces = this.get_compare().inter(casted, casted);
                var tmp$6, tmp$7;
                result.add(new _.org.cloud.trace.ModelAddTrace((tmp$6 = event.getSourcePath()) != null ? tmp$6 : Kotlin.throwNPE(), (tmp$7 = event.getElementAttributeName()) != null ? tmp$7 : Kotlin.throwNPE(), casted.path(), casted.metaClassName()));
                result.addAll(traces);
              }
               else if (tmp$0 === _.org.cloud.util.ActionType.get_ADD_ALL()) {
                var casted_0 = event.getValue();
                var paths = new Kotlin.ArrayList(0);
                var types = new Kotlin.ArrayList(0);
                {
                  var tmp$8 = casted_0.iterator();
                  while (tmp$8.hasNext()) {
                    var elem = tmp$8.next();
                    var elemCasted = elem;
                    var traces_0 = this.get_compare().inter(elemCasted, elemCasted);
                    var tmp$9, tmp$10;
                    result.add(new _.org.cloud.trace.ModelAddTrace((tmp$9 = event.getSourcePath()) != null ? tmp$9 : Kotlin.throwNPE(), (tmp$10 = event.getElementAttributeName()) != null ? tmp$10 : Kotlin.throwNPE(), elemCasted.path(), elemCasted.metaClassName()));
                    result.addAll(traces_0);
                  }
                }
              }
               else if (tmp$0 === _.org.cloud.util.ActionType.get_SET()) {
                if (event.getElementAttributeType() === _.org.cloud.util.ElementAttributeType.get_ATTRIBUTE()) {
                  var tmp$11, tmp$12;
                  result.add(new _.org.cloud.trace.ModelSetTrace((tmp$11 = event.getSourcePath()) != null ? tmp$11 : Kotlin.throwNPE(), (tmp$12 = event.getElementAttributeName()) != null ? tmp$12 : Kotlin.throwNPE(), null, event.getValue().toString(), null));
                }
                 else {
                  var tmp$13, tmp$14;
                  result.add(new _.org.cloud.trace.ModelSetTrace((tmp$13 = event.getSourcePath()) != null ? tmp$13 : Kotlin.throwNPE(), (tmp$14 = event.getElementAttributeName()) != null ? tmp$14 : Kotlin.throwNPE(), event.getValue().path(), null, null));
                }
              }
               else if (tmp$0 === _.org.cloud.util.ActionType.get_RENEW_INDEX()) {
              }
               else {
                throw new Kotlin.Exception("Can't convert event : " + event);
              }
              return (new _.org.cloud.trace.TraceSequence()).populate(result);
            }
          }),
          ModelTrace: classes.cd,
          ModelAddTrace: Kotlin.createClass(classes.cd, {
            initialize: function (srcPath, refName, previousPath, typeName) {
              this.$srcPath = srcPath;
              this.$refName = refName;
              this.$previousPath = previousPath;
              this.$typeName = typeName;
            },
            get_srcPath: function () {
              return this.$srcPath;
            },
            get_refName: function () {
              return this.$refName;
            },
            get_previousPath: function () {
              return this.$previousPath;
            },
            get_typeName: function () {
              return this.$typeName;
            },
            toString: function () {
              var buffer = new _.java.lang.StringBuilder('');
              buffer.append('{ "traceType" : ' + _.org.cloud.util.ActionType.get_ADD() + ' , "src" : "' + this.get_srcPath() + '", "refname" : "' + this.get_refName() + '"');
              if (this.get_previousPath() != null) {
                buffer.append(', "previouspath" : "' + this.get_previousPath() + '"');
              }
              if (this.get_typeName() != null) {
                buffer.append(', "typename" : "' + this.get_typeName() + '"');
              }
              buffer.append('}');
              return buffer.toString();
            }
          }),
          ModelAddAllTrace: Kotlin.createClass(classes.cd, {
            initialize: function (srcPath, refName, previousPath, typeName) {
              this.$srcPath = srcPath;
              this.$refName = refName;
              this.$previousPath = previousPath;
              this.$typeName = typeName;
            },
            get_srcPath: function () {
              return this.$srcPath;
            },
            get_refName: function () {
              return this.$refName;
            },
            get_previousPath: function () {
              return this.$previousPath;
            },
            get_typeName: function () {
              return this.$typeName;
            },
            mkString: function (ss) {
              if (ss == null) {
                return null;
              }
              var buffer = new _.java.lang.StringBuilder('');
              var isFirst = true;
              {
                var tmp$0 = ss.iterator();
                while (tmp$0.hasNext()) {
                  var s = tmp$0.next();
                  if (!isFirst) {
                    buffer.append(',');
                  }
                  buffer.append(s);
                  isFirst = false;
                }
              }
              return buffer.toString();
            },
            toString: function () {
              var buffer = new _.java.lang.StringBuilder('');
              buffer.append('{ "traceType" : ' + _.org.cloud.util.ActionType.get_ADD_ALL() + ' , "src" : "' + this.get_srcPath() + '", "refname" : "' + this.get_refName() + '"');
              if (this.get_previousPath() != null) {
                buffer.append(', "previouspath" : "' + this.mkString(this.get_previousPath()) + '"');
              }
              if (this.get_typeName() != null) {
                buffer.append(', "typename" : "' + this.mkString(this.get_typeName()) + '"');
              }
              buffer.append('}');
              return buffer.toString();
            }
          }),
          ModelRemoveTrace: Kotlin.createClass(classes.cd, {
            initialize: function (srcPath, refName, objPath) {
              this.$srcPath = srcPath;
              this.$refName = refName;
              this.$objPath = objPath;
            },
            get_srcPath: function () {
              return this.$srcPath;
            },
            get_refName: function () {
              return this.$refName;
            },
            get_objPath: function () {
              return this.$objPath;
            },
            toString: function () {
              return '{ "traceType" : ' + _.org.cloud.util.ActionType.get_REMOVE() + ' , "src" : "' + this.get_srcPath() + '", "refname" : "' + this.get_refName() + '", "objpath" : "' + this.get_objPath() + '" }';
            }
          }),
          ModelRemoveAllTrace: Kotlin.createClass(classes.cd, {
            initialize: function (srcPath, refName) {
              this.$srcPath = srcPath;
              this.$refName = refName;
            },
            get_srcPath: function () {
              return this.$srcPath;
            },
            get_refName: function () {
              return this.$refName;
            },
            toString: function () {
              return '{ "traceType" : ' + _.org.cloud.util.ActionType.get_REMOVE_ALL() + ' , "src" : "' + this.get_srcPath() + '", "refname" : "' + this.get_refName() + '" }';
            }
          }),
          ModelSetTrace: Kotlin.createClass(classes.cd, {
            initialize: function (srcPath, refName, objPath, content, typeName) {
              this.$srcPath = srcPath;
              this.$refName = refName;
              this.$objPath = objPath;
              this.$content = content;
              this.$typeName = typeName;
            },
            get_srcPath: function () {
              return this.$srcPath;
            },
            get_refName: function () {
              return this.$refName;
            },
            get_objPath: function () {
              return this.$objPath;
            },
            get_content: function () {
              return this.$content;
            },
            get_typeName: function () {
              return this.$typeName;
            },
            toString: function () {
              var buffer = new _.java.lang.StringBuilder('');
              buffer.append('{ "traceType" : ' + _.org.cloud.util.ActionType.get_SET() + ' , "src" : "' + this.get_srcPath() + '", "refname" : "' + this.get_refName() + '"');
              if (this.get_objPath() != null) {
                buffer.append(', "objpath" : "' + this.get_objPath() + '"');
              }
              if (this.get_content() != null) {
                buffer.append(', "content" : "' + this.get_content() + '"');
              }
              if (this.get_typeName() != null) {
                buffer.append(', "typename" : "' + this.get_typeName() + '"');
              }
              buffer.append('}');
              return buffer.toString();
            }
          }),
          TraceSequence: Kotlin.createClass({
            initialize: function () {
              this.$traces = new Kotlin.ArrayList(0);
            },
            get_traces: function () {
              return this.$traces;
            },
            set_traces: function (tmp$0) {
              this.$traces = tmp$0;
            },
            getTraces: function () {
              return this.get_traces();
            },
            populate: function (addtraces) {
              this.get_traces().addAll(addtraces);
              return this;
            },
            populateFromString: function (addtracesTxt) {
              var bytes = Kotlin.numberArrayOfSize(addtracesTxt.length);
              var i = 0;
              while (i < addtracesTxt.length) {
                bytes[i] = addtracesTxt.charAt(i);
                i = i + 1;
              }
              return this.populateFromStream(new _.java.io.ByteArrayInputStream(bytes));
            },
            populateFromStream: function (inputStream) {
              var parser = new _.org.cloud.loader.JsonReader(inputStream);
              parser.beginArray();
              var keys = new Kotlin.PrimitiveHashMap(0);
              while (parser.hasNext() && parser.peek() !== parser.get_PEEKED_END_ARRAY()) {
                parser.beginObject();
                keys.clear();
                parser.nextName();
                var value = parser.nextInt();
                while (parser.hasNext() && parser.peek() !== parser.get_PEEKED_END_OBJECT()) {
                  keys.put(parser.nextName(), parser.nextString());
                }
                parser.endObject();
                if (value === _.org.cloud.util.ActionType.get_SET()) {
                  var tmp$0, tmp$1;
                  this.get_traces().add(new _.org.cloud.trace.ModelSetTrace((tmp$0 = keys.get('src')) != null ? tmp$0 : Kotlin.throwNPE(), (tmp$1 = keys.get('refname')) != null ? tmp$1 : Kotlin.throwNPE(), keys.get('objpath'), keys.get('content'), keys.get('typename')));
                }
                 else if (value === _.org.cloud.util.ActionType.get_ADD()) {
                  var tmp$2, tmp$3, tmp$4;
                  this.get_traces().add(new _.org.cloud.trace.ModelAddTrace((tmp$2 = keys.get('src')) != null ? tmp$2 : Kotlin.throwNPE(), (tmp$3 = keys.get('refname')) != null ? tmp$3 : Kotlin.throwNPE(), (tmp$4 = keys.get('previouspath')) != null ? tmp$4 : Kotlin.throwNPE(), keys.get('typename')));
                }
                 else if (value === _.org.cloud.util.ActionType.get_ADD_ALL()) {
                  var tmp$5, tmp$6, tmp$7, tmp$8, tmp$9, tmp$10;
                  this.get_traces().add(new _.org.cloud.trace.ModelAddAllTrace((tmp$5 = keys.get('src')) != null ? tmp$5 : Kotlin.throwNPE(), (tmp$6 = keys.get('refname')) != null ? tmp$6 : Kotlin.throwNPE(), (tmp$8 = (tmp$7 = keys.get('content')) != null ? Kotlin.splitString(tmp$7, ';') : null) != null ? _.kotlin.toList_0(tmp$8) : null, (tmp$10 = (tmp$9 = keys.get('typename')) != null ? Kotlin.splitString(tmp$9, ';') : null) != null ? _.kotlin.toList_0(tmp$10) : null));
                }
                 else if (value === _.org.cloud.util.ActionType.get_REMOVE()) {
                  var tmp$11, tmp$12, tmp$13;
                  this.get_traces().add(new _.org.cloud.trace.ModelRemoveTrace((tmp$11 = keys.get('src')) != null ? tmp$11 : Kotlin.throwNPE(), (tmp$12 = keys.get('refname')) != null ? tmp$12 : Kotlin.throwNPE(), (tmp$13 = keys.get('objpath')) != null ? tmp$13 : Kotlin.throwNPE()));
                }
                 else if (value === _.org.cloud.util.ActionType.get_REMOVE_ALL()) {
                  var tmp$14, tmp$15;
                  this.get_traces().add(new _.org.cloud.trace.ModelRemoveAllTrace((tmp$14 = keys.get('src')) != null ? tmp$14 : Kotlin.throwNPE(), (tmp$15 = keys.get('refname')) != null ? tmp$15 : Kotlin.throwNPE()));
                }
                 else if (value === _.org.cloud.util.ActionType.get_RENEW_INDEX()) {
                }
                 else {
                }
              }
              return this;
            },
            exportToString: function () {
              var buffer = new _.java.lang.StringBuilder('');
              buffer.append('[');
              var isFirst = true;
              {
                var tmp$0 = this.get_traces().iterator();
                while (tmp$0.hasNext()) {
                  var trace = tmp$0.next();
                  if (!isFirst) {
                    buffer.append(',');
                  }
                  buffer.append(trace.toString());
                  isFirst = false;
                }
              }
              buffer.append(']');
              return buffer.toString();
            }
          }),
          ModelTraceApplicator: Kotlin.createClass({
            initialize: function (targetModel) {
              this.$targetModel = targetModel;
              this.$factory = new _.org.cloud.factory.MainFactory();
              this.$pendingObj = null;
              this.$pendingParent = null;
              this.$pendingParentRefName = null;
              this.$pendingObjPath = null;
            },
            get_targetModel: function () {
              return this.$targetModel;
            },
            get_factory: function () {
              return this.$factory;
            },
            set_factory: function (tmp$0) {
              this.$factory = tmp$0;
            },
            get_pendingObj: function () {
              return this.$pendingObj;
            },
            set_pendingObj: function (tmp$0) {
              this.$pendingObj = tmp$0;
            },
            get_pendingParent: function () {
              return this.$pendingParent;
            },
            set_pendingParent: function (tmp$0) {
              this.$pendingParent = tmp$0;
            },
            get_pendingParentRefName: function () {
              return this.$pendingParentRefName;
            },
            set_pendingParentRefName: function (tmp$0) {
              this.$pendingParentRefName = tmp$0;
            },
            get_pendingObjPath: function () {
              return this.$pendingObjPath;
            },
            set_pendingObjPath: function (tmp$0) {
              this.$pendingObjPath = tmp$0;
            },
            tryClosePending: function (srcPath) {
              if (this.get_pendingObj() != null && !Kotlin.equals(this.get_pendingObjPath(), srcPath)) {
                var tmp$0, tmp$1;
                ((tmp$0 = this.get_pendingParent()) != null ? tmp$0 : Kotlin.throwNPE()).reflexiveMutator(_.org.cloud.util.ActionType.get_ADD(), (tmp$1 = this.get_pendingParentRefName()) != null ? tmp$1 : Kotlin.throwNPE(), this.get_pendingObj());
                this.set_pendingObj(null);
                this.set_pendingObjPath(null);
                this.set_pendingParentRefName(null);
                this.set_pendingParent(null);
              }
            },
            createOrAdd: function (previousPath, target, refName, potentialTypeName) {
              var tmp$0;
              if (previousPath != null) {
                tmp$0 = this.get_targetModel().findByPath(previousPath);
              }
               else {
                tmp$0 = null;
              }
              var targetElem = tmp$0;
              if (targetElem != null) {
                target.reflexiveMutator(_.org.cloud.util.ActionType.get_ADD(), refName, targetElem);
              }
               else {
                var tmp$1;
                this.set_pendingObj(this.get_factory().create((tmp$1 = potentialTypeName) != null ? tmp$1 : Kotlin.throwNPE()));
                this.set_pendingObjPath(previousPath);
                this.set_pendingParentRefName(refName);
                this.set_pendingParent(target);
              }
            },
            applyTraceOnModel: function (traceSeq) {
              {
                var tmp$0 = traceSeq.getTraces().iterator();
                while (tmp$0.hasNext()) {
                  var trace = tmp$0.next();
                  var target = this.get_targetModel();
                  if (Kotlin.isType(trace, _.org.cloud.trace.ModelAddTrace)) {
                    var castedTrace = trace;
                    this.tryClosePending(trace.get_srcPath());
                    if (!Kotlin.equals(trace.get_srcPath(), '')) {
                      target = this.get_targetModel().findByPath(castedTrace.get_srcPath());
                    }
                    this.createOrAdd(castedTrace.get_previousPath(), target, castedTrace.get_refName(), castedTrace.get_typeName());
                  }
                  if (Kotlin.isType(trace, _.org.cloud.trace.ModelAddAllTrace)) {
                    var castedTrace_0 = trace;
                    this.tryClosePending(trace.get_srcPath());
                    var i = 0;
                    var tmp$1;
                    {
                      var tmp$2 = ((tmp$1 = castedTrace_0.get_previousPath()) != null ? tmp$1 : Kotlin.throwNPE()).iterator();
                      while (tmp$2.hasNext()) {
                        var path = tmp$2.next();
                        var tmp$3;
                        this.createOrAdd(path, target, castedTrace_0.get_refName(), ((tmp$3 = castedTrace_0.get_typeName()) != null ? tmp$3 : Kotlin.throwNPE()).get(i));
                        i++;
                      }
                    }
                  }
                  if (Kotlin.isType(trace, _.org.cloud.trace.ModelRemoveTrace)) {
                    var castedTrace_1 = trace;
                    this.tryClosePending(trace.get_srcPath());
                    if (!Kotlin.equals(trace.get_srcPath(), '')) {
                      target = this.get_targetModel().findByPath(castedTrace_1.get_srcPath());
                    }
                    target.reflexiveMutator(_.org.cloud.util.ActionType.get_REMOVE(), castedTrace_1.get_refName(), this.get_targetModel().findByPath(castedTrace_1.get_objPath()));
                  }
                  if (Kotlin.isType(trace, _.org.cloud.trace.ModelRemoveAllTrace)) {
                    var castedTrace_2 = trace;
                    this.tryClosePending(trace.get_srcPath());
                    if (!Kotlin.equals(trace.get_srcPath(), '')) {
                      target = this.get_targetModel().findByPath(castedTrace_2.get_srcPath());
                    }
                    target.reflexiveMutator(_.org.cloud.util.ActionType.get_REMOVE_ALL(), castedTrace_2.get_refName(), null);
                  }
                  if (Kotlin.isType(trace, _.org.cloud.trace.ModelSetTrace)) {
                    var castedTrace_3 = trace;
                    this.tryClosePending(trace.get_srcPath());
                    if (!Kotlin.equals(trace.get_srcPath(), '') && !Kotlin.equals(castedTrace_3.get_srcPath(), this.get_pendingObjPath())) {
                      target = this.get_targetModel().findByPath(castedTrace_3.get_srcPath());
                    }
                     else {
                      if (Kotlin.equals(castedTrace_3.get_srcPath(), this.get_pendingObjPath()) && this.get_pendingObj() != null) {
                        var tmp$4;
                        target = (tmp$4 = this.get_pendingObj()) != null ? tmp$4 : Kotlin.throwNPE();
                      }
                    }
                    if (castedTrace_3.get_content() != null) {
                      target.reflexiveMutator(_.org.cloud.util.ActionType.get_SET(), castedTrace_3.get_refName(), castedTrace_3.get_content());
                    }
                     else {
                      var tmp$6;
                      if (castedTrace_3.get_objPath() != null) {
                        var tmp$5;
                        tmp$6 = this.get_targetModel().findByPath((tmp$5 = castedTrace_3.get_objPath()) != null ? tmp$5 : Kotlin.throwNPE());
                      }
                       else {
                        tmp$6 = null;
                      }
                      var targetContentPath = tmp$6;
                      if (targetContentPath != null) {
                        target.reflexiveMutator(_.org.cloud.util.ActionType.get_SET(), castedTrace_3.get_refName(), targetContentPath);
                      }
                       else {
                        if (castedTrace_3.get_typeName() != null && !Kotlin.equals(castedTrace_3.get_typeName(), '')) {
                          this.createOrAdd(castedTrace_3.get_objPath(), target, castedTrace_3.get_refName(), castedTrace_3.get_typeName());
                        }
                         else {
                          target.reflexiveMutator(_.org.cloud.util.ActionType.get_SET(), castedTrace_3.get_refName(), targetContentPath);
                        }
                      }
                    }
                  }
                }
              }
              this.tryClosePending('#Fake#Path');
            }
          })
        }),
        util: Kotlin.definePackage({
        })
      }),
      w3c: Kotlin.definePackage({
        dom: Kotlin.definePackage({
          events: Kotlin.definePackage({
            EventListener: classes.ce
          })
        })
      })
    }),
    js: Kotlin.definePackage({
      lastIndexOf: function (receiver, ch, fromIndex) {
        return receiver.lastIndexOf(ch.toString(), fromIndex);
      },
      lastIndexOf_0: function (receiver, ch) {
        return receiver.lastIndexOf(ch.toString());
      },
      indexOf: function (receiver, ch) {
        return receiver.indexOf(ch.toString());
      },
      indexOf_0: function (receiver, ch, fromIndex) {
        return receiver.indexOf(ch.toString(), fromIndex);
      },
      matches: function (receiver, regex) {
        var result = receiver.match(regex);
        return result != null && result.length > 0;
      },
      length: function (receiver) {
        return receiver.length;
      },
      get_size: function (receiver) {
        return receiver.length;
      },
      startsWith_0: function (receiver, ch) {
        return _.js.get_size(receiver) > 0 ? receiver.charAt(0) === ch : false;
      },
      endsWith: function (receiver, ch) {
        var s = _.js.get_size(receiver);
        return s > 0 ? receiver.charAt(s - 1) === ch : false;
      },
      startsWith: function (receiver, text) {
        var size = text.length;
        var tmp$0;
        if (size <= receiver.length) {
          tmp$0 = Kotlin.equals(receiver.substring(0, size), text);
        }
         else
          tmp$0 = false;
        return tmp$0;
      },
      endsWith_0: function (receiver, text) {
        var matchSize = text.length;
        var thisSize = receiver.length;
        var tmp$0;
        if (matchSize <= thisSize) {
          tmp$0 = Kotlin.equals(receiver.substring(thisSize - matchSize, thisSize), text);
        }
         else
          tmp$0 = false;
        return tmp$0;
      },
      capitalize: function (receiver) {
        return _.kotlin.notEmpty(receiver) ? receiver.substring(0, 1).toUpperCase() + receiver.substring(1) : receiver;
      },
      decapitalize: function (receiver) {
        return _.kotlin.notEmpty(receiver) ? receiver.substring(0, 1).toLowerCase() + receiver.substring(1) : receiver;
      }
    }),
    kotlin: Kotlin.definePackage({
      set: function (receiver, key, value) {
        receiver.put(key, value);
      },
      hashMap: function (values) {
        var answer = new Kotlin.ComplexHashMap(0);
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = values, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var v = tmp$0[tmp$2];
            {
              answer.put(v.get_first(), v.get_second());
            }
          }
        }
        return answer;
      },
      Pair: Kotlin.createClass({
        initialize: function (first, second) {
          this.$first = first;
          this.$second = second;
        },
        get_first: function () {
          return this.$first;
        },
        get_second: function () {
          return this.$second;
        },
        component1: function () {
          return this.get_first();
        },
        component2: function () {
          return this.get_second();
        },
        toString: function () {
          return '(' + this.get_first().toString() + ', ' + this.get_second().toString() + ')';
        }
      }),
      Triple: Kotlin.createClass({
        initialize: function (first, second, third) {
          this.$first = first;
          this.$second = second;
          this.$third = third;
        },
        get_first: function () {
          return this.$first;
        },
        get_second: function () {
          return this.$second;
        },
        get_third: function () {
          return this.$third;
        },
        component1: function () {
          return this.get_first();
        },
        component2: function () {
          return this.get_second();
        },
        component3: function () {
          return this.get_third();
        },
        toString: function () {
          return '(' + this.get_first().toString() + ', ' + this.get_second().toString() + ', ' + this.get_third().toString() + ')';
        }
      }),
      toString: function (receiver) {
        return _.kotlin.makeString(receiver, ', ', '[', ']', -1, '...');
      },
      equals: function (receiver, that) {
        var s1 = receiver.size();
        var s2 = that.size();
        if (s1 === s2) {
          var tmp$0, tmp$1, tmp$2, tmp$3;
          {
            tmp$0 = new Kotlin.NumberRange(0, s1), tmp$1 = tmp$0.get_start(), tmp$2 = tmp$0.get_end(), tmp$3 = tmp$0.get_increment();
            for (var i = tmp$1; i <= tmp$2; i += tmp$3) {
              var elem1 = receiver.get(i);
              var elem2 = that.get(i);
              if (!Kotlin.equals(elem1, elem2)) {
                return false;
              }
            }
          }
          return true;
        }
        return false;
      },
      arrayList: function (values) {
        var list = new Kotlin.ArrayList(0);
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = values, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var value = tmp$0[tmp$2];
            {
              list.add(value);
            }
          }
        }
        return list;
      },
      hashSet: function (values) {
        var list = new Kotlin.ComplexHashSet();
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = values, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var value = tmp$0[tmp$2];
            {
              list.add(value);
            }
          }
        }
        return list;
      },
      map: function (receiver, transform) {
        return _.kotlin.mapTo(receiver, new Kotlin.ArrayList(0), transform);
      },
      mapValues: function (receiver, transform) {
        return _.kotlin.mapValuesTo(receiver, new Kotlin.ComplexHashMap(0), transform);
      },
      all: function (receiver, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (!predicate.call(this, element))
              return false;
          }
        }
        return true;
      },
      any: function (receiver, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              return true;
          }
        }
        return false;
      },
      count: function (receiver, predicate) {
        var count = 0;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              count++;
          }
        }
        return count;
      },
      find: function (receiver, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              return element;
          }
        }
        return null;
      },
      filter: function (receiver, predicate) {
        return _.kotlin.filterTo(receiver, new Kotlin.ArrayList(0), predicate);
      },
      filterTo: function (receiver, result, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      filterNot: function (receiver, predicate) {
        return _.kotlin.filterNotTo(receiver, new Kotlin.ArrayList(0), predicate);
      },
      filterNotTo: function (receiver, result, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (!predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      partition: function (receiver, predicate) {
        var first = new Kotlin.ArrayList(0);
        var second = new Kotlin.ArrayList(0);
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element)) {
              first.add(element);
            }
             else {
              second.add(element);
            }
          }
        }
        return new _.kotlin.Pair(first, second);
      },
      map_0: function (receiver, transform) {
        return _.kotlin.mapTo_0(receiver, new Kotlin.ArrayList(0), transform);
      },
      mapTo_0: function (receiver, result, transform) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var item = tmp$0.next();
            result.add(transform.call(this, item));
          }
        }
        return result;
      },
      flatMap: function (receiver, transform) {
        return _.kotlin.flatMapTo(receiver, new Kotlin.ArrayList(0), transform);
      },
      flatMapTo: function (receiver, result, transform) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            var list = transform.call(this, element);
            {
              var tmp$1 = list.iterator();
              while (tmp$1.hasNext()) {
                var r = tmp$1.next();
                result.add(r);
              }
            }
          }
        }
        return result;
      },
      forEach: function (receiver, operation) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            operation.call(this, element);
          }
        }
      },
      fold: function (receiver, initial, operation) {
        var answer = initial;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            answer = operation.call(this, answer, element);
          }
        }
        return answer;
      },
      foldRight: function (receiver, initial, operation) {
        var r = initial;
        var index = receiver.length - 1;
        while (index >= 0) {
          r = operation.call(this, receiver[index--], r);
        }
        return r;
      },
      reduce: function (receiver, operation) {
        var iterator = Kotlin.arrayIterator(receiver);
        if (!iterator.hasNext()) {
          throw new Kotlin.UnsupportedOperationException("Empty iterable can't be reduced");
        }
        var result = iterator.next();
        while (iterator.hasNext()) {
          result = operation.call(this, result, iterator.next());
        }
        return result;
      },
      reduceRight: function (receiver, operation) {
        var index = receiver.length - 1;
        if (index < 0) {
          throw new Kotlin.UnsupportedOperationException("Empty iterable can't be reduced");
        }
        var r = receiver[index--];
        while (index >= 0) {
          r = operation.call(this, receiver[index--], r);
        }
        return r;
      },
      groupBy: function (receiver, toKey) {
        return _.kotlin.groupByTo(receiver, new Kotlin.ComplexHashMap(0), toKey);
      },
      groupByTo: function (receiver, result, toKey) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            var key = toKey.call(this, element);
            var list = _.kotlin.getOrPut(result, key, _f.f0);
            list.add(element);
          }
        }
        return result;
      },
      drop: function (receiver, n) {
        return _.kotlin.dropWhile(receiver, _.kotlin.countTo(n));
      },
      dropWhile: function (receiver, predicate) {
        return _.kotlin.dropWhileTo(receiver, new Kotlin.ArrayList(0), predicate);
      },
      dropWhileTo: function (receiver, result, predicate) {
        var start = true;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (start && predicate.call(this, element)) {
            }
             else {
              start = false;
              result.add(element);
            }
          }
        }
        return result;
      },
      take: function (receiver, n) {
        return _.kotlin.takeWhile(receiver, _.kotlin.countTo(n));
      },
      takeWhile: function (receiver, predicate) {
        return _.kotlin.takeWhileTo(receiver, new Kotlin.ArrayList(0), predicate);
      },
      takeWhileTo: function (receiver, result, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              result.add(element);
            else
              break;
          }
        }
        return result;
      },
      toCollection: function (receiver, result) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            result.add(element);
          }
        }
        return result;
      },
      reverse: function (receiver) {
        var list = _.kotlin.toCollection(receiver, new Kotlin.ArrayList(0));
        Kotlin.reverse(list);
        return list;
      },
      toLinkedList: function (receiver) {
        return _.kotlin.toCollection(receiver, new Kotlin.LinkedList());
      },
      toList: function (receiver) {
        return _.kotlin.toCollection(receiver, new Kotlin.ArrayList(0));
      },
      toSet: function (receiver) {
        return _.kotlin.toCollection(receiver, new Kotlin.LinkedHashSet());
      },
      toSortedSet: function (receiver) {
        return _.kotlin.toCollection(receiver, new Kotlin.TreeSet());
      },
      plus: function (receiver, element) {
        var answer = new Kotlin.ArrayList(0);
        _.kotlin.toCollection(receiver, answer);
        answer.add(element);
        return answer;
      },
      plus_0: function (receiver, iterator) {
        var answer = new Kotlin.ArrayList(0);
        _.kotlin.toCollection(receiver, answer);
        {
          var tmp$0 = iterator;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            answer.add(element);
          }
        }
        return answer;
      },
      plus_1: function (receiver, collection) {
        return _.kotlin.plus_0(receiver, collection.iterator());
      },
      withIndices: function (receiver) {
        return new _.kotlin.IndexIterator(Kotlin.arrayIterator(receiver));
      },
      sortBy: function (receiver, f) {
        var sortedList = _.kotlin.toCollection(receiver, new Kotlin.ArrayList(0));
        var sortBy = Kotlin.comparator(Kotlin.b2(_f.f1, this, [f]));
        Kotlin.collectionsSort(sortedList, sortBy);
        return sortedList;
      },
      appendString: function (receiver, buffer, separator, prefix, postfix, limit, truncated) {
        buffer.append(prefix);
        var count = 0;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (++count > 1)
              buffer.append(separator);
            if (limit < 0 || count <= limit) {
              var text = element == null ? 'null' : element.toString();
              buffer.append(text);
            }
             else
              break;
          }
        }
        if (limit >= 0 && count > limit)
          buffer.append(truncated);
        buffer.append(postfix);
      },
      makeString_0: function (receiver, separator, prefix, postfix, limit, truncated) {
        var buffer = new Kotlin.StringBuilder();
        _.kotlin.appendString(receiver, buffer, separator, prefix, postfix, limit, truncated);
        return buffer.toString();
      },
      downTo: function (receiver, to) {
        return new _.jet.ByteProgression(receiver, to, -1);
      },
      downTo_0: function (receiver, to) {
        return new _.jet.CharProgression(receiver.toChar(), to, -1);
      },
      downTo_1: function (receiver, to) {
        return new _.jet.ShortProgression(receiver, to, -1);
      },
      downTo_2: function (receiver, to) {
        return new Kotlin.NumberProgression(receiver, to, -1);
      },
      downTo_3: function (receiver, to) {
        return new _.jet.LongProgression(receiver.toLong(), to, -(1).toLong());
      },
      downTo_4: function (receiver, to) {
        return new _.jet.FloatProgression(receiver, to, -1);
      },
      downTo_5: function (receiver, to) {
        return new _.jet.DoubleProgression(receiver, to, -1.0);
      },
      downTo_6: function (receiver, to) {
        return new _.jet.CharProgression(receiver, to.toChar(), -1);
      },
      downTo_7: function (receiver, to) {
        return new _.jet.CharProgression(receiver, to, -1);
      },
      downTo_8: function (receiver, to) {
        return new _.jet.ShortProgression(receiver.toShort(), to, -1);
      },
      downTo_9: function (receiver, to) {
        return new Kotlin.NumberProgression(receiver.toInt(), to, -1);
      },
      downTo_10: function (receiver, to) {
        return new _.jet.LongProgression(receiver.toLong(), to, -(1).toLong());
      },
      downTo_11: function (receiver, to) {
        return new _.jet.FloatProgression(receiver.toFloat(), to, -1);
      },
      downTo_12: function (receiver, to) {
        return new _.jet.DoubleProgression(receiver.toDouble(), to, -1.0);
      },
      downTo_13: function (receiver, to) {
        return new _.jet.ShortProgression(receiver, to, -1);
      },
      downTo_14: function (receiver, to) {
        return new _.jet.ShortProgression(receiver, to.toShort(), -1);
      },
      downTo_15: function (receiver, to) {
        return new _.jet.ShortProgression(receiver, to, -1);
      },
      downTo_16: function (receiver, to) {
        return new Kotlin.NumberProgression(receiver, to, -1);
      },
      downTo_17: function (receiver, to) {
        return new _.jet.LongProgression(receiver.toLong(), to, -(1).toLong());
      },
      downTo_18: function (receiver, to) {
        return new _.jet.FloatProgression(receiver, to, -1);
      },
      downTo_19: function (receiver, to) {
        return new _.jet.DoubleProgression(receiver, to, -1.0);
      },
      downTo_20: function (receiver, to) {
        return new Kotlin.NumberProgression(receiver, to, -1);
      },
      downTo_21: function (receiver, to) {
        return new Kotlin.NumberProgression(receiver, to.toInt(), -1);
      },
      downTo_22: function (receiver, to) {
        return new Kotlin.NumberProgression(receiver, to, -1);
      },
      downTo_23: function (receiver, to) {
        return new Kotlin.NumberProgression(receiver, to, -1);
      },
      downTo_24: function (receiver, to) {
        return new _.jet.LongProgression(receiver.toLong(), to, -(1).toLong());
      },
      downTo_25: function (receiver, to) {
        return new _.jet.FloatProgression(receiver, to, -1);
      },
      downTo_26: function (receiver, to) {
        return new _.jet.DoubleProgression(receiver, to, -1.0);
      },
      downTo_27: function (receiver, to) {
        return new _.jet.LongProgression(receiver, to.toLong(), -(1).toLong());
      },
      downTo_28: function (receiver, to) {
        return new _.jet.LongProgression(receiver, to.toLong(), -(1).toLong());
      },
      downTo_29: function (receiver, to) {
        return new _.jet.LongProgression(receiver, to.toLong(), -(1).toLong());
      },
      downTo_30: function (receiver, to) {
        return new _.jet.LongProgression(receiver, to.toLong(), -(1).toLong());
      },
      downTo_31: function (receiver, to) {
        return new _.jet.LongProgression(receiver, to, -(1).toLong());
      },
      downTo_32: function (receiver, to) {
        return new _.jet.FloatProgression(receiver.toFloat(), to, -1);
      },
      downTo_33: function (receiver, to) {
        return new _.jet.DoubleProgression(receiver.toDouble(), to, -1.0);
      },
      downTo_34: function (receiver, to) {
        return new _.jet.FloatProgression(receiver, to, -1);
      },
      downTo_35: function (receiver, to) {
        return new _.jet.FloatProgression(receiver, to.toFloat(), -1);
      },
      downTo_36: function (receiver, to) {
        return new _.jet.FloatProgression(receiver, to, -1);
      },
      downTo_37: function (receiver, to) {
        return new _.jet.FloatProgression(receiver, to, -1);
      },
      downTo_38: function (receiver, to) {
        return new _.jet.FloatProgression(receiver, to.toFloat(), -1);
      },
      downTo_39: function (receiver, to) {
        return new _.jet.FloatProgression(receiver, to, -1);
      },
      downTo_40: function (receiver, to) {
        return new _.jet.DoubleProgression(receiver, to, -1.0);
      },
      downTo_41: function (receiver, to) {
        return new _.jet.DoubleProgression(receiver, to, -1.0);
      },
      downTo_42: function (receiver, to) {
        return new _.jet.DoubleProgression(receiver, to.toDouble(), -1.0);
      },
      downTo_43: function (receiver, to) {
        return new _.jet.DoubleProgression(receiver, to, -1.0);
      },
      downTo_44: function (receiver, to) {
        return new _.jet.DoubleProgression(receiver, to, -1.0);
      },
      downTo_45: function (receiver, to) {
        return new _.jet.DoubleProgression(receiver, to.toDouble(), -1.0);
      },
      downTo_46: function (receiver, to) {
        return new _.jet.DoubleProgression(receiver, to, -1.0);
      },
      downTo_47: function (receiver, to) {
        return new _.jet.DoubleProgression(receiver, to, -1.0);
      },
      all_0: function (receiver, predicate) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            if (!predicate.call(this, element))
              return false;
          }
        }
        return true;
      },
      any_0: function (receiver, predicate) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            if (predicate.call(this, element))
              return true;
          }
        }
        return false;
      },
      count_0: function (receiver, predicate) {
        var count = 0;
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            if (predicate.call(this, element))
              count++;
          }
        }
        return count;
      },
      find_0: function (receiver, predicate) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            if (predicate.call(this, element))
              return element;
          }
        }
        return null;
      },
      filter_0: function (receiver, predicate) {
        return _.kotlin.filterTo_0(receiver, new Kotlin.ArrayList(0), predicate);
      },
      filterTo_0: function (receiver, result, predicate) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            if (predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      filterNot_0: function (receiver, predicate) {
        return _.kotlin.filterNotTo_0(receiver, new Kotlin.ArrayList(0), predicate);
      },
      filterNotTo_0: function (receiver, result, predicate) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            if (!predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      filterNotNull: function (receiver) {
        return _.kotlin.filterNotNullTo(receiver, new Kotlin.ArrayList(0));
      },
      filterNotNullTo: function (receiver, result) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            if (element != null)
              result.add(element);
          }
        }
        return result;
      },
      partition_0: function (receiver, predicate) {
        var first = new Kotlin.ArrayList(0);
        var second = new Kotlin.ArrayList(0);
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            {
              if (predicate.call(this, element)) {
                first.add(element);
              }
               else {
                second.add(element);
              }
            }
          }
        }
        return new _.kotlin.Pair(first, second);
      },
      map_1: function (receiver, transform) {
        return _.kotlin.mapTo_1(receiver, new Kotlin.ArrayList(0), transform);
      },
      mapTo_1: function (receiver, result, transform) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var item = tmp$0[tmp$2];
            result.add(transform.call(this, item));
          }
        }
        return result;
      },
      flatMap_0: function (receiver, transform) {
        return _.kotlin.flatMapTo_0(receiver, new Kotlin.ArrayList(0), transform);
      },
      flatMapTo_0: function (receiver, result, transform) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            {
              var list = transform.call(this, element);
              {
                var tmp$3 = list.iterator();
                while (tmp$3.hasNext()) {
                  var r = tmp$3.next();
                  result.add(r);
                }
              }
            }
          }
        }
        return result;
      },
      forEach_0: function (receiver, operation) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            operation.call(this, element);
          }
        }
      },
      fold_0: function (receiver, initial, operation) {
        var answer = initial;
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            answer = operation.call(this, answer, element);
          }
        }
        return answer;
      },
      foldRight_0: function (receiver, initial, operation) {
        var r = initial;
        var index = receiver.length - 1;
        while (index >= 0) {
          r = operation.call(this, receiver[index--], r);
        }
        return r;
      },
      reduce_0: function (receiver, operation) {
        var iterator = Kotlin.arrayIterator(receiver);
        if (!iterator.hasNext()) {
          throw new Kotlin.UnsupportedOperationException("Empty iterable can't be reduced");
        }
        var result = iterator.next();
        while (iterator.hasNext()) {
          result = operation.call(this, result, iterator.next());
        }
        return result;
      },
      reduceRight_0: function (receiver, operation) {
        var index = receiver.length - 1;
        if (index < 0) {
          throw new Kotlin.UnsupportedOperationException("Empty iterable can't be reduced");
        }
        var r = receiver[index--];
        while (index >= 0) {
          r = operation.call(this, receiver[index--], r);
        }
        return r;
      },
      groupBy_0: function (receiver, toKey) {
        return _.kotlin.groupByTo_0(receiver, new Kotlin.ComplexHashMap(0), toKey);
      },
      groupByTo_0: function (receiver, result, toKey) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            {
              var key = toKey.call(this, element);
              var list = _.kotlin.getOrPut(result, key, _f.f2);
              list.add(element);
            }
          }
        }
        return result;
      },
      drop_0: function (receiver, n) {
        return _.kotlin.dropWhile_0(receiver, _.kotlin.countTo(n));
      },
      dropWhile_0: function (receiver, predicate) {
        return _.kotlin.dropWhileTo_0(receiver, new Kotlin.ArrayList(0), predicate);
      },
      dropWhileTo_0: function (receiver, result, predicate) {
        var start = true;
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            {
              if (start && predicate.call(this, element)) {
              }
               else {
                start = false;
                result.add(element);
              }
            }
          }
        }
        return result;
      },
      take_0: function (receiver, n) {
        return _.kotlin.takeWhile_0(receiver, _.kotlin.countTo(n));
      },
      takeWhile_0: function (receiver, predicate) {
        return _.kotlin.takeWhileTo_0(receiver, new Kotlin.ArrayList(0), predicate);
      },
      takeWhileTo_0: function (receiver, result, predicate) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            if (predicate.call(this, element))
              result.add(element);
            else
              break;
          }
        }
        return result;
      },
      toCollection_0: function (receiver, result) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            result.add(element);
          }
        }
        return result;
      },
      reverse_0: function (receiver) {
        var list = _.kotlin.toCollection_0(receiver, new Kotlin.ArrayList(0));
        Kotlin.reverse(list);
        return list;
      },
      toLinkedList_0: function (receiver) {
        return _.kotlin.toCollection_0(receiver, new Kotlin.LinkedList());
      },
      toList_0: function (receiver) {
        return _.kotlin.toCollection_0(receiver, new Kotlin.ArrayList(0));
      },
      toSet_0: function (receiver) {
        return _.kotlin.toCollection_0(receiver, new Kotlin.LinkedHashSet());
      },
      toSortedSet_0: function (receiver) {
        return _.kotlin.toCollection_0(receiver, new Kotlin.TreeSet());
      },
      requireNoNulls: function (receiver) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            {
              if (element == null) {
                throw new Kotlin.IllegalArgumentException('null element found in ' + receiver.toString());
              }
            }
          }
        }
        return receiver;
      },
      plus_2: function (receiver, element) {
        var answer = new Kotlin.ArrayList(0);
        _.kotlin.toCollection_0(receiver, answer);
        answer.add(element);
        return answer;
      },
      plus_3: function (receiver, iterator) {
        var answer = new Kotlin.ArrayList(0);
        _.kotlin.toCollection_0(receiver, answer);
        {
          var tmp$0 = iterator;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            answer.add(element);
          }
        }
        return answer;
      },
      plus_4: function (receiver, collection) {
        return _.kotlin.plus_3(receiver, collection.iterator());
      },
      withIndices_0: function (receiver) {
        return new _.kotlin.IndexIterator(Kotlin.arrayIterator(receiver));
      },
      sortBy_0: function (receiver, f) {
        var sortedList = _.kotlin.toCollection_0(receiver, new Kotlin.ArrayList(0));
        var sortBy = Kotlin.comparator(Kotlin.b2(_f.f3, this, [f]));
        Kotlin.collectionsSort(sortedList, sortBy);
        return sortedList;
      },
      appendString_0: function (receiver, buffer, separator, prefix, postfix, limit, truncated) {
        buffer.append(prefix);
        var count = 0;
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            {
              if (++count > 1)
                buffer.append(separator);
              if (limit < 0 || count <= limit) {
                var text = element == null ? 'null' : element.toString();
                buffer.append(text);
              }
               else
                break;
            }
          }
        }
        if (limit >= 0 && count > limit)
          buffer.append(truncated);
        buffer.append(postfix);
      },
      makeString_1: function (receiver, separator, prefix, postfix, limit, truncated) {
        var buffer = new Kotlin.StringBuilder();
        _.kotlin.appendString_0(receiver, buffer, separator, prefix, postfix, limit, truncated);
        return buffer.toString();
      },
      get_size: function (receiver) {
        return receiver.size();
      },
      get_empty: function (receiver) {
        return receiver.isEmpty();
      },
      set_0: function (receiver, key, value) {
        return receiver.put(key, value);
      },
      orEmpty: function (receiver) {
        return receiver != null ? receiver : Kotlin.emptyMap();
      },
      get_key: function (receiver) {
        return receiver.getKey();
      },
      get_value: function (receiver) {
        return receiver.getValue();
      },
      component1: function (receiver) {
        return receiver.getKey();
      },
      component2: function (receiver) {
        return receiver.getValue();
      },
      getOrElse: function (receiver, key, defaultValue) {
        if (receiver.containsKey(key)) {
          return receiver.get(key);
        }
         else {
          return defaultValue.call(this);
        }
      },
      getOrPut: function (receiver, key, defaultValue) {
        if (receiver.containsKey(key)) {
          return receiver.get(key);
        }
         else {
          var answer = defaultValue.call(this);
          receiver.put(key, answer);
          return answer;
        }
      },
      iterator: function (receiver) {
        var entrySet = receiver.entrySet();
        return entrySet.iterator();
      },
      mapTo: function (receiver, result, transform) {
        {
          var tmp$0 = _.kotlin.iterator(receiver);
          while (tmp$0.hasNext()) {
            var item = tmp$0.next();
            result.add(transform.call(this, item));
          }
        }
        return result;
      },
      mapValuesTo: function (receiver, result, transform) {
        {
          var tmp$0 = _.kotlin.iterator(receiver);
          while (tmp$0.hasNext()) {
            var e = tmp$0.next();
            var newValue = transform.call(this, e);
            result.put(_.kotlin.get_key(e), newValue);
          }
        }
        return result;
      },
      putAll: function (receiver, values) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = values, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var v = tmp$0[tmp$2];
            {
              receiver.put(v.get_first(), v.get_second());
            }
          }
        }
      },
      toMap: function (receiver, map) {
        map.putAll(receiver);
        return map;
      },
      map_2: function (receiver, transform) {
        return _.kotlin.mapTo(receiver, new Kotlin.ArrayList(_.kotlin.get_size(receiver)), transform);
      },
      mapValues_0: function (receiver, transform) {
        return _.kotlin.mapValuesTo(receiver, new Kotlin.ComplexHashMap(_.kotlin.get_size(receiver)), transform);
      },
      get_size_0: function (receiver) {
        return receiver.size();
      },
      get_empty_0: function (receiver) {
        return receiver.isEmpty();
      },
      get_indices: function (receiver) {
        return new Kotlin.NumberRange(0, _.kotlin.get_size_0(receiver) - 1);
      },
      get_indices_0: function (receiver) {
        return new Kotlin.NumberRange(0, receiver - 1);
      },
      notEmpty_0: function (receiver) {
        return !receiver.isEmpty();
      },
      orEmpty_0: function (receiver) {
        return receiver != null ? receiver : Kotlin.emptyList();
      },
      toSortedList: function (receiver) {
        return _.kotlin.sort(_.kotlin.toCollection_1(receiver, new Kotlin.ArrayList(0)));
      },
      toSortedList_0: function (receiver, comparator) {
        return _.kotlin.sort_0(_.kotlin.toList_1(receiver), comparator);
      },
      orEmpty_1: function (receiver) {
        return receiver != null ? receiver : Kotlin.emptyList();
      },
      get_first: function (receiver) {
        return _.kotlin.get_head(receiver);
      },
      get_last: function (receiver) {
        var s = _.kotlin.get_size_0(receiver);
        return s > 0 ? receiver.get(s - 1) : null;
      },
      get_lastIndex: function (receiver) {
        return _.kotlin.get_size_0(receiver) - 1;
      },
      get_head: function (receiver) {
        return receiver.get(0);
      },
      get_tail: function (receiver) {
        return _.kotlin.drop_1(receiver, 1);
      },
      all_1: function (receiver, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (!predicate.call(this, element))
              return false;
          }
        }
        return true;
      },
      any_1: function (receiver, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              return true;
          }
        }
        return false;
      },
      count_1: function (receiver, predicate) {
        var count = 0;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              count++;
          }
        }
        return count;
      },
      find_1: function (receiver, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              return element;
          }
        }
        return null;
      },
      filter_1: function (receiver, predicate) {
        return _.kotlin.filterTo_1(receiver, new Kotlin.ArrayList(0), predicate);
      },
      filterTo_1: function (receiver, result, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      filterNot_1: function (receiver, predicate) {
        return _.kotlin.filterNotTo_1(receiver, new Kotlin.ArrayList(0), predicate);
      },
      filterNotTo_1: function (receiver, result, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (!predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      partition_1: function (receiver, predicate) {
        var first = new Kotlin.ArrayList(0);
        var second = new Kotlin.ArrayList(0);
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element)) {
              first.add(element);
            }
             else {
              second.add(element);
            }
          }
        }
        return new _.kotlin.Pair(first, second);
      },
      map_3: function (receiver, transform) {
        return _.kotlin.mapTo_2(receiver, new Kotlin.ArrayList(0), transform);
      },
      mapTo_2: function (receiver, result, transform) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var item = tmp$0.next();
            result.add(transform.call(this, item));
          }
        }
        return result;
      },
      flatMap_1: function (receiver, transform) {
        return _.kotlin.flatMapTo_1(receiver, new Kotlin.ArrayList(0), transform);
      },
      flatMapTo_1: function (receiver, result, transform) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            var list = transform.call(this, element);
            {
              var tmp$1 = list.iterator();
              while (tmp$1.hasNext()) {
                var r = tmp$1.next();
                result.add(r);
              }
            }
          }
        }
        return result;
      },
      forEach_1: function (receiver, operation) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            operation.call(this, element);
          }
        }
      },
      fold_1: function (receiver, initial, operation) {
        var answer = initial;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            answer = operation.call(this, answer, element);
          }
        }
        return answer;
      },
      foldRight_1: function (receiver, initial, operation) {
        var r = initial;
        var index = receiver.length - 1;
        while (index >= 0) {
          r = operation.call(this, receiver[index--], r);
        }
        return r;
      },
      reduce_1: function (receiver, operation) {
        var iterator = Kotlin.arrayIterator(receiver);
        if (!iterator.hasNext()) {
          throw new Kotlin.UnsupportedOperationException("Empty iterable can't be reduced");
        }
        var result = iterator.next();
        while (iterator.hasNext()) {
          result = operation.call(this, result, iterator.next());
        }
        return result;
      },
      reduceRight_1: function (receiver, operation) {
        var index = receiver.length - 1;
        if (index < 0) {
          throw new Kotlin.UnsupportedOperationException("Empty iterable can't be reduced");
        }
        var r = receiver[index--];
        while (index >= 0) {
          r = operation.call(this, receiver[index--], r);
        }
        return r;
      },
      groupBy_1: function (receiver, toKey) {
        return _.kotlin.groupByTo_1(receiver, new Kotlin.ComplexHashMap(0), toKey);
      },
      groupByTo_1: function (receiver, result, toKey) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            var key = toKey.call(this, element);
            var list = _.kotlin.getOrPut(result, key, _f.f4);
            list.add(element);
          }
        }
        return result;
      },
      drop_2: function (receiver, n) {
        return _.kotlin.dropWhile_1(receiver, _.kotlin.countTo(n));
      },
      dropWhile_1: function (receiver, predicate) {
        return _.kotlin.dropWhileTo_1(receiver, new Kotlin.ArrayList(0), predicate);
      },
      dropWhileTo_1: function (receiver, result, predicate) {
        var start = true;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (start && predicate.call(this, element)) {
            }
             else {
              start = false;
              result.add(element);
            }
          }
        }
        return result;
      },
      take_1: function (receiver, n) {
        return _.kotlin.takeWhile_1(receiver, _.kotlin.countTo(n));
      },
      takeWhile_1: function (receiver, predicate) {
        return _.kotlin.takeWhileTo_1(receiver, new Kotlin.ArrayList(0), predicate);
      },
      takeWhileTo_1: function (receiver, result, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              result.add(element);
            else
              break;
          }
        }
        return result;
      },
      toCollection_2: function (receiver, result) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            result.add(element);
          }
        }
        return result;
      },
      reverse_1: function (receiver) {
        var list = _.kotlin.toCollection_2(receiver, new Kotlin.ArrayList(0));
        Kotlin.reverse(list);
        return list;
      },
      toLinkedList_1: function (receiver) {
        return _.kotlin.toCollection_2(receiver, new Kotlin.LinkedList());
      },
      toList_2: function (receiver) {
        return _.kotlin.toCollection_2(receiver, new Kotlin.ArrayList(0));
      },
      toSet_1: function (receiver) {
        return _.kotlin.toCollection_2(receiver, new Kotlin.LinkedHashSet());
      },
      toSortedSet_1: function (receiver) {
        return _.kotlin.toCollection_2(receiver, new Kotlin.TreeSet());
      },
      plus_5: function (receiver, element) {
        var answer = new Kotlin.ArrayList(0);
        _.kotlin.toCollection_2(receiver, answer);
        answer.add(element);
        return answer;
      },
      plus_6: function (receiver, iterator) {
        var answer = new Kotlin.ArrayList(0);
        _.kotlin.toCollection_2(receiver, answer);
        {
          var tmp$0 = iterator;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            answer.add(element);
          }
        }
        return answer;
      },
      plus_7: function (receiver, collection) {
        return _.kotlin.plus_6(receiver, collection.iterator());
      },
      withIndices_1: function (receiver) {
        return new _.kotlin.IndexIterator(Kotlin.arrayIterator(receiver));
      },
      sortBy_1: function (receiver, f) {
        var sortedList = _.kotlin.toCollection_2(receiver, new Kotlin.ArrayList(0));
        var sortBy = Kotlin.comparator(Kotlin.b2(_f.f5, this, [f]));
        Kotlin.collectionsSort(sortedList, sortBy);
        return sortedList;
      },
      appendString_1: function (receiver, buffer, separator, prefix, postfix, limit, truncated) {
        buffer.append(prefix);
        var count = 0;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (++count > 1)
              buffer.append(separator);
            if (limit < 0 || count <= limit) {
              var text = element == null ? 'null' : element.toString();
              buffer.append(text);
            }
             else
              break;
          }
        }
        if (limit >= 0 && count > limit)
          buffer.append(truncated);
        buffer.append(postfix);
      },
      makeString_2: function (receiver, separator, prefix, postfix, limit, truncated) {
        var buffer = new Kotlin.StringBuilder();
        _.kotlin.appendString_1(receiver, buffer, separator, prefix, postfix, limit, truncated);
        return buffer.toString();
      },
      count_2: function (receiver) {
        if (Kotlin.isType(receiver, _.jet.Collection)) {
          return receiver.size();
        }
        var number = 0;
        {
          var tmp$0 = receiver.iterator();
          while (tmp$0.hasNext()) {
            var elem = tmp$0.next();
            ++number;
          }
        }
        return number;
      },
      countTo: function (n) {
        var count = 0;
        return function (it) {
          ++count;
          return count <= n;
        };
      },
      first: function (receiver) {
        if (Kotlin.isType(receiver, _.jet.List)) {
          return _.kotlin.first(receiver);
        }
        return receiver.iterator().next();
      },
      containsItem: function (receiver, item) {
        if (Kotlin.isType(receiver, Kotlin.AbstractCollection)) {
          return receiver.contains(item);
        }
        {
          var tmp$0 = receiver.iterator();
          while (tmp$0.hasNext()) {
            var elem = tmp$0.next();
            if (Kotlin.equals(elem, item)) {
              return true;
            }
          }
        }
        return false;
      },
      sort: function (receiver) {
        var list = _.kotlin.toCollection_1(receiver, new Kotlin.ArrayList(0));
        Kotlin.collectionsSort(list);
        return list;
      },
      sort_0: function (receiver, comparator) {
        var list = _.kotlin.toCollection_1(receiver, new Kotlin.ArrayList(0));
        Kotlin.collectionsSort(list, comparator);
        return list;
      },
      filter_2: function (receiver, predicate) {
        return new _.kotlin.FilterIterator(receiver, predicate);
      },
      filterNot_2: function (receiver, predicate) {
        return _.kotlin.filter_2(receiver, Kotlin.b2(_f.f7, null, [predicate]));
      },
      filterNotNull_0: function (receiver) {
        return new _.kotlin.FilterNotNullIterator(receiver);
      },
      map_4: function (receiver, transform) {
        return new _.kotlin.MapIterator(receiver, transform);
      },
      flatMap_2: function (receiver, transform) {
        return new _.kotlin.FlatMapIterator(receiver, transform);
      },
      requireNoNulls_0: function (receiver) {
        return _.kotlin.map_4(receiver, _f.f8);
      },
      take_2: function (receiver, n) {
        var count = n;
        return _.kotlin.takeWhile_2(receiver, function (it) {
          return --count >= 0;
        });
      },
      takeWhile_2: function (receiver, predicate) {
        return new _.kotlin.TakeWhileIterator(receiver, predicate);
      },
      plus_8: function (receiver, element) {
        return new _.kotlin.CompositeIterator([receiver, new _.kotlin.SingleIterator(element)]);
      },
      plus_9: function (receiver, iterator) {
        return new _.kotlin.CompositeIterator([receiver, iterator]);
      },
      plus_10: function (receiver, collection) {
        return _.kotlin.plus_9(receiver, collection.iterator());
      },
      all_2: function (receiver, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (!predicate.call(this, element))
              return false;
          }
        }
        return true;
      },
      any_2: function (receiver, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              return true;
          }
        }
        return false;
      },
      count_3: function (receiver, predicate) {
        var count = 0;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              count++;
          }
        }
        return count;
      },
      find_2: function (receiver, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              return element;
          }
        }
        return null;
      },
      filter_3: function (receiver, predicate) {
        return _.kotlin.filterTo_2(receiver, new Kotlin.ArrayList(0), predicate);
      },
      filterTo_2: function (receiver, result, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      filterNot_3: function (receiver, predicate) {
        return _.kotlin.filterNotTo_2(receiver, new Kotlin.ArrayList(0), predicate);
      },
      filterNotTo_2: function (receiver, result, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (!predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      partition_2: function (receiver, predicate) {
        var first = new Kotlin.ArrayList(0);
        var second = new Kotlin.ArrayList(0);
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element)) {
              first.add(element);
            }
             else {
              second.add(element);
            }
          }
        }
        return new _.kotlin.Pair(first, second);
      },
      map_5: function (receiver, transform) {
        return _.kotlin.mapTo_3(receiver, new Kotlin.ArrayList(0), transform);
      },
      mapTo_3: function (receiver, result, transform) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var item = tmp$0.next();
            result.add(transform.call(this, item));
          }
        }
        return result;
      },
      flatMap_3: function (receiver, transform) {
        return _.kotlin.flatMapTo_2(receiver, new Kotlin.ArrayList(0), transform);
      },
      flatMapTo_2: function (receiver, result, transform) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            var list = transform.call(this, element);
            {
              var tmp$1 = list.iterator();
              while (tmp$1.hasNext()) {
                var r = tmp$1.next();
                result.add(r);
              }
            }
          }
        }
        return result;
      },
      forEach_2: function (receiver, operation) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            operation.call(this, element);
          }
        }
      },
      fold_2: function (receiver, initial, operation) {
        var answer = initial;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            answer = operation.call(this, answer, element);
          }
        }
        return answer;
      },
      foldRight_2: function (receiver, initial, operation) {
        var r = initial;
        var index = receiver.length - 1;
        while (index >= 0) {
          r = operation.call(this, receiver[index--], r);
        }
        return r;
      },
      reduce_2: function (receiver, operation) {
        var iterator = Kotlin.arrayIterator(receiver);
        if (!iterator.hasNext()) {
          throw new Kotlin.UnsupportedOperationException("Empty iterable can't be reduced");
        }
        var result = iterator.next();
        while (iterator.hasNext()) {
          result = operation.call(this, result, iterator.next());
        }
        return result;
      },
      reduceRight_2: function (receiver, operation) {
        var index = receiver.length - 1;
        if (index < 0) {
          throw new Kotlin.UnsupportedOperationException("Empty iterable can't be reduced");
        }
        var r = receiver[index--];
        while (index >= 0) {
          r = operation.call(this, receiver[index--], r);
        }
        return r;
      },
      groupBy_2: function (receiver, toKey) {
        return _.kotlin.groupByTo_2(receiver, new Kotlin.ComplexHashMap(0), toKey);
      },
      groupByTo_2: function (receiver, result, toKey) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            var key = toKey.call(this, element);
            var list = _.kotlin.getOrPut(result, key, _f.f9);
            list.add(element);
          }
        }
        return result;
      },
      drop_3: function (receiver, n) {
        return _.kotlin.dropWhile_2(receiver, _.kotlin.countTo(n));
      },
      dropWhile_2: function (receiver, predicate) {
        return _.kotlin.dropWhileTo_2(receiver, new Kotlin.ArrayList(0), predicate);
      },
      dropWhileTo_2: function (receiver, result, predicate) {
        var start = true;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (start && predicate.call(this, element)) {
            }
             else {
              start = false;
              result.add(element);
            }
          }
        }
        return result;
      },
      take_3: function (receiver, n) {
        return _.kotlin.takeWhile_3(receiver, _.kotlin.countTo(n));
      },
      takeWhile_3: function (receiver, predicate) {
        return _.kotlin.takeWhileTo_2(receiver, new Kotlin.ArrayList(0), predicate);
      },
      takeWhileTo_2: function (receiver, result, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              result.add(element);
            else
              break;
          }
        }
        return result;
      },
      toCollection_3: function (receiver, result) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            result.add(element);
          }
        }
        return result;
      },
      reverse_2: function (receiver) {
        var list = _.kotlin.toCollection_3(receiver, new Kotlin.ArrayList(0));
        Kotlin.reverse(list);
        return list;
      },
      toLinkedList_2: function (receiver) {
        return _.kotlin.toCollection_3(receiver, new Kotlin.LinkedList());
      },
      toList_3: function (receiver) {
        return _.kotlin.toCollection_3(receiver, new Kotlin.ArrayList(0));
      },
      toSet_2: function (receiver) {
        return _.kotlin.toCollection_3(receiver, new Kotlin.LinkedHashSet());
      },
      toSortedSet_2: function (receiver) {
        return _.kotlin.toCollection_3(receiver, new Kotlin.TreeSet());
      },
      plus_11: function (receiver, element) {
        var answer = new Kotlin.ArrayList(0);
        _.kotlin.toCollection_3(receiver, answer);
        answer.add(element);
        return answer;
      },
      plus_12: function (receiver, iterator) {
        var answer = new Kotlin.ArrayList(0);
        _.kotlin.toCollection_3(receiver, answer);
        {
          var tmp$0 = iterator;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            answer.add(element);
          }
        }
        return answer;
      },
      plus_13: function (receiver, collection) {
        return _.kotlin.plus_12(receiver, collection.iterator());
      },
      withIndices_2: function (receiver) {
        return new _.kotlin.IndexIterator(Kotlin.arrayIterator(receiver));
      },
      sortBy_2: function (receiver, f) {
        var sortedList = _.kotlin.toCollection_3(receiver, new Kotlin.ArrayList(0));
        var sortBy = Kotlin.comparator(Kotlin.b2(_f.fa, this, [f]));
        Kotlin.collectionsSort(sortedList, sortBy);
        return sortedList;
      },
      appendString_2: function (receiver, buffer, separator, prefix, postfix, limit, truncated) {
        buffer.append(prefix);
        var count = 0;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (++count > 1)
              buffer.append(separator);
            if (limit < 0 || count <= limit) {
              var text = element == null ? 'null' : element.toString();
              buffer.append(text);
            }
             else
              break;
          }
        }
        if (limit >= 0 && count > limit)
          buffer.append(truncated);
        buffer.append(postfix);
      },
      makeString_3: function (receiver, separator, prefix, postfix, limit, truncated) {
        var buffer = new Kotlin.StringBuilder();
        _.kotlin.appendString_2(receiver, buffer, separator, prefix, postfix, limit, truncated);
        return buffer.toString();
      },
      require: function (value, message) {
        if (!value) {
          throw new Kotlin.IllegalArgumentException(message.toString());
        }
      },
      require_0: function (value, lazyMessage) {
        if (!value) {
          var message = lazyMessage();
          throw new Kotlin.IllegalArgumentException(message.toString());
        }
      },
      requireNotNull: function (value, message) {
        if (value == null) {
          throw new Kotlin.IllegalArgumentException(message.toString());
        }
         else {
          return value;
        }
      },
      check: function (value, message) {
        if (!value) {
          throw new Kotlin.IllegalStateException(message.toString());
        }
      },
      check_0: function (value, lazyMessage) {
        if (!value) {
          var message = lazyMessage();
          throw new Kotlin.IllegalStateException(message.toString());
        }
      },
      checkNotNull: function (value, message) {
        if (value == null) {
          throw new Kotlin.IllegalStateException(message);
        }
         else {
          return value;
        }
      },
      iterator_0: function (receiver) {
        return Kotlin.createObject(Kotlin.Iterator, {
          initialize: function () {
          },
          hasNext: function () {
            return receiver.hasMoreElements();
          },
          next: function () {
            return receiver.nextElement();
          }
        });
      },
      toArrayList: function (receiver) {
        return _.kotlin.toCollection_4(receiver, new Kotlin.ArrayList(0));
      },
      toHashSet: function (receiver) {
        return _.kotlin.toCollection_4(receiver, new Kotlin.ComplexHashSet());
      },
      to: function (receiver, that) {
        return new _.kotlin.Pair(receiver, that);
      },
      run: function (f) {
        return f();
      },
      with: function (receiver, f) {
        return f.call(receiver);
      },
      let: function (receiver, f) {
        return f.call(this, receiver);
      },
      all_3: function (receiver, predicate) {
        {
          var tmp$0 = receiver.iterator();
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (!predicate.call(this, element))
              return false;
          }
        }
        return true;
      },
      any_3: function (receiver, predicate) {
        {
          var tmp$0 = receiver.iterator();
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              return true;
          }
        }
        return false;
      },
      count_4: function (receiver, predicate) {
        var count = 0;
        {
          var tmp$0 = receiver.iterator();
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              count++;
          }
        }
        return count;
      },
      find_3: function (receiver, predicate) {
        {
          var tmp$0 = receiver.iterator();
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              return element;
          }
        }
        return null;
      },
      filterTo_3: function (receiver, result, predicate) {
        {
          var tmp$0 = receiver.iterator();
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      filterNotTo_3: function (receiver, result, predicate) {
        {
          var tmp$0 = receiver.iterator();
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (!predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      filterNotNullTo_0: function (receiver, result) {
        {
          var tmp$0 = receiver.iterator();
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (element != null)
              result.add(element);
          }
        }
        return result;
      },
      partition_3: function (receiver, predicate) {
        var first = new Kotlin.ArrayList(0);
        var second = new Kotlin.ArrayList(0);
        {
          var tmp$0 = receiver.iterator();
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element)) {
              first.add(element);
            }
             else {
              second.add(element);
            }
          }
        }
        return new _.kotlin.Pair(first, second);
      },
      mapTo_4: function (receiver, result, transform) {
        {
          var tmp$0 = receiver.iterator();
          while (tmp$0.hasNext()) {
            var item = tmp$0.next();
            result.add(transform.call(this, item));
          }
        }
        return result;
      },
      flatMapTo_3: function (receiver, result, transform) {
        {
          var tmp$0 = receiver.iterator();
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            var list = transform.call(this, element);
            {
              var tmp$1 = list.iterator();
              while (tmp$1.hasNext()) {
                var r = tmp$1.next();
                result.add(r);
              }
            }
          }
        }
        return result;
      },
      forEach_3: function (receiver, operation) {
        {
          var tmp$0 = receiver.iterator();
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            operation.call(this, element);
          }
        }
      },
      fold_3: function (receiver, initial, operation) {
        var answer = initial;
        {
          var tmp$0 = receiver.iterator();
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            answer = operation.call(this, answer, element);
          }
        }
        return answer;
      },
      reduce_3: function (receiver, operation) {
        var iterator = receiver.iterator();
        if (!iterator.hasNext()) {
          throw new Kotlin.UnsupportedOperationException("Empty iterable can't be reduced");
        }
        var result = iterator.next();
        while (iterator.hasNext()) {
          result = operation.call(this, result, iterator.next());
        }
        return result;
      },
      groupBy_3: function (receiver, toKey) {
        return _.kotlin.groupByTo_3(receiver, new Kotlin.ComplexHashMap(0), toKey);
      },
      groupByTo_3: function (receiver, result, toKey) {
        {
          var tmp$0 = receiver.iterator();
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            var key = toKey.call(this, element);
            var list = _.kotlin.getOrPut(result, key, _f.fb);
            list.add(element);
          }
        }
        return result;
      },
      drop_1: function (receiver, n) {
        return _.kotlin.dropWhile_3(receiver, _.kotlin.countTo(n));
      },
      dropWhile_3: function (receiver, predicate) {
        return _.kotlin.dropWhileTo_3(receiver, new Kotlin.ArrayList(0), predicate);
      },
      dropWhileTo_3: function (receiver, result, predicate) {
        var start = true;
        {
          var tmp$0 = receiver.iterator();
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (start && predicate.call(this, element)) {
            }
             else {
              start = false;
              result.add(element);
            }
          }
        }
        return result;
      },
      takeWhileTo_3: function (receiver, result, predicate) {
        {
          var tmp$0 = receiver.iterator();
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              result.add(element);
            else
              break;
          }
        }
        return result;
      },
      toCollection_1: function (receiver, result) {
        {
          var tmp$0 = receiver.iterator();
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            result.add(element);
          }
        }
        return result;
      },
      reverse_3: function (receiver) {
        var list = _.kotlin.toCollection_1(receiver, new Kotlin.ArrayList(0));
        Kotlin.reverse(list);
        return list;
      },
      toLinkedList_3: function (receiver) {
        return _.kotlin.toCollection_1(receiver, new Kotlin.LinkedList());
      },
      toList_1: function (receiver) {
        return _.kotlin.toCollection_1(receiver, new Kotlin.ArrayList(0));
      },
      toSet_3: function (receiver) {
        return _.kotlin.toCollection_1(receiver, new Kotlin.LinkedHashSet());
      },
      toSortedSet_3: function (receiver) {
        return _.kotlin.toCollection_1(receiver, new Kotlin.TreeSet());
      },
      withIndices_3: function (receiver) {
        return new _.kotlin.IndexIterator(receiver.iterator());
      },
      sortBy_3: function (receiver, f) {
        var sortedList = _.kotlin.toCollection_1(receiver, new Kotlin.ArrayList(0));
        var sortBy = Kotlin.comparator(Kotlin.b2(_f.fc, this, [f]));
        Kotlin.collectionsSort(sortedList, sortBy);
        return sortedList;
      },
      appendString_3: function (receiver, buffer, separator, prefix, postfix, limit, truncated) {
        buffer.append(prefix);
        var count = 0;
        {
          var tmp$0 = receiver.iterator();
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (++count > 1)
              buffer.append(separator);
            if (limit < 0 || count <= limit) {
              var text = element == null ? 'null' : element.toString();
              buffer.append(text);
            }
             else
              break;
          }
        }
        if (limit >= 0 && count > limit)
          buffer.append(truncated);
        buffer.append(postfix);
      },
      makeString: function (receiver, separator, prefix, postfix, limit, truncated) {
        var buffer = new Kotlin.StringBuilder();
        _.kotlin.appendString_3(receiver, buffer, separator, prefix, postfix, limit, truncated);
        return buffer.toString();
      },
      all_4: function (receiver, predicate) {
        {
          var tmp$0 = receiver;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (!predicate.call(this, element))
              return false;
          }
        }
        return true;
      },
      any_4: function (receiver, predicate) {
        {
          var tmp$0 = receiver;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              return true;
          }
        }
        return false;
      },
      count_5: function (receiver, predicate) {
        var count = 0;
        {
          var tmp$0 = receiver;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              count++;
          }
        }
        return count;
      },
      find_4: function (receiver, predicate) {
        {
          var tmp$0 = receiver;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              return element;
          }
        }
        return null;
      },
      filterTo_4: function (receiver, result, predicate) {
        {
          var tmp$0 = receiver;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      filterNotTo_4: function (receiver, result, predicate) {
        {
          var tmp$0 = receiver;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (!predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      filterNotNullTo_1: function (receiver, result) {
        {
          var tmp$0 = receiver;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (element != null)
              result.add(element);
          }
        }
        return result;
      },
      partition_4: function (receiver, predicate) {
        var first = new Kotlin.ArrayList(0);
        var second = new Kotlin.ArrayList(0);
        {
          var tmp$0 = receiver;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element)) {
              first.add(element);
            }
             else {
              second.add(element);
            }
          }
        }
        return new _.kotlin.Pair(first, second);
      },
      mapTo_5: function (receiver, result, transform) {
        {
          var tmp$0 = receiver;
          while (tmp$0.hasNext()) {
            var item = tmp$0.next();
            result.add(transform.call(this, item));
          }
        }
        return result;
      },
      flatMapTo_4: function (receiver, result, transform) {
        {
          var tmp$0 = receiver;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            var list = transform.call(this, element);
            {
              var tmp$1 = list.iterator();
              while (tmp$1.hasNext()) {
                var r = tmp$1.next();
                result.add(r);
              }
            }
          }
        }
        return result;
      },
      forEach_4: function (receiver, operation) {
        {
          var tmp$0 = receiver;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            operation.call(this, element);
          }
        }
      },
      fold_4: function (receiver, initial, operation) {
        var answer = initial;
        {
          var tmp$0 = receiver;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            answer = operation.call(this, answer, element);
          }
        }
        return answer;
      },
      reduce_4: function (receiver, operation) {
        var iterator = receiver;
        if (!iterator.hasNext()) {
          throw new Kotlin.UnsupportedOperationException("Empty iterable can't be reduced");
        }
        var result = iterator.next();
        while (iterator.hasNext()) {
          result = operation.call(this, result, iterator.next());
        }
        return result;
      },
      groupBy_4: function (receiver, toKey) {
        return _.kotlin.groupByTo_4(receiver, new Kotlin.ComplexHashMap(0), toKey);
      },
      groupByTo_4: function (receiver, result, toKey) {
        {
          var tmp$0 = receiver;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            var key = toKey.call(this, element);
            var list = _.kotlin.getOrPut(result, key, _f.fd);
            list.add(element);
          }
        }
        return result;
      },
      drop_4: function (receiver, n) {
        return _.kotlin.dropWhile_4(receiver, _.kotlin.countTo(n));
      },
      dropWhile_4: function (receiver, predicate) {
        return _.kotlin.dropWhileTo_4(receiver, new Kotlin.ArrayList(0), predicate);
      },
      dropWhileTo_4: function (receiver, result, predicate) {
        var start = true;
        {
          var tmp$0 = receiver;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (start && predicate.call(this, element)) {
            }
             else {
              start = false;
              result.add(element);
            }
          }
        }
        return result;
      },
      takeWhileTo_4: function (receiver, result, predicate) {
        {
          var tmp$0 = receiver;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              result.add(element);
            else
              break;
          }
        }
        return result;
      },
      toCollection_4: function (receiver, result) {
        {
          var tmp$0 = receiver;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            result.add(element);
          }
        }
        return result;
      },
      reverse_4: function (receiver) {
        var list = _.kotlin.toCollection_4(receiver, new Kotlin.ArrayList(0));
        Kotlin.reverse(list);
        return list;
      },
      toLinkedList_4: function (receiver) {
        return _.kotlin.toCollection_4(receiver, new Kotlin.LinkedList());
      },
      toList_4: function (receiver) {
        return _.kotlin.toCollection_4(receiver, new Kotlin.ArrayList(0));
      },
      toSet_4: function (receiver) {
        return _.kotlin.toCollection_4(receiver, new Kotlin.LinkedHashSet());
      },
      toSortedSet_4: function (receiver) {
        return _.kotlin.toCollection_4(receiver, new Kotlin.TreeSet());
      },
      withIndices_4: function (receiver) {
        return new _.kotlin.IndexIterator(receiver);
      },
      sortBy_4: function (receiver, f) {
        var sortedList = _.kotlin.toCollection_4(receiver, new Kotlin.ArrayList(0));
        var sortBy = Kotlin.comparator(Kotlin.b2(_f.fe, this, [f]));
        Kotlin.collectionsSort(sortedList, sortBy);
        return sortedList;
      },
      appendString_4: function (receiver, buffer, separator, prefix, postfix, limit, truncated) {
        buffer.append(prefix);
        var count = 0;
        {
          var tmp$0 = receiver;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (++count > 1)
              buffer.append(separator);
            if (limit < 0 || count <= limit) {
              var text = element == null ? 'null' : element.toString();
              buffer.append(text);
            }
             else
              break;
          }
        }
        if (limit >= 0 && count > limit)
          buffer.append(truncated);
        buffer.append(postfix);
      },
      makeString_4: function (receiver, separator, prefix, postfix, limit, truncated) {
        var buffer = new Kotlin.StringBuilder();
        _.kotlin.appendString_4(receiver, buffer, separator, prefix, postfix, limit, truncated);
        return buffer.toString();
      },
      all_5: function (receiver, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (!predicate.call(this, element))
              return false;
          }
        }
        return true;
      },
      any_5: function (receiver, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              return true;
          }
        }
        return false;
      },
      count_6: function (receiver, predicate) {
        var count = 0;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              count++;
          }
        }
        return count;
      },
      find_5: function (receiver, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              return element;
          }
        }
        return null;
      },
      filter_4: function (receiver, predicate) {
        return _.kotlin.filterTo_5(receiver, new Kotlin.ArrayList(0), predicate);
      },
      filterTo_5: function (receiver, result, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      filterNot_4: function (receiver, predicate) {
        return _.kotlin.filterNotTo_5(receiver, new Kotlin.ArrayList(0), predicate);
      },
      filterNotTo_5: function (receiver, result, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (!predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      partition_5: function (receiver, predicate) {
        var first = new Kotlin.ArrayList(0);
        var second = new Kotlin.ArrayList(0);
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element)) {
              first.add(element);
            }
             else {
              second.add(element);
            }
          }
        }
        return new _.kotlin.Pair(first, second);
      },
      map_6: function (receiver, transform) {
        return _.kotlin.mapTo_6(receiver, new Kotlin.ArrayList(0), transform);
      },
      mapTo_6: function (receiver, result, transform) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var item = tmp$0.next();
            result.add(transform.call(this, item));
          }
        }
        return result;
      },
      flatMap_4: function (receiver, transform) {
        return _.kotlin.flatMapTo_5(receiver, new Kotlin.ArrayList(0), transform);
      },
      flatMapTo_5: function (receiver, result, transform) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            var list = transform.call(this, element);
            {
              var tmp$1 = list.iterator();
              while (tmp$1.hasNext()) {
                var r = tmp$1.next();
                result.add(r);
              }
            }
          }
        }
        return result;
      },
      forEach_5: function (receiver, operation) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            operation.call(this, element);
          }
        }
      },
      fold_5: function (receiver, initial, operation) {
        var answer = initial;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            answer = operation.call(this, answer, element);
          }
        }
        return answer;
      },
      foldRight_3: function (receiver, initial, operation) {
        var r = initial;
        var index = receiver.length - 1;
        while (index >= 0) {
          r = operation.call(this, receiver[index--], r);
        }
        return r;
      },
      reduce_5: function (receiver, operation) {
        var iterator = Kotlin.arrayIterator(receiver);
        if (!iterator.hasNext()) {
          throw new Kotlin.UnsupportedOperationException("Empty iterable can't be reduced");
        }
        var result = iterator.next();
        while (iterator.hasNext()) {
          result = operation.call(this, result, iterator.next());
        }
        return result;
      },
      reduceRight_3: function (receiver, operation) {
        var index = receiver.length - 1;
        if (index < 0) {
          throw new Kotlin.UnsupportedOperationException("Empty iterable can't be reduced");
        }
        var r = receiver[index--];
        while (index >= 0) {
          r = operation.call(this, receiver[index--], r);
        }
        return r;
      },
      groupBy_5: function (receiver, toKey) {
        return _.kotlin.groupByTo_5(receiver, new Kotlin.ComplexHashMap(0), toKey);
      },
      groupByTo_5: function (receiver, result, toKey) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            var key = toKey.call(this, element);
            var list = _.kotlin.getOrPut(result, key, _f.ff);
            list.add(element);
          }
        }
        return result;
      },
      drop_5: function (receiver, n) {
        return _.kotlin.dropWhile_5(receiver, _.kotlin.countTo(n));
      },
      dropWhile_5: function (receiver, predicate) {
        return _.kotlin.dropWhileTo_5(receiver, new Kotlin.ArrayList(0), predicate);
      },
      dropWhileTo_5: function (receiver, result, predicate) {
        var start = true;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (start && predicate.call(this, element)) {
            }
             else {
              start = false;
              result.add(element);
            }
          }
        }
        return result;
      },
      take_4: function (receiver, n) {
        return _.kotlin.takeWhile_4(receiver, _.kotlin.countTo(n));
      },
      takeWhile_4: function (receiver, predicate) {
        return _.kotlin.takeWhileTo_5(receiver, new Kotlin.ArrayList(0), predicate);
      },
      takeWhileTo_5: function (receiver, result, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              result.add(element);
            else
              break;
          }
        }
        return result;
      },
      toCollection_5: function (receiver, result) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            result.add(element);
          }
        }
        return result;
      },
      reverse_5: function (receiver) {
        var list = _.kotlin.toCollection_5(receiver, new Kotlin.ArrayList(0));
        Kotlin.reverse(list);
        return list;
      },
      toLinkedList_5: function (receiver) {
        return _.kotlin.toCollection_5(receiver, new Kotlin.LinkedList());
      },
      toList_5: function (receiver) {
        return _.kotlin.toCollection_5(receiver, new Kotlin.ArrayList(0));
      },
      toSet_5: function (receiver) {
        return _.kotlin.toCollection_5(receiver, new Kotlin.LinkedHashSet());
      },
      toSortedSet_5: function (receiver) {
        return _.kotlin.toCollection_5(receiver, new Kotlin.TreeSet());
      },
      plus_14: function (receiver, element) {
        var answer = new Kotlin.ArrayList(0);
        _.kotlin.toCollection_5(receiver, answer);
        answer.add(element);
        return answer;
      },
      plus_15: function (receiver, iterator) {
        var answer = new Kotlin.ArrayList(0);
        _.kotlin.toCollection_5(receiver, answer);
        {
          var tmp$0 = iterator;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            answer.add(element);
          }
        }
        return answer;
      },
      plus_16: function (receiver, collection) {
        return _.kotlin.plus_15(receiver, collection.iterator());
      },
      withIndices_5: function (receiver) {
        return new _.kotlin.IndexIterator(Kotlin.arrayIterator(receiver));
      },
      sortBy_5: function (receiver, f) {
        var sortedList = _.kotlin.toCollection_5(receiver, new Kotlin.ArrayList(0));
        var sortBy = Kotlin.comparator(Kotlin.b2(_f.fg, this, [f]));
        Kotlin.collectionsSort(sortedList, sortBy);
        return sortedList;
      },
      appendString_5: function (receiver, buffer, separator, prefix, postfix, limit, truncated) {
        buffer.append(prefix);
        var count = 0;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (++count > 1)
              buffer.append(separator);
            if (limit < 0 || count <= limit) {
              var text = element == null ? 'null' : element.toString();
              buffer.append(text);
            }
             else
              break;
          }
        }
        if (limit >= 0 && count > limit)
          buffer.append(truncated);
        buffer.append(postfix);
      },
      makeString_5: function (receiver, separator, prefix, postfix, limit, truncated) {
        var buffer = new Kotlin.StringBuilder();
        _.kotlin.appendString_5(receiver, buffer, separator, prefix, postfix, limit, truncated);
        return buffer.toString();
      },
      all_6: function (receiver, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (!predicate.call(this, element))
              return false;
          }
        }
        return true;
      },
      any_6: function (receiver, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              return true;
          }
        }
        return false;
      },
      count_7: function (receiver, predicate) {
        var count = 0;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              count++;
          }
        }
        return count;
      },
      find_6: function (receiver, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              return element;
          }
        }
        return null;
      },
      filter_5: function (receiver, predicate) {
        return _.kotlin.filterTo_6(receiver, new Kotlin.ArrayList(0), predicate);
      },
      filterTo_6: function (receiver, result, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      filterNot_5: function (receiver, predicate) {
        return _.kotlin.filterNotTo_6(receiver, new Kotlin.ArrayList(0), predicate);
      },
      filterNotTo_6: function (receiver, result, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (!predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      partition_6: function (receiver, predicate) {
        var first = new Kotlin.ArrayList(0);
        var second = new Kotlin.ArrayList(0);
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element)) {
              first.add(element);
            }
             else {
              second.add(element);
            }
          }
        }
        return new _.kotlin.Pair(first, second);
      },
      map_7: function (receiver, transform) {
        return _.kotlin.mapTo_7(receiver, new Kotlin.ArrayList(0), transform);
      },
      mapTo_7: function (receiver, result, transform) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var item = tmp$0.next();
            result.add(transform.call(this, item));
          }
        }
        return result;
      },
      flatMap_5: function (receiver, transform) {
        return _.kotlin.flatMapTo_6(receiver, new Kotlin.ArrayList(0), transform);
      },
      flatMapTo_6: function (receiver, result, transform) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            var list = transform.call(this, element);
            {
              var tmp$1 = list.iterator();
              while (tmp$1.hasNext()) {
                var r = tmp$1.next();
                result.add(r);
              }
            }
          }
        }
        return result;
      },
      forEach_6: function (receiver, operation) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            operation.call(this, element);
          }
        }
      },
      fold_6: function (receiver, initial, operation) {
        var answer = initial;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            answer = operation.call(this, answer, element);
          }
        }
        return answer;
      },
      foldRight_4: function (receiver, initial, operation) {
        var r = initial;
        var index = receiver.length - 1;
        while (index >= 0) {
          r = operation.call(this, receiver[index--], r);
        }
        return r;
      },
      reduce_6: function (receiver, operation) {
        var iterator = Kotlin.arrayIterator(receiver);
        if (!iterator.hasNext()) {
          throw new Kotlin.UnsupportedOperationException("Empty iterable can't be reduced");
        }
        var result = iterator.next();
        while (iterator.hasNext()) {
          result = operation.call(this, result, iterator.next());
        }
        return result;
      },
      reduceRight_4: function (receiver, operation) {
        var index = receiver.length - 1;
        if (index < 0) {
          throw new Kotlin.UnsupportedOperationException("Empty iterable can't be reduced");
        }
        var r = receiver[index--];
        while (index >= 0) {
          r = operation.call(this, receiver[index--], r);
        }
        return r;
      },
      groupBy_6: function (receiver, toKey) {
        return _.kotlin.groupByTo_6(receiver, new Kotlin.ComplexHashMap(0), toKey);
      },
      groupByTo_6: function (receiver, result, toKey) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            var key = toKey.call(this, element);
            var list = _.kotlin.getOrPut(result, key, _f.fh);
            list.add(element);
          }
        }
        return result;
      },
      drop_6: function (receiver, n) {
        return _.kotlin.dropWhile_6(receiver, _.kotlin.countTo(n));
      },
      dropWhile_6: function (receiver, predicate) {
        return _.kotlin.dropWhileTo_6(receiver, new Kotlin.ArrayList(0), predicate);
      },
      dropWhileTo_6: function (receiver, result, predicate) {
        var start = true;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (start && predicate.call(this, element)) {
            }
             else {
              start = false;
              result.add(element);
            }
          }
        }
        return result;
      },
      take_5: function (receiver, n) {
        return _.kotlin.takeWhile_5(receiver, _.kotlin.countTo(n));
      },
      takeWhile_5: function (receiver, predicate) {
        return _.kotlin.takeWhileTo_6(receiver, new Kotlin.ArrayList(0), predicate);
      },
      takeWhileTo_6: function (receiver, result, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              result.add(element);
            else
              break;
          }
        }
        return result;
      },
      toCollection_6: function (receiver, result) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            result.add(element);
          }
        }
        return result;
      },
      reverse_6: function (receiver) {
        var list = _.kotlin.toCollection_6(receiver, new Kotlin.ArrayList(0));
        Kotlin.reverse(list);
        return list;
      },
      toLinkedList_6: function (receiver) {
        return _.kotlin.toCollection_6(receiver, new Kotlin.LinkedList());
      },
      toList_6: function (receiver) {
        return _.kotlin.toCollection_6(receiver, new Kotlin.ArrayList(0));
      },
      toSet_6: function (receiver) {
        return _.kotlin.toCollection_6(receiver, new Kotlin.LinkedHashSet());
      },
      toSortedSet_6: function (receiver) {
        return _.kotlin.toCollection_6(receiver, new Kotlin.TreeSet());
      },
      plus_17: function (receiver, element) {
        var answer = new Kotlin.ArrayList(0);
        _.kotlin.toCollection_6(receiver, answer);
        answer.add(element);
        return answer;
      },
      plus_18: function (receiver, iterator) {
        var answer = new Kotlin.ArrayList(0);
        _.kotlin.toCollection_6(receiver, answer);
        {
          var tmp$0 = iterator;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            answer.add(element);
          }
        }
        return answer;
      },
      plus_19: function (receiver, collection) {
        return _.kotlin.plus_18(receiver, collection.iterator());
      },
      withIndices_6: function (receiver) {
        return new _.kotlin.IndexIterator(Kotlin.arrayIterator(receiver));
      },
      sortBy_6: function (receiver, f) {
        var sortedList = _.kotlin.toCollection_6(receiver, new Kotlin.ArrayList(0));
        var sortBy = Kotlin.comparator(Kotlin.b2(_f.fi, this, [f]));
        Kotlin.collectionsSort(sortedList, sortBy);
        return sortedList;
      },
      appendString_6: function (receiver, buffer, separator, prefix, postfix, limit, truncated) {
        buffer.append(prefix);
        var count = 0;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (++count > 1)
              buffer.append(separator);
            if (limit < 0 || count <= limit) {
              var text = element == null ? 'null' : element.toString();
              buffer.append(text);
            }
             else
              break;
          }
        }
        if (limit >= 0 && count > limit)
          buffer.append(truncated);
        buffer.append(postfix);
      },
      makeString_6: function (receiver, separator, prefix, postfix, limit, truncated) {
        var buffer = new Kotlin.StringBuilder();
        _.kotlin.appendString_6(receiver, buffer, separator, prefix, postfix, limit, truncated);
        return buffer.toString();
      },
      iterate: function (nextFunction) {
        return new _.kotlin.FunctionIterator(nextFunction);
      },
      FilterIterator: Kotlin.createClass(classes.cf, {
        initialize: function (iterator, predicate) {
          this.$iterator = iterator;
          this.$predicate = predicate;
          this.super_init();
        },
        get_iterator: function () {
          return this.$iterator;
        },
        get_predicate: function () {
          return this.$predicate;
        },
        computeNext: function () {
          while (this.get_iterator().hasNext()) {
            var next = this.get_iterator().next();
            if (this.get_predicate()(next)) {
              this.setNext(next);
              return;
            }
          }
          this.done();
        }
      }),
      FilterNotNullIterator: Kotlin.createClass(classes.cf, {
        initialize: function (iterator) {
          this.$iterator = iterator;
          this.super_init();
        },
        get_iterator: function () {
          return this.$iterator;
        },
        computeNext: function () {
          if (this.get_iterator() != null) {
            while (this.get_iterator().hasNext()) {
              var next = this.get_iterator().next();
              if (next != null) {
                this.setNext(next);
                return;
              }
            }
          }
          this.done();
        }
      }),
      MapIterator: Kotlin.createClass(classes.cf, {
        initialize: function (iterator, transform) {
          this.$iterator = iterator;
          this.$transform = transform;
          this.super_init();
        },
        get_iterator: function () {
          return this.$iterator;
        },
        get_transform: function () {
          return this.$transform;
        },
        computeNext: function () {
          if (this.get_iterator().hasNext()) {
            this.setNext(this.get_transform()(this.get_iterator().next()));
          }
           else {
            this.done();
          }
        }
      }),
      FlatMapIterator: Kotlin.createClass(classes.cf, {
        initialize: function (iterator, transform) {
          this.$iterator = iterator;
          this.$transform = transform;
          this.super_init();
          this.$transformed = _.kotlin.iterate(function () {
            return null;
          });
        },
        get_iterator: function () {
          return this.$iterator;
        },
        get_transform: function () {
          return this.$transform;
        },
        get_transformed: function () {
          return this.$transformed;
        },
        set_transformed: function (tmp$0) {
          this.$transformed = tmp$0;
        },
        computeNext: function () {
          while (true) {
            if (this.get_transformed().hasNext()) {
              this.setNext(this.get_transformed().next());
              return;
            }
            if (this.get_iterator().hasNext()) {
              this.set_transformed(this.get_transform()(this.get_iterator().next()));
            }
             else {
              this.done();
              return;
            }
          }
        }
      }),
      TakeWhileIterator: Kotlin.createClass(classes.cf, {
        initialize: function (iterator, predicate) {
          this.$iterator = iterator;
          this.$predicate = predicate;
          this.super_init();
        },
        get_iterator: function () {
          return this.$iterator;
        },
        get_predicate: function () {
          return this.$predicate;
        },
        computeNext: function () {
          if (this.get_iterator().hasNext()) {
            var item = this.get_iterator().next();
            if (this.get_predicate()(item)) {
              this.setNext(item);
              return;
            }
          }
          this.done();
        }
      }),
      FunctionIterator: Kotlin.createClass(classes.cf, {
        initialize: function (nextFunction) {
          this.$nextFunction = nextFunction;
          this.super_init();
        },
        get_nextFunction: function () {
          return this.$nextFunction;
        },
        computeNext: function () {
          var next = this.get_nextFunction()();
          if (next == null) {
            this.done();
          }
           else {
            this.setNext(next);
          }
        }
      }),
      CompositeIterator: Kotlin.createClass(classes.cf, {
        initialize: function (iterators) {
          this.super_init();
          this.$iteratorsIter = Kotlin.arrayIterator(iterators);
          this.$currentIter = null;
        },
        get_iteratorsIter: function () {
          return this.$iteratorsIter;
        },
        get_currentIter: function () {
          return this.$currentIter;
        },
        set_currentIter: function (tmp$0) {
          this.$currentIter = tmp$0;
        },
        computeNext: function () {
          while (true) {
            if (this.get_currentIter() == null) {
              if (this.get_iteratorsIter().hasNext()) {
                this.set_currentIter(this.get_iteratorsIter().next());
              }
               else {
                this.done();
                return;
              }
            }
            var iter = this.get_currentIter();
            if (iter != null) {
              if (iter.hasNext()) {
                this.setNext(iter.next());
                return;
              }
               else {
                this.set_currentIter(null);
              }
            }
          }
        }
      }),
      SingleIterator: Kotlin.createClass(classes.cf, {
        initialize: function (value) {
          this.$value = value;
          this.super_init();
          this.$first = true;
        },
        get_value: function () {
          return this.$value;
        },
        get_first: function () {
          return this.$first;
        },
        set_first: function (tmp$0) {
          this.$first = tmp$0;
        },
        computeNext: function () {
          if (this.get_first()) {
            this.set_first(false);
            this.setNext(this.get_value());
          }
           else {
            this.done();
          }
        }
      }),
      IndexIterator: Kotlin.createClass(Kotlin.Iterator, {
        initialize: function (iterator) {
          this.$iterator = iterator;
          this.$index = 0;
        },
        get_iterator: function () {
          return this.$iterator;
        },
        get_index: function () {
          return this.$index;
        },
        set_index: function (tmp$0) {
          this.$index = tmp$0;
        },
        next: function () {
          var tmp$0, tmp$1;
          return new _.kotlin.Pair((tmp$0 = this.get_index(), tmp$1 = tmp$0, this.set_index(tmp$0 + 1), tmp$1), this.get_iterator().next());
        },
        hasNext: function () {
          return this.get_iterator().hasNext();
        }
      }),
      filter_6: function (receiver, predicate) {
        return _.kotlin.filterTo_3(receiver, new Kotlin.ArrayList(0), predicate);
      },
      filterNot_6: function (receiver, predicate) {
        return _.kotlin.filterNotTo_3(receiver, new Kotlin.ArrayList(0), predicate);
      },
      filterNotNull_1: function (receiver) {
        return _.kotlin.filterNotNullTo_0(receiver, new Kotlin.ArrayList(0));
      },
      map_8: function (receiver, transform) {
        return _.kotlin.mapTo_4(receiver, new Kotlin.ArrayList(0), transform);
      },
      flatMap_6: function (receiver, transform) {
        return _.kotlin.flatMapTo_3(receiver, new Kotlin.ArrayList(0), transform);
      },
      take_6: function (receiver, n) {
        return _.kotlin.takeWhile_6(receiver, _.kotlin.countTo(n));
      },
      takeWhile_6: function (receiver, predicate) {
        return _.kotlin.takeWhileTo_3(receiver, new Kotlin.ArrayList(0), predicate);
      },
      requireNoNulls_1: function (receiver) {
        {
          var tmp$0 = receiver.iterator();
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (element == null) {
              throw new Kotlin.IllegalArgumentException('null element found in ' + receiver.toString());
            }
          }
        }
        return receiver;
      },
      plus_20: function (receiver, element) {
        var answer = new Kotlin.ArrayList(0);
        _.kotlin.toCollection_1(receiver, answer);
        answer.add(element);
        return answer;
      },
      plus_21: function (receiver, iterator) {
        var answer = new Kotlin.ArrayList(0);
        _.kotlin.toCollection_1(receiver, answer);
        {
          var tmp$0 = iterator;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            answer.add(element);
          }
        }
        return answer;
      },
      plus_22: function (receiver, collection) {
        return _.kotlin.plus_21(receiver, collection.iterator());
      },
      notEmpty_1: function (receiver) {
        return !_.kotlin.isEmpty(receiver);
      },
      isEmpty: function (receiver) {
        return receiver.length === 0;
      },
      orEmpty_2: function (receiver) {
        return receiver != null ? receiver : Kotlin.array([]);
      },
      get_lastIndex_0: function (receiver) {
        return receiver.length - 1;
      },
      get_lastIndex_1: function (receiver) {
        return receiver.length - 1;
      },
      get_lastIndex_2: function (receiver) {
        return receiver.length - 1;
      },
      get_lastIndex_3: function (receiver) {
        return receiver.length - 1;
      },
      get_lastIndex_4: function (receiver) {
        return receiver.length - 1;
      },
      get_lastIndex_5: function (receiver) {
        return receiver.length - 1;
      },
      get_lastIndex_6: function (receiver) {
        return receiver.length - 1;
      },
      get_lastIndex_7: function (receiver) {
        return receiver.length - 1;
      },
      get_lastIndex_8: function (receiver) {
        return receiver.length - 1;
      },
      all_7: function (receiver, predicate) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            if (!predicate.call(this, element))
              return false;
          }
        }
        return true;
      },
      any_7: function (receiver, predicate) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            if (predicate.call(this, element))
              return true;
          }
        }
        return false;
      },
      count_8: function (receiver, predicate) {
        var count = 0;
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            if (predicate.call(this, element))
              count++;
          }
        }
        return count;
      },
      find_7: function (receiver, predicate) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            if (predicate.call(this, element))
              return element;
          }
        }
        return null;
      },
      filter_7: function (receiver, predicate) {
        return _.kotlin.filterTo_7(receiver, new Kotlin.ArrayList(0), predicate);
      },
      filterTo_7: function (receiver, result, predicate) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            if (predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      filterNot_7: function (receiver, predicate) {
        return _.kotlin.filterNotTo_7(receiver, new Kotlin.ArrayList(0), predicate);
      },
      filterNotTo_7: function (receiver, result, predicate) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            if (!predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      partition_7: function (receiver, predicate) {
        var first = new Kotlin.ArrayList(0);
        var second = new Kotlin.ArrayList(0);
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            {
              if (predicate.call(this, element)) {
                first.add(element);
              }
               else {
                second.add(element);
              }
            }
          }
        }
        return new _.kotlin.Pair(first, second);
      },
      map_9: function (receiver, transform) {
        return _.kotlin.mapTo_8(receiver, new Kotlin.ArrayList(0), transform);
      },
      mapTo_8: function (receiver, result, transform) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var item = tmp$0[tmp$2];
            result.add(transform.call(this, item));
          }
        }
        return result;
      },
      flatMap_7: function (receiver, transform) {
        return _.kotlin.flatMapTo_7(receiver, new Kotlin.ArrayList(0), transform);
      },
      flatMapTo_7: function (receiver, result, transform) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            {
              var list = transform.call(this, element);
              {
                var tmp$3 = list.iterator();
                while (tmp$3.hasNext()) {
                  var r = tmp$3.next();
                  result.add(r);
                }
              }
            }
          }
        }
        return result;
      },
      forEach_7: function (receiver, operation) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            operation.call(this, element);
          }
        }
      },
      fold_7: function (receiver, initial, operation) {
        var answer = initial;
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            answer = operation.call(this, answer, element);
          }
        }
        return answer;
      },
      foldRight_5: function (receiver, initial, operation) {
        var r = initial;
        var index = receiver.length - 1;
        while (index >= 0) {
          r = operation.call(this, receiver[index--], r);
        }
        return r;
      },
      reduce_7: function (receiver, operation) {
        var iterator = Kotlin.arrayIterator(receiver);
        if (!iterator.hasNext()) {
          throw new Kotlin.UnsupportedOperationException("Empty iterable can't be reduced");
        }
        var result = iterator.next();
        while (iterator.hasNext()) {
          result = operation.call(this, result, iterator.next());
        }
        return result;
      },
      reduceRight_5: function (receiver, operation) {
        var index = receiver.length - 1;
        if (index < 0) {
          throw new Kotlin.UnsupportedOperationException("Empty iterable can't be reduced");
        }
        var r = receiver[index--];
        while (index >= 0) {
          r = operation.call(this, receiver[index--], r);
        }
        return r;
      },
      groupBy_7: function (receiver, toKey) {
        return _.kotlin.groupByTo_7(receiver, new Kotlin.ComplexHashMap(0), toKey);
      },
      groupByTo_7: function (receiver, result, toKey) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            {
              var key = toKey.call(this, element);
              var list = _.kotlin.getOrPut(result, key, _f.fj);
              list.add(element);
            }
          }
        }
        return result;
      },
      drop_7: function (receiver, n) {
        return _.kotlin.dropWhile_7(receiver, _.kotlin.countTo(n));
      },
      dropWhile_7: function (receiver, predicate) {
        return _.kotlin.dropWhileTo_7(receiver, new Kotlin.ArrayList(0), predicate);
      },
      dropWhileTo_7: function (receiver, result, predicate) {
        var start = true;
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            {
              if (start && predicate.call(this, element)) {
              }
               else {
                start = false;
                result.add(element);
              }
            }
          }
        }
        return result;
      },
      take_7: function (receiver, n) {
        return _.kotlin.takeWhile_7(receiver, _.kotlin.countTo(n));
      },
      takeWhile_7: function (receiver, predicate) {
        return _.kotlin.takeWhileTo_7(receiver, new Kotlin.ArrayList(0), predicate);
      },
      takeWhileTo_7: function (receiver, result, predicate) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            if (predicate.call(this, element))
              result.add(element);
            else
              break;
          }
        }
        return result;
      },
      toCollection_7: function (receiver, result) {
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            result.add(element);
          }
        }
        return result;
      },
      reverse_7: function (receiver) {
        var list = _.kotlin.toCollection_7(receiver, new Kotlin.ArrayList(0));
        Kotlin.reverse(list);
        return list;
      },
      toLinkedList_7: function (receiver) {
        return _.kotlin.toCollection_7(receiver, new Kotlin.LinkedList());
      },
      toList_7: function (receiver) {
        return _.kotlin.toCollection_7(receiver, new Kotlin.ArrayList(0));
      },
      toSet_7: function (receiver) {
        return _.kotlin.toCollection_7(receiver, new Kotlin.LinkedHashSet());
      },
      toSortedSet_7: function (receiver) {
        return _.kotlin.toCollection_7(receiver, new Kotlin.TreeSet());
      },
      plus_23: function (receiver, element) {
        var answer = new Kotlin.ArrayList(0);
        _.kotlin.toCollection_7(receiver, answer);
        answer.add(element);
        return answer;
      },
      plus_24: function (receiver, iterator) {
        var answer = new Kotlin.ArrayList(0);
        _.kotlin.toCollection_7(receiver, answer);
        {
          var tmp$0 = iterator;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            answer.add(element);
          }
        }
        return answer;
      },
      plus_25: function (receiver, collection) {
        return _.kotlin.plus_24(receiver, collection.iterator());
      },
      withIndices_7: function (receiver) {
        return new _.kotlin.IndexIterator(Kotlin.arrayIterator(receiver));
      },
      sortBy_7: function (receiver, f) {
        var sortedList = _.kotlin.toCollection_7(receiver, new Kotlin.ArrayList(0));
        var sortBy = Kotlin.comparator(Kotlin.b2(_f.fk, this, [f]));
        Kotlin.collectionsSort(sortedList, sortBy);
        return sortedList;
      },
      appendString_7: function (receiver, buffer, separator, prefix, postfix, limit, truncated) {
        buffer.append(prefix);
        var count = 0;
        var tmp$0, tmp$1, tmp$2;
        {
          tmp$0 = receiver, tmp$1 = tmp$0.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
            var element = tmp$0[tmp$2];
            {
              if (++count > 1)
                buffer.append(separator);
              if (limit < 0 || count <= limit) {
                var text = element == null ? 'null' : element.toString();
                buffer.append(text);
              }
               else
                break;
            }
          }
        }
        if (limit >= 0 && count > limit)
          buffer.append(truncated);
        buffer.append(postfix);
      },
      makeString_7: function (receiver, separator, prefix, postfix, limit, truncated) {
        var buffer = new Kotlin.StringBuilder();
        _.kotlin.appendString_7(receiver, buffer, separator, prefix, postfix, limit, truncated);
        return buffer.toString();
      },
      trim: function (receiver, text) {
        return _.kotlin.trimTrailing(_.kotlin.trimLeading(receiver, text), text);
      },
      trim_0: function (receiver, prefix, postfix) {
        return _.kotlin.trimTrailing(_.kotlin.trimLeading(receiver, prefix), postfix);
      },
      trimLeading: function (receiver, prefix) {
        var answer = receiver;
        if (_.js.startsWith(answer, prefix)) {
          answer = answer.substring(_.js.length(prefix));
        }
        return answer;
      },
      trimTrailing: function (receiver, postfix) {
        var answer = receiver;
        if (_.js.endsWith_0(answer, postfix)) {
          answer = answer.substring(0, _.js.length(receiver) - _.js.length(postfix));
        }
        return answer;
      },
      notEmpty: function (receiver) {
        return receiver != null && _.js.length(receiver) > 0;
      },
      iterator_1: function (receiver) {
        return Kotlin.createObject(_.jet.CharIterator, {
          initialize: function () {
            this.super_init();
            this.$index = 0;
          },
          get_index: function () {
            return this.$index;
          },
          set_index: function (tmp$0) {
            this.$index = tmp$0;
          },
          nextChar: function () {
            var tmp$0, tmp$1;
            return receiver.get((tmp$0 = this.get_index(), tmp$1 = tmp$0, this.set_index(tmp$0 + 1), tmp$1));
          },
          hasNext: function () {
            return this.get_index() < receiver.length;
          }
        });
      },
      orEmpty_3: function (receiver) {
        return receiver !== null ? receiver : '';
      },
      get_size_1: function (receiver) {
        return receiver.length;
      },
      count_9: function (receiver, predicate) {
        var answer = 0;
        {
          var tmp$0 = _.kotlin.iterator_1(receiver);
          while (tmp$0.hasNext()) {
            var c = tmp$0.next();
            if (predicate.call(this, c)) {
              answer++;
            }
          }
        }
        return answer;
      },
      all_8: function (receiver, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (!predicate.call(this, element))
              return false;
          }
        }
        return true;
      },
      any_8: function (receiver, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              return true;
          }
        }
        return false;
      },
      count_10: function (receiver, predicate) {
        var count = 0;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              count++;
          }
        }
        return count;
      },
      find_8: function (receiver, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              return element;
          }
        }
        return null;
      },
      filter_8: function (receiver, predicate) {
        return _.kotlin.filterTo_8(receiver, new Kotlin.ArrayList(0), predicate);
      },
      filterTo_8: function (receiver, result, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      filterNot_8: function (receiver, predicate) {
        return _.kotlin.filterNotTo_8(receiver, new Kotlin.ArrayList(0), predicate);
      },
      filterNotTo_8: function (receiver, result, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (!predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      partition_8: function (receiver, predicate) {
        var first = new Kotlin.ArrayList(0);
        var second = new Kotlin.ArrayList(0);
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element)) {
              first.add(element);
            }
             else {
              second.add(element);
            }
          }
        }
        return new _.kotlin.Pair(first, second);
      },
      map_10: function (receiver, transform) {
        return _.kotlin.mapTo_9(receiver, new Kotlin.ArrayList(0), transform);
      },
      mapTo_9: function (receiver, result, transform) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var item = tmp$0.next();
            result.add(transform.call(this, item));
          }
        }
        return result;
      },
      flatMap_8: function (receiver, transform) {
        return _.kotlin.flatMapTo_8(receiver, new Kotlin.ArrayList(0), transform);
      },
      flatMapTo_8: function (receiver, result, transform) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            var list = transform.call(this, element);
            {
              var tmp$1 = list.iterator();
              while (tmp$1.hasNext()) {
                var r = tmp$1.next();
                result.add(r);
              }
            }
          }
        }
        return result;
      },
      forEach_8: function (receiver, operation) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            operation.call(this, element);
          }
        }
      },
      fold_8: function (receiver, initial, operation) {
        var answer = initial;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            answer = operation.call(this, answer, element);
          }
        }
        return answer;
      },
      foldRight_6: function (receiver, initial, operation) {
        var r = initial;
        var index = receiver.length - 1;
        while (index >= 0) {
          r = operation.call(this, receiver[index--], r);
        }
        return r;
      },
      reduce_8: function (receiver, operation) {
        var iterator = Kotlin.arrayIterator(receiver);
        if (!iterator.hasNext()) {
          throw new Kotlin.UnsupportedOperationException("Empty iterable can't be reduced");
        }
        var result = iterator.next();
        while (iterator.hasNext()) {
          result = operation.call(this, result, iterator.next());
        }
        return result;
      },
      reduceRight_6: function (receiver, operation) {
        var index = receiver.length - 1;
        if (index < 0) {
          throw new Kotlin.UnsupportedOperationException("Empty iterable can't be reduced");
        }
        var r = receiver[index--];
        while (index >= 0) {
          r = operation.call(this, receiver[index--], r);
        }
        return r;
      },
      groupBy_8: function (receiver, toKey) {
        return _.kotlin.groupByTo_8(receiver, new Kotlin.ComplexHashMap(0), toKey);
      },
      groupByTo_8: function (receiver, result, toKey) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            var key = toKey.call(this, element);
            var list = _.kotlin.getOrPut(result, key, _f.fs);
            list.add(element);
          }
        }
        return result;
      },
      drop_8: function (receiver, n) {
        return _.kotlin.dropWhile_8(receiver, _.kotlin.countTo(n));
      },
      dropWhile_8: function (receiver, predicate) {
        return _.kotlin.dropWhileTo_8(receiver, new Kotlin.ArrayList(0), predicate);
      },
      dropWhileTo_8: function (receiver, result, predicate) {
        var start = true;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (start && predicate.call(this, element)) {
            }
             else {
              start = false;
              result.add(element);
            }
          }
        }
        return result;
      },
      take_8: function (receiver, n) {
        return _.kotlin.takeWhile_8(receiver, _.kotlin.countTo(n));
      },
      takeWhile_8: function (receiver, predicate) {
        return _.kotlin.takeWhileTo_8(receiver, new Kotlin.ArrayList(0), predicate);
      },
      takeWhileTo_8: function (receiver, result, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              result.add(element);
            else
              break;
          }
        }
        return result;
      },
      toCollection_8: function (receiver, result) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            result.add(element);
          }
        }
        return result;
      },
      reverse_8: function (receiver) {
        var list = _.kotlin.toCollection_8(receiver, new Kotlin.ArrayList(0));
        Kotlin.reverse(list);
        return list;
      },
      toLinkedList_8: function (receiver) {
        return _.kotlin.toCollection_8(receiver, new Kotlin.LinkedList());
      },
      toList_8: function (receiver) {
        return _.kotlin.toCollection_8(receiver, new Kotlin.ArrayList(0));
      },
      toSet_8: function (receiver) {
        return _.kotlin.toCollection_8(receiver, new Kotlin.LinkedHashSet());
      },
      toSortedSet_8: function (receiver) {
        return _.kotlin.toCollection_8(receiver, new Kotlin.TreeSet());
      },
      plus_26: function (receiver, element) {
        var answer = new Kotlin.ArrayList(0);
        _.kotlin.toCollection_8(receiver, answer);
        answer.add(element);
        return answer;
      },
      plus_27: function (receiver, iterator) {
        var answer = new Kotlin.ArrayList(0);
        _.kotlin.toCollection_8(receiver, answer);
        {
          var tmp$0 = iterator;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            answer.add(element);
          }
        }
        return answer;
      },
      plus_28: function (receiver, collection) {
        return _.kotlin.plus_27(receiver, collection.iterator());
      },
      withIndices_8: function (receiver) {
        return new _.kotlin.IndexIterator(Kotlin.arrayIterator(receiver));
      },
      sortBy_8: function (receiver, f) {
        var sortedList = _.kotlin.toCollection_8(receiver, new Kotlin.ArrayList(0));
        var sortBy = Kotlin.comparator(Kotlin.b2(_f.ft, this, [f]));
        Kotlin.collectionsSort(sortedList, sortBy);
        return sortedList;
      },
      appendString_8: function (receiver, buffer, separator, prefix, postfix, limit, truncated) {
        buffer.append(prefix);
        var count = 0;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (++count > 1)
              buffer.append(separator);
            if (limit < 0 || count <= limit) {
              var text = element == null ? 'null' : element.toString();
              buffer.append(text);
            }
             else
              break;
          }
        }
        if (limit >= 0 && count > limit)
          buffer.append(truncated);
        buffer.append(postfix);
      },
      makeString_8: function (receiver, separator, prefix, postfix, limit, truncated) {
        var buffer = new Kotlin.StringBuilder();
        _.kotlin.appendString_8(receiver, buffer, separator, prefix, postfix, limit, truncated);
        return buffer.toString();
      },
      all_9: function (receiver, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (!predicate.call(this, element))
              return false;
          }
        }
        return true;
      },
      any_9: function (receiver, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              return true;
          }
        }
        return false;
      },
      count_11: function (receiver, predicate) {
        var count = 0;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              count++;
          }
        }
        return count;
      },
      find_9: function (receiver, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              return element;
          }
        }
        return null;
      },
      filter_9: function (receiver, predicate) {
        return _.kotlin.filterTo_9(receiver, new Kotlin.ArrayList(0), predicate);
      },
      filterTo_9: function (receiver, result, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      filterNot_9: function (receiver, predicate) {
        return _.kotlin.filterNotTo_9(receiver, new Kotlin.ArrayList(0), predicate);
      },
      filterNotTo_9: function (receiver, result, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (!predicate.call(this, element))
              result.add(element);
          }
        }
        return result;
      },
      partition_9: function (receiver, predicate) {
        var first = new Kotlin.ArrayList(0);
        var second = new Kotlin.ArrayList(0);
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element)) {
              first.add(element);
            }
             else {
              second.add(element);
            }
          }
        }
        return new _.kotlin.Pair(first, second);
      },
      map_11: function (receiver, transform) {
        return _.kotlin.mapTo_10(receiver, new Kotlin.ArrayList(0), transform);
      },
      mapTo_10: function (receiver, result, transform) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var item = tmp$0.next();
            result.add(transform.call(this, item));
          }
        }
        return result;
      },
      flatMap_9: function (receiver, transform) {
        return _.kotlin.flatMapTo_9(receiver, new Kotlin.ArrayList(0), transform);
      },
      flatMapTo_9: function (receiver, result, transform) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            var list = transform.call(this, element);
            {
              var tmp$1 = list.iterator();
              while (tmp$1.hasNext()) {
                var r = tmp$1.next();
                result.add(r);
              }
            }
          }
        }
        return result;
      },
      forEach_9: function (receiver, operation) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            operation.call(this, element);
          }
        }
      },
      fold_9: function (receiver, initial, operation) {
        var answer = initial;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            answer = operation.call(this, answer, element);
          }
        }
        return answer;
      },
      foldRight_7: function (receiver, initial, operation) {
        var r = initial;
        var index = receiver.length - 1;
        while (index >= 0) {
          r = operation.call(this, receiver[index--], r);
        }
        return r;
      },
      reduce_9: function (receiver, operation) {
        var iterator = Kotlin.arrayIterator(receiver);
        if (!iterator.hasNext()) {
          throw new Kotlin.UnsupportedOperationException("Empty iterable can't be reduced");
        }
        var result = iterator.next();
        while (iterator.hasNext()) {
          result = operation.call(this, result, iterator.next());
        }
        return result;
      },
      reduceRight_7: function (receiver, operation) {
        var index = receiver.length - 1;
        if (index < 0) {
          throw new Kotlin.UnsupportedOperationException("Empty iterable can't be reduced");
        }
        var r = receiver[index--];
        while (index >= 0) {
          r = operation.call(this, receiver[index--], r);
        }
        return r;
      },
      groupBy_9: function (receiver, toKey) {
        return _.kotlin.groupByTo_9(receiver, new Kotlin.ComplexHashMap(0), toKey);
      },
      groupByTo_9: function (receiver, result, toKey) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            var key = toKey.call(this, element);
            var list = _.kotlin.getOrPut(result, key, _f.fu);
            list.add(element);
          }
        }
        return result;
      },
      drop_9: function (receiver, n) {
        return _.kotlin.dropWhile_9(receiver, _.kotlin.countTo(n));
      },
      dropWhile_9: function (receiver, predicate) {
        return _.kotlin.dropWhileTo_9(receiver, new Kotlin.ArrayList(0), predicate);
      },
      dropWhileTo_9: function (receiver, result, predicate) {
        var start = true;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (start && predicate.call(this, element)) {
            }
             else {
              start = false;
              result.add(element);
            }
          }
        }
        return result;
      },
      take_9: function (receiver, n) {
        return _.kotlin.takeWhile_9(receiver, _.kotlin.countTo(n));
      },
      takeWhile_9: function (receiver, predicate) {
        return _.kotlin.takeWhileTo_9(receiver, new Kotlin.ArrayList(0), predicate);
      },
      takeWhileTo_9: function (receiver, result, predicate) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (predicate.call(this, element))
              result.add(element);
            else
              break;
          }
        }
        return result;
      },
      toCollection_9: function (receiver, result) {
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            result.add(element);
          }
        }
        return result;
      },
      reverse_9: function (receiver) {
        var list = _.kotlin.toCollection_9(receiver, new Kotlin.ArrayList(0));
        Kotlin.reverse(list);
        return list;
      },
      toLinkedList_9: function (receiver) {
        return _.kotlin.toCollection_9(receiver, new Kotlin.LinkedList());
      },
      toList_9: function (receiver) {
        return _.kotlin.toCollection_9(receiver, new Kotlin.ArrayList(0));
      },
      toSet_9: function (receiver) {
        return _.kotlin.toCollection_9(receiver, new Kotlin.LinkedHashSet());
      },
      toSortedSet_9: function (receiver) {
        return _.kotlin.toCollection_9(receiver, new Kotlin.TreeSet());
      },
      plus_29: function (receiver, element) {
        var answer = new Kotlin.ArrayList(0);
        _.kotlin.toCollection_9(receiver, answer);
        answer.add(element);
        return answer;
      },
      plus_30: function (receiver, iterator) {
        var answer = new Kotlin.ArrayList(0);
        _.kotlin.toCollection_9(receiver, answer);
        {
          var tmp$0 = iterator;
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            answer.add(element);
          }
        }
        return answer;
      },
      plus_31: function (receiver, collection) {
        return _.kotlin.plus_30(receiver, collection.iterator());
      },
      withIndices_9: function (receiver) {
        return new _.kotlin.IndexIterator(Kotlin.arrayIterator(receiver));
      },
      sortBy_9: function (receiver, f) {
        var sortedList = _.kotlin.toCollection_9(receiver, new Kotlin.ArrayList(0));
        var sortBy = Kotlin.comparator(Kotlin.b2(_f.fv, this, [f]));
        Kotlin.collectionsSort(sortedList, sortBy);
        return sortedList;
      },
      appendString_9: function (receiver, buffer, separator, prefix, postfix, limit, truncated) {
        buffer.append(prefix);
        var count = 0;
        {
          var tmp$0 = Kotlin.arrayIterator(receiver);
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            if (++count > 1)
              buffer.append(separator);
            if (limit < 0 || count <= limit) {
              var text = element == null ? 'null' : element.toString();
              buffer.append(text);
            }
             else
              break;
          }
        }
        if (limit >= 0 && count > limit)
          buffer.append(truncated);
        buffer.append(postfix);
      },
      makeString_9: function (receiver, separator, prefix, postfix, limit, truncated) {
        var buffer = new Kotlin.StringBuilder();
        _.kotlin.appendString_9(receiver, buffer, separator, prefix, postfix, limit, truncated);
        return buffer.toString();
      },
      test: Kotlin.definePackage({
        todo: function (block) {
          Kotlin.println('TODO at ' + block);
        },
        get_asserter: function () {
          return this.$asserter;
        },
        set_asserter: function (tmp$0) {
          this.$asserter = tmp$0;
        },
        QUnitAsserter: Kotlin.createClass(classes.cg, {
          initialize: function () {
          },
          assertTrue: function (message, actual) {
            ok(actual, message);
          },
          assertEquals: function (message, expected, actual) {
            ok(Kotlin.equals(expected, actual), message + '. Expected <' + expected.toString() + '> actual <' + actual.toString() + '>');
          },
          assertNotNull: function (message, actual) {
            ok(actual != null, message);
          },
          assertNull: function (message, actual) {
            ok(actual == null, message);
          },
          fail: function (message) {
            ok(false, message);
          }
        }),
        assertTrue: function (message, block) {
          var actual = block();
          _.kotlin.test.get_asserter().assertTrue(message, actual);
        },
        assertTrue_0: function (block) {
          _.kotlin.test.assertTrue(block.toString(), block);
        },
        assertNot: function (message, block) {
          _.kotlin.test.assertTrue(message, Kotlin.b0(_f.fl, null, block));
        },
        assertNot_0: function (block) {
          _.kotlin.test.assertNot(block.toString(), block);
        },
        assertTrue_1: function (actual, message) {
          return _.kotlin.test.assertEquals(true, actual, message);
        },
        assertFalse: function (actual, message) {
          return _.kotlin.test.assertEquals(false, actual, message);
        },
        assertEquals: function (expected, actual, message) {
          _.kotlin.test.get_asserter().assertEquals(message, expected, actual);
        },
        assertNotNull: function (actual, message) {
          _.kotlin.test.get_asserter().assertNotNull(message, actual);
          var tmp$0;
          return (tmp$0 = actual) != null ? tmp$0 : Kotlin.throwNPE();
        },
        assertNotNull_0: function (actual, message, block) {
          _.kotlin.test.get_asserter().assertNotNull(message, actual);
          if (actual != null) {
            block(actual);
          }
        },
        assertNull: function (actual, message) {
          _.kotlin.test.get_asserter().assertNull(message, actual);
        },
        fail: function (message) {
          _.kotlin.test.get_asserter().fail(message);
        },
        expect: function (expected, block) {
          _.kotlin.test.expect_0(expected, block.toString(), block);
        },
        expect_0: function (expected, message, block) {
          var actual = block();
          _.kotlin.test.assertEquals(expected, actual, message);
        },
        fails: function (block) {
          try {
            block();
            _.kotlin.test.get_asserter().fail('Expected an exception to be thrown');
            return null;
          }
           catch (e) {
            return e;
          }
        },
        Asserter: classes.cg
      }),
      dom: Kotlin.definePackage({
        createDocument: function () {
          return document.implementation.createDocument(null, null, null);
        },
        toXmlString: function (receiver) {
          return receiver.outerHTML;
        },
        toXmlString_0: function (receiver, xmlDeclaration) {
          return receiver.outerHTML;
        },
        eventHandler: function (handler) {
          return new _.kotlin.dom.EventListenerHandler(handler);
        },
        EventListenerHandler: Kotlin.createClass(classes.ce, {
          initialize: function (handler) {
            this.$handler = handler;
          },
          get_handler: function () {
            return this.$handler;
          },
          handleEvent: function (e) {
            if (e != null) {
              this.get_handler()(e);
            }
          }
        }),
        mouseEventHandler: function (handler) {
          return _.kotlin.dom.eventHandler(Kotlin.b2(_f.f6, null, [handler]));
        },
        on: function (receiver, name, capture, handler) {
          return _.kotlin.dom.on_0(receiver, name, capture, _.kotlin.dom.eventHandler(handler));
        },
        on_0: function (receiver, name, capture, listener) {
          var tmp$0;
          if (Kotlin.isType(receiver, EventTarget)) {
            this.addEventListener(name, listener, capture);
            tmp$0 = new _.kotlin.dom.CloseableEventListener(receiver, listener, name, capture);
          }
           else {
            tmp$0 = null;
          }
          return tmp$0;
        },
        CloseableEventListener: Kotlin.createClass(Kotlin.Closeable, {
          initialize: function (target, listener, name, capture) {
            this.$target = target;
            this.$listener = listener;
            this.$name = name;
            this.$capture = capture;
          },
          get_target: function () {
            return this.$target;
          },
          get_listener: function () {
            return this.$listener;
          },
          get_name: function () {
            return this.$name;
          },
          get_capture: function () {
            return this.$capture;
          },
          close: function () {
            this.get_target().removeEventListener(this.get_name(), this.get_listener(), this.get_capture());
          }
        }),
        onClick: function (receiver, capture, handler) {
          return _.kotlin.dom.on_0(receiver, 'click', capture, _.kotlin.dom.mouseEventHandler(handler));
        },
        onDoubleClick: function (receiver, capture, handler) {
          return _.kotlin.dom.on_0(receiver, 'dblclick', capture, _.kotlin.dom.mouseEventHandler(handler));
        },
        emptyElementList: function () {
          return Kotlin.emptyList();
        },
        emptyNodeList: function () {
          return Kotlin.emptyList();
        },
        get_text: function (receiver) {
          return receiver.textContent;
        },
        set_text: function (receiver, value) {
          receiver.textContent = value;
        },
        get_childrenText: function (receiver) {
          var buffer = new Kotlin.StringBuilder();
          var nodeList = receiver.childNodes;
          var i = 0;
          var size = nodeList.length;
          while (i < size) {
            var node = nodeList.item(i);
            if (node != null) {
              if (_.kotlin.dom.isText(node)) {
                buffer.append(node.nodeValue);
              }
            }
            i++;
          }
          return buffer.toString();
        },
        set_childrenText: function (receiver, value) {
          var element = receiver;
          {
            var tmp$0 = _.kotlin.dom.children(element).iterator();
            while (tmp$0.hasNext()) {
              var node = tmp$0.next();
              if (_.kotlin.dom.isText(node)) {
                receiver.removeChild(node);
              }
            }
          }
          _.kotlin.dom.addText(element, value, null);
        },
        get_id: function (receiver) {
          return receiver.getAttribute('id') !== null ? receiver.getAttribute('id') : '';
        },
        set_id: function (receiver, value) {
          receiver.setAttribute('id', value);
          receiver.setIdAttribute('id', true);
        },
        get_style: function (receiver) {
          return receiver.getAttribute('style') !== null ? receiver.getAttribute('style') : '';
        },
        set_style: function (receiver, value) {
          receiver.setAttribute('style', value);
        },
        get_classes: function (receiver) {
          return receiver.getAttribute('class') !== null ? receiver.getAttribute('class') : '';
        },
        set_classes: function (receiver, value) {
          receiver.setAttribute('class', value);
        },
        hasClass: function (receiver, cssClass) {
          var c = _.kotlin.dom.get_classes(receiver);
          return _.js.matches(c, '(^|.*' + '\\' + 's+)' + cssClass + '(' + '$' + '|' + '\\' + 's+.*)');
        },
        children: function (receiver) {
          var tmp$0;
          return _.kotlin.dom.toList((tmp$0 = receiver) != null ? tmp$0.childNodes : null);
        },
        childElements: function (receiver) {
          return _.kotlin.map_8(_.kotlin.filter_6(_.kotlin.dom.children(receiver), Kotlin.b4(_f.fm, this)), _f.fn);
        },
        childElements_0: function (receiver, name) {
          return _.kotlin.map_8(_.kotlin.filter_6(_.kotlin.dom.children(receiver), Kotlin.b2(_f.fo, this, [name])), _f.fp);
        },
        get_elements: function (receiver) {
          var tmp$0;
          return _.kotlin.dom.toElementList((tmp$0 = receiver) != null ? tmp$0.getElementsByTagName('*') : null);
        },
        get_elements_0: function (receiver) {
          var tmp$0;
          return _.kotlin.dom.toElementList((tmp$0 = receiver) != null ? tmp$0.getElementsByTagName('*') : null);
        },
        elements: function (receiver, localName) {
          var tmp$0;
          return _.kotlin.dom.toElementList((tmp$0 = receiver) != null ? tmp$0.getElementsByTagName(localName) : null);
        },
        elements_0: function (receiver, localName) {
          var tmp$0;
          return _.kotlin.dom.toElementList((tmp$0 = receiver) != null ? tmp$0.getElementsByTagName(localName) : null);
        },
        elements_1: function (receiver, namespaceUri, localName) {
          var tmp$0;
          return _.kotlin.dom.toElementList((tmp$0 = receiver) != null ? tmp$0.getElementsByTagNameNS(namespaceUri, localName) : null);
        },
        elements_2: function (receiver, namespaceUri, localName) {
          var tmp$0;
          return _.kotlin.dom.toElementList((tmp$0 = receiver) != null ? tmp$0.getElementsByTagNameNS(namespaceUri, localName) : null);
        },
        toList: function (receiver) {
          var tmp$0;
          if (receiver == null) {
            tmp$0 = _.kotlin.dom.emptyNodeList();
          }
           else {
            tmp$0 = new _.kotlin.dom.NodeListAsList(receiver);
          }
          return tmp$0;
        },
        toElementList: function (receiver) {
          var tmp$0;
          if (receiver == null) {
            tmp$0 = new Kotlin.ArrayList(0);
          }
           else {
            tmp$0 = new _.kotlin.dom.ElementListAsList(receiver);
          }
          return tmp$0;
        },
        get: function (receiver, selector) {
          var tmp$0, tmp$2;
          var root = (tmp$0 = receiver) != null ? tmp$0.documentElement : null;
          if (root != null) {
            if (Kotlin.equals(selector, '*')) {
              tmp$2 = _.kotlin.dom.get_elements(receiver);
            }
             else if (_.js.startsWith(selector, '.')) {
              tmp$2 = _.kotlin.toList_1(_.kotlin.filter_6(_.kotlin.dom.get_elements(receiver), Kotlin.b2(_f.fq, null, [selector])));
            }
             else if (_.js.startsWith(selector, '#')) {
              var id = selector.substring(1);
              var tmp$1;
              var element = (tmp$1 = receiver) != null ? tmp$1.getElementById(id) : null;
              return element != null ? _.kotlin.arrayList([element]) : _.kotlin.dom.emptyElementList();
            }
             else {
              tmp$2 = _.kotlin.dom.elements_0(receiver, selector);
            }
          }
           else {
            tmp$2 = _.kotlin.dom.emptyElementList();
          }
          return tmp$2;
        },
        get_0: function (receiver, selector) {
          var tmp$1;
          if (Kotlin.equals(selector, '*')) {
            tmp$1 = _.kotlin.dom.get_elements_0(receiver);
          }
           else if (_.js.startsWith(selector, '.')) {
            tmp$1 = _.kotlin.toList_1(_.kotlin.filter_6(_.kotlin.dom.get_elements_0(receiver), Kotlin.b2(_f.fr, null, [selector])));
          }
           else if (_.js.startsWith(selector, '#')) {
            var tmp$0;
            var element = (tmp$0 = receiver.ownerDocument) != null ? tmp$0.getElementById(selector.substring(1)) : null;
            return element != null ? _.kotlin.arrayList([element]) : _.kotlin.dom.emptyElementList();
          }
           else {
            tmp$1 = _.kotlin.dom.elements(receiver, selector);
          }
          return tmp$1;
        },
        NodeListAsList: Kotlin.createClass(Kotlin.AbstractList, {
          initialize: function (nodeList) {
            this.$nodeList = nodeList;
            this.super_init();
          },
          get_nodeList: function () {
            return this.$nodeList;
          },
          get: function (index) {
            var node = this.get_nodeList().item(index);
            if (node == null) {
              throw new Kotlin.IndexOutOfBoundsException('NodeList does not contain a node at index: ' + index);
            }
             else {
              return node;
            }
          },
          size: function () {
            return this.get_nodeList().length;
          }
        }),
        ElementListAsList: Kotlin.createClass(Kotlin.AbstractList, {
          initialize: function (nodeList) {
            this.$nodeList = nodeList;
            this.super_init();
          },
          get_nodeList: function () {
            return this.$nodeList;
          },
          get: function (index) {
            var node = this.get_nodeList().item(index);
            if (node == null) {
              throw new Kotlin.IndexOutOfBoundsException('NodeList does not contain a node at index: ' + index);
            }
             else if (node.nodeType === Node.ELEMENT_NODE) {
              return node;
            }
             else {
              throw new Kotlin.IllegalArgumentException('Node is not an Element as expected but is ' + node.toString());
            }
          },
          size: function () {
            return this.get_nodeList().length;
          }
        }),
        clear: function (receiver) {
          while (true) {
            var child = receiver.firstChild;
            if (child == null) {
              return;
            }
             else {
              receiver.removeChild(child);
            }
          }
        },
        nextSiblings: function (receiver) {
          return new _.kotlin.dom.NextSiblingIterator(receiver);
        },
        NextSiblingIterator: Kotlin.createClass(classes.cf, {
          initialize: function (node) {
            this.$node = node;
            this.super_init();
          },
          get_node: function () {
            return this.$node;
          },
          set_node: function (tmp$0) {
            this.$node = tmp$0;
          },
          computeNext: function () {
            var nextValue = this.get_node().nextSibling;
            if (nextValue != null) {
              this.setNext(nextValue);
              this.set_node(nextValue);
            }
             else {
              this.done();
            }
          }
        }),
        previousSiblings: function (receiver) {
          return new _.kotlin.dom.PreviousSiblingIterator(receiver);
        },
        PreviousSiblingIterator: Kotlin.createClass(classes.cf, {
          initialize: function (node) {
            this.$node = node;
            this.super_init();
          },
          get_node: function () {
            return this.$node;
          },
          set_node: function (tmp$0) {
            this.$node = tmp$0;
          },
          computeNext: function () {
            var nextValue = this.get_node().previousSibling;
            if (nextValue != null) {
              this.setNext(nextValue);
              this.set_node(nextValue);
            }
             else {
              this.done();
            }
          }
        }),
        isText: function (receiver) {
          var nt = receiver.nodeType;
          return nt === Node.TEXT_NODE || nt === Node.CDATA_SECTION_NODE;
        },
        attribute: function (receiver, name) {
          return receiver.getAttribute(name) !== null ? receiver.getAttribute(name) : '';
        },
        get_head: function (receiver) {
          return receiver != null && receiver.length > 0 ? receiver.item(0) : null;
        },
        get_first: function (receiver) {
          return _.kotlin.dom.get_head(receiver);
        },
        get_tail: function (receiver) {
          if (receiver == null) {
            return null;
          }
           else {
            var s = receiver.length;
            return s > 0 ? receiver.item(s - 1) : null;
          }
        },
        get_last: function (receiver) {
          return _.kotlin.dom.get_tail(receiver);
        },
        toXmlString_1: function (receiver, xmlDeclaration) {
          var tmp$0;
          if (receiver == null)
            tmp$0 = '';
          else {
            tmp$0 = _.kotlin.dom.nodesToXmlString(_.kotlin.dom.toList(receiver), xmlDeclaration);
          }
          return tmp$0;
        },
        nodesToXmlString: function (nodes, xmlDeclaration) {
          var builder = new Kotlin.StringBuilder();
          {
            var tmp$0 = nodes.iterator();
            while (tmp$0.hasNext()) {
              var n = tmp$0.next();
              builder.append(_.kotlin.dom.toXmlString_0(n, xmlDeclaration));
            }
          }
          return builder.toString();
        },
        plus: function (receiver, child) {
          if (child != null) {
            receiver.appendChild(child);
          }
          return receiver;
        },
        plus_0: function (receiver, text) {
          return _.kotlin.dom.addText(receiver, text, null);
        },
        plusAssign: function (receiver, text) {
          return _.kotlin.dom.addText(receiver, text, null);
        },
        createElement: function (receiver, name, init) {
          var tmp$0;
          var elem = (tmp$0 = receiver.createElement(name)) != null ? tmp$0 : Kotlin.throwNPE();
          init.call(elem);
          return elem;
        },
        createElement_0: function (receiver, name, doc, init) {
          var tmp$0;
          var elem = (tmp$0 = _.kotlin.dom.ownerDocument(receiver, doc).createElement(name)) != null ? tmp$0 : Kotlin.throwNPE();
          init.call(elem);
          return elem;
        },
        ownerDocument: function (receiver, doc) {
          var tmp$0;
          if (receiver.nodeType === Node.DOCUMENT_NODE)
            tmp$0 = receiver;
          else if (doc == null)
            tmp$0 = receiver.ownerDocument;
          else
            tmp$0 = doc;
          var answer = tmp$0;
          if (answer == null) {
            throw new Kotlin.IllegalArgumentException('Element does not have an ownerDocument and none was provided for: ' + receiver.toString());
          }
           else {
            return answer;
          }
        },
        addElement: function (receiver, name, init) {
          var child = _.kotlin.dom.createElement(receiver, name, init);
          receiver.appendChild(child);
          return child;
        },
        addElement_0: function (receiver, name, doc, init) {
          var child = _.kotlin.dom.createElement_0(receiver, name, doc, init);
          receiver.appendChild(child);
          return child;
        },
        addText: function (receiver, text, doc) {
          if (text != null) {
            var tmp$0;
            var child = (tmp$0 = _.kotlin.dom.ownerDocument(receiver, doc).createTextNode(text)) != null ? tmp$0 : Kotlin.throwNPE();
            receiver.appendChild(child);
          }
          return receiver;
        }
      }),
      support: Kotlin.definePackage({
        AbstractIterator: classes.cf
      })
    })
  };
  (function () {
    this.IntegerParser = Kotlin.createObject({
      initialize: function () {
        this.$DIGIT = null;
      },
      get_DIGIT: function () {
        return this.$DIGIT;
      },
      set_DIGIT: function (tmp$0) {
        this.$DIGIT = tmp$0;
      },
      digit: function (c) {
        if (this.get_DIGIT() == null) {
          this.set_DIGIT(new Kotlin.PrimitiveHashMap(0));
          var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5, tmp$6, tmp$7, tmp$8, tmp$9;
          ((tmp$0 = this.get_DIGIT()) != null ? tmp$0 : Kotlin.throwNPE()).put('0', 0);
          ((tmp$1 = this.get_DIGIT()) != null ? tmp$1 : Kotlin.throwNPE()).put('1', 1);
          ((tmp$2 = this.get_DIGIT()) != null ? tmp$2 : Kotlin.throwNPE()).put('2', 2);
          ((tmp$3 = this.get_DIGIT()) != null ? tmp$3 : Kotlin.throwNPE()).put('3', 3);
          ((tmp$4 = this.get_DIGIT()) != null ? tmp$4 : Kotlin.throwNPE()).put('4', 4);
          ((tmp$5 = this.get_DIGIT()) != null ? tmp$5 : Kotlin.throwNPE()).put('5', 5);
          ((tmp$6 = this.get_DIGIT()) != null ? tmp$6 : Kotlin.throwNPE()).put('6', 6);
          ((tmp$7 = this.get_DIGIT()) != null ? tmp$7 : Kotlin.throwNPE()).put('7', 7);
          ((tmp$8 = this.get_DIGIT()) != null ? tmp$8 : Kotlin.throwNPE()).put('8', 8);
          ((tmp$9 = this.get_DIGIT()) != null ? tmp$9 : Kotlin.throwNPE()).put('9', 9);
        }
        var tmp$10;
        if (((tmp$10 = this.get_DIGIT()) != null ? tmp$10 : Kotlin.throwNPE()).containsKey(c)) {
          var tmp$11, tmp$12;
          return (tmp$12 = ((tmp$11 = this.get_DIGIT()) != null ? tmp$11 : Kotlin.throwNPE()).get(c)) != null ? tmp$12 : Kotlin.throwNPE();
        }
         else {
          return -1;
        }
      },
      parseInt: function (s) {
        var radix = 10;
        var result = 0;
        var negative = false;
        var i = 0;
        var len = _.js.length(s);
        var digit = 0;
        if (len > 0) {
          var firstChar = s.charAt(0);
          if (firstChar < '0') {
            if (firstChar === '-') {
              negative = true;
            }
             else {
              return null;
            }
            if (len === 1) {
              return null;
            }
            i++;
          }
          while (i < len) {
            digit = this.digit(s.charAt(i++));
            if (digit < 0) {
              return null;
            }
            result *= radix;
            result -= digit;
          }
        }
         else {
          return null;
        }
        if (negative) {
          return result;
        }
         else {
          return -result;
        }
      }
    });
  }.call(_.java.lang));
  (function () {
    this.Package = Kotlin.createObject({
      initialize: function () {
        this.$ORG_CLOUD = 0;
      },
      get_ORG_CLOUD: function () {
        return this.$ORG_CLOUD;
      },
      getPackageForName: function (metaClassName) {
        if (_.js.startsWith(metaClassName, 'org.cloud')) {
          return 0;
        }
        return -1;
      }
    });
  }.call(_.org.cloud.factory));
  (function () {
    this.JsonToken = Kotlin.createObject({
      initialize: function () {
        this.$BEGIN_ARRAY = 0;
        this.$END_ARRAY = 1;
        this.$BEGIN_OBJECT = 2;
        this.$END_OBJECT = 3;
        this.$NAME = 4;
        this.$STRING = 5;
        this.$NUMBER = 6;
        this.$BOOLEAN = 7;
        this.$NULL = 8;
        this.$END_DOCUMENT = 9;
      },
      get_BEGIN_ARRAY: function () {
        return this.$BEGIN_ARRAY;
      },
      get_END_ARRAY: function () {
        return this.$END_ARRAY;
      },
      get_BEGIN_OBJECT: function () {
        return this.$BEGIN_OBJECT;
      },
      get_END_OBJECT: function () {
        return this.$END_OBJECT;
      },
      get_NAME: function () {
        return this.$NAME;
      },
      get_STRING: function () {
        return this.$STRING;
      },
      get_NUMBER: function () {
        return this.$NUMBER;
      },
      get_BOOLEAN: function () {
        return this.$BOOLEAN;
      },
      get_NULL: function () {
        return this.$NULL;
      },
      get_END_DOCUMENT: function () {
        return this.$END_DOCUMENT;
      }
    });
    this.Type = Kotlin.createObject({
      initialize: function () {
        this.$VALUE = 0;
        this.$LEFT_BRACE = 1;
        this.$RIGHT_BRACE = 2;
        this.$LEFT_BRACKET = 3;
        this.$RIGHT_BRACKET = 4;
        this.$COMMA = 5;
        this.$COLON = 6;
        this.$EOF = 42;
      },
      get_VALUE: function () {
        return this.$VALUE;
      },
      get_LEFT_BRACE: function () {
        return this.$LEFT_BRACE;
      },
      get_RIGHT_BRACE: function () {
        return this.$RIGHT_BRACE;
      },
      get_LEFT_BRACKET: function () {
        return this.$LEFT_BRACKET;
      },
      get_RIGHT_BRACKET: function () {
        return this.$RIGHT_BRACKET;
      },
      get_COMMA: function () {
        return this.$COMMA;
      },
      get_COLON: function () {
        return this.$COLON;
      },
      get_EOF: function () {
        return this.$EOF;
      }
    });
  }.call(_.org.cloud.loader));
  (function () {
    this.ActionType = Kotlin.createObject({
      initialize: function () {
        this.$SET = 0;
        this.$ADD = 1;
        this.$REMOVE = 2;
        this.$ADD_ALL = 3;
        this.$REMOVE_ALL = 4;
        this.$RENEW_INDEX = 5;
      },
      get_SET: function () {
        return this.$SET;
      },
      get_ADD: function () {
        return this.$ADD;
      },
      get_REMOVE: function () {
        return this.$REMOVE;
      },
      get_ADD_ALL: function () {
        return this.$ADD_ALL;
      },
      get_REMOVE_ALL: function () {
        return this.$REMOVE_ALL;
      },
      get_RENEW_INDEX: function () {
        return this.$RENEW_INDEX;
      }
    });
    this.Constants = Kotlin.createObject({
      initialize: function () {
        this.$UNKNOWN_MUTATION_TYPE_EXCEPTION = 'Unknown mutation type: ';
        this.$READ_ONLY_EXCEPTION = 'This model is ReadOnly. Elements are not modifiable.';
        this.$LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION = 'The list in parameter of the setter cannot be null. Use removeAll to empty a collection.';
        this.$LOADER_XMI_LOCAL_NAME = 'type';
        this.$LOADER_XMI_XSI = 'xsi';
        this.$KMFQL_CONTAINED = 'contained';
        this.$Ref_nodes = 'nodes';
        this.$CN_Software = 'Software';
        this.$CN_Cloud = 'Cloud';
        this.$org_cloud_Software = 'org.cloud.Software';
        this.$Att_name = 'name';
        this.$org_cloud_Cloud = 'org.cloud.Cloud';
        this.$org_cloud_Node = 'org.cloud.Node';
        this.$CN_Node = 'Node';
        this.$Att_id = 'id';
        this.$Att_generated_KMF_ID = 'generated_KMF_ID';
        this.$Ref_softwares = 'softwares';
      },
      get_UNKNOWN_MUTATION_TYPE_EXCEPTION: function () {
        return this.$UNKNOWN_MUTATION_TYPE_EXCEPTION;
      },
      get_READ_ONLY_EXCEPTION: function () {
        return this.$READ_ONLY_EXCEPTION;
      },
      get_LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION: function () {
        return this.$LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION;
      },
      get_LOADER_XMI_LOCAL_NAME: function () {
        return this.$LOADER_XMI_LOCAL_NAME;
      },
      get_LOADER_XMI_XSI: function () {
        return this.$LOADER_XMI_XSI;
      },
      get_KMFQL_CONTAINED: function () {
        return this.$KMFQL_CONTAINED;
      },
      get_Ref_nodes: function () {
        return this.$Ref_nodes;
      },
      get_CN_Software: function () {
        return this.$CN_Software;
      },
      get_CN_Cloud: function () {
        return this.$CN_Cloud;
      },
      get_org_cloud_Software: function () {
        return this.$org_cloud_Software;
      },
      get_Att_name: function () {
        return this.$Att_name;
      },
      get_org_cloud_Cloud: function () {
        return this.$org_cloud_Cloud;
      },
      get_org_cloud_Node: function () {
        return this.$org_cloud_Node;
      },
      get_CN_Node: function () {
        return this.$CN_Node;
      },
      get_Att_id: function () {
        return this.$Att_id;
      },
      get_Att_generated_KMF_ID: function () {
        return this.$Att_generated_KMF_ID;
      },
      get_Ref_softwares: function () {
        return this.$Ref_softwares;
      }
    });
    this.ElementAttributeType = Kotlin.createObject({
      initialize: function () {
        this.$ATTRIBUTE = 0;
        this.$REFERENCE = 1;
        this.$CONTAINMENT = 2;
      },
      get_ATTRIBUTE: function () {
        return this.$ATTRIBUTE;
      },
      get_REFERENCE: function () {
        return this.$REFERENCE;
      },
      get_CONTAINMENT: function () {
        return this.$CONTAINMENT;
      }
    });
  }.call(_.org.cloud.util));
  (function () {
    this.$asserter = new _.kotlin.test.QUnitAsserter();
  }.call(_.kotlin.test));
  (function () {
    this.State = Kotlin.createObject({
      initialize: function () {
        this.$Ready = 0;
        this.$NotReady = 1;
        this.$Done = 2;
        this.$Failed = 3;
      },
      get_Ready: function () {
        return this.$Ready;
      },
      get_NotReady: function () {
        return this.$NotReady;
      },
      get_Done: function () {
        return this.$Done;
      },
      get_Failed: function () {
        return this.$Failed;
      }
    });
  }.call(_.kotlin.support));
  Kotlin.defineModule('org.kevoree.modeling.sample.cloud.js', _);
}());
