/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var radioactive, raml_builder, raml_console;

	raml_console = __webpack_require__(1);

	raml_builder = __webpack_require__(2);

	radioactive = __webpack_require__(3);

	__webpack_require__(4)(radioactive, jQuery, document);

	$(function() {
	  try {
	    if (true) {
	      less.watch();
	    }
	  } catch (_error) {}
	  console.log('load raml console');
	  raml_console();
	  return raml_console(what);
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var LEFT_WIDTH, add_leafrow_class, aonclick, body$leftMargin, body_row, codemirror_ui, config, current_path, doc_header_content, documentation_ui, fg, find_closest_subresource_with_methods, full_api_ui, http_headers, http_status_codes, iff, label_with_arrow, left_menu_state, left_menu_ui, leftmenu$left, leftmenu$opacity, marked, method2bg, method2class, method2color, method2label, method2text, method_tester, open_dev_popup, param_symbolic, parse_raml, path_is_active, post_process_raml_tree, radioactive, raml_files, raml_parser, render_markdown, response_color, row_Method, row_NamedParameter, row_Resource, selected_raml_file, selected_raml_file_id, setup_scrolling_stuff, throttle_distinct, ui_code_example_and_schema, ut, util, _,
	  __hasProp = {}.hasOwnProperty;

	radioactive = __webpack_require__(3);

	_ = __webpack_require__(8);

	ut = __webpack_require__(15);

	raml_parser = __webpack_require__(16);

	http_status_codes = __webpack_require__(19);

	http_headers = __webpack_require__(20);

	util = __webpack_require__(5);

	marked = __webpack_require__(17);

	method_tester = __webpack_require__(6);


	/*
	TODO:
	  * edit text, value, element etc forks the repo and lets the user send a pull request 9 ( if raml is hosted on github )
	  * show popovers for links
	  * show popovers for menu
	  * rebuild layout
	 */

	selected_raml_file_id = radioactive('geonames');

	selected_raml_file = function() {
	  return raml_files[selected_raml_file_id()];
	};

	current_path = radioactive('');

	path_is_active = function(path) {
	  return radioactive.distinct(function() {
	    return util.is_sub_path(current_path(), path);
	  });
	};

	render_markdown = (function() {
	  var r;
	  r = new marked.Renderer;
	  r.heading = function(text, level) {
	    return "<h" + (level + 1) + ">" + text + "</h" + (level + 1) + ">";
	  };
	  return function(str) {
	    return marked(str, {
	      renderer: r
	    });
	  };
	})();

	$(function() {
	  var iter;
	  (iter = function() {
	    var w;
	    w = $(window).width();
	    return config.cols(w < 750 ? 1 : w < 900 ? 2 : 3);
	  })();
	  return $(window).resize(iter);
	});


	/*
	  setup the console pointing to a URL
	  if no url is passed, then it loads its default url
	 */

	module.exports = function(url) {
	  if (url != null) {
	    raml_files[what] = {
	      url: what,
	      label: 'XXX',
	      logo: 'http://webrazzi.com/wp-content/uploads/2014/06/instagram-logo.jpg'
	    };
	    selected_raml_file_id(what);
	  }
	  $('body').append('div'._({
	    $width: '100%'
	  }, function() {
	    var e, f;
	    if ((f = selected_raml_file()) != null) {
	      try {
	        return full_api_ui(parse_raml(f.url));
	      } catch (_error) {
	        e = _error;
	        radioactive.safecatch(e);
	        return '.alert.alert-error'._('Error: ' + e);
	      }
	    } else {
	      return 'div'._('Loading...');
	    }
	  }));
	  setup_scrolling_stuff();
	  return setInterval(add_leafrow_class, 2000);
	};

	add_leafrow_class = function() {
	  return $('.container-fluid .row').each(function(r) {
	    if ($(this).find('.row').length === 0) {
	      return;
	      return $(this).addClass('r-leafrow');
	    }
	  });
	};

	iff = function(v, f) {
	  if (v != null) {
	    return f(v);
	  }
	};

	LEFT_WIDTH = 300;

	label_with_arrow = function(label, direction) {
	  if (direction == null) {
	    direction = 'right';
	  }
	  return 'span'._({
	    $whiteSpace: 'nowrap'
	  }, function() {
	    ("span.glyphicon.glyphicon-arrow-" + direction)._();
	    'span'._({
	      _html: '&nbsp;'
	    });
	    return 'span'._(label);
	  });
	};

	raml_files = (function() {
	  var _r, _u;
	  _u = function(x) {
	    return "raml-files/" + x + ".raml";
	  };
	  _r = function(id, logo) {
	    return {
	      label: id,
	      logo: logo || 'http://www.thetechscouts.com/sites/default/files/box_Logo.jpg',
	      url: _u(id)
	    };
	  };
	  return {
	    box: _r('box', 'http://www.thetechscouts.com/sites/default/files/box_Logo.jpg'),
	    github: _r('github', 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png'),
	    instagram: _r('instagram', 'http://webrazzi.com/wp-content/uploads/2014/06/instagram-logo.jpg'),
	    twitter: _r('twitter', 'http://venturevillage.eu/wp-content/uploads/2012/03/2_twitter-21.jpg'),
	    geonames: {
	      label: 'Geonames',
	      logo: 'http://www.thetechscouts.com/sites/default/files/box_Logo.jpg',
	      url: 'geonames/api.raml'
	    }
	  };
	})();

	throttle_distinct = function(f) {
	  return radioactive.throttle(400, function() {
	    return radioactive.distinct(f);
	  });
	};

	post_process_raml_tree = function(root) {
	  var processor;
	  processor = __webpack_require__(7);
	  return processor(root, {
	    mte2ext: config.mt2ext()
	  });
	};

	parse_raml = radioactive.syncify(function(url, cb) {
	  var err, res;
	  console.log('WILL PARSE ' + url);
	  if (url == null) {
	    return cb(new Error('invalid raml url'));
	  }
	  res = function(data) {
	    console.log('PARSE SUCCESSFUL. THIS IS THE RESULT');
	    console.log(data);
	    post_process_raml_tree(data);
	    return cb(null, data);
	  };
	  err = function(e) {
	    return cb(e);
	  };
	  return raml_parser.loadFile(url).then(res, err);
	});

	window.CONFIG = config = {
	  cols: radioactive(3),
	  menu_hidden: radioactive(true),
	  dev: function() {
	    return window.location.toString().indexOf('http://localhost:') === 0;
	  },
	  process_param_markdown: function() {
	    return true;
	  },
	  process_method_markdown: function() {
	    return true;
	  },
	  use_dots: radioactive(false),
	  edit_mode: radioactive(false),
	  show_response_bodies: radioactive(true),
	  mt2ext: radioactive(true),
	  show_descriptions: function() {
	    return true;
	  }
	};

	aonclick = function(label, f) {
	  return 'a'._({
	    href: '#',
	    onclick: function(e) {
	      e.preventDefault();
	      f();
	      return false;
	    }
	  }, label);
	};

	response_color = function(code) {
	  switch (code[0]) {
	    case '2':
	      return 'green';
	    case '4':
	      return 'orange';
	    case '5':
	      return 'red';
	  }
	};

	find_closest_subresource_with_methods = function(r) {
	  var x, xx, _i, _len, _ref;
	  if (r.methods != null) {
	    return r;
	  }
	  if (r.resources == null) {
	    return void 0;
	  }
	  _ref = r.resources;
	  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	    x = _ref[_i];
	    if ((xx = find_closest_subresource_with_methods(x)) != null) {
	      return xx;
	    }
	  }
	  return void 0;
	};

	left_menu_state = function() {
	  if (config.cols() === 1) {
	    if (config.menu_hidden()) {
	      if (util.scroll_speed() > 0.5) {
	        return 'peek';
	      } else {
	        return 'hidden';
	      }
	    } else {
	      return 'temporarily_open';
	    }
	  } else {
	    return 'permanently_open';
	  }
	};

	body$leftMargin = function() {
	  if (config.cols() === 1) {
	    return 0;
	  } else {
	    return LEFT_WIDTH;
	  }
	};

	leftmenu$left = function() {
	  switch (left_menu_state()) {
	    case 'peek':
	      return (-LEFT_WIDTH) + 50;
	    case 'hidden':
	      return -LEFT_WIDTH;
	    case 'temporarily_open':
	      return 0;
	    case 'permanently_open':
	      return 0;
	  }
	};

	leftmenu$opacity = function() {
	  switch (left_menu_state()) {
	    case 'peek':
	      return 0.7;
	    case 'hidden':
	      return 0.7;
	    case 'temporarily_open':
	      return 0.9;
	    case 'permanently_open':
	      return 1;
	  }
	};

	setup_scrolling_stuff = function() {
	  return $(window).on('scroll', function(e) {
	    var st, x;
	    st = $(window).scrollTop();
	    x = util.find_first_elm_below_y_coord($('.r-right-col-method, .r-right-col-resource'), st);
	    if (x != null) {
	      return current_path($(x).prop('data-rpath'));
	    } else {
	      return current_path('');
	    }
	  });
	};

	full_api_ui = function(M) {
	  '.r-leftmenu-button'._({
	    $position: 'fixed',
	    $display: function() {
	      if (config.cols() === 1) {
	        return 'block';
	      } else {
	        return 'none';
	      }
	    },
	    $top: '0px',
	    $left: function() {
	      return (leftmenu$left() + LEFT_WIDTH) + 'px';
	    },
	    $zIndex: 20,
	    onclick: function() {
	      return config.menu_hidden(!config.menu_hidden());
	    }
	  }, function() {
	    return 'MENU';
	  });
	  left_menu_ui(M);
	  '.r-fixed-bg'._({
	    $paddingLeft: function() {
	      return body$leftMargin() + 'px';
	    }
	  }, function() {
	    return '.container-fluid'._(function() {
	      return body_row({
	        left: function() {
	          return '';
	        },
	        right: function() {
	          return '';
	        }
	      });
	    });
	  });
	  '.r-fixed-fg'._({
	    $paddingLeft: function() {
	      return body$leftMargin() + 'px';
	    }
	  }, function() {
	    return '.container-fluid'._(function() {
	      return body_row({
	        left: function() {
	          var method, parts, resource;
	          parts = function() {
	            return current_path().split('/~~');
	          };
	          resource = function() {
	            return parts()[0];
	          };
	          method = function() {
	            return parts()[1];
	          };
	          return '.r-sticky-top.row'._({
	            '.r-sticky-top-hidden': function() {
	              return current_path() === '';
	            },
	            "class": function() {
	              var m;
	              if ((m = method())) {
	                return method2bg(m);
	              } else {
	                return '';
	              }
	            }
	          }, function() {
	            return '.col-xs-12'._(function() {
	              '.row'._(function() {
	                return '.col-xs-12'._({
	                  $paddingBottom: '0px'
	                }, function() {
	                  return 'h3'._(function() {
	                    return radioactive.distinct(function() {
	                      return resource();
	                    });
	                  });
	                });
	              });
	              return '.row'._({
	                $paddingTop: '0px'
	              }, function() {
	                '.col-xs-9'._(' ');
	                return '.col-xs-3'._({
	                  $paddingTop: '0px'
	                }, function() {
	                  return iff(method(), function(m) {
	                    return 'span.label.r-method-label'._({
	                      $top: '-8px',
	                      "class": method2label(m)
	                    }, function() {
	                      return m.toUpperCase();
	                    });
	                  });
	                });
	              });
	            });
	          });
	        }
	      });
	    });
	  });
	  return '.r-doc-body.container-fluid.r2'._({
	    $marginLeft: function() {
	      return body$leftMargin() + 'px';
	    }
	  }, function() {
	    body_row({
	      left: function() {
	        return doc_header_content(M);
	      }
	    });
	    body_row({
	      left: function() {
	        return documentation_ui(M);
	      }
	    });
	    return M._leafs.forEach(function(r) {
	      return row_Resource(r);
	    });
	  });
	};

	doc_header_content = function(M) {
	  'h1'._(M.title);
	  return 'table.table'._(function() {
	    'tr'._(function() {
	      'td'._('Base URI');
	      return 'td'._(M.baseUri);
	    });
	    'tr'._(function() {
	      'td'._('Version');
	      return 'td'._(M.version);
	    });
	    'tr'._(function() {
	      'td'._('Type');
	      return 'td'._(function() {
	        return 'This is the official RAML for this API';
	      });
	    });
	    return 'tr'._(function() {
	      'td'._('Status');
	      return 'td'._(function() {
	        return '.label.label-success'._('Online');
	      });
	    });
	  });
	};

	documentation_ui = function(M) {
	  var _ref;
	  return (_ref = M.documentation) != null ? _ref.forEach(function(doc) {
	    return '.row.r-documentation-row .col-xs-12'._(function() {
	      '.row .col-xs-12 h1'._(function() {
	        return doc.title;
	      });
	      return '.row .col-xs-12 .r-md'._({
	        _html: function() {
	          return render_markdown(doc.content);
	        }
	      });
	    });
	  }) : void 0;
	};

	param_symbolic = function(param) {
	  var type;
	  type = param.type || 'string';
	  return 'span.r2-param-symbolic'._(function() {
	    'span.r2-param-name'._(param._id);
	    if (!param.required) {
	      'span.r2-param-optional'._({
	        title: 'This parameter is optional'
	      }, '?');
	    }
	    'span.r2-param-type'._({
	      title: 'This parameter is of type ' + type
	    }, ':' + type);
	    if (param.repeat) {
	      'span.r2-param-repeat'._({
	        title: 'This parameter can be repeated'
	      }, '[]');
	    }
	    if (param["default"] != null) {
	      return 'span'._({
	        title: 'If unspecified, the following default value will be assumed'
	      }, function() {
	        'span.r2-param-default-equals'._('=');
	        return 'span.r2-param-default-value'._({
	          "class": '.r2-type-' + type
	        }, param["default"]);
	      });
	    }
	  });
	};

	row_NamedParameter = function(data, tester) {

	  /*
	  data =
	    _id:              string
	  
	    description?:     MarkdownString
	    displayName?:     string
	    'enum'?:          any[]
	    type?:            string
	    example?:         any // or string?
	    repeat?:          boolean
	    required?:        boolean
	    'default'?:       any
	  
	    minimum?:         number
	    maximum?:         number
	  
	    pattern?:         RegexPattern
	    minLength?:       number
	    maxLength?:       number
	   */
	  var big_row, compact_row;
	  compact_row = function() {
	    return '.row.r2-param-row'._(function() {
	      '.col-xs-5'._(function() {
	        return param_symbolic(data);
	      });
	      '.col-xs-5'._(data.description || '');
	      return '.col-xs-2'._(data.example || '');
	    });
	  };
	  big_row = function() {
	    return '.row.r2-param-row .col-xs-12'._(function() {
	      '.row'._(function() {
	        return '.col-xs-12'._(function() {
	          return param_symbolic(data);
	        });
	      });
	      return '.row'._(function() {
	        '.col-xs-1'._(' ');
	        if (config.show_descriptions()) {
	          if (config.process_param_markdown()) {
	            return '.col-xs-11.r-description'._({
	              $padding: '10px',
	              _html: function() {
	                return render_markdown(data.description || '');
	              }
	            });
	          } else {
	            return '.col-xs-11.r-description'._({
	              $padding: '10px'
	            }, data.description || '');
	          }
	        }
	      });
	    });
	  };
	  return '.row'._({
	    $borderBottom: function() {
	      if (tester.active()) {
	        return '1px solid #aaa';
	      } else {
	        return '';
	      }
	    },
	    $paddingTop: function() {
	      if (tester.active()) {
	        return '10px';
	      } else {
	        return '';
	      }
	    }
	  }, function() {
	    'div'._({
	      "class": function() {
	        if (tester.active()) {
	          return 'col-xs-8';
	        } else {
	          return 'col-xs-12';
	        }
	      }
	    }, function() {
	      return big_row();
	    });
	    return 'div'._({
	      $display: function() {
	        if (tester.active()) {
	          return 'block';
	        } else {
	          return 'none';
	        }
	      },
	      "class": 'col-xs-4'
	    }, function() {
	      return tester.ui();
	    });
	  });
	};

	row_Resource = function(r) {
	  var _ref;
	  body_row({
	    props: {
	      "class": 'r-right-col-resource',
	      '.r-active-resource': function() {
	        return path_is_active(r._path);
	      },
	      'data-rpath': r._path
	    },
	    left: function() {
	      'a.r-path-anchor'._({
	        name: r._path
	      });
	      return '.r-path-header-wrapper'._(function() {
	        return 'h3.r-path-header'._(r._path);
	      });
	    }
	  });
	  return (_ref = r.methods) != null ? _ref.forEach(function(m) {
	    return row_Method(m, r);
	  }) : void 0;
	};

	body_row = function(_arg) {
	  var left, props, right;
	  left = _arg.left, right = _arg.right, props = _arg.props;
	  if (props == null) {
	    props = {};
	  }
	  return '.row'._(props, function() {
	    '.col-xs-12.col-lg-7'._(left);
	    return '.hidden-xs.hidden-sm.hidden-md.col-lg-5'._(right || ' ');
	  });
	};

	row_Method = function(m, resource) {
	  var method_is_active, tester;
	  tester = method_tester(m);
	  method_is_active = function() {
	    return path_is_active(m._path);
	  };
	  return body_row({
	    props: {
	      "class": ['r-right-col-method', 'r-method-' + m.method.toLowerCase()],
	      'data-rpath': m._path
	    },
	    right: function() {
	      return '.row .col-xs-12'._(function() {
	        if (tester.active()) {
	          return tester.ui(true);
	        }
	      });
	    },
	    left: function() {
	      var draw_response_bodies, params;
	      '.row'._(function() {
	        '.col-xs-9.r-abs-uri'._(function() {
	          return resource._abs_uri;
	        });
	        return '.col-xs-3'._(function() {
	          'span.label.r-method-label'._({
	            "class": method2label(m.method),
	            onclick: function() {
	              return tester.toggle();
	            }
	          }, function() {
	            return m.method.toUpperCase();
	          });
	          return 'a.r-method-anchor'._({
	            name: m._path
	          });
	        });
	      });
	      '.row.r-method-header-row'._({
	        "class": method2bg(m.method)
	      }, function() {
	        if (config.show_descriptions()) {
	          if (config.process_method_markdown()) {
	            return '.col-xs-12.r-method-description'._({
	              _html: function() {
	                return render_markdown(m.description || ' ');
	              }
	            });
	          } else {
	            return '.col-xs-12.r-method-description'._(function() {
	              return m.description || ' ';
	            });
	          }
	        }
	      });
	      params = function(where) {
	        return m._params.filter(function(p) {
	          return p._where === where;
	        });
	      };
	      if (m._params != null) {
	        (function() {
	          (function(p) {
	            if (p.length > 0) {
	              '.row.r2-section-row .col-xs-12'._(function() {
	                return label_with_arrow('URI Parameters');
	              });
	              return p.forEach(function(p) {
	                return row_NamedParameter(p, tester.param(p));
	              });
	            }
	          })(params('uri'));
	          (function(p) {
	            if (p.length > 0) {
	              '.row.r2-section-row .col-xs-12'._(function() {
	                return label_with_arrow('Query Parameters');
	              });
	              return p.forEach(function(p) {
	                return row_NamedParameter(p, tester.param(p));
	              });
	            }
	          })(params('query'));
	          return (function(p) {
	            if (p.length > 0) {
	              '.row.r2-section-row .col-xs-12'._(function() {
	                return label_with_arrow('Headers');
	              });
	              return p.forEach(function(p) {
	                return row_NamedParameter(p, tester.param(p));
	              });
	            }
	          })(params('header'));
	        })();
	      }
	      iff(m.body, function(bodies) {
	        var selected;
	        selected = radioactive(ut.first_key(bodies));
	        '.row.r2-section-row'._(function() {
	          '.col-xs-2'._(function() {
	            'span.glyphicon.glyphicon-arrow-right'._();
	            return 'span'._(' Request');
	          });
	          return '.col-xs-10'._(function() {
	            return 'ul.nav.nav-pills'._(function() {
	              return ut.kv(bodies, function(media_type) {
	                return 'li'._({
	                  '.active': function() {
	                    return selected() === media_type;
	                  }
	                }, function() {
	                  return 'a'._({
	                    _onclick: (function() {
	                      return selected(media_type);
	                    })
	                  }, media_type + '');
	                });
	              });
	            });
	          });
	        });
	        return '.row .col-xs-12'._(function() {
	          var b, body_tester, cols, media_type;
	          media_type = selected();
	          b = bodies[media_type];
	          tester.set_request_media_type(media_type);
	          if (media_type === 'application/x-www-form-urlencoded' || media_type === 'multipart/form-data') {
	            return params(media_type).forEach(function(p) {
	              return row_NamedParameter(p, tester.param(p));
	            });
	          } else {
	            body_tester = tester.body(media_type);
	            cols = [];
	            if (b != null) {
	              cols.push(function() {
	                return ui_code_example_and_schema({
	                  mime: media_type,
	                  example: b.example,
	                  schema: b.schema
	                });
	              });
	            } else {
	              cols.push(function() {});
	            }
	            if (body_tester.active()) {
	              cols.push(function() {
	                return body_tester.ui();
	              });
	            }
	            switch (cols.length) {
	              case 2:
	                return '.row'._(function() {
	                  '.col-xs-6'._(cols[0]);
	                  return '.col-xs-6'._(cols[1]);
	                });
	              case 1:
	                return '.row .col-xs-12'._(cols[0]);
	            }
	          }
	        });
	      });
	      draw_response_bodies = function(bodies, label) {
	        var selected;
	        if (label == null) {
	          label = '';
	        }
	        selected = radioactive(ut.first_key(bodies));
	        '.row.r2-section-row'._(function() {
	          '.col-xs-2'._(label);
	          return '.col-xs-10'._(function() {
	            return 'ul.nav.nav-pills'._(function() {
	              return ut.kv(bodies, function(media_type) {
	                return 'li'._({
	                  '.active': function() {
	                    return selected() === media_type;
	                  }
	                }, function() {
	                  return 'a'._({
	                    _onclick: (function() {
	                      return selected(media_type);
	                    })
	                  }, media_type + '');
	                });
	              });
	            });
	          });
	        });
	        return '.row .col-xs-12'._(function() {
	          var b, media_type;
	          media_type = selected();
	          b = bodies[media_type];
	          if (b != null) {
	            return '.row .col-xs-12'._(function() {
	              return ui_code_example_and_schema({
	                mime: media_type,
	                example: b.example,
	                schema: b.schema
	              });
	            });
	          }
	        });
	      };
	      return iff(m.responses, function(responses) {
	        var selected;
	        selected = radioactive(ut.first_key(responses));
	        '.row.r2-section-row'._(function() {
	          '.col-xs-2'._(function() {
	            return label_with_arrow('Response', 'left');
	          });
	          return '.col-xs-10'._(function() {
	            return 'ul.nav.nav-pills'._(function() {
	              return ut.kv(responses, function(status_code) {
	                return 'li'._({
	                  '.active': function() {
	                    return selected() === status_code;
	                  }
	                }, function() {
	                  return 'a'._({
	                    $color: response_color(status_code),
	                    _onclick: function() {
	                      return selected(status_code);
	                    }
	                  }, status_code + '');
	                });
	              });
	            });
	          });
	        });
	        return '.row .col-xs-12'._(function() {
	          var response, status_code;
	          status_code = selected();
	          response = responses[status_code];
	          if (response != null) {
	            iff(response.description, function(d) {
	              return '.row.r-description'._(function() {
	                '.col-xs-1'._(' ');
	                return '.col-xs-11'._(d);
	              });
	            });
	            return iff(response.body, draw_response_bodies);
	          } else {
	            return '.row.r-description'._(function() {
	              '.col-xs-1'._(' ');
	              return '.col-xs-11'._(status_code);
	            });
	          }
	        });
	      });
	    }
	  });
	};


	/*
	  - schema, if present, must be the full schema. not just the name
	 */

	ui_code_example_and_schema = function(_arg) {
	  var example, mime, schema, selected, tabs;
	  mime = _arg.mime, example = _arg.example, schema = _arg.schema;
	  tabs = [];
	  if (example != null) {
	    tabs.push({
	      label: 'Example',
	      mime: mime,
	      code: example
	    });
	  }
	  if (schema != null) {
	    tabs.push({
	      label: 'Schema',
	      mime: 'application/json',
	      code: schema
	    });
	  }
	  switch (tabs.length) {
	    case 0:
	      return '';
	    case 1000:
	      return (function(x) {
	        return codemirror_ui({
	          value: x.code,
	          mode: x.mime
	        });
	      })(tabs[0]);
	    default:
	      selected = radioactive(0);
	      '.row.r2-section-row .col-xs-12 .ul.nav.nav-pills'._(function() {
	        return tabs.forEach(function(tab, i) {
	          return 'li'._({
	            '.active': function() {
	              return selected() === i;
	            }
	          }, function() {
	            return 'a'._({
	              _onclick: (function() {
	                return selected(i);
	              })
	            }, tab.label);
	          });
	        });
	      });
	      return '.row.r2-code-row .col-xs-12'._(function() {
	        return (function(x) {
	          return codemirror_ui({
	            value: x.code,
	            mode: x.mime
	          });
	        })(tabs[selected()]);
	      });
	  }
	};

	left_menu_ui = function(M) {
	  var path_is_active_stay_true, search_mode, search_text;
	  path_is_active_stay_true = (function() {
	    var c;
	    c = {};
	    return function(p) {
	      if (c[p] || path_is_active(p)) {
	        return c[p] = true;
	      } else {
	        return false;
	      }
	    };
	  })();
	  search_mode = radioactive(false);
	  search_text = radioactive('');
	  return '.r-left-menu'._({
	    $opacity: function() {
	      return leftmenu$opacity;
	    },
	    $position: 'fixed',
	    $top: '0px',
	    $width: LEFT_WIDTH + 'px',
	    $height: '100%',
	    $left: function() {
	      return leftmenu$left() + 'px';
	    },
	    onmouseover: function() {
	      var _ref;
	      if ((_ref = left_menu_state()) === 'peek' || _ref === 'hidden') {
	        return config.menu_hidden(false);
	      }
	    },
	    onmouseout: function() {
	      var _ref;
	      if ((_ref = left_menu_state()) === 'temporarily_open') {
	        return config.menu_hidden(true);
	      }
	    }
	  }, function() {
	    'img.r-left-menu-logo'._({
	      $width: LEFT_WIDTH + 'px',
	      src: selected_raml_file().logo
	    });
	    '.r-search-box.right-inner-addon'._({
	      '.r-active': search_mode
	    }, function() {
	      'i.glyphicon.glyphicon-search'._('');
	      return 'input.form-control'._({
	        type: 'search',
	        onfocus: function() {
	          return search_mode(true);
	        },
	        onblur: function() {
	          return search_mode(false);
	        }
	      });
	    });
	    iff(M.documentation, function(docs) {
	      return 'ul'._(function() {
	        return docs.forEach(function(doc) {
	          return 'li'._(doc.title);
	        });
	      });
	    });
	    'ul'._(function() {
	      var iter;
	      return M.resources.forEach(iter = function(r) {
	        return 'li'._({
	          '.r-active': function() {
	            return throttle_distinct(function() {
	              return path_is_active(r._path);
	            });
	          },
	          '.r-directly-active': function() {
	            return throttle_distinct(function() {
	              return (current_path() || '').split('/~~')[0] === r._path;
	            });
	          },
	          $clear: 'both'
	        }, function() {
	          '.r-left-menu-item-label'._({
	            onclick: function() {
	              var x;
	              if ((x = find_closest_subresource_with_methods(r)) != null) {
	                return window.location = '#' + x._path;
	              }
	            }
	          }, function() {
	            var label_span, methods_span;
	            methods_span = function() {
	              return '.r-left-menu-item-methods.pull-right'._(function() {
	                var _ref;
	                return (_ref = r.methods) != null ? _ref.forEach(function(m) {
	                  var is_active, link;
	                  link = '#' + m._path;
	                  is_active = function() {
	                    return path_is_active(m._path);
	                  };
	                  if (!config.use_dots()) {
	                    return 'a'._({
	                      href: link,
	                      '.r-active': is_active
	                    }, m.method);
	                  } else {
	                    return 'a.r-method-dot'._({
	                      href: link,
	                      '.r-active': is_active,
	                      $color: method2color(m.method)
	                    }, 'o');
	                  }
	                }) : void 0;
	              });
	            };
	            label_span = function() {
	              return 'span'._(function() {
	                return 'a.r2-path-symbolic'._({
	                  href: '#' + r._path
	                }, function() {
	                  var i, s, _fn, _i, _len, _ref;
	                  _ref = r.relativeUriPathSegments;
	                  _fn = function(s) {
	                    var draw_slash, is_last, path, _ref1;
	                    is_last = i === (r.relativeUriPathSegments.length - 1);
	                    draw_slash = (!is_last) || ((r.resources != null) && ((_ref1 = r.resources) != null ? _ref1.length : void 0) > 0);
	                    if (s[0] === '{') {
	                      path = s.slice(1, -1);
	                      'span.r2-path-openbrace'._('{');
	                      if (path === 'ext') {
	                        'span.r2-path-parameter'._(path);
	                      } else {
	                        'span.r2-path-parameter.r2-path-parameter-ext'._(path);
	                      }
	                      'span.r2-path-closebrace'._('}');
	                    } else {
	                      'span.r2-path-path'._(s);
	                    }
	                    if (draw_slash) {
	                      return 'span.r2-path-slash'._('/');
	                    }
	                  };
	                  for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
	                    s = _ref[i];
	                    _fn(s);
	                  }
	                  if (r.resources != null) {
	                    return 'span.r-left-menu-item-ellipsis'._('...');
	                  }
	                });
	              });
	            };
	            methods_span();
	            return label_span();
	          });
	          if (r.resources != null) {
	            return 'div'._(function() {
	              if (throttle_distinct(function() {
	                return path_is_active_stay_true(r._path);
	              })) {
	                return 'ul'._({
	                  $display: function() {
	                    if (throttle_distinct(function() {
	                      return path_is_active(r._path);
	                    })) {
	                      return 'block';
	                    } else {
	                      return 'none';
	                    }
	                  }
	                }, function() {
	                  var _ref;
	                  return (_ref = r.resources) != null ? _ref.forEach(iter) : void 0;
	                });
	              }
	            });
	          }
	        });
	      });
	    });
	    'hr'._();
	    'p'._('Powered by RAML');
	    return aonclick('Dev', open_dev_popup);
	  });
	};

	open_dev_popup = function() {
	  var close, content, modal;
	  content = 'div'._(function() {
	    return 'form.form'._(function() {
	      fg('API', function() {
	        return 'select.form-control'._({
	          onchange: function() {
	            return selected_raml_file_id($(this).val());
	          }
	        }, function() {
	          var k, v, _results;
	          _results = [];
	          for (k in raml_files) {
	            if (!__hasProp.call(raml_files, k)) continue;
	            v = raml_files[k];
	            _results.push((function(k, v) {
	              return 'option'._({
	                value: k,
	                selected: function() {
	                  return selected_raml_file_id() === k;
	                }
	              }, v.label);
	            })(k, v));
	          }
	          return _results;
	        });
	      });
	      return fg('Use dots instead of method names', function() {
	        return 'input.form-control'._({
	          type: 'checkbox',
	          checked$$onchange: config.use_dots
	        });
	      });
	    });
	  });
	  modal = '.modal.fade .modal-dialog .modal-content'._(function() {
	    '.modal-header'._(function() {
	      'button.close'._({
	        type: 'button',
	        onclick: close
	      }, 'X');
	      return 'h4.modal-title'._('Dev');
	    });
	    '.modal-body'._(function() {
	      return content;
	    });
	    return '.modal-footer'._(function() {
	      'button.btn.btn-default'._({
	        type: 'button',
	        onclick: close
	      }, 'Close');
	      return 'button.btn.btn-primary'._({
	        type: 'button'
	      }, 'Save changes');
	    });
	  });
	  $('body').append(modal);
	  close = function() {
	    return $(modal).modal('hide');
	  };
	  return ut.delay(100, function() {
	    return $(modal).modal();
	  });
	};

	method2color = function(m) {
	  switch (m.toLowerCase()) {
	    case 'get':
	      return 'cyan';
	    case 'post':
	      return 'green';
	    case 'patch':
	      return 'yellow';
	    case 'delete':
	      return 'red';
	    default:
	      return 'yellow';
	  }
	};

	method2text = function(m) {
	  return 'text-' + method2class(m);
	};

	method2bg = function(m) {
	  return 'bg-' + method2class(m);
	};

	method2label = function(m) {
	  return 'label-' + method2class(m);
	};

	method2class = function(m) {
	  switch (m.toLowerCase()) {
	    case 'get':
	      return 'info';
	    case 'post':
	      return 'success';
	    case 'patch':
	      return 'warning';
	    case 'delete':
	      return 'danger';
	    default:
	      return 'warning';
	  }
	};

	codemirror_ui = function(_arg) {
	  var elm, mode, value;
	  value = _arg.value, mode = _arg.mode;
	  mode = util.resolve_codemirror_mode(mode);
	  elm = '.r-codemirror.r-codemirror-disabled'._();
	  return ut.delay(100, function() {
	    var iter;
	    return (iter = function() {
	      var cm;
	      if (util.in_viewport(elm)) {
	        cm = CodeMirror(elm, {
	          value: value,
	          mode: mode,
	          readOnly: true,
	          theme: util.CM_THEME
	        });
	        cm.on('focus', function() {
	          return $(elm).removeClass('r-codemirror-disabled');
	        });
	        return cm.on('blur', function() {
	          return $(elm).addClass('r-codemirror-disabled');
	        });
	      } else {
	        return setTimeout(iter, 500);
	      }
	    })();
	  });
	};

	fg = function(label, content) {
	  return '.form-group'._(function() {
	    'label.col-xs-2.control-label'._(label);
	    return '.col-xs-10'._(content);
	  });
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Api, add_new_param, add_new_param_choose_header_name, add_new_param_wizard, add_new_responses_status_ui, aonclick, fg, http_headers, http_status_codes, radioactive, ut,
	  __hasProp = {}.hasOwnProperty;

	radioactive = __webpack_require__(3);

	ut = __webpack_require__(15);

	http_status_codes = __webpack_require__(19);

	http_headers = __webpack_require__(20);

	Api = (function() {
	  function Api() {
	    this.title = radioactive('title');
	  }

	  return Api;

	})();

	module.exports = function() {
	  return $(function() {
	    var api;
	    api = new Api;
	    return $('body').append('div'._(function() {
	      'button'._({
	        onclick: add_new_responses_status_ui
	      }, 'Responses');
	      'button'._({
	        onclick: add_new_param
	      }, 'Params');
	      return 'div'._(function() {
	        var editing;
	        editing = radioactive(false);
	        return 'div'._({
	          onclick: function() {
	            return editing(!editing());
	          }
	        }, function() {
	          if (editing()) {
	            return 'input'._({
	              type: 'text',
	              value: api.title,
	              value$$onchange: api.title
	            });
	          } else {
	            return 'div'._(api.title);
	          }
	        });
	      });
	    }));
	  });
	};

	add_new_responses_status_ui = function() {
	  var content, modal;
	  content = 'div'._(function() {
	    var code, _i, _len, _ref, _results;
	    '.well'._('Step 1: HTTP Status Code');
	    'a'._({
	      href: '#'
	    }, 'Learn about status codes ( Link to Mulesoft best practices )');
	    '.well'._('Step 2: HTTP Status Code');
	    _ref = http_status_codes.slice(0, 5);
	    _results = [];
	    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	      code = _ref[_i];
	      _results.push((function(code) {
	        return 'pre'._(JSON.stringify(code));
	      })(code));
	    }
	    return _results;
	  });
	  modal = '.modal.fade .modal-dialog .modal-content'._(function() {
	    '.modal-header'._(function() {
	      'button.close'._({
	        type: 'button',
	        'data-dismiss': 'modal'
	      }, function() {
	        return 'span'._('×');
	      });
	      return 'h4.modal-title'._('Add Response');
	    });
	    '.modal-body'._(function() {
	      return content;
	    });
	    return '.modal-footer'._(function() {
	      'button.btn.btn-default'._({
	        type: 'button',
	        'data-dismiss': 'modal'
	      }, 'Close');
	      return 'button.btn.btn-primary'._({
	        type: 'button'
	      }, 'Save changes');
	    });
	  });
	  $('body').append(modal);
	  return ut.delay(100, function() {
	    return $(modal).modal();
	  });
	};

	add_new_param = function() {
	  var close, content, modal;
	  content = add_new_param_wizard();
	  modal = '.modal.fade .modal-dialog .modal-content'._(function() {
	    '.modal-header'._(function() {
	      'button.close'._({
	        type: 'button',
	        onclick: close
	      }, 'X');
	      return 'h4.modal-title'._('Add Parameter');
	    });
	    '.modal-body'._(function() {
	      return content;
	    });
	    return '.modal-footer'._(function() {
	      'button.btn.btn-default'._({
	        type: 'button',
	        onclick: close
	      }, 'Close');
	      return 'button.btn.btn-primary'._({
	        type: 'button'
	      }, 'Save changes');
	    });
	  });
	  $('body').append(modal);
	  close = function() {
	    return $(modal).modal('hide');
	  };
	  return ut.delay(100, function() {
	    return $(modal).modal();
	  });
	};

	add_new_param_choose_header_name = function() {
	  return 'select.form-control'._(function() {
	    var h, _i, _len, _results;
	    _results = [];
	    for (_i = 0, _len = http_headers.length; _i < _len; _i++) {
	      h = http_headers[_i];
	      _results.push((function(h) {
	        return 'option'._({
	          value: h.header
	        }, h.header);
	      })(h));
	    }
	    return _results;
	  });
	};

	add_new_param_wizard = function(opts) {
	  var locs, selected_loc;
	  if (opts == null) {
	    opts = {};
	  }
	  if (opts.action == null) {
	    opts.action = 'GET';
	  }
	  if (opts.resource == null) {
	    opts.resource = '/repositories/{repoId}/{ownerId}';
	  }
	  if (opts.existing_params == null) {
	    opts.existing_params = [];
	  }
	  if (opts.uri_params == null) {
	    opts.uri_params = [];
	  }
	  selected_loc = radioactive('query');
	  locs = {
	    query: {
	      label: 'Query'
	    },
	    path: {
	      label: 'Path'
	    },
	    form: {
	      label: 'Form'
	    },
	    header: {
	      label: 'HTTP Header'
	    }
	  };
	  return 'div'._(function() {
	    'ul.nav.nav-tabs'._({
	      $marginBottom: '20px'
	    }, function() {
	      var k, v, _results;
	      _results = [];
	      for (k in locs) {
	        if (!__hasProp.call(locs, k)) continue;
	        v = locs[k];
	        _results.push((function(k, v) {
	          return 'li'._({
	            '.active': function() {
	              return selected_loc() === k;
	            }
	          }, function() {
	            return aonclick(v.label, function() {
	              return selected_loc(k);
	            });
	          });
	        })(k, v));
	      }
	      return _results;
	    });
	    'div'._(function() {
	      var selected_name, selected_type;
	      switch (selected_loc()) {
	        case 'query':
	          selected_name = radioactive('');
	          selected_type = radioactive('string');
	          '.alert.alert-info'._(function() {
	            'p'._('Query parameters are appended to the URL path. They are used to carry small payloads');
	            return 'pre'._(function() {
	              'text'._('http://foo.com?');
	              'strong'._(function() {
	                var n;
	                if ((n = selected_name()) !== '') {
	                  return n;
	                } else {
	                  return 'queryparam';
	                }
	              });
	              return 'text'._('=value');
	            });
	          });
	          'hr'._();
	          return 'form.form-horizontal'._(function() {
	            fg('name', function() {
	              return 'input.form-control'._({
	                value: selected_name,
	                value$$onkeyup: selected_name
	              });
	            });
	            fg('description', function() {
	              return 'input.form-control'._();
	            });
	            '.form-group'._(function() {
	              'label.col-xs-2.control-label'._('type');
	              return '.col-xs-10'._(function() {
	                var types;
	                types = 'string number integer date boolean'.split(' ');
	                return 'select.form-control'._({
	                  onchange: function(e) {
	                    return selected_type($(e.target).val());
	                  }
	                }, function() {
	                  var t, _i, _len, _results;
	                  _results = [];
	                  for (_i = 0, _len = types.length; _i < _len; _i++) {
	                    t = types[_i];
	                    _results.push((function(t) {
	                      return 'option'._({
	                        selected: function() {
	                          return selected_type() === t;
	                        },
	                        value: t
	                      }, t);
	                    })(t));
	                  }
	                  return _results;
	                });
	              });
	            });
	            'div'._(function() {
	              switch (selected_type()) {
	                case 'string':
	                  fg('pattern', function() {
	                    return 'input.form-control'._();
	                  });
	                  fg('minLength', function() {
	                    return 'input.form-control'._();
	                  });
	                  return fg('maxLength', function() {
	                    return 'input.form-control'._();
	                  });
	                case 'number':
	                  fg('minimum', function() {
	                    return 'input.form-control'._();
	                  });
	                  return fg('maximum', function() {
	                    return 'input.form-control'._();
	                  });
	                case 'integer':
	                  fg('minimum', function() {
	                    return 'input.form-control'._();
	                  });
	                  return fg('maximum', function() {
	                    return 'input.form-control'._();
	                  });
	              }
	            });
	            return '.form-group .col-xs-offset-2.col-xs-10 .checkbox label'._(function() {
	              'input'._({
	                type: 'checkbox'
	              });
	              return 'text'._(' Required');
	            });
	          });
	        case 'path':
	          '.alert.alert-info'._(function() {
	            'p'._('Path parameters are placed inside the URL path');
	            return 'pre'._(function() {
	              'text'._('http://foo.com/');
	              return 'strong'._('{pathparam}');
	            });
	          });
	          'hr'._();
	          return 'form.form-horizontal'._(function() {
	            fg('name', function() {
	              return 'input.form-control'._();
	            });
	            fg('description', function() {
	              return 'input.form-control'._();
	            });
	            return '.form-group .col-xs-offset-2.col-xs-10 .checkbox label'._(function() {
	              'input'._({
	                type: 'checkbox',
	                checked: 'checked'
	              });
	              return 'text'._(' Required');
	            });
	          });
	        case 'form':
	          if (opts.action !== 'GET') {
	            '.alert.alert-info'._(function() {
	              return 'p'._('Form parameters are sent inside the body as URL encoded data');
	            });
	            'hr'._();
	            'form.form-horizontal'._(function() {
	              fg('name', function() {
	                return 'input.form-control'._();
	              });
	              return fg('description', function() {
	                return 'input.form-control'._();
	              });
	            });
	            return '.form-group'._(function() {
	              'label.col-xs-2.control-label'._('type');
	              '.col-xs-10'._(function() {
	                var types;
	                types = 'string number integer date boolean file'.split(' ');
	                return 'select.form-control'._(function() {
	                  var t, _i, _len, _results;
	                  _results = [];
	                  for (_i = 0, _len = types.length; _i < _len; _i++) {
	                    t = types[_i];
	                    _results.push((function(t) {
	                      return 'option'._({
	                        value: t
	                      }, t);
	                    })(t));
	                  }
	                  return _results;
	                });
	              });
	              return '.form-group .col-xs-offset-2.col-xs-10 .checkbox label'._(function() {
	                'input'._({
	                  type: 'checkbox'
	                });
	                return 'text'._(' Optional');
	              });
	            });
	          } else {
	            return '.alert.alert-danger'._('Form parameters cannot be defined for HTTP GET actions');
	          }
	          break;
	        case 'header':
	          '.alert.alert-info'._('Headers are used to carry metadata such as authorization headers');
	          'hr'._();
	          return 'form.form-horizontal'._(function() {
	            return '.form-group'._(function() {
	              'label.col-xs-2.control-label'._('Header');
	              return '.col-xs-10'._(function() {
	                return add_new_param_choose_header_name();
	              });
	            });
	          });
	      }
	    });
	    'hr'._();
	    return 'a'._({
	      href: '#'
	    }, 'Learn about parameters ( Link to Mulesoft best practices )');
	  });
	};

	aonclick = function(label, f) {
	  return 'a'._({
	    href: '#',
	    onclick: function(e) {
	      e.preventDefault();
	      f();
	      return false;
	    }
	  }, label);
	};

	fg = function(label, content) {
	  return '.form-group'._(function() {
	    'label.col-xs-2.control-label'._(label);
	    return '.col-xs-10'._(content);
	  });
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var Base, BasicEventEmitter, BasicEventEmitterHandler, DEBUG, DEFAULT_LOOP_DELAY, EQUALS, GLOBAL, Iterator, LOOP_ITERATIONS_TO_SURVIVE, Monitor, MonitorListenerProxy, Notifier, NotifierPool, NotifierPoolWithValue, PartialResultMarker, PendingSignal, ReactiveEval, ReactiveEvalResult, ReactiveLoop, StackVal, StopSignal, Token, Try, VERSION, WIKI_URL, build_cell, build_public_api, compare_semver, conditional_build, debug_error, delay, distinct, fork, intercept, is_pending, is_special_error, loop_with_callback, next_tick, poll, promise_xor_callback, radioactive_data, rxjs, serial, syncify, tap, throttle, throttler,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	  VERSION = '1.0.0';

	  serial = (function() {
	    var ii;
	    ii = 0;
	    return function() {
	      return ii++;
	    };
	  })();

	  WIKI_URL = 'https://github.com/radioactive/radioactive/wiki';

	  DEBUG = true;

	  DEFAULT_LOOP_DELAY = 10;

	  LOOP_ITERATIONS_TO_SURVIVE = 2;

	  is_special_error = function(e) {
	    return e instanceof PendingSignal || e instanceof StopSignal;
	  };

	  debug_error = function(e) {
	    if (DEBUG && (e != null) && !is_special_error(e)) {
	      return console.log(e);
	    }
	  };

	  next_tick = function(f) {
	    return setTimeout(f, 1);
	  };

	  tap = function(v) {
	    return function(f) {
	      f(v);
	      return v;
	    };
	  };

	  delay = function() {
	    return setTimeout(arguments[1], arguments[0]);
	  };

	  EQUALS = function(a, b) {
	    return a === b;
	  };

	  throttler = function(ms) {
	    var t;
	    t = void 0;
	    return function(f) {
	      if (t != null) {
	        clearTimeout(t);
	      }
	      if (f != null) {
	        return t = setTimeout(f, ms);
	      }
	    };
	  };

	  PendingSignal = (function(_super) {
	    __extends(PendingSignal, _super);

	    function PendingSignal() {
	      PendingSignal.__super__.constructor.call(this, "PendingSignal");
	    }

	    return PendingSignal;

	  })(Error);

	  StopSignal = (function(_super) {
	    __extends(StopSignal, _super);

	    function StopSignal() {
	      StopSignal.__super__.constructor.call(this);
	    }

	    return StopSignal;

	  })(Error);

	  BasicEventEmitter = (function() {
	    function BasicEventEmitter() {
	      this._request_cleanup = false;
	      this._handlers = [];
	    }

	    BasicEventEmitter.prototype.emit = function(type, payload) {
	      this._handlers.forEach((function(_this) {
	        return function(h) {
	          if (h.type === type && 0 === h.fire(payload)) {
	            return _this._request_cleanup = true;
	          }
	        };
	      })(this));
	      return this._cleanup();
	    };

	    BasicEventEmitter.prototype.on = function(type, f) {
	      return this._upsert(type, f, -1);
	    };

	    BasicEventEmitter.prototype.once = function(type, f) {
	      return this._upsert(type, f, 1);
	    };

	    BasicEventEmitter.prototype.off = function(type, f) {
	      return this._upsert(type, f, 0);
	    };

	    BasicEventEmitter.prototype.removeListener = function(type, f) {
	      return this.off(type, f);
	    };

	    BasicEventEmitter.prototype.removeAllListeners = function() {
	      return this._handlers = [];
	    };

	    BasicEventEmitter.prototype._cleanup = function() {
	      var h;
	      if (this._request_cleanup) {
	        this._request_cleanup = false;
	        return this._handlers = (function() {
	          var _i, _len, _ref, _results;
	          _ref = this._handlers;
	          _results = [];
	          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	            h = _ref[_i];
	            if (h.remaining !== 0) {
	              _results.push(h);
	            }
	          }
	          return _results;
	        }).call(this);
	      }
	    };

	    BasicEventEmitter.prototype._find_handler = function(type, f) {
	      var h, _i, _len, _ref;
	      _ref = this._handlers;
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        h = _ref[_i];
	        if (h.equals(type, f)) {
	          return h;
	        }
	      }
	      return void 0;
	    };

	    BasicEventEmitter.prototype._upsert = function(type, f, q) {
	      var x;
	      if ((x = this._find_handler(type, f)) != null) {
	        x.update(q);
	      } else {
	        if (q === 0) {
	          return;
	        }
	        this._handlers.push(new BasicEventEmitterHandler(type, f, q));
	      }
	      if (q === 0) {
	        this._request_cleanup = true;
	        return this._cleanup();
	      }
	    };

	    return BasicEventEmitter;

	  })();

	  BasicEventEmitterHandler = (function() {
	    function BasicEventEmitterHandler(type, func, remaining) {
	      this.type = type;
	      this.func = func;
	      this.remaining = remaining != null ? remaining : -1;
	    }

	    BasicEventEmitterHandler.prototype.update = function(q) {
	      if (this.remaining < 0 && q === 1) {
	        return;
	      }
	      return this.remaining = q;
	    };

	    BasicEventEmitterHandler.prototype.fire = function(e) {
	      if (this.remaining !== 0) {
	        this.remaining--;
	        this.func(e);
	      }
	      return this.remaining;
	    };


	    /*
	    equals(type:string, func:CB):boolean;
	    equals(other:Handler):boolean;
	     */

	    BasicEventEmitterHandler.prototype.equals = function(type, func) {
	      if (type instanceof BasicEventEmitterHandler) {
	        func = type.func;
	        type = type.type;
	      }
	      return this.type === type && this.func === func;
	    };

	    return BasicEventEmitterHandler;

	  })();

	  StackVal = (function() {
	    function StackVal() {
	      this.stack = [];
	    }

	    StackVal.prototype.defined = function() {
	      return this.stack.length > 0;
	    };

	    StackVal.prototype.run = function(expr, build) {
	      try {
	        this.stack.push(build());
	        return expr();
	      } finally {
	        this.stack.pop();
	      }
	    };

	    StackVal.prototype.get = function() {
	      if (this.defined()) {
	        return this.stack[this.stack.length - 1];
	      } else {
	        throw new Error("No value found upstack");
	      }
	    };

	    return StackVal;

	  })();

	  Base = (function(_super) {
	    __extends(Base, _super);

	    function Base() {
	      Base.__super__.constructor.call(this);
	    }

	    return Base;

	  })(BasicEventEmitter);

	  Notifier = (function(_super) {
	    __extends(Notifier, _super);

	    function Notifier(monitor) {
	      this.monitor = monitor;
	      Notifier.__super__.constructor.call(this);
	    }

	    Notifier.prototype.fire = function() {
	      return this.monitor.fire(this);
	    };

	    Notifier.prototype.cancel = function() {};

	    Notifier.prototype.is_active = function() {
	      return true;
	    };

	    Notifier.prototype.public_api = function() {
	      var api;
	      api = (function(_this) {
	        return function() {
	          return _this.fire();
	        };
	      })(this);
	      api.once = (function(_this) {
	        return function(h) {
	          return _this.once(h);
	        };
	      })(this);
	      api.off = (function(_this) {
	        return function(h) {
	          return _this.off(h);
	        };
	      })(this);
	      return api;
	    };

	    return Notifier;

	  })(Base);

	  NotifierPool = (function(_super) {
	    __extends(NotifierPool, _super);

	    function NotifierPool() {
	      NotifierPool.__super__.constructor.call(this);
	      this.notifiers = [];
	    }

	    NotifierPool.prototype.allocate = function() {
	      if (ReactiveEval.active()) {
	        return this.notifiers.push(ReactiveEval.notifier());
	      }
	    };

	    NotifierPool.prototype.cancel = function() {
	      return this._each(function(n) {
	        return n.cancel();
	      });
	    };

	    NotifierPool.prototype.fire = function() {
	      return this._each(function(n) {
	        return n.fire();
	      });
	    };

	    NotifierPool.prototype.monitor_cancelled = function() {
	      return this._each(function(n) {
	        return n.monitor_cancelled();
	      });
	    };

	    NotifierPool.prototype.sibling_fired = function() {
	      return this._each(function(n) {
	        return n.sibling_fired();
	      });
	    };

	    NotifierPool.prototype.is_active = function() {
	      var n, _i, _len, _ref;
	      _ref = this.notifiers;
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        n = _ref[_i];
	        if (n.is_active()) {
	          return true;
	        }
	      }
	      return false;
	    };

	    NotifierPool.prototype._each = function(f) {
	      var ns;
	      ns = this.notifiers;
	      this.notifiers = [];
	      return ns.forEach(f);
	    };

	    return NotifierPool;

	  })(Base);

	  NotifierPoolWithValue = (function() {
	    function NotifierPoolWithValue() {
	      this.notifiers = new NotifierPool();
	      this.current = Try["null"];
	    }

	    NotifierPoolWithValue.prototype.allocate = function() {};

	    NotifierPoolWithValue.prototype.set = function(e, r) {
	      this.current = Try.resolve(e, r);
	      return this.notifiers.fire();
	    };

	    NotifierPoolWithValue.prototype.get = function() {
	      this.notifiers.allocate();
	      return this.current.get();
	    };

	    return NotifierPoolWithValue;

	  })();

	  Monitor = (function(_super) {
	    __extends(Monitor, _super);

	    function Monitor() {
	      Monitor.__super__.constructor.call(this);
	      this.notifiers = [];
	    }

	    Monitor.prototype.notifier = function() {
	      var n;
	      this.notifiers.push(n = new Notifier(this));
	      return n;
	    };

	    Monitor.prototype.cancel = function() {};

	    Monitor.prototype.fire = function() {
	      return next_tick((function(_this) {
	        return function() {
	          return _this.emit('fire');
	        };
	      })(this));
	    };

	    Monitor.prototype.bubble = function() {
	      var n;
	      if (ReactiveEval.active()) {
	        n = ReactiveEval.notifier();
	        return this.once('fire', function() {
	          return n.fire();
	        });
	      }
	    };

	    Monitor.join = function(monitors) {
	      var cb, len, notifier;
	      if (ReactiveEval.active()) {
	        notifier = ReactiveEval.notifier();
	        len = monitors.length;
	        cb = function() {
	          if (--len === 0) {
	            return notifier.fire();
	          }
	        };
	        return monitors.forEach(function(m) {
	          return m.once('fire', cb);
	        });
	      }
	    };

	    return Monitor;

	  })(Base);

	  MonitorListenerProxy = (function() {
	    function MonitorListenerProxy(handler) {
	      this.handler = handler;
	    }

	    MonitorListenerProxy.prototype.swap = function(m) {
	      var _ref, _ref1;
	      if ((_ref = this.monitor) != null) {
	        _ref.off('fire', this.handler);
	      }
	      this.monitor = m;
	      return (_ref1 = this.monitor) != null ? _ref1.once('fire', this.handler) : void 0;
	    };

	    return MonitorListenerProxy;

	  })();

	  Try = (function() {
	    function Try(error, result) {
	      this.error = error;
	      this.result = result;
	    }

	    Try.prototype.get = function() {
	      if (this.error != null) {
	        throw this.error;
	      }
	      return this.result;
	    };

	    Try.prototype.equals = function(other, comparator) {
	      if (comparator == null) {
	        comparator = void 0;
	      }
	      if (comparator == null) {
	        comparator = function(a, b) {
	          return a === b;
	        };
	      }
	      if (!(other instanceof Try)) {
	        return false;
	      }
	      if ((other.error != null) || (this.error != null)) {
	        return comparator(other.error, this.error);
	      } else {
	        return comparator(other.result, this.result);
	      }
	    };

	    Try.prototype.merge = function() {
	      if (this.error != null) {
	        return this.error;
	      } else {
	        return this.result;
	      }
	    };

	    Try["eval"] = function(expr) {
	      var e;
	      try {
	        return new Try(null, expr());
	      } catch (_error) {
	        e = _error;
	        return new Try(e);
	      }
	    };

	    Try.err = function(v) {
	      return new Try(v, null);
	    };

	    Try.res = function(v) {
	      return new Try(null, v);
	    };

	    Try.resolve = function(e, r) {
	      if (e instanceof Try) {
	        return e;
	      }
	      if (e != null) {
	        return new Try(e, null);
	      } else {
	        return new Try(null, r);
	      }
	    };

	    Try.one = function(x) {
	      if (x instanceof Error) {
	        return new Try(x);
	      } else {
	        return new Try(null, x);
	      }
	    };

	    Try["null"] = new Try(null, null);

	    return Try;

	  })();

	  Token = (function() {
	    function Token() {}

	    Token.prototype.result = null;

	    Token.prototype.partial = false;

	    Token.prototype.monitor = null;

	    return Token;

	  })();

	  Iterator = (function(_super) {
	    __extends(Iterator, _super);

	    Iterator.prototype.expired = true;

	    Iterator.prototype.last_token = null;

	    Iterator.prototype.iteration_count = 0;

	    function Iterator(expr) {
	      this.add_to_stack = __bind(this.add_to_stack, this);
	      this.update_counters = __bind(this.update_counters, this);
	      this.invalidate_service_caches = __bind(this.invalidate_service_caches, this);
	      Iterator.__super__.constructor.call(this);
	      this.expr = this.add_to_stack(this.invalidate_service_caches(this.mark_partials(this.attach_monitors(this.update_counters(this.tokenize(expr))))));
	      this.monitor_listener = new MonitorListenerProxy((function(_this) {
	        return function() {
	          _this.expired = true;
	          return _this.emit('change');
	        };
	      })(this));
	      this.cache = {};
	    }

	    Iterator.prototype.refresh = function() {
	      var t, _ref, _ref1;
	      if (this.expired) {
	        this.expired = false;
	        t = this.expr();
	        this.monitor_listener.swap(t.monitor);
	        this.last_token = t;
	        debug_error((_ref = t.result) != null ? (_ref1 = _ref.result) != null ? _ref1.error : void 0 : void 0);
	        return true;
	      } else {
	        return false;
	      }
	    };

	    Iterator.prototype.current = function() {
	      if (this.pending()) {
	        return Try["null"];
	      } else {
	        return this.last_token.result;
	      }
	    };

	    Iterator.prototype.pending = function() {
	      return this.last_token.result.error instanceof PendingSignal;
	    };

	    Iterator.prototype.expireable = function() {
	      if (this.last_token != null) {
	        return this.last_token.monitor != null;
	      } else {
	        return true;
	      }
	    };

	    Iterator.prototype.close = function() {
	      var _ref, _ref1;
	      if ((_ref = this.last_token) != null) {
	        if ((_ref1 = _ref.monitor) != null) {
	          _ref1.cancel();
	        }
	      }
	      this.monitor_listener.swap(null);
	      return this.cache = {};
	    };

	    Iterator.prototype.tokenize = function(expr) {
	      return function() {
	        return tap(new Token)(function(t) {
	          return t.result = Try["eval"](expr);
	        });
	      };
	    };

	    Iterator.prototype.attach_monitors = function(stream) {
	      return function() {
	        var r;
	        r = ReactiveEval["eval"](stream);
	        return tap(r.result)(function(t) {
	          return t.monitor = r.monitor;
	        });
	      };
	    };

	    Iterator.prototype.mark_partials = function(stream) {
	      return function() {
	        var prm;
	        prm = new PartialResultMarker;
	        return tap(prm.run(stream))(function(t) {
	          return t.partial = prm.marked;
	        });
	      };
	    };

	    Iterator.prototype.invalidate_service_caches = function(stream) {
	      return (function(_this) {
	        return function() {
	          return tap(stream())(function(t) {
	            if (!(t.partial || t.result.error instanceof PendingSignal)) {
	              return _this.cache = {};
	            }
	          });
	        };
	      })(this);
	    };

	    Iterator.prototype.update_counters = function(stream) {
	      return (function(_this) {
	        return function() {
	          return tap(stream())(function() {
	            return _this.iteration_count++;
	          });
	        };
	      })(this);
	    };

	    Iterator.prototype.add_to_stack = function(stream) {
	      return (function(_this) {
	        return function() {
	          return Iterator.stack.run(stream, function() {
	            return _this;
	          });
	        };
	      })(this);
	    };

	    Iterator.stack = new StackVal;

	    Iterator.current_cache = function() {
	      return this.stack.get().cache;
	    };

	    return Iterator;

	  })(Base);

	  ReactiveLoop = (function(_super) {
	    __extends(ReactiveLoop, _super);

	    function ReactiveLoop(expr, opts) {
	      var _base, _base1;
	      this.opts = opts != null ? opts : null;
	      this.stop = __bind(this.stop, this);
	      this._loop = __bind(this._loop, this);
	      ReactiveLoop.__super__.constructor.call(this);
	      if (this.opts == null) {
	        this.opts = {};
	      }
	      if ((_base = this.opts).debounce == null) {
	        _base.debounce = DEFAULT_LOOP_DELAY;
	      }
	      if ((_base1 = this.opts).detached == null) {
	        _base1.detached = true;
	      }
	      this.iter = new Iterator((function(_this) {
	        return function() {
	          return ReactiveLoop.stack.run(expr, function() {
	            return _this;
	          });
	        };
	      })(this));
	      this._attach_to_parent();
	      this._request_loop();
	    }

	    ReactiveLoop.prototype._request_loop = function() {
	      if (this.loop_timeout != null) {
	        clearTimeout(this.loop_timeout);
	      }
	      return this.loop_timeout = setTimeout(this._loop, this.opts.debounce);
	    };

	    ReactiveLoop.prototype._loop = function() {
	      var err;
	      if (this._eol_heuristics()) {
	        this.iter.refresh();
	        err = this.iter.current().error;
	        if (err instanceof StopSignal) {
	          return this.stop();
	        } else {
	          if (err != null) {
	            try {
	              console.log(err);
	            } catch (_error) {}
	          }
	          return this.iter.once("change", (function(_this) {
	            return function() {
	              return _this._request_loop();
	            };
	          })(this));
	        }
	      } else {
	        return this.stop();
	      }
	    };

	    ReactiveLoop.prototype.iteration_count = function() {
	      return this.iter.iteration_count;
	    };

	    ReactiveLoop.prototype.stop = function() {
	      if (this.loop_timeout != null) {
	        clearTimeout(this.loop_timeout);
	      }
	      return this.iter.close();
	    };

	    ReactiveLoop.prototype._eol_heuristics = function() {
	      var iterations_we_have_lived;
	      if (this.parent != null) {
	        iterations_we_have_lived = this.parent.iteration_count() - this.parent_iteration_count;
	        if (iterations_we_have_lived > LOOP_ITERATIONS_TO_SURVIVE) {
	          return false;
	        }
	      }
	      return true;
	    };

	    ReactiveLoop.prototype.parent = void 0;

	    ReactiveLoop.prototype.parent_iteration_count = void 0;

	    ReactiveLoop.prototype._attach_to_parent = function() {
	      if (!this.opts.detached) {
	        if (ReactiveLoop.stack.defined()) {
	          this.parent = ReactiveLoop.stack.get;
	          return this.parent_iteration_count = this.parent.iteration_count();
	        }
	      }
	    };

	    ReactiveLoop.stack = new StackVal;

	    return ReactiveLoop;

	  })(Base);

	  promise_xor_callback = function(async_func, cb) {
	    var cb2, ready, _ref;
	    ready = false;
	    cb2 = function(e, r) {
	      if (!ready) {
	        cb(e, r);
	      }
	      return ready = true;
	    };
	    return (_ref = async_func(cb2)) != null ? typeof _ref.then === "function" ? _ref.then((function(r) {
	      return cb2(void 0, r);
	    }), function(e) {
	      return cb2(e);
	    }) : void 0 : void 0;
	  };

	  syncify = function(opts) {
	    var api, cache, id, instance_scoped_cache_lazy;
	    if (typeof opts === 'function') {
	      opts = {
	        func: opts
	      };
	    }
	    if (opts.global == null) {
	      opts.global = false;
	    }
	    if (opts.ttl == null) {
	      opts.ttl = 0;
	    }
	    if (opts.hasher == null) {
	      opts.hasher = JSON.stringify;
	    }
	    id = serial();
	    instance_scoped_cache_lazy = void 0;
	    cache = function() {
	      var build, instance_scoped, iteration_scoped;
	      build = function() {
	        var cells, get, reset, reset_cell;
	        cells = {};
	        get = function(args) {
	          var key;
	          if (args.length !== opts.func.length - 1) {
	            throw new Error('Wrong number of arguments for syncified function ' + opts.func.toString());
	          }
	          key = opts.hasher(args);
	          return (cells[key] != null ? cells[key] : cells[key] = (function() {
	            var c;
	            c = build_cell(new PendingSignal);
	            c.___args = args;
	            if (opts.ttl !== 0) {
	              c.___timeout = delay(opts.ttl, function() {
	                return reset_cell(key);
	              });
	            }
	            promise_xor_callback((function(cb) {
	              return opts.func.apply(null, args.concat([cb]));
	            }), c);
	            return c;
	          })())();
	        };
	        reset_cell = function(key) {
	          var cell;
	          if ((cell = cells[key]) != null) {
	            delete cells[key];
	            if (cell.___timeout) {
	              clearTimeout(cell.___timeout);
	            }
	            if (cell.monitored()) {
	              return cell({});
	            }
	          }
	        };
	        reset = function(filter) {
	          var cell, k, _results;
	          _results = [];
	          for (k in cells) {
	            if (!__hasProp.call(cells, k)) continue;
	            cell = cells[k];
	            if ((filter == null) || filter(cell.___args)) {
	              _results.push(reset_cell(k));
	            }
	          }
	          return _results;
	        };
	        return {
	          get: get,
	          reset: reset
	        };
	      };
	      iteration_scoped = function() {
	        var _base;
	        return (_base = Iterator.current_cache())[id] != null ? _base[id] : _base[id] = build();
	      };
	      instance_scoped = function() {
	        return instance_scoped_cache_lazy != null ? instance_scoped_cache_lazy : instance_scoped_cache_lazy = build();
	      };
	      if (opts.global) {
	        return instance_scoped();
	      } else {
	        return iteration_scoped();
	      }
	    };
	    api = function() {
	      return cache().get(Array.prototype.slice.apply(arguments));
	    };
	    api.reset = function(filter) {
	      return instance_scoped_cache().reset(filter);
	    };
	    return api;
	  };

	  fork = function() {
	    var api, monitors, pending;
	    pending = 0;
	    monitors = [];
	    api = function(expr) {
	      var res;
	      res = ReactiveEval["eval"](expr);
	      if (res.result.error instanceof PendingSignal) {
	        if (res.monitor == null) {
	          throw new Error('You cannot throw a PendingSignal from a non reactive function - it will never resolve');
	        }
	        pending++;
	        monitors.push(res.monitor);
	        return null;
	      } else {
	        return res.unbox();
	      }
	    };
	    api.join = function() {
	      Monitor.join(monitors);
	      if (pending > 0) {
	        throw new PendingSignal;
	      }
	      return void 0;
	    };
	    return api;
	  };

	  PartialResultMarker = (function() {
	    function PartialResultMarker() {
	      this.mark = __bind(this.mark, this);
	    }

	    PartialResultMarker.prototype.flag = false;

	    PartialResultMarker.prototype.run = function(expr) {
	      return PartialResultMarker.stack.run(expr, (function(_this) {
	        return function() {
	          return _this;
	        };
	      })(this));
	    };

	    PartialResultMarker.prototype.mark = function() {
	      return this.flag = true;
	    };

	    PartialResultMarker.prototype.marked = function() {
	      return this.flag;
	    };

	    PartialResultMarker.stack = new StackVal;

	    PartialResultMarker.mark = function() {
	      return this.stack.get().mark();
	    };

	    return PartialResultMarker;

	  })();

	  ReactiveEval = (function() {
	    function ReactiveEval(expr) {
	      this.expr = expr;
	    }

	    ReactiveEval.prototype.lazy_monitor = function() {
	      return this._monitor != null ? this._monitor : this._monitor = new Monitor;
	    };

	    ReactiveEval.prototype.run = function() {
	      var t;
	      t = Try["eval"](this.expr);
	      return new ReactiveEvalResult(t, this._monitor);
	    };

	    ReactiveEval.prototype.allocate_notifier = function() {
	      return this.lazy_monitor().notifier();
	    };

	    ReactiveEval.stack = [];

	    ReactiveEval.notifier = function() {
	      var _ref;
	      return (_ref = this.stack[this.stack.length - 1]) != null ? _ref.allocate_notifier() : void 0;
	    };

	    ReactiveEval.active = function() {
	      return this.stack.length > 0;
	    };

	    ReactiveEval.mute = function(expr) {
	      return function() {
	        var res, _ref;
	        res = ReactiveEval["eval"](expr);
	        if ((_ref = res.monitor) != null) {
	          _ref.cancel();
	        }
	        if (is_special_error(res.result.error)) {
	          delete res.result.error;
	        }
	        return res.result.get();
	      };
	    };

	    ReactiveEval["eval"] = function(expr) {
	      var r, rev;
	      rev = new ReactiveEval(expr);
	      this.stack.push(rev);
	      r = rev.run();
	      this.stack.pop();
	      return r;
	    };

	    return ReactiveEval;

	  })();

	  ReactiveEvalResult = (function() {
	    function ReactiveEvalResult(result, monitor) {
	      this.result = result;
	      this.monitor = monitor;
	    }

	    ReactiveEvalResult.prototype.unbox = function() {
	      var _ref;
	      if ((_ref = this.monitor) != null) {
	        _ref.bubble();
	      }
	      return this.result.get();
	    };

	    return ReactiveEvalResult;

	  })();

	  build_cell = function(initial_value, opts) {
	    var api, doget, doset, doset_throttled, notifiers, throttle_timeout, value;
	    if (opts == null) {
	      opts = {};
	    }
	    if (opts.comparator == null) {
	      opts.comparator = EQUALS;
	    }
	    if (opts.throttle == null) {
	      opts.throttle = 0;
	    }
	    value = void 0;
	    notifiers = new NotifierPool;
	    throttle_timeout = void 0;
	    doget = function() {
	      notifiers.allocate();
	      return value != null ? value.get() : void 0;
	    };
	    doset_throttled = function(v) {
	      if (opts.throttle === 0) {
	        return doset(v);
	      } else {
	        if (throttle_timeout) {
	          clearTimeout(throttle_timeout);
	          throttle_timeout = void 0;
	        }
	        return throttle_timeout = delay(opts.throttle, function() {
	          return doset(v);
	        });
	      }
	    };
	    doset = function(v) {
	      var new_t;
	      new_t = v instanceof Error ? new Try(v) : new Try(null, v);
	      if (new_t.equals(value, opts.comparator)) {
	        return;
	      }
	      value = new_t;
	      return notifiers.fire();
	    };
	    api = function() {
	      var a;
	      a = arguments;
	      switch (a.length) {
	        case 0:
	          return doget();
	        case 1:
	          return doset_throttled(a[0]);
	        case 2:
	          return doset_throttled(a[0] || a[1]);
	      }
	    };
	    api.monitored = function() {
	      return notifiers.is_active();
	    };
	    if (initial_value != null) {
	      doset(initial_value);
	    }
	    return api;
	  };


	  /*
	    Wraps an expression.
	    After the expression is evaluated.
	    It will remain being re-evaluated in the back until a change is detected
	    When this happens, this function will notify()
	   */

	  poll = function(interval, expr) {
	    var iter, notifier, res, reval;
	    if (typeof interval === 'function') {
	      expr = interval;
	      interval = 300;
	    }
	    reval = function(exp) {
	      var r, _ref;
	      r = ReactiveEval["eval"](exp);
	      if ((_ref = r.monitor) != null) {
	        _ref.cancel();
	      }
	      return r.result;
	    };
	    if (!ReactiveEval.active()) {
	      return expr();
	    } else {
	      notifier = ReactiveEval.notifier();
	      res = reval(expr);
	      (iter = function() {
	        return delay(interval, function() {
	          if (notifier.is_active()) {
	            if (res.equals(reval(expr))) {
	              return iter();
	            } else {
	              return notifier.fire();
	            }
	          }
	        });
	      })();
	      return res.get();
	    }
	  };

	  throttle = function(delay, expr) {
	    var iter, notifier, res, th;
	    if (typeof delay === 'function') {
	      expr = delay;
	      delay = 300;
	    }
	    if (!ReactiveEval.active()) {
	      return expr();
	    }
	    res = ReactiveEval["eval"](expr);
	    if (res.monitor != null) {
	      th = throttler(delay);
	      notifier = ReactiveEval.notifier();
	      res.monitor.once('fire', iter = function() {
	        var r, _ref;
	        th(function() {
	          return notifier.fire();
	        });
	        r = ReactiveEval["eval"](expr);
	        return (_ref = r.monitor) != null ? _ref.once('fire', iter) : void 0;
	      });
	    }
	    return res.result.get();
	  };

	  distinct = function(expr, comparator) {
	    var v;
	    if (comparator == null) {
	      comparator = EQUALS;
	    }
	    v = intercept(expr, function(r) {
	      return !r.equals(v, comparator);
	    });
	    return v.get();
	  };

	  intercept = function(expr, predicate) {
	    var iter, notifier, res;
	    if (!ReactiveEval.active()) {
	      return Try["eval"](expr);
	    }
	    res = ReactiveEval["eval"](expr);
	    if (res.monitor != null) {
	      notifier = ReactiveEval.notifier();
	      res.monitor.once('fire', iter = function() {
	        var r, _ref, _ref1;
	        r = ReactiveEval["eval"](expr);
	        if (predicate(r.result)) {
	          if ((_ref = r.monitor) != null) {
	            _ref.cancel();
	          }
	          return next_tick(function() {
	            return notifier.fire();
	          });
	        } else {
	          return (_ref1 = r.monitor) != null ? _ref1.once('fire', iter) : void 0;
	        }
	      });
	    }
	    return res.result;
	  };

	  radioactive_data = (function() {
	    var firebase_cache, get_firebase, get_html_elm_val, get_json, json_service;
	    json_service = (function() {
	      var cached;
	      cached = void 0;
	      return function() {
	        return cached != null ? cached : cached = (function() {
	          if (typeof jQuery === "undefined" || jQuery === null) {
	            throw new Error('radioactive.data requires jQuery to issue Ajax calls');
	          }
	          return syncify(function(url, cb) {
	            return jQuery.ajax({
	              dataType: "json",
	              url: url,
	              success: function(data) {
	                return cb(null, data);
	              },
	              error: function(x, y, err) {
	                return cb(err);
	              }
	            });
	          });
	        })();
	      };
	    })();
	    get_json = function(url, opts) {
	      return function() {
	        return json_service()(url);
	      };
	    };
	    firebase_cache = {};
	    get_firebase = function(url) {
	      return firebase_cache[url] != null ? firebase_cache[url] : firebase_cache[url] = (function() {
	        var cell, ref;
	        if (typeof Firebase === "undefined" || Firebase === null) {
	          throw new Error('cannot find Firebase client library');
	        }
	        ref = new Firebase(url);
	        cell = build_cell(new PendingSignal);
	        ref.on('value', function(snap) {
	          return cell(snap.val());
	        });
	        return function() {
	          if (arguments.length === 0) {
	            return cell();
	          } else {
	            return ref.update(arguments[1]);
	          }
	        };
	      })();
	    };
	    get_html_elm_val = function($elm) {
	      var c, key;
	      if (typeof jQuery === "undefined" || jQuery === null) {
	        throw new Error('radioactive.data requires jQuery to issue read HTML UI Element values');
	      }
	      $elm.val();
	      key = 'radioactive-cell';
	      if ((c = $elm.data(key)) == null) {
	        $elm.data(key, c = build_cell($elm.val()));
	        switch ($elm[0].tagName) {
	          case 'INPUT':
	            $elm.on('keyup', function() {
	              return c($elm.val());
	            });
	            break;
	          case 'SELECT':
	            $elm.on('change', function() {
	              return c($elm.val());
	            });
	        }
	      }
	      return function() {
	        if (arguments.length === 0) {
	          return c();
	        } else {
	          return $elm.val(arguments[0]);
	        }
	      };
	    };
	    return function() {
	      var a, _ref;
	      a = arguments;
	      switch (typeof a[0]) {
	        case 'string':
	          if ((_ref = a[0][0]) === '.' || _ref === '#') {
	            return get_html_elm_val($(a[0]));
	          } else if (-1 !== a[0].indexOf('firebaseio.com')) {
	            return get_firebase(a[0]);
	          } else {
	            return get_json(a[0], a[1]);
	          }
	          break;
	        case 'object':
	          if ($(a)[0].ownerDocument != null) {
	            return get_html_elm_val($(a[0]));
	          }
	          break;
	        default:
	          throw new Error("Unknown datasource. Check " + WIKI_URL + "/radioactive.data for a list of built-in datasources");
	      }
	    };
	  })();


	  /*
	    Integration with Reactive Extensions for Javascript
	    https://github.com/Reactive-Extensions
	   */

	  rxjs = (function() {
	    var expr_roundtrip, from_rx, obs_roundtrip, resolve_rx_module, rx_module, to_rx;
	    rx_module = void 0;
	    resolve_rx_module = function() {
	      return rx_module != null ? rx_module : rx_module = (function() {
	        var e;
	        return tap((function() {
	          try {
	            return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	          } catch (_error) {
	            e = _error;
	            return Rx;
	          }
	        })())(function(m) {
	          if (m == null) {
	            throw new Error('Rx-JS not found');
	          }
	        });
	      })();
	    };
	    from_rx = function(rx_observable) {
	      if (typeof rx_observable.subscribe !== 'function') {
	        throw new Error('Not an instance of Rx.Observable');
	      }
	      return rx_observable.__radioactive_expression != null ? rx_observable.__radioactive_expression : rx_observable.__radioactive_expression = (function() {
	        var npv, on_complete, on_err, on_next;
	        npv = new NotifierPoolWithValue;
	        npv.set(new PendingSignal);
	        on_next = function(x) {
	          return npv.set(null, x);
	        };
	        on_err = function(x) {
	          return npv.set(x, null);
	        };
	        on_complete = function() {};
	        rx_observable.subscribe(on_next, on_err, on_complete);
	        return function() {
	          return npv.get();
	        };
	      })();
	    };
	    to_rx = function(expr) {
	      return expr.__rx_observable != null ? expr.__rx_observable : expr.__rx_observable = (function() {
	        return resolve_rx_module().Observable.create(function(observer) {
	          return radioactive.react(expr, function(e, r) {
	            if (e != null) {
	              return observer.onError(e);
	            } else {
	              return observer.onNext(r);
	            }
	          });
	        });
	      })();
	    };
	    expr_roundtrip = function(expr, process_obs) {
	      return from_rx(process_obs(to_rx(expr)));
	    };
	    obs_roundtrip = function(obs, process_expr) {
	      return to_rx(process_expr(from_rx(obs)));
	    };
	    return function(a, b) {
	      switch (typeof a + ' ' + typeof b) {
	        case 'function undefined':
	          return to_rx(a);
	        case 'object undefined':
	          return from_rx(a);
	        case 'function function':
	          return expr_roundtrip(a, b);
	        case 'object function':
	          return obs_roundtrip(a, b);
	      }
	    };
	  })();

	  loop_with_callback = function(expr, cb) {
	    var stop;
	    stop = false;
	    radioactive.react(function() {
	      var e;
	      if (stop) {
	        radioactive.stop();
	      }
	      try {
	        return cb(null, expr());
	      } catch (_error) {
	        e = _error;
	        if (is_special_error(e)) {
	          throw e;
	        }
	        return cb(e);
	      }
	    });
	    return function() {
	      return stop = true;
	    };
	  };

	  is_pending = function(expr) {
	    var e;
	    try {
	      expr();
	      return false;
	    } catch (_error) {
	      e = _error;
	      if (e instanceof PendingSignal) {
	        PartialResultMarker.mark();
	        return true;
	      } else {
	        return false;
	      }
	    }
	  };

	  build_public_api = function() {
	    var internals, radioactive;
	    radioactive = function(a, b) {
	      switch (typeof a + ' ' + typeof b) {
	        case 'function undefined':
	          return radioactive.react(a);
	        case 'function function':
	          return radioactive.react(a, b);
	        default:
	          return build_cell(a);
	      }
	    };
	    radioactive.data = radioactive_data;
	    radioactive.cell = build_cell;
	    radioactive.cell.pending = function() {
	      return build_cell(new PendingSignal);
	    };
	    radioactive.active = function() {
	      return ReactiveEval.active();
	    };
	    radioactive.notifier = function(callback) {
	      var n, _ref;
	      n = (_ref = ReactiveEval.notifier()) != null ? _ref.public_api() : void 0;
	      if (callback != null) {
	        if (n != null) {
	          return callback(n);
	        }
	      } else {
	        return n;
	      }
	    };
	    radioactive.stop = function() {
	      throw new StopSignal;
	    };
	    radioactive.fork = fork;
	    radioactive.mute = function(expr) {
	      return ReactiveEval.mute(expr);
	    };
	    radioactive.poll = poll;
	    radioactive.react = function(a, b) {
	      switch (typeof a + ' ' + typeof b) {
	        case 'function undefined':
	          return new ReactiveLoop(a);
	        case 'function function':
	          return loop_with_callback(a, b);
	      }
	    };
	    radioactive.once = function(expr) {
	      return radioactive.react(function() {
	        expr();
	        return radioactive.stop();
	      });
	    };
	    radioactive.pending = function(expr, defv) {
	      switch (arguments.length) {
	        case 0:
	          throw new PendingSignal;
	          break;
	        case 1:
	          return is_pending(expr);
	        case 2:
	          if (is_pending(expr)) {
	            if (typeof defv === 'function') {
	              return defv();
	            } else {
	              return defv;
	            }
	          } else {
	            return expr();
	          }
	      }
	    };
	    radioactive.syncify = syncify;
	    radioactive.echo = function(delay_ms) {
	      var cells;
	      if (delay_ms == null) {
	        delay_ms = 1000;
	      }
	      cells = {};
	      return function(message) {
	        return (cells[message] != null ? cells[message] : cells[message] = (function() {
	          var c;
	          delay(delay_ms, function() {
	            return c(message);
	          });
	          return c = build_cell(new PendingSignal);
	        })())();
	      };
	    };
	    radioactive.time = function(interval) {
	      if (interval == null) {
	        interval = 1000;
	      }
	      if (interval > 0 && ReactiveEval.active()) {
	        setTimeout(radioactive.notifier(), interval);
	      }
	      return new Date().getTime();
	    };
	    radioactive.PendingSignal = PendingSignal;
	    radioactive.rx = rxjs;
	    radioactive.distinct = distinct;
	    radioactive.throttle = throttle;
	    radioactive.safecatch = function(error) {
	      if (is_special_error(error)) {
	        throw error;
	      }
	    };

	    /*
	      Exported internals ( for unit testing only )
	     */
	    radioactive._internals = internals = {};
	    internals.Monitor = Monitor;
	    internals.Notifier = Notifier;
	    internals.ReactiveEval = ReactiveEval;
	    internals.BasicEventEmitter = BasicEventEmitter;
	    return radioactive;
	  };

	  compare_semver = function(v1, v2) {
	    var arr, i, x, x1, x2, _i, _len;
	    v1 = (function() {
	      var _i, _len, _ref, _results;
	      _ref = v1.split('.');
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        x = _ref[_i];
	        _results.push(Number(x));
	      }
	      return _results;
	    })();
	    v2 = (function() {
	      var _i, _len, _ref, _results;
	      _ref = v2.split('.');
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        x = _ref[_i];
	        _results.push(Number(x));
	      }
	      return _results;
	    })();
	    arr = (function() {
	      var _i, _len, _results;
	      _results = [];
	      for (i = _i = 0, _len = v1.length; _i < _len; i = ++_i) {
	        x1 = v1[i];
	        x2 = v2[i];
	        if (x1 > x2) {
	          _results.push('GT');
	        } else if (x1 < x2) {
	          _results.push('LT');
	        } else {
	          _results.push('EQ');
	        }
	      }
	      return _results;
	    })();
	    for (_i = 0, _len = arr.length; _i < _len; _i++) {
	      x = arr[_i];
	      if (x === 'GT') {
	        return 'GT';
	      }
	      if (x === 'LT') {
	        return 'LT';
	      }
	    }
	    return 'EQ';
	  };

	  GLOBAL = (function() {
	    try {
	      return window;
	    } catch (_error) {
	      return global;
	    }
	  })();

	  (conditional_build = function() {
	    var create, other, other_version;
	    create = false;
	    if ((other = GLOBAL.radioactive) != null) {
	      other_version = other.version || '0.0.0';
	      if (compare_semver(VERSION, other_version) === 'GT') {
	        create = true;
	      }
	    } else {
	      create = true;
	    }
	    if (create) {
	      return GLOBAL.radioactive = GLOBAL.Ra = build_public_api();
	    }
	  })();

	  try {
	    module.exports = GLOBAL.radioactive;
	  } catch (_error) {}

	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.8.0
	(function() {
	  module.exports = function(radioactive, jQuery, document) {
	    var $, apply_props_on_html_node, apply_query_tag, bidibinder, collector, create_collector, create_ext, create_html, cssc, declare_insert_tag, declare_tag, declare_tag_rec, delay, env, ext_comp_innerhtml, ext_get_component_element, helpers, htmltags, interval, is_func, log_err, merge_css_classes, process_bind, reactive_snapshot, rrun, rsub, rsub_html_elm_content, rsub_now, rthp, tag_args_to_props_and_content, tpp, ut, xtype2class, xtypes;
	    env = __webpack_require__(9);
	    env.radioactive = function() {
	      return radioactive;
	    };
	    env.jQuery = function() {
	      return jQuery;
	    };
	    env.document = function() {
	      return document;
	    };
	    $ = jQuery;
	    htmltags = __webpack_require__(25);
	    create_collector = __webpack_require__(26);
	    ut = __webpack_require__(15);
	    xtypes = __webpack_require__(27);
	    rthp = __webpack_require__(10);
	    cssc = __webpack_require__(11);
	    tpp = __webpack_require__(12);
	    tag_args_to_props_and_content = __webpack_require__(13);
	    bidibinder = __webpack_require__(28);
	    helpers = __webpack_require__(14);
	    interval = ut.interval;
	    delay = ut.delay;
	    rsub = function(v, cb) {
	      if (is_func(v)) {
	        return radioactive.react(v, function(e, r) {
	          log_err(e);
	          return cb(r);
	        });
	      } else {
	        cb(v);
	        return function() {};
	      }
	    };
	    rsub_now = function(v, cb) {
	      var r;
	      r = rrun(v);
	      cb(r.error, r.result);
	      return rsub(v, cb);
	    };
	    rrun = function(f) {
	      var e;
	      try {
	        return {
	          result: radioactive.mute(f)()
	        };
	      } catch (_error) {
	        e = _error;
	        return {
	          error: e
	        };
	      }
	    };
	    log_err = function(e) {
	      ut.err(e);
	      try {
	        return window._last_error = e;
	      } catch (_error) {}
	    };
	    reactive_snapshot = function(v) {
	      if (is_func(v)) {
	        return radioactive.mute(v)();
	      } else {
	        return v;
	      }
	    };
	    is_func = function(v) {
	      return typeof v === 'function';
	    };
	    collector = create_collector();
	    merge_css_classes = function(head_classes, inline_class_decl, classflags) {
	      var merged, mfcs;
	      mfcs = [];
	      if (head_classes.length > 0) {
	        mfcs.push([head_classes, true]);
	      }
	      if (inline_class_decl != null) {
	        mfcs.push([inline_class_decl, true]);
	      }
	      ut.kv(classflags, function(clazz, flag) {
	        return mfcs.push([clazz, flag]);
	      });
	      merged = cssc.mfc(mfcs);
	      merged = merged.sort();
	      return merged.join(' ');
	    };
	    ext_comp_innerhtml = function(comp, cb) {
	      return ut.delay(1, function() {
	        var key, xxx;
	        key = '___innerhtml___';
	        if (comp[key] != null) {
	          return cb(comp[key]);
	        } else {
	          return (xxx = function() {
	            var $elm;
	            try {
	              if (($elm = $(comp.element.dom).find('.x-innerhtml')) != null) {
	                if ($elm[0] != null) {
	                  cb(comp[key] = $elm[0]);
	                  return;
	                }
	              }
	            } catch (_error) {}
	            return ut.delay(100, xxx);
	          })();
	        }
	      });
	    };
	    ext_get_component_element = function(c, cb) {
	      return ut.delay(1, function() {
	        var f;
	        if (c.element != null) {
	          return cb(c.element);
	        }
	        return c.on('initialize', f = function() {
	          cb(c.element);
	          return c.un('initialize', f);
	        });
	      });
	    };
	    apply_props_on_html_node = function($e, props) {
	      var undos;
	      undos = [];
	      props.properties["class"] = (function(c) {
	        return function() {
	          return merge_css_classes([], c, props.classflags);
	        };
	      })(props.properties["class"]);
	      (function(p) {
	        if (p._bind != null) {
	          process_bind($e, p._bind);
	          return delete p._bind;
	        }
	      })(props.properties);
	      (function(p) {
	        if (p._html != null) {
	          undos.push(rsub_now(p._html, function(v) {
	            return $e.html(v);
	          }));
	          return delete p._html;
	        }
	      })(props.properties);
	      if (props.properties._onclick != null) {
	        (function(h) {
	          var _base;
	          if ($e[0].tagName === 'A') {
	            if ((_base = props.properties).href == null) {
	              _base.href = '#';
	            }
	            return props.listeners.click = function(e) {
	              e.preventDefault();
	              return h();
	            };
	          } else {
	            return props.listeners.click = function(e) {
	              return h();
	            };
	          }
	        })(props.properties._onclick);
	        delete props.properties._onclick;
	      }
	      ut.kv(props.listeners, function(event, handler) {
	        $e.on(event, handler);
	        return undos.push(function() {
	          return $e.off(event, handler);
	        });
	      });
	      ut.kv(props.properties, function(prop, value) {
	        $e.prop(prop, reactive_snapshot);
	        return undos.push(rsub_now(value, function(v) {
	          return $e.prop(prop, v);
	        }));
	      });
	      ut.kkv(props.watchers, function(prop, event, handler) {
	        var iv;
	        if (event === '_poll') {
	          iv = setInterval((function() {
	            return handler.handler($e.prop(prop));
	          }), 300);
	          return function() {
	            return clearInterval(iv);
	          };
	        }
	      });
	      ut.kkv(props.watchers, function(prop, event, handler) {
	        var binder, fn, react_stopper;
	        if (event !== '_poll') {
	          if (handler.bidirectional) {
	            binder = bidibinder({
	              get_a: function() {
	                return handler.handler();
	              },
	              set_a: function(v) {
	                return handler.handler(v);
	              },
	              get_b: function() {
	                return $e.prop(prop);
	              },
	              set_b: function(v) {
	                return $e.prop(prop, v);
	              }
	            });
	            react_stopper = radioactive.react(function() {
	              return binder.touch_a();
	            });
	            $e.on(event, fn = function() {
	              return binder.touch_b();
	            });
	            return function() {
	              $e.off(event, fn);
	              return react_stopper();
	            };
	          } else {
	            $e.on(event, fn = function() {
	              return handler.handler($e.prop(prop));
	            });
	            return function() {
	              return $e.off(event, fn);
	            };
	          }
	        }
	      });
	      ut.kv(props.styles, function(prop, value) {
	        $e.css(prop, reactive_snapshot(value));
	        return undos.push(rsub_now(value, function(v) {
	          return $e.css(prop, v);
	        }));
	      });
	      ut.kv(props.queries, function(k, v) {
	        return undos.push(apply_query_tag($e, k, v));
	      });
	      return function() {
	        var u, _i, _len, _results;
	        _results = [];
	        for (_i = 0, _len = undos.length; _i < _len; _i++) {
	          u = undos[_i];
	          _results.push(u());
	        }
	        return _results;
	      };
	    };
	    process_bind = function($e, bind) {
	      var cell, cell_is_origin, mutex, read_only, val_on_e;
	      if (!is_func(bind)) {
	        throw new Error('_bind requires a cell (function)');
	      }
	      read_only = bind.length === 0;
	      cell_is_origin = true;
	      cell = bind;
	      mutex = false;
	      val_on_e = void 0;
	      $e.on('change', function() {
	        val_on_e = $e.val();
	        return cell(val_on_e);
	      });
	      return $e.val();
	    };
	    create_html = function(head, props, content) {
	      var $e, c, node, undos, _i, _len, _ref;
	      undos = [];
	      switch (head.tag) {
	        case 'text':
	          node = document.createTextNode('');
	          switch (typeof content) {
	            case 'function':
	              undos.push(rsub(content, function(v) {
	                return node.data = v;
	              }));
	              break;
	            case 'string':
	              node.data = content;
	              break;
	            case 'number':
	              node.data = content.toString();
	          }
	          return node;
	        default:
	          if (!htmltags(head.tag)) {
	            throw new Error('Unknown HTML tag: ' + head.tag);
	          }
	          $e = $('<' + head.tag + '>');
	          if (head.id != null) {
	            props.properties.id = head.id;
	          }
	          _ref = head.classes;
	          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	            c = _ref[_i];
	            props.classflags[c] = true;
	          }
	          undos.push(apply_props_on_html_node($e, props));
	          if (content != null) {
	            undos.push(rsub_html_elm_content($e, content));
	          }
	          return $e[0];
	      }
	    };
	    create_ext = function(head, props, content) {
	      var c, clazz, component, config, html_func_property, p, pending_subscriptions, pending_watchers, undos, _i, _j, _len, _len1, _ref, _ref1;
	      pending_subscriptions = [];
	      pending_watchers = [];
	      config = {};
	      undos = [];
	      clazz = xtype2class(head.tag.split('-').join('.'));
	      if (head.id != null) {
	        props.properties.id = head.id;
	      }
	      _ref = head.classes;
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        c = _ref[_i];
	        props.classflags[c] = true;
	      }
	      props.properties.cls = (function(c) {
	        return function() {
	          return merge_css_classes([], c, props.classflags);
	        };
	      })(props.properties.cls);
	      if (props.listeners != null) {
	        config.listeners = props.listeners;
	      }

	      /*
	      TODO: accept objects with more options
	          tap:
	            fn: -> @hide()
	            single: true
	            scope: @
	       */
	      ut.kkv(props.watchers, function(prop, event, handler) {
	        if (event === '_poll') {
	          return pending_watchers.push(function(comp) {
	            var getter, intv;
	            getter = ut.getter(prop);
	            intv = setInterval((function() {
	              return handler(comp[getter]());
	            }), 300);
	            return function() {
	              return clearInterval(intv);
	            };
	          });
	        }
	      });
	      ut.kkv(props.watchers, function(prop, event, handler) {
	        if (event !== '_poll') {
	          return pending_watchers.push(function(comp) {
	            var fn, getter;
	            getter = ut.getter(prop);
	            comp.on(event, fn = function() {
	              return handler(comp[getter]());
	            });
	            return function() {
	              return comp.un(event, fn);
	            };
	          });
	        }
	      });
	      if (is_func(props.properties.html)) {
	        html_func_property = props.properties.html;
	        props.properties.html = '<div></div>';
	      }
	      ut.kv(props.properties, function(prop, value) {
	        var r;
	        if (!is_func(value)) {
	          return config[prop] = value;
	        } else {
	          r = rrun(value);
	          log_err(r.error);
	          config[prop] = r.result;
	          if (r.monitor != null) {
	            return pending_subscriptions.push(function(comp) {
	              var setter;
	              setter = ut.setter(prop);
	              if (typeof comp[setter] === 'function') {
	                return rsub(value, function(r) {
	                  return comp[setter](r);
	                });
	              } else {
	                return console.warn("Ext Component " + comp.$className + " has no setter for property '" + prop + "' and\n  you are passing a reactive function as value.\n  The value won't be updated even if it changes later on.");
	              }
	            });
	          }
	        }
	      });
	      if (is_func(content)) {
	        (function() {
	          var res;
	          res = rrun(function() {
	            return collector.run(content);
	          });
	          log_err(res.error);
	          config.items = [];
	          if (res.result instanceof Array) {
	            config.items = res.result.slice(0, -1);
	          }
	          if (res.monitor != null) {
	            return pending_subscriptions.push(function(comp) {
	              return rsub((function() {
	                return collector.run(content);
	              }), function(r) {
	                return comp.setItems(r.slice(0, -1));
	              });
	            });
	          }
	        })();
	      }
	      component = Ext().create(clazz, config);
	      if (!ut.obj_empty(props.queries)) {
	        (function() {
	          var undo_func;
	          undo_func = null;
	          undos.push(function() {
	            return typeof undo_func === "function" ? undo_func() : void 0;
	          });
	          return ext_get_component_element(component, function(elm) {
	            return ut.kv(props.queries, function(k, v) {
	              return undo_func = apply_query_tag($(elm.dom), k, v);
	            });
	          });
	        })();
	      }
	      (function() {
	        var undo_func;
	        undo_func = null;
	        undos.push(function() {
	          return typeof undo_func === "function" ? undo_func() : void 0;
	        });
	        return ext_get_component_element(component, function(elm) {
	          return ut.kv(props.styles, function(name, value) {
	            var $elm;
	            $elm = $(elm.dom);
	            return undo_func = rsub(value, function(v) {
	              return $elm.css(name, value);
	            });
	          });
	        });
	      })();
	      if (html_func_property != null) {
	        (function() {
	          var undo_func;
	          undo_func = null;
	          undos.push(function() {
	            return typeof undo_func === "function" ? undo_func() : void 0;
	          });
	          return ext_comp_innerhtml(component, function(elm) {
	            return undo_func = rsub_html_elm_content(elm, html_func_property);
	          });
	        })();
	      }
	      _ref1 = pending_subscriptions.concat(pending_watchers);
	      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
	        p = _ref1[_j];
	        undos.push(p(component));
	      }
	      if (collector.defined()) {
	        collector(component);
	      }
	      component.on('destroy', function() {
	        var u, _k, _len2, _results;
	        _results = [];
	        for (_k = 0, _len2 = undos.length; _k < _len2; _k++) {
	          u = undos[_k];
	          _results.push(u());
	        }
	        return _results;
	      });
	      return component;
	    };
	    apply_query_tag = function($elm, query, raw_props) {
	      var undos;
	      undos = [];
	      if (query === '__empty__') {
	        return undos.push(apply_props_on_html_node($elm, tpp(raw_props)));
	      } else {
	        helpers.jquery_find_watch(query, $elm, function(added, removed) {
	          console.log('added', added);
	          return console.log('removed', removed);
	        });
	        return function() {};
	      }
	    };
	    rsub_html_elm_content = function(domnode, content) {
	      var elm, reset_content, set_content;
	      elm = $(domnode);
	      reset_content = function() {
	        if (elm.text() != null) {
	          elm.text('');
	        }
	        return elm.children().remove();
	      };
	      set_content = function(c) {
	        var x, _i, _len, _results;
	        if (!(c instanceof Array)) {
	          return set_content([c]);
	        }
	        reset_content();
	        c = c.concat();
	        if (c.length > 1) {
	          c.pop();
	        }
	        c = ut.collapse_arr(c);
	        if (c.length === 0) {
	          return;
	        }
	        _results = [];
	        for (_i = 0, _len = c.length; _i < _len; _i++) {
	          x = c[_i];
	          _results.push((function(x) {
	            switch (typeof x) {
	              case 'string':
	                return elm.text(x);
	              case 'number':
	                return elm.text(x + '');
	              case 'object':
	                if (helpers.is_dom_node(x)) {
	                  return elm.append(x);
	                } else if (helpers.is_jquery_obj(x)) {
	                  return elm.append(x);
	                } else if (helpers.is_ext_component(x)) {
	                  if (x.getHeight() === null) {
	                    console.warn("When adding an Ext component as child to a DOM node\nYou need to set height manually\n( it won't participate in the framework's layout )");
	                  }
	                  return elm.append(x.element.dom);
	                } else {
	                  return console.error("Don't know how to add this child to a DOMNode ", x);
	                }
	            }
	          })(x));
	        }
	        return _results;
	      };
	      if (is_func(content)) {
	        return rsub((function() {
	          return collector.run(content);
	        }), set_content);
	      } else {
	        return set_content(content);
	      }
	    };
	    String.prototype._ = function() {
	      var do_collect, do_return, ret, str;
	      str = this + '';
	      if (str === '') {
	        str = 'ra:insert';
	      }
	      do_collect = collector.defined();
	      do_return = !collector.defined();
	      if (str.indexOf('<<') === 0) {
	        str = str.substring(2);
	        do_collect = true;
	        do_return = true;
	      } else if (str.indexOf('<') === 0) {
	        str = str.substring(1);
	        do_collect = false;
	        do_return = true;
	      }
	      do_return = true;
	      ret = declare_tag_rec(str, ut.arr(arguments), !do_collect);
	      if (do_return) {
	        if (ret instanceof Array) {
	          return ret[0];
	        } else {
	          return ret;
	        }
	      } else {
	        return void 0;
	      }
	    };
	    declare_insert_tag = function(args) {
	      var e, res, x, _i, _len;
	      if (args.length !== 1) {
	        throw new Error('insert tag takes exactly one argument');
	      }
	      e = args[0];
	      if (!(e instanceof Array)) {
	        e = [e];
	      }
	      for (_i = 0, _len = e.length; _i < _len; _i++) {
	        x = e[_i];
	        collector(res = is_func(x) ? x() : x);
	      }
	      res;
	      return void 0;
	    };
	    declare_tag_rec = function(head, args, dont_collect) {
	      if (dont_collect == null) {
	        dont_collect = false;
	      }
	      if (!(head instanceof Array)) {
	        head = head.split(' ');
	      }
	      return declare_tag(head.shift(), (head.length === 0 ? args : [
	        function() {
	          return declare_tag_rec(head, args);
	        }
	      ]), dont_collect);
	    };
	    declare_tag = function(head_str, args, dont_collect) {
	      var content, head, n, ns, props, ta2pc, _ref;
	      if (dont_collect == null) {
	        dont_collect = false;
	      }
	      ta2pc = tag_args_to_props_and_content;
	      head_str = head_str.trim();
	      head = rthp(head_str);
	      ns = head.ns || 'html';
	      if (ns === 'ra') {
	        switch (head.tag) {
	          case 'each':
	            throw new Error('ra:each not implemented yet');
	            break;
	          case 'insert':
	            return declare_insert_tag(args);
	        }
	      } else {
	        _ref = ta2pc(args), props = _ref.props, content = _ref.content;
	        props = tpp(props);
	        switch (ns) {
	          case 'html':
	            n = create_html(head, props, content);
	            if (collector.defined() && (!dont_collect)) {
	              collector(n);
	            }
	            return n;
	          case 'ext':
	            return create_ext(head, props, content);
	          default:
	            throw new Error('unrecognized namespace ' + ns);
	        }
	      }
	    };
	    xtype2class = function(t) {
	      if (t.indexOf(".") === -1) {
	        return xtypes[t];
	      } else {
	        return t;
	      }
	    };
	    return {
	      "export": function(context) {
	        var tag, tags, _i, _len, _results;
	        tags = 'a p'.split(' ');
	        _results = [];
	        for (_i = 0, _len = tags.length; _i < _len; _i++) {
	          tag = tags[_i];
	          _results.push((function(tag) {
	            return context[tag.toUpperCase()] = function() {
	              return String.prototype._.apply(tag, arguments);
	            };
	          })(tag));
	        }
	        return _results;
	      }
	    };
	  };

	}).call(this);


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var mime2modes, radioactive;

	radioactive = __webpack_require__(3);

	module.exports = {
	  in_viewport: function($e) {
	    var $w, r;
	    $e = $($e);
	    r = $e[0].getBoundingClientRect();
	    $w = $(window);
	    return (r.top >= 0) && (r.bottom <= $w.height());
	  },
	  resolve_codemirror_mode: function(mime_or_mode) {
	    if (mime_or_mode.indexOf('/') === -1) {
	      return mime2modes[mime_or_mode];
	    } else {
	      return mime_or_mode;
	    }
	  },
	  CM_THEME: 'neat raml',
	  winsize: (function() {
	    var size, update;
	    size = radioactive('');
	    (update = function() {
	      var w;
	      w = $(window).width();
	      return size(w >= 1200 ? 'lg' : w >= 992 ? 'md' : w >= 768 ? 'sm' : 'xs');
	    })();
	    $(window).resize(update);
	    return function() {
	      return size();
	    };
	  })(),
	  scroll_speed: (function() {
	    var speed;
	    speed = radioactive(0);
	    $(function() {
	      var $elm, last_t, last_y, timeout;
	      $elm = $(document);
	      last_y = $elm.scrollTop();
	      last_t = new Date().getTime();
	      timeout = void 0;
	      return $elm.scroll(function(e) {
	        var t, y;
	        speed(Math.abs(((y = $elm.scrollTop()) - last_y) / ((t = e.timeStamp) - last_t)));
	        last_t = t;
	        last_y = y;
	        if (timeout != null) {
	          clearTimeout(timeout);
	        }
	        return timeout = setTimeout((function() {
	          return speed(0);
	        }), 400);
	      });
	    });
	    return function() {
	      return speed();
	    };
	  })(),
	  is_sub_path: function(long, short) {
	    var i, x, _i, _len;
	    if (long.length < short.length) {
	      return false;
	    }
	    long = long.split('/');
	    short = short.split('/');
	    if (long.length < short.length) {
	      return false;
	    }
	    for (i = _i = 0, _len = short.length; _i < _len; i = ++_i) {
	      x = short[i];
	      if (long[i] !== x) {
	        return false;
	      }
	    }
	    return true;
	  },
	  find_first_elm_below_y_coord: function(elms, y) {
	    var $e, bottom, e, top, _i, _len;
	    for (_i = 0, _len = elms.length; _i < _len; _i++) {
	      e = elms[_i];
	      $e = $(e);
	      top = $e.offset().top;
	      bottom = $e.height() + top;
	      if ((bottom > y && y > top)) {
	        return e;
	      }
	    }
	    return void 0;
	  }
	};

	mime2modes = {
	  'application/json': 'javascript',
	  'text/xml': 'xml',
	  'application/javascript': 'javascript'
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var Config, ConfigManager, Method, Param, RequestBody, Slot, TESTER_INITIALLY_ACTIVE, codegen_config_ui, is_str, obj_is_empty, params_as_map, radioactive, setup_zeroclipboard, urlencode_params, ut, util,
	  __hasProp = {}.hasOwnProperty,
	  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	radioactive = __webpack_require__(3);

	util = __webpack_require__(5);

	ut = __webpack_require__(15);

	TESTER_INITIALLY_ACTIVE = true;

	is_str = function(v) {
	  return typeof v === 'string' && v !== '';
	};

	obj_is_empty = function(obj) {
	  var k;
	  for (k in obj) {
	    if (!__hasProp.call(obj, k)) continue;
	    return false;
	  }
	  return true;
	};

	urlencode_params = function(params) {
	  var p, parts, _i, _len;
	  parts = [];
	  for (_i = 0, _len = params.length; _i < _len; _i++) {
	    p = params[_i];
	    if (p.repeat()) {
	      p.values().forEach(function(v) {
	        if (is_str(v)) {
	          return parts.push(p.id() + '[]=' + encodeURIComponent(v));
	        }
	      });
	    } else {
	      (function(v) {
	        if (is_str(v)) {
	          return parts.push(p.id() + '=' + encodeURIComponent(p.value()));
	        }
	      })(p.value());
	    }
	  }
	  return parts.join('&');
	};

	params_as_map = function(params) {
	  var map;
	  map = {};
	  params.forEach(function(p) {
	    var values;
	    values = p.values().filter(is_str);
	    if (values.length > 0) {
	      return map[p.id()] = p.repeat() ? values : values[0];
	    }
	  });
	  return map;
	};

	ConfigManager = (function() {
	  function ConfigManager(_cache) {
	    this._cache = _cache != null ? _cache : {};
	    this._used = [];
	  }

	  ConfigManager.prototype.get = function(opts) {
	    var _base, _name;
	    if (opts.id == null) {
	      opts.id = opts.label;
	    }
	    this._used.push(opts.id);
	    return ((_base = this._cache)[_name = opts.id] != null ? _base[_name] : _base[_name] = new Config(opts)).value();
	  };

	  ConfigManager.prototype.ui = function() {
	    var self;
	    self = this;
	    return 'form.form-horizontal'._(function() {
	      var k, v, _ref, _results;
	      _ref = self._cache;
	      _results = [];
	      for (k in _ref) {
	        if (!__hasProp.call(_ref, k)) continue;
	        v = _ref[k];
	        if ((__indexOf.call(self._used, k) >= 0)) {
	          _results.push(v.ui());
	        }
	      }
	      return _results;
	    });
	  };

	  ConfigManager.create = function(cache) {
	    var f, m;
	    m = new ConfigManager(cache);
	    f = function(opts) {
	      return m.get(opts);
	    };
	    f.ui = function() {
	      return m.ui();
	    };
	    f.empty = function() {
	      return self._used.length === 0;
	    };
	    return f;
	  };

	  return ConfigManager;

	})();

	Config = (function() {
	  function Config(_arg) {
	    var value;
	    this.id = _arg.id, this.label = _arg.label, this.hint = _arg.hint, value = _arg.value;
	    this._value = radioactive.cell(value);
	  }

	  Config.prototype.value = function() {
	    return this._value();
	  };

	  Config.prototype.ui = function() {
	    var self;
	    self = this;
	    return '.checkbox'._(function() {
	      return 'label'._(function() {
	        'input'._({
	          type: 'checkbox',
	          checked$$onchange: self._value
	        });
	        return 'text'._(self.label);
	      });
	    });
	  };

	  return Config;

	})();

	Method = (function() {
	  function Method(method_spec) {
	    this.method_spec = method_spec;
	    this._params_cache = [];
	    this._active = radioactive(TESTER_INITIALLY_ACTIVE);
	    this._request_media_type = radioactive(void 0);
	    this._bodies = {};
	  }

	  Method.prototype.set_request_media_type = function(media_type) {
	    return this._request_media_type(media_type);
	  };

	  Method.prototype.toggle = function() {
	    return this._active(!this._active());
	  };

	  Method.prototype.active = function() {
	    return this._active();
	  };

	  Method.prototype.param = function(param_spec) {
	    var _base, _name;
	    return (_base = this._params_cache)[_name = this.method_spec._params.indexOf(param_spec)] != null ? _base[_name] : _base[_name] = new Param(this, param_spec);
	  };

	  Method.prototype.reset = function() {};

	  Method.prototype.ready = function() {};

	  Method.prototype.selected_body = function() {
	    return this.body(this._request_media_type());
	  };

	  Method.prototype.body = function(media_type) {
	    var _base;
	    return (_base = this._bodies)[media_type] != null ? _base[media_type] : _base[media_type] = (function(_this) {
	      return function() {
	        return new RequestBody(_this, media_type);
	      };
	    })(this)();
	  };

	  Method.prototype._all_params = function() {
	    return this.method_spec._params.map((function(_this) {
	      return function(p) {
	        return _this.param(p);
	      };
	    })(this));
	  };

	  Method.prototype._some_params = function(where) {
	    return this._all_params().filter(function(p) {
	      return p.param_spec._where === where;
	    });
	  };

	  Method.prototype._resolved_base_uri = function() {
	    return this.method_spec._api._baseUri;
	  };

	  Method.prototype._resolved_path_no_query = function() {
	    var path;
	    path = this.method_spec._resource._path;
	    this._some_params('uri').forEach(function(urip) {
	      return (function(v) {
	        var reg;
	        if ((v != null) && v !== '') {
	          reg = new RegExp('\\{' + urip.param_spec._id + '\\}');
	          return path = path.replace(reg, encodeURIComponent(v));
	        }
	      })(urip.value_for_uri());
	    });
	    return path;
	  };

	  Method.prototype._resolved_path_with_query = function() {
	    var q;
	    q = this._querystring();
	    if (q !== '') {
	      q = '?' + q;
	    }
	    return this._resolved_path_no_query() + q;
	  };

	  Method.prototype._querystring = function() {
	    return urlencode_params(this._some_params('query'));
	  };

	  Method.prototype._result_codes = function() {
	    var code, _ref, _results;
	    _ref = this.method_spec.responses || {};
	    _results = [];
	    for (code in _ref) {
	      if (!__hasProp.call(_ref, code)) continue;
	      _results.push(code);
	    }
	    return _results;
	  };

	  Method.prototype.raw_http_message = function() {
	    var headers, lines, mt, params, path, payload, ps, x;
	    ps = this._all_params();
	    params = function(where) {
	      return ps.filter(function(p) {
	        return p.param_spec._where === where;
	      });
	    };
	    path = this.method_spec._resource._path;
	    headers = [];
	    payload = '';
	    path = this._resolved_path_no_query();
	    if ((x = urlencode_params(params('query'))) !== '') {
	      path = path + '?' + x;
	    }
	    params('header').forEach(function(h) {
	      return h.values().filter(is_str).forEach(function(v) {
	        return headers.push(h.id() + ': ' + v);
	      });
	    });
	    if ((mt = this._request_media_type()) != null) {
	      headers.push('Content-Type: ' + mt);
	      switch (mt) {
	        case 'application/x-www-form-urlencoded':
	          payload = urlencode_params(params('application/x-www-form-urlencoded'));
	          break;
	        case 'multipart/form-data':
	          payload = urlencode_params(params('multipart/form-data'));
	          break;
	        default:
	          payload = this.body(mt).value();
	      }
	    }
	    lines = [];
	    lines.push(this.method_spec.method.toUpperCase() + ' ' + path + ' ' + 'HTTP/1.1');
	    lines = lines.concat(headers);
	    lines.push('');
	    lines.push(payload);
	    return lines.join('\n');
	  };

	  Method.prototype.raw_http_message_live = function() {
	    var headers, lines, mt, params, path, payload, ps, x;
	    ps = this._all_params();
	    params = function(where) {
	      return ps.filter(function(p) {
	        return p.param_spec._where === where;
	      });
	    };
	    path = this.method_spec._resource._path;
	    headers = [];
	    payload = '';
	    path = this._resolved_path_no_query();
	    if ((x = urlencode_params(params('query'))) !== '') {
	      path = path + '?' + x;
	    }
	    params('header').forEach(function(h) {
	      return h.values().filter(is_str).forEach(function(v) {
	        return headers.push(h.id() + ': ' + v);
	      });
	    });
	    if ((mt = this._request_media_type()) != null) {
	      headers.push('Content-Type: ' + mt);
	      switch (mt) {
	        case 'application/x-www-form-urlencoded':
	          payload = urlencode_params(params('application/x-www-form-urlencoded'));
	          break;
	        case 'multipart/form-data':
	          payload = urlencode_params(params('multipart/form-data'));
	          break;
	        default:
	          payload = this.body(mt).value();
	      }
	    }
	    lines = [];
	    lines.push(this.method_spec.method.toUpperCase() + ' ' + path + ' ' + 'HTTP/1.1');
	    lines = lines.concat(headers);
	    lines.push('');
	    lines.push(payload);
	    return lines.join('\n');
	  };

	  Method.prototype.nodejs_code = function() {
	    var code, config, use_request_module;
	    config = ConfigManager.create((this._nodejs_code_config != null ? this._nodejs_code_config : this._nodejs_code_config = {}));
	    use_request_module = function() {
	      return config({
	        label: 'Use "request" module',
	        value: true
	      });
	    };
	    code = use_request_module() ? 'var request = require("request");' : 'var http = require("http");';
	    return {
	      config: config,
	      code: code,
	      mode: 'javascript'
	    };
	  };

	  Method.prototype.jquery_ajax_code = function() {
	    var code_hints, config, generate_handlers, http_method, include_response_codes, media_type, qs, settings, str;
	    config = ConfigManager.create((this._jquery_ajax_code_config != null ? this._jquery_ajax_code_config : this._jquery_ajax_code_config = {}));
	    http_method = this.method_spec.method.toUpperCase();
	    media_type = this._request_media_type();
	    generate_handlers = function() {
	      return config({
	        id: 'show_result_handling',
	        label: 'Generate Success and Error Handlers',
	        value: true
	      });
	    };
	    include_response_codes = function() {
	      return config({
	        id: 'include_response_codes',
	        label: 'Include Response Codes',
	        value: false
	      });
	    };
	    settings = {};
	    settings.type = http_method;
	    settings.url = this._resolved_base_uri() + this._resolved_path_no_query();
	    settings.headers = {};
	    ut.kv(params_as_map(this._some_params('header')), function(k, v) {
	      return settings.headers[k] = v instanceof Array ? v.join(', ') : v;
	    });
	    switch (http_method) {
	      case 'GET':
	        settings.data = params_as_map(this._some_params('query'));
	        if (obj_is_empty(settings.data)) {
	          delete settings.data;
	        }
	        break;
	      case 'POST':
	        settings.contentType = media_type;
	        if ((qs = this._querystring()) !== '') {
	          settings.url += '?' + qs;
	        }
	        switch (media_type) {
	          case 'application/x-www-form-urlencoded':
	            settings.data = params_as_map(this._some_params('application/x-www-form-urlencoded'));
	            if (obj_is_empty(settings.data)) {
	              delete settings.data;
	            }
	            break;
	          case 'multipart/form-data':
	            settings.data = params_as_map(this._some_params('multipart/form-data'));
	            if (obj_is_empty(settings.data)) {
	              delete settings.data;
	            }
	            break;
	          case 'application/json':
	            settings.data = JSON.parse(this.selected_body().value());
	            break;
	          default:
	            settings.data = this.selected_body().value();
	        }
	    }
	    if (obj_is_empty(settings.headers)) {
	      delete settings.headers;
	    }
	    if (generate_handlers()) {
	      code_hints = this._result_codes().join(',');
	      if (!include_response_codes()) {
	        code_hints = '';
	      }
	      settings.success = "<<<function( data, status ){/* " + code_hints + " */}>>>";
	      settings.error = "<<<function( data, status ){/* " + code_hints + " */}>>>";
	    }
	    str = JSON.stringify(settings, null, 2);
	    str = str.split('"<<<').join('').split(">>>").join('');
	    return {
	      config: config,
	      code: "jQuery.ajax(" + str + ")",
	      mode: 'javascript'
	    };
	  };

	  Method.prototype.ui = function(dark) {
	    var self;
	    if (dark == null) {
	      dark = false;
	    }
	    self = this;
	    return '.row.r-tester-request .col-xs-12'._(function() {
	      var ss, tabs;
	      ss = radioactive('jquery');
	      tabs = {
	        jquery: 'jQuery',
	        nodejs: 'Node.js',
	        js: 'Javascript SDK',
	        python: 'Python',
	        ruby: 'Ruby'
	      };
	      return '.row .col-xs-12'._(function() {
	        'ul.list-inline'._(function() {
	          var k, v, _results;
	          _results = [];
	          for (k in tabs) {
	            if (!__hasProp.call(tabs, k)) continue;
	            v = tabs[k];
	            _results.push((function(k, v) {
	              return 'li'._({
	                '.active': function() {
	                  return k === ss();
	                }
	              }, function() {
	                return 'a'._({
	                  _onclick: (function() {
	                    return ss(k);
	                  })
	                }, v);
	              });
	            })(k, v));
	          }
	          return _results;
	        });
	        switch (ss()) {
	          case 'jquery':
	            'div'._(function() {
	              var btn, elm;
	              elm = '.r-codemirror'._();
	              ut.delay(100, function() {
	                var iter;
	                return (iter = function() {
	                  var cm;
	                  if (util.in_viewport(elm)) {
	                    cm = CodeMirror(elm, {
	                      mode: 'javascript',
	                      readOnly: true,
	                      theme: dark ? 'mbo' : util.CM_THEME
	                    });
	                    return radioactive.react(function() {
	                      return cm.setValue(self.jquery_ajax_code().code);
	                    });
	                  } else {
	                    return setTimeout(iter, 500);
	                  }
	                })();
	              });
	              codegen_config_ui(function() {
	                return self.jquery_ajax_code().config;
	              });
	              btn = 'button.btn.btn-xs.pull-right.r-copy-to-clipboard'._('Copy to Clipboard');
	              return setup_zeroclipboard(btn, function() {
	                return self.jquery_ajax_code().code;
	              });
	            });
	            break;
	          case 'nodejs':
	            'div'._(function() {
	              var btn, elm;
	              elm = '.r-codemirror'._();
	              ut.delay(100, function() {
	                var iter;
	                return (iter = function() {
	                  var cm;
	                  if (util.in_viewport(elm)) {
	                    cm = CodeMirror(elm, {
	                      mode: 'javascript',
	                      readOnly: true,
	                      theme: dark ? 'mbo' : util.CM_THEME
	                    });
	                    return radioactive.react(function() {
	                      return cm.setValue(self.nodejs_code().code);
	                    });
	                  } else {
	                    return setTimeout(iter, 500);
	                  }
	                })();
	              });
	              codegen_config_ui(function() {
	                return self.nodejs_code().config;
	              });
	              btn = 'button.btn.btn-xs.pull-right.r-copy-to-clipboard'._('Copy to Clipboard');
	              return setup_zeroclipboard(btn, function() {
	                return self.nodejs_code().code;
	              });
	            });
	            break;
	          case 'js':
	            'pre.r-tester-http-text'._('TODO: Example and link to Codegen Javascript SDK');
	            break;
	          case 'curl':
	            'pre.r-tester-http-text'._('TODO: curl');
	        }
	        '.clearfix'._();
	        'hr'._();
	        return (function() {
	          var result, running;
	          running = radioactive(false);
	          result = radioactive();
	          'pre.r-tester-http-text'._(function() {
	            return self.raw_http_message();
	          });
	          'div'._(function() {
	            if (running()) {
	              return '.progress .progress-bar.progress-bar-striped.active'._({
	                $width: '100%',
	                $height: '300px'
	              }, function() {
	                return 'Running';
	              });
	            } else if (result() != null) {
	              return 'button.btn.btn-xs.pull-right'._({
	                type: 'button',
	                onclick: function() {
	                  return result(void 0);
	                }
	              }, 'Clear');
	            } else {
	              return 'button.btn.btn-xs.pull-right'._({
	                type: 'button',
	                onclick: function() {
	                  running(true);
	                  return ut.delay(1000, function() {
	                    running(false);
	                    return result('Result!');
	                  });
	                }
	              }, 'Run');
	            }
	          });
	          return 'div'._(function() {
	            if ((result() != null) && !running()) {
	              return '.well'._(result);
	            }
	          });
	        })();
	      });
	    });
	  };

	  return Method;

	})();

	codegen_config_ui = function(get_config) {
	  var show;
	  show = radioactive(false);
	  return '.r-snippet-generator-config'._(function() {
	    if (show()) {
	      'button.btn.btn-xs'._({
	        onclick: (function() {
	          return show(false);
	        })
	      }, 'Hide Configuration');
	      return 'div'._(function() {
	        return get_config().ui();
	      });
	    } else {
	      return 'button.btn.btn-xs'._({
	        onclick: (function() {
	          return show(true);
	        })
	      }, 'Show Configuration');
	    }
	  });
	};

	RequestBody = (function() {
	  function RequestBody(method, media_type) {
	    var _ref, _ref1;
	    this.method = method;
	    this.media_type = media_type;
	    this.body_spec = this.method.method_spec.body[this.media_type];
	    this.schema = (_ref = this.body_spec) != null ? _ref.schema : void 0;
	    this.example = (_ref1 = this.body_spec) != null ? _ref1.example : void 0;
	    this._value = radioactive(this.example || '');
	  }

	  RequestBody.prototype.active = function() {
	    return this.method.active();
	  };

	  RequestBody.prototype.value = function() {
	    return this._value();
	  };

	  RequestBody.prototype.ui = function() {
	    var self;
	    self = this;
	    return '.row.r-body-tester .col-xs-12'._(function() {
	      var elm, mode;
	      mode = util.resolve_codemirror_mode(self.media_type);
	      elm = '.r-codemirror'._();
	      return ut.delay(100, function() {
	        var iter;
	        return (iter = function() {
	          var cm;
	          if (util.in_viewport(elm)) {
	            cm = CodeMirror(elm, {
	              value: self.value(),
	              mode: mode,
	              readOnly: false,
	              theme: util.CM_THEME
	            });
	            return cm.on('change', function() {
	              return self._value(cm.getValue());
	            });
	          } else {
	            return setTimeout(iter, 500);
	          }
	        })();
	      });
	    });
	  };

	  return RequestBody;

	})();

	Param = (function() {
	  function Param(method, param_spec) {
	    this.method = method;
	    this.param_spec = param_spec;
	    this._slots = radioactive.cell([new Slot(this)]);
	  }

	  Param.prototype.active = function() {
	    return this.method.active();
	  };

	  Param.prototype.value_for_uri = function() {
	    return this._slots()[0].value() || '';
	  };

	  Param.prototype.value = function() {
	    return this._slots()[0].value();
	  };

	  Param.prototype.values = function() {
	    return this._slots().map(function(s) {
	      return s.value();
	    });
	  };

	  Param.prototype.id = function() {
	    return this.param_spec._id;
	  };

	  Param.prototype.repeat = function() {
	    return this.param_spec.repeat === true;
	  };

	  Param.prototype.add_slot = function() {
	    return this._slots(this._slots().concat([new Slot(this)]));
	  };

	  Param.prototype.remove_slot = function(index) {
	    var xs;
	    xs = this._slots();
	    xs.splice(index, 1);
	    return this._slots(xs.concat());
	  };

	  Param.prototype.valid = function() {
	    if (this.param_spec.required) {
	      console.log('validating required param');
	      return this.values().filter(is_str).length > 0;
	    } else {
	      return true;
	    }
	  };

	  Param.prototype.ui = function() {
	    var self;
	    self = this;
	    return '.row.r-param-tester .col-xs-12'._({
	      '.r-error': function() {
	        return !self.valid();
	      }
	    }, function() {
	      self._slots().forEach(function(slot, i) {
	        return '.row'._(function() {
	          '.col-xs-10'._(function() {
	            return slot.ui();
	          });
	          return '.col-xs-2'._(function() {
	            if (i !== 0) {
	              return 'button.btn.btn-default.btn-sm'._({
	                $float: 'right',
	                title: 'Remove this value',
	                onclick: function() {
	                  return self.remove_slot(i);
	                }
	              }, function() {
	                return 'span.glyphicon.glyphicon-remove'._();
	              });
	            }
	          });
	        });
	      });
	      if (self.repeat()) {
	        return 'a'._({
	          title: 'This parameter may be repeated',
	          _onclick: function() {
	            return self.add_slot();
	          }
	        }, 'Add Value');
	      }
	    });
	  };

	  return Param;

	})();

	Slot = (function() {
	  function Slot(param) {
	    var p;
	    this.param = param;
	    this._value = radioactive();
	    p = this.param.param_spec;
	    if (p["enum"] != null) {
	      this._enum = p["enum"].map(function(x) {
	        return x + '';
	      });
	    }
	    if (p.required && (this._enum != null)) {
	      this._value(this._enum[0]);
	    }
	  }

	  Slot.prototype.value = function() {
	    return this._value();
	  };

	  Slot.prototype.ui = function() {
	    var init_val, p, self;
	    self = this;
	    p = this.param.param_spec;
	    init_val = radioactive.mute(function() {
	      return self._value() || '';
	    })();
	    return 'div'._((function(_this) {
	      return function() {
	        switch (p.type) {
	          case 'string':
	            if (p["enum"] != null) {
	              return 'select.form-control.input-sm'._({
	                onchange: function() {
	                  return self._value($(this).val());
	                }
	              }, function() {
	                var v, vals, _i, _len, _results;
	                vals = self._enum.concat();
	                if (!p.required) {
	                  vals.unshift('');
	                }
	                _results = [];
	                for (_i = 0, _len = vals.length; _i < _len; _i++) {
	                  v = vals[_i];
	                  _results.push((function(v) {
	                    return 'option'._({
	                      value: v,
	                      selected: function() {
	                        return v === init_val;
	                      }
	                    }, v);
	                  })(v));
	                }
	                return _results;
	              });
	            } else {
	              return 'input.form-control.input-sm'._({
	                type: 'text',
	                value: init_val,
	                value$onkeyup: self._value
	              });
	            }
	            break;
	          case 'integer':
	          case 'number':
	            return 'input.form-control.input-sm'._({
	              type: 'text',
	              value: init_val,
	              value$onkeyup: self._value
	            });
	          case 'file':
	            return 'input.form-control.input-sm'._({
	              type: 'file'
	            });
	          default:
	            return 'p'._(p.type);
	        }
	      };
	    })(this));
	  };

	  return Slot;

	})();

	module.exports = function(method_spec) {
	  return new Method(method_spec);
	};

	setup_zeroclipboard = function(elm, get_text_func) {
	  var zc;
	  zc = new ZeroClipboard(elm);
	  zc.on('ready', function(event) {
	    return zc.on('copy', function(event) {
	      event.clipboardData.setData('text/plain', get_text_func());
	      return zc.on('aftercopy', function(event) {});
	    });
	  });
	  return zc.on('error', function(event) {
	    console.log('ZeroClipboard error of type "' + event.name + '": ' + event.message);
	    return ZeroClipboard.destroy();
	  });
	};


	/*
	  geek console

	POST /resource/{}/bar?\
	  q=...
	  menu=...

	  Content-Type
	 */


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var Api, ApiMember, Method, Param, ParamType, Resource, add_references_to_root, all_methods, all_resources, apply_mte2ext_to_uris, lazym, mte2ext,
	  __hasProp = {}.hasOwnProperty,
	  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	lazym = __webpack_require__(29);


	/*
	  post process the output of the raml-js-parser.
	  add some annotations
	  mutates the original

	  root._leafs: Resource[] // all resources that have at least one method
	 */

	ApiMember = (function() {
	  function ApiMember() {}

	  ApiMember.prototype.api = function() {
	    return Api.get(this.data.__root);
	  };

	  return ApiMember;

	})();

	Resource = (function(_super) {
	  __extends(Resource, _super);

	  function Resource(data) {
	    this.data = data;
	  }

	  Resource.prototype.methods = lazym(function() {});

	  Resource.get = function(data) {
	    return data.__Resource != null ? data.__Resource : data.__Resource = new Resource(this.data);
	  };

	  return Resource;

	})(ApiMember);

	Method = (function() {
	  function Method(data) {
	    this.data = data;
	  }

	  Method.prototype.method = function() {
	    return this.data.method;
	  };

	  Method.prototype.params = function() {};

	  Method.get = function(data) {
	    return data.__Method != null ? data.__Method : data.__Method = new Method(this.data);
	  };

	  return Method;

	})();

	Param = (function() {
	  function Param(data) {
	    this.data = data;
	  }

	  Param.prototype.id = function() {};

	  Param.prototype.types = function() {};

	  Param.get = function(data) {
	    return data.__Param != null ? data.__Param : data.__Param = new Param(this.data);
	  };

	  return Param;

	})();

	ParamType = (function() {
	  function ParamType() {}

	  return ParamType;

	})();

	Api = (function() {
	  function Api(data) {
	    this.data = data;
	  }

	  Api.prototype.all_resources = lazym(function() {});

	  Api.prototype.all_methods = function() {};

	  Api.get = function(data) {
	    return data.__Api != null ? data.__Api : data.__Api = new Api(this.data);
	  };

	  return Api;

	})();

	add_references_to_root = function(node) {
	  var iter;
	  return (iter = function(node) {
	    var k, v, _results;
	    if (typeof node === 'object') {
	      _results = [];
	      for (k in node) {
	        if (!__hasProp.call(node, k)) continue;
	        v = node[k];
	        if (!(typeof v === 'object')) {
	          continue;
	        }
	        v.__root = node || v;
	        _results.push(iter(v));
	      }
	      return _results;
	    }
	  })(node);
	};

	all_resources = function(root) {
	  return root.__all_resources != null ? root.__all_resources : root.__all_resources = (function() {
	    var all, iter;
	    all = [];
	    (iter = function(root) {
	      var _ref;
	      return (_ref = root.resources) != null ? _ref.forEach(function(r) {
	        all.push(r);
	        return iter(r);
	      }) : void 0;
	    })(root);
	    return all;
	  })();
	};

	all_methods = function(root) {
	  return root.__all_methods != null ? root.__all_methods : root.__all_methods = (function() {
	    var all;
	    all = [];
	    all_resources(root).forEach(function(r) {
	      var _ref;
	      return (_ref = r.methods) != null ? _ref.forEach(function(m) {
	        return all.push(m);
	      }) : void 0;
	    });
	    return all;
	  })();
	};


	/*
	  mte appears in paths and parameter names
	 */

	apply_mte2ext_to_uris = function(root) {
	  return root.__mte2ext != null ? root.__mte2ext : root.__mte2ext = (function() {
	    all_resources(root).forEach(function(r) {
	      r.relativeUri = mte2ext(r.relativeUri);
	      return r.relativeUriPathSegments = r.relativeUriPathSegments.map(mte2ext);
	    });
	    return true;
	  })();
	};

	mte2ext = function(str) {
	  return str.split('{mediaTypeExtension}').join('{.ext}');
	};

	module.exports = function(root, opts) {
	  var abs_base_uri, merge_params, process_param_name, visit, _ref;
	  if (opts == null) {
	    opts = {};
	  }
	  abs_base_uri = root.baseUri;
	  if (root.version != null) {
	    abs_base_uri = abs_base_uri.split('{version}').join(root.version);
	  }
	  root._baseUri = abs_base_uri;
	  if (opts.mte2ext == null) {
	    opts.mte2ext = true;
	  }
	  process_param_name = function(name) {
	    if (name === 'mediaTypeExtension' && opts.mte2ext) {
	      return '.ext';
	    } else {
	      return name;
	    }
	  };
	  merge_params = function(resource_or_method, parent) {
	    var proc, r, _ref, _ref1, _ref2, _ref3;
	    r = resource_or_method;
	    r._params = ((parent != null ? parent._params : void 0) || []).concat();
	    proc = function(params, where) {
	      var name, spec, specs, _results;
	      if (params != null) {
	        _results = [];
	        for (name in params) {
	          if (!__hasProp.call(params, name)) continue;
	          specs = params[name];
	          if (!(specs instanceof Array)) {
	            specs = [specs];
	          }
	          _results.push((function() {
	            var _i, _len, _results1;
	            _results1 = [];
	            for (_i = 0, _len = specs.length; _i < _len; _i++) {
	              spec = specs[_i];
	              spec._where = where;
	              spec._id = process_param_name(name);
	              if (spec.required !== false && where === 'uri') {
	                spec.required = true;
	              }
	              _results1.push(r._params.push(spec));
	            }
	            return _results1;
	          })());
	        }
	        return _results;
	      }
	    };
	    proc(r.uriParameters, 'uri');
	    proc(r.formParameters, 'form');
	    proc((_ref = r.body) != null ? (_ref1 = _ref['application/x-www-form-urlencoded']) != null ? _ref1.formParameters : void 0 : void 0, 'application/x-www-form-urlencoded');
	    proc((_ref2 = r.body) != null ? (_ref3 = _ref2['multipart/form-data']) != null ? _ref3.formParameters : void 0 : void 0, 'multipart/form-data');
	    proc(r.headers, 'header');
	    return proc(r.queryParameters, 'query');
	  };
	  root._leafs = [];
	  root._all = [];
	  visit = function(parent, r) {
	    var _ref, _ref1;
	    apply_mte2ext_to_uris(root);
	    r._path = (parent != null ? parent._path : '') + r.relativeUri;
	    r._abs_uri = abs_base_uri + r._path;
	    r._api = root;
	    root._all.push(r);
	    if (r.methods != null) {
	      root._leafs.push(r);
	    }
	    merge_params(r, parent);
	    if ((_ref = r.methods) != null) {
	      _ref.forEach(function(m) {
	        m._api = root;
	        m._resource = r;
	        m._path = r._path + '/~~' + m.method;
	        return merge_params(m, r);
	      });
	    }
	    return (_ref1 = r.resources) != null ? _ref1.forEach(function(x) {
	      return visit(r, x);
	    }) : void 0;
	  };
	  return (_ref = root.resources) != null ? _ref.forEach(function(x) {
	    return visit(null, x);
	  }) : void 0;
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.7.0
	//     http://underscorejs.org
	//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    concat           = ArrayProto.concat,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind;

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.7.0';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var createCallback = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  _.iteratee = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return createCallback(value, context, argCount);
	    if (_.isObject(value)) return _.matches(value);
	    return _.property(value);
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    if (obj == null) return obj;
	    iteratee = createCallback(iteratee, context);
	    var i, length = obj.length;
	    if (length === +length) {
	      for (i = 0; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    if (obj == null) return [];
	    iteratee = _.iteratee(iteratee, context);
	    var keys = obj.length !== +obj.length && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length),
	        currentKey;
	    for (var index = 0; index < length; index++) {
	      currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  var reduceError = 'Reduce of empty array with no initial value';

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = function(obj, iteratee, memo, context) {
	    if (obj == null) obj = [];
	    iteratee = createCallback(iteratee, context, 4);
	    var keys = obj.length !== +obj.length && _.keys(obj),
	        length = (keys || obj).length,
	        index = 0, currentKey;
	    if (arguments.length < 3) {
	      if (!length) throw new TypeError(reduceError);
	      memo = obj[keys ? keys[index++] : index++];
	    }
	    for (; index < length; index++) {
	      currentKey = keys ? keys[index] : index;
	      memo = iteratee(memo, obj[currentKey], currentKey, obj);
	    }
	    return memo;
	  };

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = function(obj, iteratee, memo, context) {
	    if (obj == null) obj = [];
	    iteratee = createCallback(iteratee, context, 4);
	    var keys = obj.length !== + obj.length && _.keys(obj),
	        index = (keys || obj).length,
	        currentKey;
	    if (arguments.length < 3) {
	      if (!index) throw new TypeError(reduceError);
	      memo = obj[keys ? keys[--index] : --index];
	    }
	    while (index--) {
	      currentKey = keys ? keys[index] : index;
	      memo = iteratee(memo, obj[currentKey], currentKey, obj);
	    }
	    return memo;
	  };

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var result;
	    predicate = _.iteratee(predicate, context);
	    _.some(obj, function(value, index, list) {
	      if (predicate(value, index, list)) {
	        result = value;
	        return true;
	      }
	    });
	    return result;
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    if (obj == null) return results;
	    predicate = _.iteratee(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(_.iteratee(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    if (obj == null) return true;
	    predicate = _.iteratee(predicate, context);
	    var keys = obj.length !== +obj.length && _.keys(obj),
	        length = (keys || obj).length,
	        index, currentKey;
	    for (index = 0; index < length; index++) {
	      currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    if (obj == null) return false;
	    predicate = _.iteratee(predicate, context);
	    var keys = obj.length !== +obj.length && _.keys(obj),
	        length = (keys || obj).length,
	        index, currentKey;
	    for (index = 0; index < length; index++) {
	      currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given value (using `===`).
	  // Aliased as `include`.
	  _.contains = _.include = function(obj, target) {
	    if (obj == null) return false;
	    if (obj.length !== +obj.length) obj = _.values(obj);
	    return _.indexOf(obj, target) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      return (isFunc ? method : value[method]).apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matches(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matches(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = obj.length === +obj.length ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = _.iteratee(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = obj.length === +obj.length ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = _.iteratee(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = obj && obj.length === +obj.length ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (obj.length !== +obj.length) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = _.iteratee(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = _.iteratee(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = _.iteratee(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = array.length;
	    while (low < high) {
	      var mid = low + high >>> 1;
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (obj.length === +obj.length) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return obj.length === +obj.length ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = _.iteratee(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    if (n < 0) return [];
	    return slice.call(array, 0, n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N. The **guard** check allows it to work with
	  // `_.map`.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array. The **guard** check allows it to work with `_.map`.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return slice.call(array, Math.max(array.length - n, 0));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array. The **guard**
	  // check allows it to work with `_.map`.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, output) {
	    if (shallow && _.every(input, _.isArray)) {
	      return concat.apply(output, input);
	    }
	    for (var i = 0, length = input.length; i < length; i++) {
	      var value = input[i];
	      if (!_.isArray(value) && !_.isArguments(value)) {
	        if (!strict) output.push(value);
	      } else if (shallow) {
	        push.apply(output, value);
	      } else {
	        flatten(value, shallow, strict, output);
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false, []);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (array == null) return [];
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = _.iteratee(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = array.length; i < length; i++) {
	      var value = array[i];
	      if (isSorted) {
	        if (!i || seen !== value) result.push(value);
	        seen = value;
	      } else if (iteratee) {
	        var computed = iteratee(value, i, array);
	        if (_.indexOf(seen, computed) < 0) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (_.indexOf(result, value) < 0) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true, []));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    if (array == null) return [];
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = array.length; i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(slice.call(arguments, 1), true, true, []);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function(array) {
	    if (array == null) return [];
	    var length = _.max(arguments, 'length').length;
	    var results = Array(length);
	    for (var i = 0; i < length; i++) {
	      results[i] = _.pluck(arguments, i);
	    }
	    return results;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    if (list == null) return {};
	    var result = {};
	    for (var i = 0, length = list.length; i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = function(array, item, isSorted) {
	    if (array == null) return -1;
	    var i = 0, length = array.length;
	    if (isSorted) {
	      if (typeof isSorted == 'number') {
	        i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
	      } else {
	        i = _.sortedIndex(array, item);
	        return array[i] === item ? i : -1;
	      }
	    }
	    for (; i < length; i++) if (array[i] === item) return i;
	    return -1;
	  };

	  _.lastIndexOf = function(array, item, from) {
	    if (array == null) return -1;
	    var idx = array.length;
	    if (typeof from == 'number') {
	      idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
	    }
	    while (--idx >= 0) if (array[idx] === item) return idx;
	    return -1;
	  };

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (arguments.length <= 1) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Reusable constructor function for prototype setting.
	  var Ctor = function(){};

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    var args, bound;
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    args = slice.call(arguments, 2);
	    bound = function() {
	      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
	      Ctor.prototype = func.prototype;
	      var self = new Ctor;
	      Ctor.prototype = null;
	      var result = func.apply(self, args.concat(slice.call(arguments)));
	      if (_.isObject(result)) return result;
	      return self;
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    return function() {
	      var position = 0;
	      var args = boundArgs.slice();
	      for (var i = 0, length = args.length; i < length; i++) {
	        if (args[i] === _) args[i] = arguments[position++];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return func.apply(this, args);
	    };
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = hasher ? hasher.apply(this, arguments) : key;
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = function(func) {
	    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
	  };

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        clearTimeout(timeout);
	        timeout = null;
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;

	      if (last < wait && last > 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed after being called N times.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed before being called N times.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      } else {
	        func = null;
	      }
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  // Object Functions
	  // ----------------

	  // Retrieve the names of an object's properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    var source, prop;
	    for (var i = 1, length = arguments.length; i < length; i++) {
	      source = arguments[i];
	      for (prop in source) {
	        if (hasOwnProperty.call(source, prop)) {
	            obj[prop] = source[prop];
	        }
	      }
	    }
	    return obj;
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(obj, iteratee, context) {
	    var result = {}, key;
	    if (obj == null) return result;
	    if (_.isFunction(iteratee)) {
	      iteratee = createCallback(iteratee, context);
	      for (key in obj) {
	        var value = obj[key];
	        if (iteratee(value, key, obj)) result[key] = value;
	      }
	    } else {
	      var keys = concat.apply([], slice.call(arguments, 1));
	      obj = new Object(obj);
	      for (var i = 0, length = keys.length; i < length; i++) {
	        key = keys[i];
	        if (key in obj) result[key] = obj[key];
	      }
	    }
	    return result;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(concat.apply([], slice.call(arguments, 1)), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

	  // Fill in a given object with default properties.
	  _.defaults = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    for (var i = 1, length = arguments.length; i < length; i++) {
	      var source = arguments[i];
	      for (var prop in source) {
	        if (obj[prop] === void 0) obj[prop] = source[prop];
	      }
	    }
	    return obj;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	    if (typeof a != 'object' || typeof b != 'object') return false;
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	    // Objects with different constructors are not equivalent, but `Object`s
	    // from different frames are.
	    var aCtor = a.constructor, bCtor = b.constructor;
	    if (
	      aCtor !== bCtor &&
	      // Handle Object.create(x) cases
	      'constructor' in a && 'constructor' in b &&
	      !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	        _.isFunction(bCtor) && bCtor instanceof bCtor)
	    ) {
	      return false;
	    }
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	    var size, result;
	    // Recursively compare objects and arrays.
	    if (className === '[object Array]') {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      size = a.length;
	      result = size === b.length;
	      if (result) {
	        // Deep compare the contents, ignoring non-numeric properties.
	        while (size--) {
	          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
	        }
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      size = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      result = _.keys(b).length === size;
	      if (result) {
	        while (size--) {
	          // Deep compare each member
	          key = keys[size];
	          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
	        }
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return result;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b, [], []);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)) return obj.length === 0;
	    for (var key in obj) if (_.has(obj, key)) return false;
	    return true;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around an IE 11 bug.
	  if (true) {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };

	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };

	  _.noop = function(){};

	  _.property = function(key) {
	    return function(obj) {
	      return obj[key];
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
	  _.matches = function(attrs) {
	    var pairs = _.pairs(attrs), length = pairs.length;
	    return function(obj) {
	      if (obj == null) return !length;
	      obj = new Object(obj);
	      for (var i = 0; i < length; i++) {
	        var pair = pairs[i], key = pair[0];
	        if (pair[1] !== obj[key] || !(key in obj)) return false;
	      }
	      return true;
	    };
	  };

	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = createCallback(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };

	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property) {
	    if (object == null) return void 0;
	    var value = object[property];
	    return _.isFunction(value) ? object[property]() : value;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(obj) {
	    return this._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result.call(this, func.apply(_, args));
	      };
	    });
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result.call(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result.call(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	      return _;
	    }.apply(null, __WEBPACK_AMD_DEFINE_ARRAY__)), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.8.0
	(function() {
	  module.exports = {};

	}).call(this);


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.8.0
	(function() {
	  var TagHead, htp, main, test;

	  htp = __webpack_require__(46);

	  TagHead = (function() {
	    function TagHead(tag, ns, id, classes) {
	      this.tag = tag;
	      this.ns = ns;
	      this.id = id;
	      this.classes = classes;
	    }

	    TagHead.prototype.toString = function() {
	      var c, clz, id;
	      id = this.id != null ? '#' + this.id : '';
	      clz = ((function() {
	        var _i, _len, _ref, _results;
	        _ref = this.classes || [];
	        _results = [];
	        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	          c = _ref[_i];
	          _results.push('.' + c);
	        }
	        return _results;
	      }).call(this)).join('');
	      return "" + this.ns + ":" + this.tag + id + clz;
	    };

	    return TagHead;

	  })();

	  module.exports = main = function(tag) {
	    var declared_ns, parts, result;
	    if (tag instanceof TagHead) {
	      return tag;
	    }
	    if (typeof tag !== 'string') {
	      throw new Error('tag must be a string');
	    }
	    if (tag.indexOf(' ') !== -1) {
	      throw new Error('Raw tag parser handles single tags only ( no spaces ) ' + tag);
	    }
	    tag = tag.trim();
	    declared_ns = void 0;
	    parts = tag.split(':');
	    if (parts.length === 2) {
	      declared_ns = parts.shift();
	      if (parts[0].length === 0) {
	        return new TagHead(null, declared_ns);
	      }
	    }
	    result = htp(parts[0], false, false);
	    result.ns = declared_ns;
	    return new TagHead(result.tag, result.ns, result.id, result.classes);
	  };

	  main.TagHead = TagHead;

	  test = function() {
	    console.log(main('#xyz'));
	    console.log(main('ext:'));
	    console.log(main('ext:Ext-Panel'));
	    return console.log(main('foo:a#link.active'));
	  };

	}).call(this);


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.8.0

	/*
	returns a ( possibly reactive ) array of strings
	 */

	(function() {
	  var css_classes, css_flag, css_flagged_classes, css_multiple_flagged_classes, test;

	  css_classes = function(v) {
	    var c;
	    if (typeof v === 'function') {
	      return css_classes(v());
	    }
	    if (typeof v === 'string') {
	      return css_classes((function() {
	        var _i, _len, _ref, _results;
	        _ref = v.trim().replace('.', ' ').split(' ');
	        _results = [];
	        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	          c = _ref[_i];
	          if (c !== '') {
	            _results.push(c);
	          }
	        }
	        return _results;
	      })());
	    }
	    if (!(v instanceof Array)) {
	      throw new Error(' ');
	    }
	    return v;
	  };

	  css_flag = function(v) {
	    if (typeof v === 'function') {
	      return css_flag(v());
	    }
	    return !!v;
	  };

	  css_flagged_classes = function(classes, flag) {
	    if (css_flag(flag)) {
	      return css_classes(classes);
	    } else {
	      return [];
	    }
	  };

	  css_multiple_flagged_classes = function(mfc) {
	    var all, x, _i, _len;
	    if (typeof mfc === 'function') {
	      return css_multiple_flagged_classes(mfc());
	    }
	    all = [];
	    for (_i = 0, _len = mfc.length; _i < _len; _i++) {
	      x = mfc[_i];
	      all = all.concat(css_flagged_classes(x[0], x[1]));
	    }
	    return all;
	  };

	  exports.mfc = css_multiple_flagged_classes;

	  test = function() {
	    var c;
	    c = css_multiple_flagged_classes([
	      ['a', true], [
	        'b e m .ff', function() {
	          return true;
	        }
	      ], ['c', false], [['x', 'y'], true]
	    ]);
	    return console.log(c);
	  };

	}).call(this);


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.8.0
	(function() {
	  var basic_validations, parse, partition, test, ut,
	    __hasProp = {}.hasOwnProperty;

	  ut = __webpack_require__(15);


	  /*
	  Generic parsing of properties
	  Returns an object with
	  
	  r =
	    classflags: 
	    styles:
	    listeners:
	    watchers:
	    properties:
	   */

	  partition = function(str, num) {
	    return [str.slice(0, num), str.slice(num, +str.length + 1 || 9e9)];
	  };

	  module.exports = parse = function(props) {
	    var event, first, k, parts, q, r, rest, splitter, v, _base, _name, _ref;
	    r = {
	      classflags: {},
	      styles: {},
	      listeners: {},
	      watchers: {},
	      properties: {},
	      queries: {}
	    };
	    for (k in props) {
	      if (!__hasProp.call(props, k)) continue;
	      v = props[k];
	      if (k === '?') {
	        k = '? ';
	      }
	      _ref = partition(k, 1), first = _ref[0], rest = _ref[1];
	      switch (first) {
	        case '?':
	          q = rest.trim();
	          if (q.length === 0) {
	            q = '__empty__';
	          }
	          r.queries[q] = v;
	          break;
	        case '.':
	          r.classflags[rest] = v;
	          break;
	        case '$':
	          (r.styles != null ? r.styles : r.styles = {})[rest] = v;
	          break;
	        default:
	          if (k.indexOf('on') === 0) {
	            (r.listeners != null ? r.listeners : r.listeners = {})[k.slice(2, +k.length + 1 || 9e9)] = v;
	          } else {
	            if (k.indexOf('$') === -1) {
	              (r.properties != null ? r.properties : r.properties = {})[k] = v;
	            } else {
	              splitter = k.indexOf('$$') === -1 ? '$' : '$$';
	              parts = k.split(splitter);
	              event = parts[1];
	              if (event.indexOf('on') === 0) {
	                event = event.slice(2, +event.length + 1 || 9e9);
	              }
	              ((_base = (r.watchers != null ? r.watchers : r.watchers = {}))[_name = parts[0]] != null ? _base[_name] : _base[_name] = {})[event] = {
	                handler: v,
	                bidirectional: splitter === '$$'
	              };
	            }
	          }
	      }
	    }
	    basic_validations(r);
	    return r;
	  };

	  basic_validations = function(t) {
	    ut.kv(t.listeners, function(event, handler) {
	      if (typeof handler !== 'function') {
	        throw new Error("'" + event + "' listener must be a function");
	      }
	    });
	    ut.kkv(t.watchers, function(prop, event, handler) {
	      if (typeof handler.handler !== 'function') {
	        throw new Error("watcher " + prop + "$$on" + event + " must be a function");
	      }
	    });
	    ut.kv(t.classflags, function(k, v) {
	      var tof;
	      tof = typeof v;
	      if (!((tof === 'boolean') || (tof === 'function'))) {
	        throw new Error("value for classflag '." + k + "' must be boolean or function ( that returns a boolean )");
	      }
	    });
	    return ut.kv(t.queries, function(k, v) {
	      if (typeof v !== 'object') {
	        throw new Error("the content of a query tag must be an object ( query: " + k + " )");
	      }
	    });
	  };

	  test = function() {
	    console.log(parse({
	      '.class': true,
	      '$style': 'style',
	      'prop': 'property',
	      'onclick': function() {},
	      'prop$$event': function() {}
	    }));
	    return console.log(parse({
	      '.class': true,
	      'prop$$event': function() {}
	    }));
	  };

	}).call(this);


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.8.0
	(function() {
	  var helpers, is_content,
	    __hasProp = {}.hasOwnProperty;

	  helpers = __webpack_require__(14);


	  /*
	   */

	  module.exports = function(args) {
	    var arg, content, has_content, k, props, result, v, _i, _len;
	    args = args.concat();
	    has_content = false;
	    content = void 0;
	    if (is_content(args[args.length - 1])) {
	      content = args.pop();
	      has_content = true;
	    }
	    props = {};
	    for (_i = 0, _len = args.length; _i < _len; _i++) {
	      arg = args[_i];
	      if (typeof arg === 'object') {
	        for (k in arg) {
	          if (!__hasProp.call(arg, k)) continue;
	          v = arg[k];
	          props[k] = v;
	        }
	      }
	    }
	    result = {};
	    result.props = props;
	    if (has_content) {
	      result.content = content;
	    }
	    return result;
	  };

	  is_content = function(v) {
	    if (typeof v !== 'object') {
	      return true;
	    }
	    if (v === null) {
	      return true;
	    }
	    if (v instanceof Array) {
	      return true;
	    }
	    if (helpers.is_ext_component(v)) {
	      return true;
	    }
	    if (helpers.is_dom_node(v)) {
	      return true;
	    }
	    if (helpers.is_jquery_obj(v)) {
	      return true;
	    }
	    return false;
	  };

	}).call(this);


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.8.0
	(function() {
	  var env, ut;

	  ut = __webpack_require__(15);

	  env = __webpack_require__(9);

	  module.exports = {
	    is_ext_component: function(v) {
	      try {
	        if (v instanceof Ext.Component) {
	          return true;
	        }
	      } catch (_error) {}
	      return false;
	    },
	    is_dom_node: function(v) {
	      try {
	        if (v.ownerDocument === env.document()) {
	          return true;
	        }
	      } catch (_error) {}
	      return false;
	    },
	    is_jquery_obj: function(v) {
	      try {
	        if (v instanceof env.jQuery()) {
	          return true;
	        }
	      } catch (_error) {}
	      return false;
	    },
	    jquery_find_watch: function(jquery_selector, $elm, cb, delay) {
	      var current, ival;
	      if (delay == null) {
	        delay = 50;
	      }
	      current = [];
	      ival = ut.interval(delay, function() {
	        var added, last, removed, _ref;
	        last = current;
	        current = env.jQuery()(jquery_selector, $elm).toArray();
	        _ref = ut.arrdiff(current, last), added = _ref[0], removed = _ref[1];
	        if ((added.length + removed.length) !== 0) {
	          return cb(added, removed);
	        }
	      });
	      return function() {
	        return clearInterval(ival);
	      };
	    }
	  };

	}).call(this);


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	(function() {
	  var LIPSUM, delay, email_re, interval, kv, null_or_undefined,
	    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
	    __hasProp = {}.hasOwnProperty;

	  interval = function() {
	    return setInterval(arguments[1], arguments[0]);
	  };

	  delay = function() {
	    return setTimeout(arguments[1], arguments[0]);
	  };

	  email_re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	  LIPSUM = 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit.';

	  module.exports = {
	    say_hello: function(name) {
	      return "Hello " + name + "!";
	    },
	    delay: delay,
	    interval: interval,
	    unbox_arr: function(v) {
	      if (v instanceof Array) {
	        return v[0];
	      } else {
	        return v;
	      }
	    },
	    unbox_func: function(v) {
	      if (typeof v === 'function') {
	        return v();
	      } else {
	        return v;
	      }
	    },
	    arr: function(arrayish) {
	      return Array.prototype.slice.apply(arrayish, null);
	    },
	    arrdiff: function(arr1, arr2) {
	      var e, onlyin1, onlyin2;
	      onlyin1 = (function() {
	        var _i, _len, _results;
	        _results = [];
	        for (_i = 0, _len = arr1.length; _i < _len; _i++) {
	          e = arr1[_i];
	          if (__indexOf.call(arr2, e) < 0) {
	            _results.push(e);
	          }
	        }
	        return _results;
	      })();
	      onlyin2 = (function() {
	        var _i, _len, _results;
	        _results = [];
	        for (_i = 0, _len = arr2.length; _i < _len; _i++) {
	          e = arr2[_i];
	          if (__indexOf.call(arr1, e) < 0) {
	            _results.push(e);
	          }
	        }
	        return _results;
	      })();
	      return [onlyin1, onlyin2];
	    },
	    arr_builder: function(f) {
	      var arr;
	      arr = [];
	      f(function(x) {
	        return arr.push(x);
	      });
	      return arr;
	    },
	    lipsum: function(len) {
	      if (len == null) {
	        len = 0;
	      }
	      if (len === 0) {
	        return LIPSUM;
	      } else {
	        return LIPSUM.substring(0, len);
	      }
	    },
	    obj_empty: function(obj) {
	      var k, v;
	      if (obj != null) {
	        for (k in obj) {
	          if (!__hasProp.call(obj, k)) continue;
	          v = obj[k];
	          return false;
	        }
	      }
	      return true;
	    },
	    getter: function(prop) {
	      return 'get' + prop[0].toUpperCase() + prop.slice(1);
	    },
	    setter: function(prop) {
	      return 'set' + prop[0].toUpperCase() + prop.slice(1);
	    },
	    kv: kv = function(obj, func) {
	      var k, v, _results;
	      if (obj != null) {
	        _results = [];
	        for (k in obj) {
	          if (!__hasProp.call(obj, k)) continue;
	          v = obj[k];
	          _results.push(func(k, v));
	        }
	        return _results;
	      }
	    },
	    kkv: function(obj, func) {
	      return kv(obj, function(k, v) {
	        return kv(v, function(k2, v2) {
	          return func(k, k2, v2);
	        });
	      });
	    },
	    err: function(e) {
	      if (e != null) {
	        console.log(e);
	        console.log(e.stack);
	        throw e;
	      }
	    },
	    collapse_arr: function(arr) {
	      var x, _i, _len, _results;
	      _results = [];
	      for (_i = 0, _len = arr.length; _i < _len; _i++) {
	        x = arr[_i];
	        if (!null_or_undefined(x)) {
	          _results.push(x);
	        }
	      }
	      return _results;
	    },
	    null_or_undefined: null_or_undefined = function(v) {
	      switch (typeof v) {
	        case 'undefined':
	          return true;
	        case 'object':
	          return v == null;
	        default:
	          return false;
	      }
	    },
	    when_not_falsy: function(f1, f2) {
	      var iv;
	      return iv = interval(100, function() {
	        if (f1() != null) {
	          clearInterval(iv);
	          return f2();
	        }
	      });
	    },
	    tap: function(v) {
	      console.log(v);
	      return v;
	    },
	    first_key: function(obj) {
	      var k, v;
	      for (k in obj) {
	        v = obj[k];
	        return k;
	      }
	    },
	    first_own_key: function(obj) {
	      var k, v;
	      for (k in obj) {
	        if (!__hasProp.call(obj, k)) continue;
	        v = obj[k];
	        return k;
	      }
	    },
	    lazy: function(f) {
	      var res, res_ready;
	      res_ready = false;
	      res = null;
	      return function() {
	        if (res_ready) {
	          return res;
	        } else {
	          res_ready = true;
	          res = f();
	          return res;
	        }
	      };
	    },
	    clone: function(obj) {
	      var k, o, v;
	      o = {};
	      for (k in obj) {
	        if (!__hasProp.call(obj, k)) continue;
	        v = obj[k];
	        o[k] = v;
	      }
	      return o;
	    },
	    insist: function(times, interval_, f) {
	      var count, x;
	      count = 0;
	      return (x = function() {
	        var e;
	        try {
	          return f();
	        } catch (_error) {
	          e = _error;
	          count += 1;
	          if (count < times) {
	            return delay(interval_, x);
	          }
	        }
	      })();
	    },
	    valid_email: function(v) {
	      return typeof v === 'string' && email_re.test(v);
	    },
	    email_re: email_re,

	    /*
	    to get rid of 'return cb e if e?'
	    
	    func1 = ( a, cb ) ->
	      func2 ( e, r ) ->
	        return cb e if e?
	        console.log r
	    
	    func1 = ( a, cb ) ->
	      func2 ( cbe cb ) ( e, r ) ->
	        console.log r
	     */
	    cbe: function(done) {
	      return function(cb) {
	        return function() {
	          if (arguments[0] != null) {
	            return done(arguments[0]);
	          } else {
	            return cb.apply(null, arguments);
	          }
	        };
	      };
	    },
	    assert_type: function(type, v, message) {
	      if (message == null) {
	        message = ("Expected " + v + " to be a ") + type;
	      }
	      if (typeof v !== type) {
	        throw new Error(message);
	      }
	    }
	  };

	}).call(this);


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var defaultSettings, util, _ref,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	  this.errors = __webpack_require__(21);

	  this.loader = __webpack_require__(22);

	  util = __webpack_require__(23);

	  this.FileError = (function(_super) {
	    __extends(FileError, _super);

	    function FileError() {
	      _ref = FileError.__super__.constructor.apply(this, arguments);
	      return _ref;
	    }

	    return FileError;

	  })(this.errors.MarkedYAMLError);

	  this.FileReader = (function() {
	    function FileReader(readFileAsyncOverride) {
	      this.q = __webpack_require__(47);
	      this.url = __webpack_require__(30);
	      if (readFileAsyncOverride) {
	        this.readFileAsyncOverride = readFileAsyncOverride;
	      }
	    }

	    /*
	    Read file either locally or from the network.
	    */


	    FileReader.prototype.readFileAsync = function(file) {
	      if (this.readFileAsyncOverride) {
	        return this.readFileAsyncOverride(file);
	      }
	      if (/^https?/i.test(file) || (typeof window !== "undefined" && window !== null)) {
	        return this.fetchFileAsync(file);
	      }
	      return this.fetchLocalFileAsync(file);
	    };

	    /*
	    Read file from the disk.
	    */


	    FileReader.prototype.fetchLocalFileAsync = function(file) {
	      var deferred,
	        _this = this;
	      deferred = this.q.defer();
	      __webpack_require__(45).readFile(file, function(err, data) {
	        if (err) {
	          return deferred.reject(new exports.FileError("while reading " + file, null, "cannot read " + file + " (" + err + ")", _this.start_mark));
	        } else {
	          return deferred.resolve(data.toString());
	        }
	      });
	      return deferred.promise;
	    };

	    /*
	    Read file from the network.
	    */


	    FileReader.prototype.fetchFileAsync = function(file) {
	      var deferred, error, xhr,
	        _this = this;
	      deferred = this.q.defer();
	      if (typeof window !== "undefined" && window !== null) {
	        xhr = new XMLHttpRequest();
	      } else {
	        xhr = new (__webpack_require__(18).XMLHttpRequest)();
	      }
	      try {
	        xhr.open('GET', file, false);
	        xhr.setRequestHeader('Accept', 'application/raml+yaml, */*');
	        xhr.onreadystatechange = function() {
	          if (xhr.readyState === 4) {
	            if ((typeof xhr.status === 'number' && xhr.status === 200) || (typeof xhr.status === 'string' && xhr.status.match(/^200/i))) {
	              return deferred.resolve(xhr.responseText);
	            } else {
	              return deferred.reject(new exports.FileError("while fetching " + file, null, "cannot fetch " + file + " (" + xhr.statusText + ")", _this.start_mark));
	            }
	          }
	        };
	        xhr.send(null);
	        return deferred.promise;
	      } catch (_error) {
	        error = _error;
	        throw new exports.FileError("while fetching " + file, null, "cannot fetch " + file + " (" + error + "), check that the server is up and that CORS is enabled", this.start_mark);
	      }
	    };

	    return FileReader;

	  })();

	  /*
	  OO version of the parser, static functions will be removed after consumers move on to use the OO version
	  OO will offer caching
	  */


	  this.RamlParser = (function() {
	    function RamlParser(settings) {
	      this.settings = settings != null ? settings : defaultSettings;
	      this.q = __webpack_require__(47);
	      this.url = __webpack_require__(30);
	      this.nodes = __webpack_require__(24);
	      this.loadDefaultSettings(settings);
	    }

	    RamlParser.prototype.loadDefaultSettings = function(settings) {
	      var _this = this;
	      return Object.keys(defaultSettings).forEach(function(settingName) {
	        if (!(settingName in settings)) {
	          return settings[settingName] = defaultSettings[settingName];
	        }
	      });
	    };

	    RamlParser.prototype.loadFile = function(file, settings) {
	      var error,
	        _this = this;
	      if (settings == null) {
	        settings = this.settings;
	      }
	      try {
	        return settings.reader.readFileAsync(file).then(function(stream) {
	          return _this.load(stream, file, settings);
	        });
	      } catch (_error) {
	        error = _error;
	        return this.q.fcall(function() {
	          throw new exports.FileError("while fetching " + file, null, "cannot fetch " + file + " (" + error + ")", null);
	        });
	      }
	    };

	    RamlParser.prototype.composeFile = function(file, settings, parent) {
	      var error,
	        _this = this;
	      if (settings == null) {
	        settings = this.settings;
	      }
	      try {
	        return settings.reader.readFileAsync(file).then(function(stream) {
	          return _this.compose(stream, file, settings, parent);
	        });
	      } catch (_error) {
	        error = _error;
	        return this.q.fcall(function() {
	          throw new exports.FileError("while fetching " + file, null, "cannot fetch " + file + " (" + error + ")", null);
	        });
	      }
	    };

	    RamlParser.prototype.compose = function(stream, location, settings, parent) {
	      if (settings == null) {
	        settings = this.settings;
	      }
	      if (parent == null) {
	        parent = {
	          src: location
	        };
	      }
	      settings.compose = false;
	      return this.parseStream(stream, location, settings, parent);
	    };

	    RamlParser.prototype.load = function(stream, location, settings) {
	      if (settings == null) {
	        settings = this.settings;
	      }
	      settings.compose = true;
	      return this.parseStream(stream, location, settings, {
	        src: location
	      });
	    };

	    RamlParser.prototype.parseStream = function(stream, location, settings, parent) {
	      var loader,
	        _this = this;
	      if (settings == null) {
	        settings = this.settings;
	      }
	      loader = new exports.loader.Loader(stream, location, settings, parent);
	      return this.q.fcall(function() {
	        return loader.getYamlRoot();
	      }).then(function(partialTree) {
	        var files;
	        files = loader.getPendingFilesList();
	        return _this.getPendingFiles(loader, partialTree, files);
	      }).then(function(fullyAssembledTree) {
	        loader.composeRamlTree(fullyAssembledTree, settings);
	        if (settings.compose) {
	          if (fullyAssembledTree != null) {
	            return loader.construct_document(fullyAssembledTree);
	          } else {
	            return null;
	          }
	        } else {
	          return fullyAssembledTree;
	        }
	      });
	    };

	    RamlParser.prototype.getPendingFiles = function(loader, node, files) {
	      var file, lastVisitedNode, loc, _i, _len,
	        _this = this;
	      loc = [];
	      lastVisitedNode = void 0;
	      for (_i = 0, _len = files.length; _i < _len; _i++) {
	        file = files[_i];
	        loc.push(this.getPendingFile(loader, file).then(function(overwritingnode) {
	          if (overwritingnode && !lastVisitedNode) {
	            return lastVisitedNode = overwritingnode;
	          }
	        }));
	      }
	      return this.q.all(loc).then(function() {
	        if (lastVisitedNode) {
	          return lastVisitedNode;
	        } else {
	          return node;
	        }
	      });
	    };

	    RamlParser.prototype.getPendingFile = function(loader, fileInfo) {
	      var error, event, fileUri, key, node,
	        _this = this;
	      node = fileInfo.parentNode;
	      event = fileInfo.event;
	      key = fileInfo.parentKey;
	      fileUri = fileInfo.targetFileUri;
	      if (fileInfo.includingContext) {
	        fileUri = this.url.resolve(fileInfo.includingContext, fileInfo.targetFileUri);
	      }
	      if (loader.parent && this.isInIncludeTagsStack(fileUri, loader)) {
	        throw new exports.FileError('while composing scalar out of !include', null, "detected circular !include of " + event.value, event.start_mark);
	      }
	      try {
	        if (fileInfo.type === 'fragment') {
	          return this.settings.reader.readFileAsync(fileUri).then(function(result) {
	            return _this.compose(result, fileUri, {
	              validate: false,
	              transform: false,
	              compose: true
	            }, loader);
	          }).then(function(value) {
	            return _this.appendNewNodeToParent(node, key, value);
	          })["catch"](function(error) {
	            return _this.addContextToError(error, event);
	          });
	        } else {
	          return this.settings.reader.readFileAsync(fileUri).then(function(result) {
	            var value;
	            value = new _this.nodes.ScalarNode('tag:yaml.org,2002:str', result, event.start_mark, event.end_mark, event.style);
	            return _this.appendNewNodeToParent(node, key, value);
	          })["catch"](function(error) {
	            return _this.addContextToError(error, event);
	          });
	        }
	      } catch (_error) {
	        error = _error;
	        return this.addContextToError(error, event);
	      }
	    };

	    RamlParser.prototype.addContextToError = function(error, event) {
	      if (error.constructor.name === "FileError") {
	        if (!error.problem_mark) {
	          error.problem_mark = event.start_mark;
	        }
	        throw error;
	      } else {
	        throw new exports.FileError('while reading file', null, "error: " + error, event.start_mark);
	      }
	    };

	    RamlParser.prototype.isInIncludeTagsStack = function(include, parent) {
	      while (parent = parent.parent) {
	        if (parent.src === include) {
	          return true;
	        }
	      }
	      return false;
	    };

	    RamlParser.prototype.appendNewNodeToParent = function(node, key, value) {
	      if (node) {
	        if (util.isSequence(node)) {
	          node.value[key] = value;
	        } else {
	          node.value.push([key, value]);
	        }
	        return null;
	      } else {
	        return value;
	      }
	    };

	    return RamlParser;

	  })();

	  /*
	    validate controls whether the stream must be processed as a
	  */


	  defaultSettings = {
	    validate: true,
	    transform: true,
	    compose: true,
	    reader: new exports.FileReader(null)
	  };

	  /*
	  Parse the first RAML document in a stream and produce the corresponding
	  Javascript object.
	  */


	  this.loadFile = function(file, settings) {
	    var parser;
	    if (settings == null) {
	      settings = defaultSettings;
	    }
	    parser = new exports.RamlParser(settings);
	    return parser.loadFile(file, settings);
	  };

	  /*
	  Parse the first RAML document in a file and produce the corresponding
	  representation tree.
	  */


	  this.composeFile = function(file, settings, parent) {
	    var parser;
	    if (settings == null) {
	      settings = defaultSettings;
	    }
	    if (parent == null) {
	      parent = file;
	    }
	    parser = new exports.RamlParser(settings);
	    return parser.composeFile(file, settings, parent);
	  };

	  /*
	  Parse the first RAML document in a stream and produce the corresponding
	  representation tree.
	  */


	  this.compose = function(stream, location, settings, parent) {
	    var parser;
	    if (settings == null) {
	      settings = defaultSettings;
	    }
	    if (parent == null) {
	      parent = location;
	    }
	    parser = new exports.RamlParser(settings);
	    return parser.compose(stream, location, settings, parent);
	  };

	  /*
	  Parse the first RAML document in a stream and produce the corresponding
	  Javascript object.
	  */


	  this.load = function(stream, location, settings) {
	    var parser;
	    if (settings == null) {
	      settings = defaultSettings;
	    }
	    parser = new exports.RamlParser(settings);
	    return parser.load(stream, location, settings, null);
	  };

	}).call(this);


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/chjj/marked
	 */

	;(function() {

	/**
	 * Block-Level Grammar
	 */

	var block = {
	  newline: /^\n+/,
	  code: /^( {4}[^\n]+\n*)+/,
	  fences: noop,
	  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
	  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
	  nptable: noop,
	  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
	  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
	  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
	  table: noop,
	  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
	  text: /^[^\n]+/
	};

	block.bullet = /(?:[*+-]|\d+\.)/;
	block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
	block.item = replace(block.item, 'gm')
	  (/bull/g, block.bullet)
	  ();

	block.list = replace(block.list)
	  (/bull/g, block.bullet)
	  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
	  ('def', '\\n+(?=' + block.def.source + ')')
	  ();

	block.blockquote = replace(block.blockquote)
	  ('def', block.def)
	  ();

	block._tag = '(?!(?:'
	  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
	  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
	  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

	block.html = replace(block.html)
	  ('comment', /<!--[\s\S]*?-->/)
	  ('closed', /<(tag)[\s\S]+?<\/\1>/)
	  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
	  (/tag/g, block._tag)
	  ();

	block.paragraph = replace(block.paragraph)
	  ('hr', block.hr)
	  ('heading', block.heading)
	  ('lheading', block.lheading)
	  ('blockquote', block.blockquote)
	  ('tag', '<' + block._tag)
	  ('def', block.def)
	  ();

	/**
	 * Normal Block Grammar
	 */

	block.normal = merge({}, block);

	/**
	 * GFM Block Grammar
	 */

	block.gfm = merge({}, block.normal, {
	  fences: /^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
	  paragraph: /^/
	});

	block.gfm.paragraph = replace(block.paragraph)
	  ('(?!', '(?!'
	    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
	    + block.list.source.replace('\\1', '\\3') + '|')
	  ();

	/**
	 * GFM + Tables Block Grammar
	 */

	block.tables = merge({}, block.gfm, {
	  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
	  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
	});

	/**
	 * Block Lexer
	 */

	function Lexer(options) {
	  this.tokens = [];
	  this.tokens.links = {};
	  this.options = options || marked.defaults;
	  this.rules = block.normal;

	  if (this.options.gfm) {
	    if (this.options.tables) {
	      this.rules = block.tables;
	    } else {
	      this.rules = block.gfm;
	    }
	  }
	}

	/**
	 * Expose Block Rules
	 */

	Lexer.rules = block;

	/**
	 * Static Lex Method
	 */

	Lexer.lex = function(src, options) {
	  var lexer = new Lexer(options);
	  return lexer.lex(src);
	};

	/**
	 * Preprocessing
	 */

	Lexer.prototype.lex = function(src) {
	  src = src
	    .replace(/\r\n|\r/g, '\n')
	    .replace(/\t/g, '    ')
	    .replace(/\u00a0/g, ' ')
	    .replace(/\u2424/g, '\n');

	  return this.token(src, true);
	};

	/**
	 * Lexing
	 */

	Lexer.prototype.token = function(src, top, bq) {
	  var src = src.replace(/^ +$/gm, '')
	    , next
	    , loose
	    , cap
	    , bull
	    , b
	    , item
	    , space
	    , i
	    , l;

	  while (src) {
	    // newline
	    if (cap = this.rules.newline.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[0].length > 1) {
	        this.tokens.push({
	          type: 'space'
	        });
	      }
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      cap = cap[0].replace(/^ {4}/gm, '');
	      this.tokens.push({
	        type: 'code',
	        text: !this.options.pedantic
	          ? cap.replace(/\n+$/, '')
	          : cap
	      });
	      continue;
	    }

	    // fences (gfm)
	    if (cap = this.rules.fences.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'code',
	        lang: cap[2],
	        text: cap[3]
	      });
	      continue;
	    }

	    // heading
	    if (cap = this.rules.heading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[1].length,
	        text: cap[2]
	      });
	      continue;
	    }

	    // table no leading pipe (gfm)
	    if (top && (cap = this.rules.nptable.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i].split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // lheading
	    if (cap = this.rules.lheading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[2] === '=' ? 1 : 2,
	        text: cap[1]
	      });
	      continue;
	    }

	    // hr
	    if (cap = this.rules.hr.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'hr'
	      });
	      continue;
	    }

	    // blockquote
	    if (cap = this.rules.blockquote.exec(src)) {
	      src = src.substring(cap[0].length);

	      this.tokens.push({
	        type: 'blockquote_start'
	      });

	      cap = cap[0].replace(/^ *> ?/gm, '');

	      // Pass `top` to keep the current
	      // "toplevel" state. This is exactly
	      // how markdown.pl works.
	      this.token(cap, top, true);

	      this.tokens.push({
	        type: 'blockquote_end'
	      });

	      continue;
	    }

	    // list
	    if (cap = this.rules.list.exec(src)) {
	      src = src.substring(cap[0].length);
	      bull = cap[2];

	      this.tokens.push({
	        type: 'list_start',
	        ordered: bull.length > 1
	      });

	      // Get each top-level item.
	      cap = cap[0].match(this.rules.item);

	      next = false;
	      l = cap.length;
	      i = 0;

	      for (; i < l; i++) {
	        item = cap[i];

	        // Remove the list item's bullet
	        // so it is seen as the next token.
	        space = item.length;
	        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

	        // Outdent whatever the
	        // list item contains. Hacky.
	        if (~item.indexOf('\n ')) {
	          space -= item.length;
	          item = !this.options.pedantic
	            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
	            : item.replace(/^ {1,4}/gm, '');
	        }

	        // Determine whether the next list item belongs here.
	        // Backpedal if it does not belong in this list.
	        if (this.options.smartLists && i !== l - 1) {
	          b = block.bullet.exec(cap[i + 1])[0];
	          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
	            src = cap.slice(i + 1).join('\n') + src;
	            i = l - 1;
	          }
	        }

	        // Determine whether item is loose or not.
	        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
	        // for discount behavior.
	        loose = next || /\n\n(?!\s*$)/.test(item);
	        if (i !== l - 1) {
	          next = item.charAt(item.length - 1) === '\n';
	          if (!loose) loose = next;
	        }

	        this.tokens.push({
	          type: loose
	            ? 'loose_item_start'
	            : 'list_item_start'
	        });

	        // Recurse.
	        this.token(item, false, bq);

	        this.tokens.push({
	          type: 'list_item_end'
	        });
	      }

	      this.tokens.push({
	        type: 'list_end'
	      });

	      continue;
	    }

	    // html
	    if (cap = this.rules.html.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: this.options.sanitize
	          ? 'paragraph'
	          : 'html',
	        pre: cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style',
	        text: cap[0]
	      });
	      continue;
	    }

	    // def
	    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.links[cap[1].toLowerCase()] = {
	        href: cap[2],
	        title: cap[3]
	      };
	      continue;
	    }

	    // table (gfm)
	    if (top && (cap = this.rules.table.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i]
	          .replace(/^ *\| *| *\| *$/g, '')
	          .split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // top-level paragraph
	    if (top && (cap = this.rules.paragraph.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'paragraph',
	        text: cap[1].charAt(cap[1].length - 1) === '\n'
	          ? cap[1].slice(0, -1)
	          : cap[1]
	      });
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      // Top-level should never reach here.
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'text',
	        text: cap[0]
	      });
	      continue;
	    }

	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return this.tokens;
	};

	/**
	 * Inline-Level Grammar
	 */

	var inline = {
	  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
	  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
	  url: noop,
	  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
	  link: /^!?\[(inside)\]\(href\)/,
	  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
	  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
	  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
	  em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
	  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
	  br: /^ {2,}\n(?!\s*$)/,
	  del: noop,
	  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
	};

	inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
	inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

	inline.link = replace(inline.link)
	  ('inside', inline._inside)
	  ('href', inline._href)
	  ();

	inline.reflink = replace(inline.reflink)
	  ('inside', inline._inside)
	  ();

	/**
	 * Normal Inline Grammar
	 */

	inline.normal = merge({}, inline);

	/**
	 * Pedantic Inline Grammar
	 */

	inline.pedantic = merge({}, inline.normal, {
	  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	});

	/**
	 * GFM Inline Grammar
	 */

	inline.gfm = merge({}, inline.normal, {
	  escape: replace(inline.escape)('])', '~|])')(),
	  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
	  del: /^~~(?=\S)([\s\S]*?\S)~~/,
	  text: replace(inline.text)
	    (']|', '~]|')
	    ('|', '|https?://|')
	    ()
	});

	/**
	 * GFM + Line Breaks Inline Grammar
	 */

	inline.breaks = merge({}, inline.gfm, {
	  br: replace(inline.br)('{2,}', '*')(),
	  text: replace(inline.gfm.text)('{2,}', '*')()
	});

	/**
	 * Inline Lexer & Compiler
	 */

	function InlineLexer(links, options) {
	  this.options = options || marked.defaults;
	  this.links = links;
	  this.rules = inline.normal;
	  this.renderer = this.options.renderer || new Renderer;
	  this.renderer.options = this.options;

	  if (!this.links) {
	    throw new
	      Error('Tokens array requires a `links` property.');
	  }

	  if (this.options.gfm) {
	    if (this.options.breaks) {
	      this.rules = inline.breaks;
	    } else {
	      this.rules = inline.gfm;
	    }
	  } else if (this.options.pedantic) {
	    this.rules = inline.pedantic;
	  }
	}

	/**
	 * Expose Inline Rules
	 */

	InlineLexer.rules = inline;

	/**
	 * Static Lexing/Compiling Method
	 */

	InlineLexer.output = function(src, links, options) {
	  var inline = new InlineLexer(links, options);
	  return inline.output(src);
	};

	/**
	 * Lexing/Compiling
	 */

	InlineLexer.prototype.output = function(src) {
	  var out = ''
	    , link
	    , text
	    , href
	    , cap;

	  while (src) {
	    // escape
	    if (cap = this.rules.escape.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += cap[1];
	      continue;
	    }

	    // autolink
	    if (cap = this.rules.autolink.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[2] === '@') {
	        text = cap[1].charAt(6) === ':'
	          ? this.mangle(cap[1].substring(7))
	          : this.mangle(cap[1]);
	        href = this.mangle('mailto:') + text;
	      } else {
	        text = escape(cap[1]);
	        href = text;
	      }
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // url (gfm)
	    if (!this.inLink && (cap = this.rules.url.exec(src))) {
	      src = src.substring(cap[0].length);
	      text = escape(cap[1]);
	      href = text;
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // tag
	    if (cap = this.rules.tag.exec(src)) {
	      if (!this.inLink && /^<a /i.test(cap[0])) {
	        this.inLink = true;
	      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
	        this.inLink = false;
	      }
	      src = src.substring(cap[0].length);
	      out += this.options.sanitize
	        ? escape(cap[0])
	        : cap[0];
	      continue;
	    }

	    // link
	    if (cap = this.rules.link.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.inLink = true;
	      out += this.outputLink(cap, {
	        href: cap[2],
	        title: cap[3]
	      });
	      this.inLink = false;
	      continue;
	    }

	    // reflink, nolink
	    if ((cap = this.rules.reflink.exec(src))
	        || (cap = this.rules.nolink.exec(src))) {
	      src = src.substring(cap[0].length);
	      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	      link = this.links[link.toLowerCase()];
	      if (!link || !link.href) {
	        out += cap[0].charAt(0);
	        src = cap[0].substring(1) + src;
	        continue;
	      }
	      this.inLink = true;
	      out += this.outputLink(cap, link);
	      this.inLink = false;
	      continue;
	    }

	    // strong
	    if (cap = this.rules.strong.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.strong(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // em
	    if (cap = this.rules.em.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.em(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.codespan(escape(cap[2], true));
	      continue;
	    }

	    // br
	    if (cap = this.rules.br.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.br();
	      continue;
	    }

	    // del (gfm)
	    if (cap = this.rules.del.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.del(this.output(cap[1]));
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += escape(this.smartypants(cap[0]));
	      continue;
	    }

	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return out;
	};

	/**
	 * Compile Link
	 */

	InlineLexer.prototype.outputLink = function(cap, link) {
	  var href = escape(link.href)
	    , title = link.title ? escape(link.title) : null;

	  return cap[0].charAt(0) !== '!'
	    ? this.renderer.link(href, title, this.output(cap[1]))
	    : this.renderer.image(href, title, escape(cap[1]));
	};

	/**
	 * Smartypants Transformations
	 */

	InlineLexer.prototype.smartypants = function(text) {
	  if (!this.options.smartypants) return text;
	  return text
	    // em-dashes
	    .replace(/--/g, '\u2014')
	    // opening singles
	    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
	    // closing singles & apostrophes
	    .replace(/'/g, '\u2019')
	    // opening doubles
	    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
	    // closing doubles
	    .replace(/"/g, '\u201d')
	    // ellipses
	    .replace(/\.{3}/g, '\u2026');
	};

	/**
	 * Mangle Links
	 */

	InlineLexer.prototype.mangle = function(text) {
	  var out = ''
	    , l = text.length
	    , i = 0
	    , ch;

	  for (; i < l; i++) {
	    ch = text.charCodeAt(i);
	    if (Math.random() > 0.5) {
	      ch = 'x' + ch.toString(16);
	    }
	    out += '&#' + ch + ';';
	  }

	  return out;
	};

	/**
	 * Renderer
	 */

	function Renderer(options) {
	  this.options = options || {};
	}

	Renderer.prototype.code = function(code, lang, escaped) {
	  if (this.options.highlight) {
	    var out = this.options.highlight(code, lang);
	    if (out != null && out !== code) {
	      escaped = true;
	      code = out;
	    }
	  }

	  if (!lang) {
	    return '<pre><code>'
	      + (escaped ? code : escape(code, true))
	      + '\n</code></pre>';
	  }

	  return '<pre><code class="'
	    + this.options.langPrefix
	    + escape(lang, true)
	    + '">'
	    + (escaped ? code : escape(code, true))
	    + '\n</code></pre>\n';
	};

	Renderer.prototype.blockquote = function(quote) {
	  return '<blockquote>\n' + quote + '</blockquote>\n';
	};

	Renderer.prototype.html = function(html) {
	  return html;
	};

	Renderer.prototype.heading = function(text, level, raw) {
	  return '<h'
	    + level
	    + ' id="'
	    + this.options.headerPrefix
	    + raw.toLowerCase().replace(/[^\w]+/g, '-')
	    + '">'
	    + text
	    + '</h'
	    + level
	    + '>\n';
	};

	Renderer.prototype.hr = function() {
	  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
	};

	Renderer.prototype.list = function(body, ordered) {
	  var type = ordered ? 'ol' : 'ul';
	  return '<' + type + '>\n' + body + '</' + type + '>\n';
	};

	Renderer.prototype.listitem = function(text) {
	  return '<li>' + text + '</li>\n';
	};

	Renderer.prototype.paragraph = function(text) {
	  return '<p>' + text + '</p>\n';
	};

	Renderer.prototype.table = function(header, body) {
	  return '<table>\n'
	    + '<thead>\n'
	    + header
	    + '</thead>\n'
	    + '<tbody>\n'
	    + body
	    + '</tbody>\n'
	    + '</table>\n';
	};

	Renderer.prototype.tablerow = function(content) {
	  return '<tr>\n' + content + '</tr>\n';
	};

	Renderer.prototype.tablecell = function(content, flags) {
	  var type = flags.header ? 'th' : 'td';
	  var tag = flags.align
	    ? '<' + type + ' style="text-align:' + flags.align + '">'
	    : '<' + type + '>';
	  return tag + content + '</' + type + '>\n';
	};

	// span level renderer
	Renderer.prototype.strong = function(text) {
	  return '<strong>' + text + '</strong>';
	};

	Renderer.prototype.em = function(text) {
	  return '<em>' + text + '</em>';
	};

	Renderer.prototype.codespan = function(text) {
	  return '<code>' + text + '</code>';
	};

	Renderer.prototype.br = function() {
	  return this.options.xhtml ? '<br/>' : '<br>';
	};

	Renderer.prototype.del = function(text) {
	  return '<del>' + text + '</del>';
	};

	Renderer.prototype.link = function(href, title, text) {
	  if (this.options.sanitize) {
	    try {
	      var prot = decodeURIComponent(unescape(href))
	        .replace(/[^\w:]/g, '')
	        .toLowerCase();
	    } catch (e) {
	      return '';
	    }
	    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
	      return '';
	    }
	  }
	  var out = '<a href="' + href + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += '>' + text + '</a>';
	  return out;
	};

	Renderer.prototype.image = function(href, title, text) {
	  var out = '<img src="' + href + '" alt="' + text + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += this.options.xhtml ? '/>' : '>';
	  return out;
	};

	/**
	 * Parsing & Compiling
	 */

	function Parser(options) {
	  this.tokens = [];
	  this.token = null;
	  this.options = options || marked.defaults;
	  this.options.renderer = this.options.renderer || new Renderer;
	  this.renderer = this.options.renderer;
	  this.renderer.options = this.options;
	}

	/**
	 * Static Parse Method
	 */

	Parser.parse = function(src, options, renderer) {
	  var parser = new Parser(options, renderer);
	  return parser.parse(src);
	};

	/**
	 * Parse Loop
	 */

	Parser.prototype.parse = function(src) {
	  this.inline = new InlineLexer(src.links, this.options, this.renderer);
	  this.tokens = src.reverse();

	  var out = '';
	  while (this.next()) {
	    out += this.tok();
	  }

	  return out;
	};

	/**
	 * Next Token
	 */

	Parser.prototype.next = function() {
	  return this.token = this.tokens.pop();
	};

	/**
	 * Preview Next Token
	 */

	Parser.prototype.peek = function() {
	  return this.tokens[this.tokens.length - 1] || 0;
	};

	/**
	 * Parse Text Tokens
	 */

	Parser.prototype.parseText = function() {
	  var body = this.token.text;

	  while (this.peek().type === 'text') {
	    body += '\n' + this.next().text;
	  }

	  return this.inline.output(body);
	};

	/**
	 * Parse Current Token
	 */

	Parser.prototype.tok = function() {
	  switch (this.token.type) {
	    case 'space': {
	      return '';
	    }
	    case 'hr': {
	      return this.renderer.hr();
	    }
	    case 'heading': {
	      return this.renderer.heading(
	        this.inline.output(this.token.text),
	        this.token.depth,
	        this.token.text);
	    }
	    case 'code': {
	      return this.renderer.code(this.token.text,
	        this.token.lang,
	        this.token.escaped);
	    }
	    case 'table': {
	      var header = ''
	        , body = ''
	        , i
	        , row
	        , cell
	        , flags
	        , j;

	      // header
	      cell = '';
	      for (i = 0; i < this.token.header.length; i++) {
	        flags = { header: true, align: this.token.align[i] };
	        cell += this.renderer.tablecell(
	          this.inline.output(this.token.header[i]),
	          { header: true, align: this.token.align[i] }
	        );
	      }
	      header += this.renderer.tablerow(cell);

	      for (i = 0; i < this.token.cells.length; i++) {
	        row = this.token.cells[i];

	        cell = '';
	        for (j = 0; j < row.length; j++) {
	          cell += this.renderer.tablecell(
	            this.inline.output(row[j]),
	            { header: false, align: this.token.align[j] }
	          );
	        }

	        body += this.renderer.tablerow(cell);
	      }
	      return this.renderer.table(header, body);
	    }
	    case 'blockquote_start': {
	      var body = '';

	      while (this.next().type !== 'blockquote_end') {
	        body += this.tok();
	      }

	      return this.renderer.blockquote(body);
	    }
	    case 'list_start': {
	      var body = ''
	        , ordered = this.token.ordered;

	      while (this.next().type !== 'list_end') {
	        body += this.tok();
	      }

	      return this.renderer.list(body, ordered);
	    }
	    case 'list_item_start': {
	      var body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.token.type === 'text'
	          ? this.parseText()
	          : this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'loose_item_start': {
	      var body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'html': {
	      var html = !this.token.pre && !this.options.pedantic
	        ? this.inline.output(this.token.text)
	        : this.token.text;
	      return this.renderer.html(html);
	    }
	    case 'paragraph': {
	      return this.renderer.paragraph(this.inline.output(this.token.text));
	    }
	    case 'text': {
	      return this.renderer.paragraph(this.parseText());
	    }
	  }
	};

	/**
	 * Helpers
	 */

	function escape(html, encode) {
	  return html
	    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/"/g, '&quot;')
	    .replace(/'/g, '&#39;');
	}

	function unescape(html) {
	  return html.replace(/&([#\w]+);/g, function(_, n) {
	    n = n.toLowerCase();
	    if (n === 'colon') return ':';
	    if (n.charAt(0) === '#') {
	      return n.charAt(1) === 'x'
	        ? String.fromCharCode(parseInt(n.substring(2), 16))
	        : String.fromCharCode(+n.substring(1));
	    }
	    return '';
	  });
	}

	function replace(regex, opt) {
	  regex = regex.source;
	  opt = opt || '';
	  return function self(name, val) {
	    if (!name) return new RegExp(regex, opt);
	    val = val.source || val;
	    val = val.replace(/(^|[^\[])\^/g, '$1');
	    regex = regex.replace(name, val);
	    return self;
	  };
	}

	function noop() {}
	noop.exec = noop;

	function merge(obj) {
	  var i = 1
	    , target
	    , key;

	  for (; i < arguments.length; i++) {
	    target = arguments[i];
	    for (key in target) {
	      if (Object.prototype.hasOwnProperty.call(target, key)) {
	        obj[key] = target[key];
	      }
	    }
	  }

	  return obj;
	}


	/**
	 * Marked
	 */

	function marked(src, opt, callback) {
	  if (callback || typeof opt === 'function') {
	    if (!callback) {
	      callback = opt;
	      opt = null;
	    }

	    opt = merge({}, marked.defaults, opt || {});

	    var highlight = opt.highlight
	      , tokens
	      , pending
	      , i = 0;

	    try {
	      tokens = Lexer.lex(src, opt)
	    } catch (e) {
	      return callback(e);
	    }

	    pending = tokens.length;

	    var done = function(err) {
	      if (err) {
	        opt.highlight = highlight;
	        return callback(err);
	      }

	      var out;

	      try {
	        out = Parser.parse(tokens, opt);
	      } catch (e) {
	        err = e;
	      }

	      opt.highlight = highlight;

	      return err
	        ? callback(err)
	        : callback(null, out);
	    };

	    if (!highlight || highlight.length < 3) {
	      return done();
	    }

	    delete opt.highlight;

	    if (!pending) return done();

	    for (; i < tokens.length; i++) {
	      (function(token) {
	        if (token.type !== 'code') {
	          return --pending || done();
	        }
	        return highlight(token.text, token.lang, function(err, code) {
	          if (err) return done(err);
	          if (code == null || code === token.text) {
	            return --pending || done();
	          }
	          token.text = code;
	          token.escaped = true;
	          --pending || done();
	        });
	      })(tokens[i]);
	    }

	    return;
	  }
	  try {
	    if (opt) opt = merge({}, marked.defaults, opt);
	    return Parser.parse(Lexer.lex(src, opt), opt);
	  } catch (e) {
	    e.message += '\nPlease report this to https://github.com/chjj/marked.';
	    if ((opt || marked.defaults).silent) {
	      return '<p>An error occured:</p><pre>'
	        + escape(e.message + '', true)
	        + '</pre>';
	    }
	    throw e;
	  }
	}

	/**
	 * Options
	 */

	marked.options =
	marked.setOptions = function(opt) {
	  merge(marked.defaults, opt);
	  return marked;
	};

	marked.defaults = {
	  gfm: true,
	  tables: true,
	  breaks: false,
	  pedantic: false,
	  sanitize: false,
	  smartLists: false,
	  silent: false,
	  highlight: null,
	  langPrefix: 'lang-',
	  smartypants: false,
	  headerPrefix: '',
	  renderer: new Renderer,
	  xhtml: false
	};

	/**
	 * Expose
	 */

	marked.Parser = Parser;
	marked.parser = Parser.parse;

	marked.Renderer = Renderer;

	marked.Lexer = Lexer;
	marked.lexer = Lexer.lex;

	marked.InlineLexer = InlineLexer;
	marked.inlineLexer = InlineLexer.output;

	marked.parse = marked;

	if (true) {
	  module.exports = marked;
	} else if (typeof define === 'function' && define.amd) {
	  define(function() { return marked; });
	} else {
	  this.marked = marked;
	}

	}).call(function() {
	  return this || (typeof window !== 'undefined' ? window : global);
	}());
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* (ignored) */

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = [
		{
			"code": "1xx",
			"phrase": "**Informational**",
			"description": "\"indicates an interim response for communicating connection status or request progress prior to completing the requested action and sending a final response.\" ~ [sure](http://www.urbandictionary.com/define.php?term=sure)",
			"spec_title": "RFC7231#6.2",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.2"
		},
		{
			"code": "100",
			"phrase": "Continue",
			"description": "\"indicates that the initial part of a request has been received and has not yet been rejected by the server.\"",
			"spec_title": "RFC7231#6.2.1",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.2.1"
		},
		{
			"code": "101",
			"phrase": "Switching Protocols",
			"description": "\"indicates that the server understands and is willing to comply with the client's request, via the Upgrade header field, for a change in the application protocol being used on this connection.\"",
			"spec_title": "RFC7231#6.2.2",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.2.2"
		},
		{
			"code": "2xx",
			"phrase": "**Successful**",
			"description": "\"indicates that the client's request was successfully received, understood, and accepted.\" ~ [cool](https://twitter.com/DanaDanger/status/183316183494311936)",
			"spec_title": "RFC7231#6.3",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3"
		},
		{
			"code": "200",
			"phrase": "OK",
			"description": "\"indicates that the request has succeeded.\"",
			"spec_title": "RFC7231#6.3.1",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3.1"
		},
		{
			"code": "201",
			"phrase": "Created",
			"description": "\"indicates that the request has been fulfilled and has resulted in one or more new resources being created.\"",
			"spec_title": "RFC7231#6.3.2",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3.2"
		},
		{
			"code": "202",
			"phrase": "Accepted",
			"description": "\"indicates that the request has been accepted for processing, but the processing has not been completed.\"",
			"spec_title": "RFC7231#6.3.3",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3.3"
		},
		{
			"code": "203",
			"phrase": "Non-Authoritative Information",
			"description": "\"indicates that the request was successful but the enclosed payload has been modified from that of the origin server's 200 (OK) response by a transforming proxy.\"",
			"spec_title": "RFC7231#6.3.4",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3.4"
		},
		{
			"code": "204",
			"phrase": "No Content",
			"description": "\"indicates that the server has successfully fulfilled the request and that there is no additional content to send in the response payload body.\"",
			"spec_title": "RFC7231#6.3.5",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3.5"
		},
		{
			"code": "205",
			"phrase": "Reset Content",
			"description": "\"indicates that the server has fulfilled the request and desires that the user agent reset the \"document view\", which caused the request to be sent, to its original state as received from the origin server.\"",
			"spec_title": "RFC7231#6.3.6",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3.6"
		},
		{
			"code": "206",
			"phrase": "Partial Content",
			"description": "\"indicates that the server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests's Range header field.\"",
			"spec_title": "RFC7233#4.1",
			"spec_href": "http://tools.ietf.org/html/rfc7233#section-4.1"
		},
		{
			"code": "3xx",
			"phrase": "**Redirection**",
			"description": "\"indicates that further action needs to be taken by the user agent in order to fulfill the request.\" ~ [ask that dude over there](https://twitter.com/DanaDanger/status/183316183494311936)",
			"spec_title": "RFC7231#6.4",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.4"
		},
		{
			"code": "300",
			"phrase": "Multiple Choices",
			"description": "\"indicates that the target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.\"",
			"spec_title": "RFC7231#6.4.1",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.4.1"
		},
		{
			"code": "301",
			"phrase": "Moved Permanently",
			"description": "\"indicates that the target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.\"",
			"spec_title": "RFC7231#6.4.2",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.4.2"
		},
		{
			"code": "302",
			"phrase": "Found",
			"description": "\"indicates that the target resource resides temporarily under a different URI.\"",
			"spec_title": "RFC7231#6.4.3",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.4.3"
		},
		{
			"code": "303",
			"phrase": "See Other",
			"description": "\"indicates that the server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request.\"",
			"spec_title": "RFC7231#6.4.4",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.4.4"
		},
		{
			"code": "304",
			"phrase": "Not Modified",
			"description": "\"indicates that a conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false.\"",
			"spec_title": "RFC7232#4.1",
			"spec_href": "http://tools.ietf.org/html/rfc7232#section-4.1"
		},
		{
			"code": "305",
			"phrase": "Use Proxy",
			"description": "*deprecated*",
			"spec_title": "RFC7231#6.4.5",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.4.5"
		},
		{
			"code": "307",
			"phrase": "Temporary Redirect",
			"description": "\"indicates that the target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.\"",
			"spec_title": "RFC7231#6.4.7",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.4.7"
		},
		{
			"code": "4xx",
			"phrase": "**Client Error**",
			"description": "\"indicates that the client seems to have erred.\" ~ [*you* fucked up](https://twitter.com/DanaDanger/status/183316183494311936)",
			"spec_title": "RFC7231#6.5",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5"
		},
		{
			"code": "400",
			"phrase": "Bad Request",
			"description": "\"indicates that the server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.\"",
			"spec_title": "RFC7231#6.5.1",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.1"
		},
		{
			"code": "401",
			"phrase": "Unauthorized",
			"description": "\"indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.\"",
			"spec_title": "RFC7235#6.3.1",
			"spec_href": "http://tools.ietf.org/html/rfc7235#section-3.1"
		},
		{
			"code": "402",
			"phrase": "Payment Required",
			"description": "*reserved*",
			"spec_title": "RFC7231#6.5.2",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.2"
		},
		{
			"code": "403",
			"phrase": "Forbidden",
			"description": "\"indicates that the server understood the request but refuses to authorize it.\"",
			"spec_title": "RFC7231#6.5.3",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.3"
		},
		{
			"code": "404",
			"phrase": "Not Found",
			"description": "\"indicates that the origin server did not find a current representation for the target resource or is not willing to disclose that one exists.\"",
			"spec_title": "RFC7231#6.5.4",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.4"
		},
		{
			"code": "405",
			"phrase": "Method Not Allowed",
			"description": "\"indicates that the method specified in the request-line is known by the origin server but not supported by the target resource.\"",
			"spec_title": "RFC7231#6.5.5",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.5"
		},
		{
			"code": "406",
			"phrase": "Not Acceptable",
			"description": "\"indicates that the target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.\"",
			"spec_title": "RFC7231#6.5.6",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.6"
		},
		{
			"code": "407",
			"phrase": "Proxy Authentication Required",
			"description": "\"is similar to 401 (Unauthorized), but indicates that the client needs to authenticate itself in order to use a proxy.\"",
			"spec_title": "RFC7231#6.3.2",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3.2"
		},
		{
			"code": "408",
			"phrase": "Request Timeout",
			"description": "\"indicates that the server did not receive a complete request message within the time that it was prepared to wait.\"",
			"spec_title": "RFC7231#6.5.7",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.7"
		},
		{
			"code": "409",
			"phrase": "Conflict",
			"description": "\"indicates that the request could not be completed due to a conflict with the current state of the resource.\"",
			"spec_title": "RFC7231#6.5.8",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.8"
		},
		{
			"code": "410",
			"phrase": "Gone",
			"description": "\"indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.\"",
			"spec_title": "RFC7231#6.5.9",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.9"
		},
		{
			"code": "411",
			"phrase": "Length Required",
			"description": "\"indicates that the server refuses to accept the request without a defined Content-Length.\"",
			"spec_title": "RFC7231#6.5.10",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.10"
		},
		{
			"code": "412",
			"phrase": "Precondition Failed",
			"description": "\"indicates that one or more preconditions given in the request header fields evaluated to false when tested on the server.\"",
			"spec_title": "RFC7232#4.2",
			"spec_href": "http://tools.ietf.org/html/rfc7232#section-4.2"
		},
		{
			"code": "413",
			"phrase": "Payload Too Large",
			"description": "\"indicates that the server is refusing to process a request because the request payload is larger than the server is willing or able to process.\"",
			"spec_title": "RFC7231#6.5.11",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.11"
		},
		{
			"code": "414",
			"phrase": "URI Too Long",
			"description": "\"indicates that the server is refusing to service the request because the request-target is longer than the server is willing to interpret.\"",
			"spec_title": "RFC7231#6.5.12",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.12"
		},
		{
			"code": "415",
			"phrase": "Unsupported Media Type",
			"description": "\"indicates that the origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method.\"",
			"spec_title": "RFC7231#6.5.13",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.13"
		},
		{
			"code": "416",
			"phrase": "Range Not Satisfiable",
			"description": "\"indicates that none of the ranges in the request's Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.\"",
			"spec_title": "RFC7233#4.4",
			"spec_href": "http://tools.ietf.org/html/rfc7233#section-4.4"
		},
		{
			"code": "417",
			"phrase": "Expectation Failed",
			"description": "\"indicates that the expectation given in the request's Expect header field could not be met by at least one of the inbound servers.\"",
			"spec_title": "RFC7231#6.5.14",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.14"
		},
		{
			"code": "426",
			"phrase": "Upgrade Required",
			"description": "\"indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.\"",
			"spec_title": "RFC7231#6.5.15",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.15"
		},
		{
			"code": "5xx",
			"phrase": "**Server Error**",
			"description": "\"indicates that the server is aware that it has erred or is incapable of performing the requested method.\" ~ [*we* fucked up](https://twitter.com/DanaDanger/status/183316183494311936)",
			"spec_title": "RFC7231#6.6",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.6"
		},
		{
			"code": "500",
			"phrase": "Internal Server Error",
			"description": "\"indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.\"",
			"spec_title": "RFC7231#6.6.1",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.6.1"
		},
		{
			"code": "501",
			"phrase": "Not Implemented",
			"description": "\"indicates that the server does not support the functionality required to fulfill the request.\"",
			"spec_title": "RFC7231#6.6.2",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.6.2"
		},
		{
			"code": "502",
			"phrase": "Bad Gateway",
			"description": "\"indicates that the server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.\"",
			"spec_title": "RFC7231#6.6.3",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.6.3"
		},
		{
			"code": "503",
			"phrase": "Service Unavailable",
			"description": "\"indicates that the server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.\"",
			"spec_title": "RFC7231#6.6.4",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.6.4"
		},
		{
			"code": "504",
			"phrase": "Gateway Time-out",
			"description": "\"indicates that the server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.\"",
			"spec_title": "RFC7231#6.6.5",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.6.5"
		},
		{
			"code": "505",
			"phrase": "HTTP Version Not Supported",
			"description": "\"indicates that the server does not support, or refuses to support, the protocol version that was used in the request message.\"",
			"spec_title": "RFC7231#6.6.6",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-6.6.6"
		},
		{
			"code": "102",
			"phrase": "Processing",
			"description": "\"is an interim response used to inform the client that the server has accepted the complete request, but has not yet completed it.\"",
			"spec_title": "RFC5218#10.1",
			"spec_href": "http://tools.ietf.org/html/rfc2518#section-10.1"
		},
		{
			"code": "207",
			"phrase": "Multi-Status",
			"description": "\"provides status for multiple independent operations.\"",
			"spec_title": "RFC5218#10.2",
			"spec_href": "http://tools.ietf.org/html/rfc2518#section-10.2"
		},
		{
			"code": "226",
			"phrase": "IM Used",
			"description": "\"The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.\"",
			"spec_title": "RFC3229#10.4.1",
			"spec_href": "http://tools.ietf.org/html/rfc3229#section-10.4.1"
		},
		{
			"code": "308",
			"phrase": "Permanent Redirect",
			"description": "\"The target resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET.\"",
			"spec_title": "RFC7238",
			"spec_href": "http://tools.ietf.org/html/rfc7238"
		},
		{
			"code": "422",
			"phrase": "Unprocessable Entity",
			"description": "\"means the server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.\"",
			"spec_title": "RFC5218#10.3",
			"spec_href": "http://tools.ietf.org/html/rfc2518#section-10.3"
		},
		{
			"code": "423",
			"phrase": "Locked",
			"description": "\"means the source or destination resource of a method is locked.\"",
			"spec_title": "RFC5218#10.4",
			"spec_href": "http://tools.ietf.org/html/rfc2518#section-10.4"
		},
		{
			"code": "424",
			"phrase": "Failed Dependency",
			"description": "\"means that the method could not be performed on the resource because the requested action depended on another action and that action failed.\"",
			"spec_title": "RFC5218#10.5",
			"spec_href": "http://tools.ietf.org/html/rfc2518#section-10.5"
		},
		{
			"code": "428",
			"phrase": "Precondition Required",
			"description": "\"indicates that the origin server requires the request to be conditional.\"",
			"spec_title": "RFC6585#3",
			"spec_href": "http://tools.ietf.org/html/rfc6585#section-3"
		},
		{
			"code": "429",
			"phrase": "Too Many Requests",
			"description": "\"indicates that the user has sent too many requests in a given amount of time (\"rate limiting\").\"",
			"spec_title": "RFC6585#4",
			"spec_href": "http://tools.ietf.org/html/rfc6585#section-4"
		},
		{
			"code": "431",
			"phrase": "Request Header Fields Too Large",
			"description": "\"indicates that the server is unwilling to process the request because its header fields are too large.\"",
			"spec_title": "RFC6585#5",
			"spec_href": "http://tools.ietf.org/html/rfc6585#section-5"
		},
		{
			"code": "451",
			"phrase": "Unavailable For Legal Reasons",
			"description": "\"This status code indicates that the server is denying access to the resource in response to a legal demand.\"",
			"spec_title": "draft-tbray-http-legally-restricted-status",
			"spec_href": "http://tools.ietf.org/html/draft-tbray-http-legally-restricted-status"
		},
		{
			"code": "506",
			"phrase": "Variant Also Negotiates",
			"description": "\"indicates that the server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.\"",
			"spec_title": "RFC2295#8.1",
			"spec_href": "http://tools.ietf.org/html/rfc2295#section-8.1"
		},
		{
			"code": "507",
			"phrase": "Insufficient Storage",
			"description": "\"means the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.\"",
			"spec_title": "RFC5218#10.6",
			"spec_href": "http://tools.ietf.org/html/rfc2518#section-10.6"
		},
		{
			"code": "511",
			"phrase": "Network Authentication Required",
			"description": "\"indicates that the client needs to authenticate to gain network access.\"",
			"spec_title": "RFC6585#6",
			"spec_href": "http://tools.ietf.org/html/rfc6585#section-6"
		},
		{
			"code": "7xx",
			"phrase": "**Developer Error**",
			"description": "[err](http://www.urbandictionary.com/define.php?term=err)",
			"spec_title": "7xx-rfc",
			"spec_href": "http://documentup.com/joho/7XX-rfc"
		}
	]

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = [
		{
			"header": "Content-Encoding",
			"description": "\"indicates what content codings have been applied to the representation, beyond those inherent in the media type, and thus what decoding mechanisms have to be applied in order to obtain data in the media type referenced by the Content-Type header field.\"",
			"spec_title": "RFC7231#3.1.2.2",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-3.1.2.2"
		},
		{
			"header": "Content-Language",
			"description": "\"describes the natural language(s) of the intended audience for the representation.\"",
			"spec_title": "RFC7231#3.1.3.2",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-3.1.3.2"
		},
		{
			"header": "Content-Location",
			"description": "\"references a URI that can be used as an identifier for a specific resource corresponding to the representation in this message's payload.\"",
			"spec_title": "RFC7231#3.1.4.2",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-3.1.4.2"
		},
		{
			"header": "Content-Type",
			"description": "\"indicates the media type of the associated representation: either the representation enclosed in the message payload or the selected representation, as determined by the message semantics.\"",
			"spec_title": "RFC7231#3.1.1.5",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-3.1.1.5"
		},
		{
			"header": "Content-Length",
			"description": "\"can provide the anticipated size, as a decimal number of octets, for a potential payload body.\"",
			"spec_title": "RFC7230#3.3.2",
			"spec_href": "http://tools.ietf.org/html/rfc7230#section-3.3.2"
		},
		{
			"header": "Content-Range",
			"description": "\"is sent in a single part 206 (Partial Content) response to indicate the partial range of the selected representation enclosed as the message payload, sent in each part of a multipart 206 response to indicate the range enclosed within each body part, and sent in 416 (Range Not Satisfiable) responses to provide information about the selected representation.\"",
			"spec_title": "RFC7233#4.2",
			"spec_href": "http://tools.ietf.org/html/rfc7233#section-4.2"
		},
		{
			"header": "Transfer-Encoding",
			"description": "\"lists the transfer coding names corresponding to the sequence of transfer codings that have been (or will be) applied to the payload body in order to form the message body.\"",
			"spec_title": "RFC7230#3.3.1",
			"spec_href": "http://tools.ietf.org/html/rfc7230#section-3.3.1"
		},
		{
			"header": "Cache-Control",
			"description": "\"is used to specify directives for caches along the request/response chain.\"",
			"spec_title": "RFC7234#7.2",
			"spec_href": "http://tools.ietf.org/html/rfc7234#section-7.2"
		},
		{
			"header": "Expect",
			"description": "\"is used to indicate that particular server behaviors are required by the client.\"",
			"spec_title": "RFC7231#5.1.1",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-5.1.1"
		},
		{
			"header": "Host",
			"description": "\"provides the host and port information from the target URI, enabling the origin server to distinguish among resources while servicing requests for multiple host names on a single IP address.\"",
			"spec_title": "RFC7230#5.4",
			"spec_href": "http://tools.ietf.org/html/rfc7230#section-5.4"
		},
		{
			"header": "Max-Forwards",
			"description": "\"provides a mechanism with the TRACE and OPTIONS methods to limit the number of times that the request is forwarded by proxies.\"",
			"spec_title": "RFC7231#5.1.2",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-5.1.2"
		},
		{
			"header": "Pragma",
			"description": "\"allows backwards compatibility with HTTP/1.0 caches, so that clients can specify a \"no-cache\" request that they will understand (as Cache-Control was not defined until HTTP/1.1).\"",
			"spec_title": "RFC7234#7.4",
			"spec_href": "http://tools.ietf.org/html/rfc7234#section-7.4"
		},
		{
			"header": "Range",
			"description": "\"modifies the method semantics to request transfer of only one or more subranges of the selected representation data, rather than the entire selected representation data.\"",
			"spec_title": "RFC7233#3.1",
			"spec_href": "http://tools.ietf.org/html/rfc7233#section-3.1"
		},
		{
			"header": "TE",
			"description": "\"indicates what transfer codings, besides chunked, the client is willing to accept in response, and whether or not the client is willing to accept trailer fields in a chunked transfer coding.\"",
			"spec_title": "RFC7230#4.3",
			"spec_href": "http://tools.ietf.org/html/rfc7230#section-4.3"
		},
		{
			"header": "If-Match",
			"description": "\"can be used to make a request method conditional on the current existence or value of an entity-tag for one or more representations of the target resource.\"",
			"spec_title": "RFC7232#3.1",
			"spec_href": "http://tools.ietf.org/html/rfc7232#section-3.1"
		},
		{
			"header": "If-Modified-Since",
			"description": "\"can be used with GET or HEAD to make the method conditional by modification date: if the selected representation has not been modified since the time specified in this field, then do not perform the request method; instead, respond as detailed below.\"",
			"spec_title": "RFC7232#3.3",
			"spec_href": "http://tools.ietf.org/html/rfc7232#section-3.3"
		},
		{
			"header": "If-None-Match",
			"description": "\"can be used to make a request method conditional on not matching any of the current entity-tag values for representations of the target resource.\"",
			"spec_title": "RFC7232#3.2",
			"spec_href": "http://tools.ietf.org/html/rfc7232#section-3.2"
		},
		{
			"header": "If-Range",
			"description": "\"Informally, its meaning is: if the representation is unchanged, send me the part(s) that I am requesting in Range; otherwise, send me the entire representation.\"",
			"spec_title": "RFC7233#3.2",
			"spec_href": "http://tools.ietf.org/html/rfc7233#section-3.2"
		},
		{
			"header": "If-Unmodified-Since",
			"description": "\"can be used to make a request method conditional by modification date: if the selected representation has been modified since the time specified in this field, then the server MUST NOT perform the requested operation and MUST instead respond with the 412 (Precondition Failed) status code.\"",
			"spec_title": "RFC7232#3.4",
			"spec_href": "http://tools.ietf.org/html/rfc7232#section-3.4"
		},
		{
			"header": "Accept",
			"description": "\"can be used to specify certain media types which are acceptable for the response.\"",
			"spec_title": "RFC7231#5.3.2",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-5.3.2"
		},
		{
			"header": "Accept-Charset",
			"description": "\"can be sent by a user agent to indicate what charsets are acceptable in textual response content.\"",
			"spec_title": "RFC7231#5.3.3",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-5.3.3"
		},
		{
			"header": "Accept-Encoding",
			"description": "\"can be used by user agents to indicate what response content-codings are acceptable in the response.\"",
			"spec_title": "RFC7231#5.3.4",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-5.3.4"
		},
		{
			"header": "Accept-Language",
			"description": "\"can be used by user agents to indicate the set of natural languages that are preferred in the response.\"",
			"spec_title": "RFC7231#5.3.5",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-5.3.5"
		},
		{
			"header": "Authorization",
			"description": "\"allows a user agent to authenticate itself with a server -- usually, but not necessarily, after receiving a 401 (Unauthorized) response.\"",
			"spec_title": "RFC7235#4.1",
			"spec_href": "http://tools.ietf.org/html/rfc7235#section-4.1"
		},
		{
			"header": "Proxy-Authorization",
			"description": "\"allows the client to identify itself (or its user) to a proxy that requires authentication.\"",
			"spec_title": "RFC7235#4.3",
			"spec_href": "http://tools.ietf.org/html/rfc7235#section-4.3"
		},
		{
			"header": "DNT",
			"description": "\"defined as the means for expressing a user's tracking preference via HTTP.\"",
			"spec_title": "Tracking Preference Expression (DNT)",
			"spec_href": "http://www.w3.org/TR/tracking-dnt/#dnt-header-field"
		},
		{
			"header": "From",
			"description": "\"contains an Internet email address for a human user who controls the requesting user agent.\"",
			"spec_title": "RFC7231#5.5.1",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-5.5.1"
		},
		{
			"header": "Referer",
			"description": "\"allows the user agent to specify a URI reference for the resource from which the target URI was obtained (i.e., the \"referrer\", though the field name is misspelled).\"",
			"spec_title": "RFC7231#5.5.2",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-5.5.2"
		},
		{
			"header": "User-Agent",
			"description": "\"contains information about the user agent originating the request, which is often used by servers to help identify the scope of reported interoperability problems, to work around or tailor responses to avoid particular user agent limitations, and for analytics regarding browser or operating system use.\"",
			"spec_title": "RFC7231#5.5.3",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-5.5.3"
		},
		{
			"header": "Age",
			"description": "\"conveys the sender's estimate of the amount of time since the response was generated or successfully validated at the origin server.\"",
			"spec_title": "RFC7234#5.1",
			"spec_href": "http://tools.ietf.org/html/rfc7234#section-5.1"
		},
		{
			"header": "Cache-Control",
			"description": "\"is used to specify directives for caches along the request/response chain.\"",
			"spec_title": "RFC7234#7.2",
			"spec_href": "http://tools.ietf.org/html/rfc7234#section-7.2"
		},
		{
			"header": "Expires",
			"description": "\"gives the date/time after which the response is considered stale.\"",
			"spec_title": "RFC7234#7.3",
			"spec_href": "http://tools.ietf.org/html/rfc7234#section-7.3"
		},
		{
			"header": "Date",
			"description": "\"represents the date and time at which the message was originated\"",
			"spec_title": "RFC7231#7.1.1.2",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-7.1.1.2"
		},
		{
			"header": "Location",
			"description": "\"is used in some responses to refer to a specific resource in relation to the response.\"",
			"spec_title": "RFC7231#7.1.2",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-7.1.2"
		},
		{
			"header": "Retry-After",
			"description": "\"indicates how long the user agent ought to wait before making a follow-up request.\"",
			"spec_title": "RFC7231#7.1.3",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-7.1.3"
		},
		{
			"header": "Tk",
			"description": "\"defined as an OPTIONAL means for indicating the tracking status that applied to the corresponding request and as a REQUIRED means for indicating that a state-changing request has resulted in an interactive change to the tracking status. \"",
			"spec_title": "Tracking Preference Expression (DNT)",
			"spec_href": "http://www.w3.org/TR/tracking-dnt/#response-header-field"
		},
		{
			"header": "Vary",
			"description": "\"describes what parts of a request message, aside from the method and request target, might influence the origin server's process for selecting and representing the response.\"",
			"spec_title": "RFC7231#7.1.4",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-7.1.4"
		},
		{
			"header": "Warning",
			"description": "\"is used to carry additional information about the status or transformation of a message that might not be reflected in the message.\"",
			"spec_title": "RFC7234#7.6",
			"spec_href": "http://tools.ietf.org/html/rfc7234#section-7.6"
		},
		{
			"header": "ETag",
			"description": "\"provides the current entity-tag for the selected representation, as determined at the conclusion of handling the request.\"",
			"spec_title": "RFC7232#2.3",
			"spec_href": "http://tools.ietf.org/html/rfc7232#section-2.3"
		},
		{
			"header": "Last-Modified",
			"description": "\"provides a timestamp indicating the date and time at which the origin server believes the selected representation was last modified, as determined at the conclusion of handling the request.\"",
			"spec_title": "RFC7232#2.2",
			"spec_href": "http://tools.ietf.org/html/rfc7232#section-2.2"
		},
		{
			"header": "WWW-Authenticate",
			"description": "\"consists of at least one challenge that indicates the authentication scheme(s) and parameters applicable to the effective request URI.\"",
			"spec_title": "RFC7235#4.4",
			"spec_href": "http://tools.ietf.org/html/rfc7235#section-4.4"
		},
		{
			"header": "Proxy-Authenticate",
			"description": "\"consists of at least one challenge that indicates the authentication scheme(s) and parameters applicable to the proxy for this effective request URI.\"",
			"spec_title": "RFC7235#4.2",
			"spec_href": "http://tools.ietf.org/html/rfc7235#section-4.2"
		},
		{
			"header": "Accept-Ranges",
			"description": "\"allows a server to indicate that it supports range requests for the target resource.\"",
			"spec_title": "RFC7233#2.3",
			"spec_href": "http://tools.ietf.org/html/rfc7233#section-2.3"
		},
		{
			"header": "Allow",
			"description": "\"lists the set of methods advertised as supported by the target resource.\"",
			"spec_title": "RFC7231#7.4.1",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-7.4.1"
		},
		{
			"header": "Server",
			"description": "\"contains information about the software used by the origin server to handle the request, which is often used by clients to help identify the scope of reported interoperability problems, to work around or tailor requests to avoid particular server limitations, and for analytics regarding server or operating system use.\"",
			"spec_title": "RFC7231#7.4.2",
			"spec_href": "http://tools.ietf.org/html/rfc7231#section-7.4.2"
		},
		{
			"header": "Accept-Patch",
			"description": "\"used to specify the patch document formats accepted by the server.\"",
			"spec_title": "RFC5789#3.1",
			"spec_href": "http://tools.ietf.org/html/rfc5789#section-3.1"
		},
		{
			"header": "Accept-Post",
			"description": "\"indicates server support for specific media types for entity bodies in HTTP POST requests.\"",
			"spec_title": "draft-wilde-accept-post",
			"spec_href": "http://tools.ietf.org/html/draft-wilde-accept-post"
		},
		{
			"header": "Access-Control-Allow-Credentials",
			"description": "\"indicates whether the response to request can be exposed when the omit credentials flag is unset\"",
			"spec_title": "CORS",
			"spec_href": "http://www.w3.org/TR/cors/#access-control-allow-credentials-response-header"
		},
		{
			"header": "Access-Control-Allow-Headers",
			"description": "\"indicates, as part of the response to a preflight request, which header field names can be used during the actual request\"",
			"spec_title": "CORS",
			"spec_href": "http://www.w3.org/TR/cors/#access-control-allow-headers-response-header"
		},
		{
			"header": "Access-Control-Allow-Methods",
			"description": "\"indicates, as part of the response to a preflight request, which methods can be used during the actual request\"",
			"spec_title": "CORS",
			"spec_href": "http://www.w3.org/TR/cors/#access-control-allow-methods-response-header"
		},
		{
			"header": "Access-Control-Allow-Origin",
			"description": "\"indicates whether a resource can be shared\"",
			"spec_title": "CORS",
			"spec_href": "http://www.w3.org/TR/cors/#access-control-allow-origin-response-header"
		},
		{
			"header": "Access-Control-Expose-Headers",
			"description": "\"indicates which headers are safe to expose to the API of a CORS API specification\"",
			"spec_title": "CORS",
			"spec_href": "http://www.w3.org/TR/cors/#access-control-expose-headers-response-header"
		},
		{
			"header": "Access-Control-Max-Age",
			"description": "\"indicates how long the results of a preflight request can be cached in a preflight result cache\"",
			"spec_title": "CORS",
			"spec_href": "http://www.w3.org/TR/cors/#access-control-max-age-response-header"
		},
		{
			"header": "Access-Control-Request-Headers",
			"description": "\"indicates which headers will be used in the actual request as part of the preflight request\"",
			"spec_title": "CORS",
			"spec_href": "http://www.w3.org/TR/cors/#access-control-request-headers-request-header"
		},
		{
			"header": "Access-Control-Request-Method",
			"description": "\"indicates which method will be used in the actual request as part of the preflight request\"",
			"spec_title": "CORS",
			"spec_href": "http://www.w3.org/TR/cors/#access-control-request-method-request-header"
		},
		{
			"header": "Content-Disposition",
			"description": "\"standard\"",
			"spec_title": "RFC6266",
			"spec_href": "http://tools.ietf.org/html/rfc6266"
		},
		{
			"header": "Content-Security-Policy",
			"description": "\"is the preferred mechanism for delivering a CSP policy\"",
			"spec_title": "CSP",
			"spec_href": "http://www.w3.org/TR/CSP/#content-security-policy-header-field"
		},
		{
			"header": "Content-Security-Policy-Report-Only",
			"description": "\"lets servers experiment with policies by monitoring (rather than enforcing) a policy\"",
			"spec_title": "CSP",
			"spec_href": "http://www.w3.org/TR/CSP/#content-security-policy-report-only-header-field"
		},
		{
			"header": "Cookie",
			"description": "\"standard\"",
			"spec_title": "RFC6265",
			"spec_href": "http://tools.ietf.org/html/rfc6265"
		},
		{
			"header": "Forwarded",
			"description": "\"standard\"",
			"spec_title": "RFC7239",
			"spec_href": "http://tools.ietf.org/html/rfc7239"
		},
		{
			"header": "Link",
			"description": "\"provides a means for serialising one or more links in HTTP headers.\"",
			"spec_title": "RFC5988#5",
			"spec_href": "http://tools.ietf.org/html/rfc5988#section-5"
		},
		{
			"header": "Origin",
			"description": "\"standard\"",
			"spec_title": "RFC6454",
			"spec_href": "http://tools.ietf.org/html/rfc6454"
		},
		{
			"header": "Prefer",
			"description": "\"is used to indicate that particular server behaviors are preferred by the client, but not required for successful completion of the request.\"",
			"spec_title": "draft-snell-http-prefer#2",
			"spec_href": "http://tools.ietf.org/html/draft-snell-http-prefer#section-2"
		},
		{
			"header": "Preference-Applied",
			"description": "\"MAY be included within a response message as an indication as to which Prefer tokens were honored by the server and applied to the processing of a request.\"",
			"spec_title": "draft-snell-http-prefer#3",
			"spec_href": "http://tools.ietf.org/html/draft-snell-http-prefer#section-3"
		},
		{
			"header": "Set-Cookie",
			"description": "\"standard\"",
			"spec_title": "RFC6265",
			"spec_href": "http://tools.ietf.org/html/rfc6265"
		},
		{
			"header": "Strict-Transport-Security",
			"description": "\"standard\"",
			"spec_title": "RFC6797",
			"spec_href": "http://tools.ietf.org/html/rfc6797"
		},
		{
			"header": "Via",
			"description": "\"\"",
			"spec_title": "RFC7230#5.7.1",
			"spec_href": "http://tools.ietf.org/html/rfc7230#section-5.7.1"
		},
		{
			"header": "A-IM",
			"description": "\"\"",
			"spec_title": "RFC3229#10.5.3",
			"spec_href": "http://tools.ietf.org/html/rfc3229#section-10.5.3"
		},
		{
			"header": "Accept-Features",
			"description": "\"can be used by a user agent to give information about the presence or absence of certain features in the feature set of the current request.\"",
			"spec_title": "RFC2295#8.2",
			"spec_href": "http://tools.ietf.org/html/rfc2295#section-8.2"
		},
		{
			"header": "Alt-Svc",
			"description": "\"is advertising the availability of alternate services to HTTP/1.1 and HTTP/2.0 clients by adding an Alt-Svc header field to responses.\"",
			"spec_title": "draft-nottingham-httpbis-alt-svc",
			"spec_href": "http://tools.ietf.org/html/draft-nottingham-httpbis-alt-svc"
		},
		{
			"header": "Alternates",
			"description": "\"is used to convey the list of variants bound to a negotiable resource.\"",
			"spec_title": "RFC2295#8.3",
			"spec_href": "http://tools.ietf.org/html/rfc2295#section-8.3"
		},
		{
			"header": "Apply-To-Redirect-Ref",
			"description": "\"\"",
			"spec_title": "RFC4437",
			"spec_href": "http://tools.ietf.org/html/rfc4437"
		},
		{
			"header": "CH",
			"description": "\"describes an example list of client preferences that the server can use to adapt and optimize the resource to satisfy a given request.\"",
			"spec_title": "draft-grigorik-http-client-hints",
			"spec_href": "http://tools.ietf.org/html/draft-grigorik-http-client-hints"
		},
		{
			"header": "Content-Base",
			"description": "\"obsoleted\"",
			"spec_title": "RFC2068",
			"spec_href": "http://tools.ietf.org/html/rfc2068"
		},
		{
			"header": "Cookie2",
			"description": "\"obsoleted\"",
			"spec_title": "RFC2965",
			"spec_href": "http://tools.ietf.org/html/rfc2965"
		},
		{
			"header": "DASL",
			"description": "\"standard\"",
			"spec_title": "RFC5323",
			"spec_href": "http://tools.ietf.org/html/rfc5323"
		},
		{
			"header": "DAV",
			"description": "\"standard\"",
			"spec_title": "RFC4918",
			"spec_href": "http://tools.ietf.org/html/rfc4918"
		},
		{
			"header": "Delta-Base",
			"description": "\"\"",
			"spec_title": "RFC3229#10.5.1",
			"spec_href": "http://tools.ietf.org/html/rfc3229#section-10.5.1"
		},
		{
			"header": "Depth",
			"description": "\"standard\"",
			"spec_title": "RFC4918",
			"spec_href": "http://tools.ietf.org/html/rfc4918"
		},
		{
			"header": "Destination",
			"description": "\"standard\"",
			"spec_title": "RFC4918",
			"spec_href": "http://tools.ietf.org/html/rfc4918"
		},
		{
			"header": "IM",
			"description": "\"\"",
			"spec_title": "RFC3229#10.5.2",
			"spec_href": "http://tools.ietf.org/html/rfc3229#section-10.5.2"
		},
		{
			"header": "If",
			"description": "\"standard\"",
			"spec_title": "RFC4918",
			"spec_href": "http://tools.ietf.org/html/rfc4918"
		},
		{
			"header": "If-Schedule-Tag-Match",
			"description": "\"standard\"",
			"spec_title": "RFC6638",
			"spec_href": "http://tools.ietf.org/html/rfc6638"
		},
		{
			"header": "Last-Event-ID",
			"description": "\"The value of the event source's last event ID string, encoded as UTF-8.\"",
			"spec_title": "Server-Sent Events",
			"spec_href": "http://www.w3.org/TR/eventsource/#last-event-id"
		},
		{
			"header": "Link-Template",
			"description": "\"provides a means for serialising one or more links into HTTP headers.\"",
			"spec_title": "draft-nottingham-link-template",
			"spec_href": "http://tools.ietf.org/html/draft-nottingham-link-template"
		},
		{
			"header": "Lock-Token",
			"description": "\"standard\"",
			"spec_title": "RFC4918",
			"spec_href": "http://tools.ietf.org/html/rfc4918"
		},
		{
			"header": "Negotiate",
			"description": "\"can contain directives for any content negotiation process initiated by the request.\"",
			"spec_title": "RFC2295#8.4",
			"spec_href": "http://tools.ietf.org/html/rfc2295#section-8.4"
		},
		{
			"header": "Nice",
			"description": "\"indicates that a request is less important than a request that doesn't bear this header.\"",
			"spec_title": "draft-thomson-http-nice",
			"spec_href": "http://tools.ietf.org/html/draft-thomson-http-nice"
		},
		{
			"header": "Overwrite",
			"description": "\"standard\"",
			"spec_title": "RFC4918",
			"spec_href": "http://tools.ietf.org/html/rfc4918"
		},
		{
			"header": "Redirect-Ref",
			"description": "\"\"",
			"spec_title": "RFC4437",
			"spec_href": "http://tools.ietf.org/html/rfc4437"
		},
		{
			"header": "Schedule-Reply",
			"description": "\"standard\"",
			"spec_title": "RFC6638",
			"spec_href": "http://tools.ietf.org/html/rfc6638"
		},
		{
			"header": "Schedule-Tag",
			"description": "\"standard\"",
			"spec_title": "RFC6638",
			"spec_href": "http://tools.ietf.org/html/rfc6638"
		},
		{
			"header": "Sec-WebSocket-Accept",
			"description": "\"standard\"",
			"spec_title": "RFC6455",
			"spec_href": "http://tools.ietf.org/html/rfc6455"
		},
		{
			"header": "Sec-WebSocket-Extensions",
			"description": "\"standard\"",
			"spec_title": "RFC6455",
			"spec_href": "http://tools.ietf.org/html/rfc6455"
		},
		{
			"header": "Sec-WebSocket-Key",
			"description": "\"standard\"",
			"spec_title": "RFC6455",
			"spec_href": "http://tools.ietf.org/html/rfc6455"
		},
		{
			"header": "Sec-WebSocket-Protocol",
			"description": "\"standard\"",
			"spec_title": "RFC6455",
			"spec_href": "http://tools.ietf.org/html/rfc6455"
		},
		{
			"header": "Sec-WebSocket-Version",
			"description": "\"standard\"",
			"spec_title": "RFC6455",
			"spec_href": "http://tools.ietf.org/html/rfc6455"
		},
		{
			"header": "Set-Cookie2",
			"description": "\"obsoleted\"",
			"spec_title": "RFC2965",
			"spec_href": "http://tools.ietf.org/html/rfc2965"
		},
		{
			"header": "SLUG",
			"description": "\"standard\"",
			"spec_title": "RFC5023",
			"spec_href": "http://tools.ietf.org/html/rfc5023"
		},
		{
			"header": "TCN",
			"description": "\"is used by a server to signal that the resource is transparently negotiated.\"",
			"spec_title": "RFC2295#8.5",
			"spec_href": "http://tools.ietf.org/html/rfc2295#section-8.5"
		},
		{
			"header": "Timeout",
			"description": "\"standard\"",
			"spec_title": "RFC4918",
			"spec_href": "http://tools.ietf.org/html/rfc4918"
		},
		{
			"header": "Variant-Vary",
			"description": "\"can be used in a choice response to record any vary information which applies to the variant data (the entity body combined with some of the entity headers) contained in the response, rather than to the response as a whole.\"",
			"spec_title": "RFC2295#8.6",
			"spec_href": "http://tools.ietf.org/html/rfc2295#section-8.6"
		},
		{
			"header": "X-Frame-Options",
			"description": "\"indicates a policy that specifies whether the browser should render the transmitted resource within a <frame> or an <iframe>. Servers can declare this policy in the header of their HTTP responses to prevent clickjacking attacks, which ensures that their content is not embedded into other pages or frames.\"",
			"spec_title": "RFC7034",
			"spec_href": "http://tools.ietf.org/html/rfc7034"
		}
	]

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var _ref,
	    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	  this.Mark = (function() {
	    function Mark(name, line, column, buffer, pointer) {
	      this.name = name;
	      this.line = line;
	      this.column = column;
	      this.buffer = buffer;
	      this.pointer = pointer;
	    }

	    Mark.prototype.get_snippet = function(indent, max_length) {
	      var break_chars, end, head, start, tail, _ref, _ref1;
	      if (indent == null) {
	        indent = 4;
	      }
	      if (max_length == null) {
	        max_length = 75;
	      }
	      if (this.buffer == null) {
	        return null;
	      }
	      break_chars = '\x00\r\n\x85\u2028\u2029';
	      head = '';
	      start = this.pointer;
	      while (start > 0 && (_ref = this.buffer[start - 1], __indexOf.call(break_chars, _ref) < 0)) {
	        start--;
	        if (this.pointer - start > max_length / 2 - 1) {
	          head = ' ... ';
	          start += 5;
	          break;
	        }
	      }
	      tail = '';
	      end = this.pointer;
	      while (end < this.buffer.length && (_ref1 = this.buffer[end], __indexOf.call(break_chars, _ref1) < 0)) {
	        end++;
	        if (end - this.pointer > max_length / 2 - 1) {
	          tail = ' ... ';
	          end -= 5;
	          break;
	        }
	      }
	      return "" + ((new Array(indent)).join(' ')) + head + this.buffer.slice(start, end) + tail + "\n" + ((new Array(indent + this.pointer - start + head.length)).join(' ')) + "^";
	    };

	    Mark.prototype.toString = function() {
	      var snippet, where;
	      snippet = this.get_snippet();
	      where = "  in \"" + this.name + "\", line " + (this.line + 1) + ", column " + (this.column + 1);
	      if (snippet) {
	        return where;
	      } else {
	        return "" + where + ":\n" + snippet;
	      }
	    };

	    return Mark;

	  })();

	  this.YAMLError = (function(_super) {
	    __extends(YAMLError, _super);

	    function YAMLError() {
	      YAMLError.__super__.constructor.call(this);
	    }

	    return YAMLError;

	  })(Error);

	  this.MarkedYAMLError = (function(_super) {
	    __extends(MarkedYAMLError, _super);

	    function MarkedYAMLError(context, context_mark, message, problem_mark, note) {
	      this.context = context;
	      this.context_mark = context_mark;
	      this.message = message;
	      this.problem_mark = problem_mark;
	      this.note = note;
	      MarkedYAMLError.__super__.constructor.call(this);
	      if (!this.message) {
	        this.message = this.context;
	      }
	      if (!this.problem_mark) {
	        this.problem_mark = this.context_mark;
	      }
	    }

	    MarkedYAMLError.prototype.toString = function() {
	      var lines;
	      lines = [];
	      if (this.context != null) {
	        lines.push(this.context);
	      }
	      if ((this.context_mark != null) && ((this.message == null) || (this.problem_mark == null) || this.context_mark.name !== this.problem_mark.name || this.context_mark.line !== this.problem_mark.line || this.context_mark.column !== this.problem_mark.column)) {
	        lines.push(this.context_mark.toString());
	      }
	      if (this.message != null) {
	        lines.push(this.message);
	      }
	      if (this.problem_mark != null) {
	        lines.push(this.problem_mark.toString());
	      }
	      if (this.note != null) {
	        lines.push(this.note);
	      }
	      return lines.join('\n');
	    };

	    return MarkedYAMLError;

	  })(this.YAMLError);

	  /*
	  The Validator throws these.
	  */


	  this.ValidationError = (function(_super) {
	    __extends(ValidationError, _super);

	    function ValidationError() {
	      _ref = ValidationError.__super__.constructor.apply(this, arguments);
	      return _ref;
	    }

	    return ValidationError;

	  })(this.MarkedYAMLError);

	}).call(this);


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var composer, construct, joiner, parser, protocols, reader, resolver, scanner, schemas, securitySchemes, traits, transformations, types, util, validator;

	  util = __webpack_require__(23);

	  reader = __webpack_require__(31);

	  scanner = __webpack_require__(32);

	  parser = __webpack_require__(33);

	  composer = __webpack_require__(34);

	  resolver = __webpack_require__(35);

	  construct = __webpack_require__(36);

	  validator = __webpack_require__(37);

	  joiner = __webpack_require__(38);

	  traits = __webpack_require__(39);

	  types = __webpack_require__(40);

	  schemas = __webpack_require__(41);

	  protocols = __webpack_require__(42);

	  securitySchemes = __webpack_require__(43);

	  transformations = __webpack_require__(44);

	  this.make_loader = function(Reader, Scanner, Parser, Composer, Resolver, Validator, ResourceTypes, Traits, Schemas, Protocols, Joiner, SecuritySchemes, Constructor, Transformations) {
	    if (Reader == null) {
	      Reader = reader.Reader;
	    }
	    if (Scanner == null) {
	      Scanner = scanner.Scanner;
	    }
	    if (Parser == null) {
	      Parser = parser.Parser;
	    }
	    if (Composer == null) {
	      Composer = composer.Composer;
	    }
	    if (Resolver == null) {
	      Resolver = resolver.Resolver;
	    }
	    if (Validator == null) {
	      Validator = validator.Validator;
	    }
	    if (ResourceTypes == null) {
	      ResourceTypes = types.ResourceTypes;
	    }
	    if (Traits == null) {
	      Traits = traits.Traits;
	    }
	    if (Schemas == null) {
	      Schemas = schemas.Schemas;
	    }
	    if (Protocols == null) {
	      Protocols = protocols.Protocols;
	    }
	    if (Joiner == null) {
	      Joiner = joiner.Joiner;
	    }
	    if (SecuritySchemes == null) {
	      SecuritySchemes = securitySchemes.SecuritySchemes;
	    }
	    if (Constructor == null) {
	      Constructor = construct.Constructor;
	    }
	    if (Transformations == null) {
	      Transformations = transformations.Transformations;
	    }
	    return (function() {
	      var component, components;

	      components = [Reader, Scanner, Composer, Transformations, Parser, Resolver, Validator, Traits, ResourceTypes, Schemas, Protocols, Joiner, Constructor, SecuritySchemes];

	      util.extend.apply(util, [_Class.prototype].concat((function() {
	        var _i, _len, _results;
	        _results = [];
	        for (_i = 0, _len = components.length; _i < _len; _i++) {
	          component = components[_i];
	          _results.push(component.prototype);
	        }
	        return _results;
	      })()));

	      function _Class(stream, location, settings, parent) {
	        var _i, _len, _ref;
	        this.parent = parent != null ? parent : null;
	        components[0].call(this, stream, location);
	        components[1].call(this, settings);
	        components[2].call(this, settings);
	        components[3].call(this, settings);
	        _ref = components.slice(4);
	        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	          component = _ref[_i];
	          component.call(this);
	        }
	      }

	      return _Class;

	    })();
	  };

	  this.Loader = this.make_loader();

	}).call(this);


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var __slice = [].slice,
	    __hasProp = {}.hasOwnProperty;

	  this.extend = function() {
	    var destination, k, source, sources, v, _i, _len;
	    destination = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
	    for (_i = 0, _len = sources.length; _i < _len; _i++) {
	      source = sources[_i];
	      for (k in source) {
	        v = source[k];
	        destination[k] = v;
	      }
	    }
	    return destination;
	  };

	  this.is_empty = function(obj) {
	    var key;
	    if (Array.isArray(obj) || typeof obj === 'string') {
	      return obj.length === 0;
	    }
	    for (key in obj) {
	      if (!__hasProp.call(obj, key)) continue;
	      return false;
	    }
	    return true;
	  };

	  this.isNoop = function(node) {
	    return node;
	  };

	  this.isMapping = function(node) {
	    return (node != null ? node.tag : void 0) === "tag:yaml.org,2002:map";
	  };

	  this.isNull = function(node) {
	    return (node != null ? node.tag : void 0) === "tag:yaml.org,2002:null";
	  };

	  this.isSequence = function(node) {
	    return (node != null ? node.tag : void 0) === "tag:yaml.org,2002:seq";
	  };

	  this.isString = function(node) {
	    return (node != null ? node.tag : void 0) === "tag:yaml.org,2002:str";
	  };

	  this.isInteger = function(node) {
	    return (node != null ? node.tag : void 0) === "tag:yaml.org,2002:int";
	  };

	  this.isNullableMapping = function(node) {
	    return this.isMapping(node) || this.isNull(node);
	  };

	  this.isNullableString = function(node) {
	    return this.isString(node) || this.isNull(node);
	  };

	  this.isNullableSequence = function(node) {
	    return this.isSequence(node) || this.isNull(node);
	  };

	  this.isNumber = function(node) {
	    return (node != null ? node.tag : void 0) === 'tag:yaml.org,2002:int' || (node != null ? node.tag : void 0) === 'tag:yaml.org,2002:float';
	  };

	  this.isScalar = function(node) {
	    return (node != null ? node.tag : void 0) === 'tag:yaml.org,2002:null' || (node != null ? node.tag : void 0) === 'tag:yaml.org,2002:bool' || (node != null ? node.tag : void 0) === 'tag:yaml.org,2002:int' || (node != null ? node.tag : void 0) === 'tag:yaml.org,2002:float' || (node != null ? node.tag : void 0) === 'tag:yaml.org,2002:binary' || (node != null ? node.tag : void 0) === 'tag:yaml.org,2002:timestamp' || (node != null ? node.tag : void 0) === 'tag:yaml.org,2002:str';
	  };

	  this.isCollection = function(node) {
	    return (node != null ? node.tag : void 0) === 'tag:yaml.org,2002:omap' || (node != null ? node.tag : void 0) === 'tag:yaml.org,2002:pairs' || (node != null ? node.tag : void 0) === 'tag:yaml.org,2002:set' || (node != null ? node.tag : void 0) === 'tag:yaml.org,2002:seq' || (node != null ? node.tag : void 0) === 'tag:yaml.org,2002:map';
	  };

	}).call(this);


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var MarkedYAMLError, unique_id, _ref, _ref1, _ref2,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	  MarkedYAMLError = __webpack_require__(21).MarkedYAMLError;

	  unique_id = 0;

	  this.ApplicationError = (function(_super) {
	    __extends(ApplicationError, _super);

	    function ApplicationError() {
	      _ref = ApplicationError.__super__.constructor.apply(this, arguments);
	      return _ref;
	    }

	    return ApplicationError;

	  })(MarkedYAMLError);

	  this.Node = (function() {
	    function Node(tag, value, start_mark, end_mark) {
	      this.tag = tag;
	      this.value = value;
	      this.start_mark = start_mark;
	      this.end_mark = end_mark;
	      this.unique_id = "node_" + (unique_id++);
	    }

	    Node.prototype.clone = function() {
	      var temp;
	      temp = new this.constructor(this.tag, this.value, this.start_mark, this.end_mark);
	      return temp;
	    };

	    return Node;

	  })();

	  this.ScalarNode = (function(_super) {
	    __extends(ScalarNode, _super);

	    ScalarNode.prototype.id = 'scalar';

	    function ScalarNode(tag, value, start_mark, end_mark, style) {
	      this.tag = tag;
	      this.value = value;
	      this.start_mark = start_mark;
	      this.end_mark = end_mark;
	      this.style = style;
	      ScalarNode.__super__.constructor.apply(this, arguments);
	    }

	    ScalarNode.prototype.clone = function() {
	      var temp;
	      temp = new this.constructor(this.tag, this.value, this.start_mark, this.end_mark, this.style);
	      return temp;
	    };

	    ScalarNode.prototype.cloneRemoveIs = function() {
	      return this.clone();
	    };

	    ScalarNode.prototype.combine = function(node) {
	      if (this.tag === 'tag:yaml.org,2002:null' && node.tag === 'tag:yaml.org,2002:map') {
	        this.value = new exports.MappingNode('tag:yaml.org,2002:map', [], node.start_mark, node.end_mark);
	        return this.value.combine(node);
	      } else if (!(node instanceof exports.ScalarNode)) {
	        throw new exports.ApplicationError('while applying node', null, 'different YAML structures', this.start_mark);
	      }
	      return this.value = node.value;
	    };

	    ScalarNode.prototype.remove_question_mark_properties = function() {};

	    return ScalarNode;

	  })(this.Node);

	  this.CollectionNode = (function(_super) {
	    __extends(CollectionNode, _super);

	    function CollectionNode(tag, value, start_mark, end_mark, flow_style) {
	      this.tag = tag;
	      this.value = value;
	      this.start_mark = start_mark;
	      this.end_mark = end_mark;
	      this.flow_style = flow_style;
	      CollectionNode.__super__.constructor.apply(this, arguments);
	    }

	    return CollectionNode;

	  })(this.Node);

	  this.SequenceNode = (function(_super) {
	    __extends(SequenceNode, _super);

	    function SequenceNode() {
	      _ref1 = SequenceNode.__super__.constructor.apply(this, arguments);
	      return _ref1;
	    }

	    SequenceNode.prototype.id = 'sequence';

	    SequenceNode.prototype.clone = function() {
	      var item, items, temp, value, _i, _len, _ref2;
	      items = [];
	      _ref2 = this.value;
	      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
	        item = _ref2[_i];
	        value = item.clone();
	        items.push(value);
	      }
	      temp = new this.constructor(this.tag, items, this.start_mark, this.end_mark, this.flow_style);
	      return temp;
	    };

	    SequenceNode.prototype.cloneRemoveIs = function() {
	      return this.clone();
	    };

	    SequenceNode.prototype.combine = function(node) {
	      var property, value, _i, _len, _ref2, _results;
	      if (!(node instanceof exports.SequenceNode)) {
	        throw new exports.ApplicationError('while applying node', null, 'different YAML structures', this.start_mark);
	      }
	      _ref2 = node.value;
	      _results = [];
	      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
	        property = _ref2[_i];
	        value = property.clone();
	        _results.push(this.value.push(value));
	      }
	      return _results;
	    };

	    SequenceNode.prototype.remove_question_mark_properties = function() {
	      var item, _i, _len, _ref2, _results;
	      _ref2 = this.value;
	      _results = [];
	      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
	        item = _ref2[_i];
	        _results.push(item.remove_question_mark_properties());
	      }
	      return _results;
	    };

	    return SequenceNode;

	  })(this.CollectionNode);

	  this.MappingNode = (function(_super) {
	    __extends(MappingNode, _super);

	    function MappingNode() {
	      _ref2 = MappingNode.__super__.constructor.apply(this, arguments);
	      return _ref2;
	    }

	    MappingNode.prototype.id = 'mapping';

	    MappingNode.prototype.clone = function() {
	      var name, properties, property, temp, value, _i, _len, _ref3;
	      properties = [];
	      _ref3 = this.value;
	      for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
	        property = _ref3[_i];
	        name = property[0].clone();
	        value = property[1].clone();
	        properties.push([name, value]);
	      }
	      temp = new this.constructor(this.tag, properties, this.start_mark, this.end_mark, this.flow_style);
	      return temp;
	    };

	    MappingNode.prototype.cloneRemoveIs = function() {
	      var name, properties, property, temp, value, _i, _len, _ref3, _ref4;
	      properties = [];
	      _ref3 = this.value;
	      for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
	        property = _ref3[_i];
	        name = property[0].cloneRemoveIs();
	        value = property[1].cloneRemoveIs();
	        if ((_ref4 = name.value) !== 'is') {
	          properties.push([name, value]);
	        }
	      }
	      temp = new this.constructor(this.tag, properties, this.start_mark, this.end_mark, this.flow_style);
	      return temp;
	    };

	    MappingNode.prototype.cloneForTrait = function() {
	      var name, properties, property, temp, value, _i, _len, _ref3, _ref4;
	      properties = [];
	      _ref3 = this.value;
	      for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
	        property = _ref3[_i];
	        name = property[0].clone();
	        value = property[1].clone();
	        if ((_ref4 = name.value) !== 'usage' && _ref4 !== 'displayName') {
	          properties.push([name, value]);
	        }
	      }
	      temp = new this.constructor(this.tag, properties, this.start_mark, this.end_mark, this.flow_style);
	      return temp;
	    };

	    MappingNode.prototype.cloneForResourceType = function() {
	      var name, properties, property, temp, value, _i, _len, _ref3, _ref4;
	      properties = [];
	      _ref3 = this.value;
	      for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
	        property = _ref3[_i];
	        name = property[0].cloneRemoveIs();
	        value = property[1].cloneRemoveIs();
	        if ((_ref4 = name.value) !== 'is' && _ref4 !== 'type' && _ref4 !== 'usage' && _ref4 !== 'displayName') {
	          properties.push([name, value]);
	        }
	      }
	      temp = new this.constructor(this.tag, properties, this.start_mark, this.end_mark, this.flow_style);
	      return temp;
	    };

	    MappingNode.prototype.combine = function(resourceNode) {
	      var name, node_has_property, nonNullNode, ownNodeProperty, ownNodePropertyName, resourceProperty, _i, _len, _ref3, _results;
	      if (resourceNode.tag === 'tag:yaml.org,2002:null') {
	        resourceNode = new exports.MappingNode('tag:yaml.org,2002:map', [], resourceNode.start_mark, resourceNode.end_mark);
	      }
	      if (!(resourceNode instanceof exports.MappingNode)) {
	        throw new exports.ApplicationError('while applying node', null, 'different YAML structures', this.start_mark);
	      }
	      _ref3 = resourceNode.value;
	      _results = [];
	      for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
	        resourceProperty = _ref3[_i];
	        name = resourceProperty[0].value;
	        node_has_property = this.value.some(function(someProperty) {
	          return (someProperty[0].value === name) || ((someProperty[0].value + '?') === name) || (someProperty[0].value === (name + '?'));
	        });
	        if (node_has_property) {
	          _results.push((function() {
	            var _j, _len1, _ref4, _results1;
	            _ref4 = this.value;
	            _results1 = [];
	            for (_j = 0, _len1 = _ref4.length; _j < _len1; _j++) {
	              ownNodeProperty = _ref4[_j];
	              ownNodePropertyName = ownNodeProperty[0].value;
	              if ((ownNodePropertyName === name) || ((ownNodePropertyName + '?') === name) || (ownNodePropertyName === (name + '?'))) {
	                if ((ownNodeProperty[1].tag === 'tag:yaml.org,2002:null') && (resourceProperty[1].tag === 'tag:yaml.org,2002:map')) {
	                  nonNullNode = new exports.MappingNode('tag:yaml.org,2002:map', [], ownNodeProperty[1].start_mark, ownNodeProperty[1].end_mark);
	                  ownNodeProperty[1] = nonNullNode;
	                }
	                ownNodeProperty[1].combine(resourceProperty[1]);
	                if (!((ownNodeProperty[0].value.slice(-1) === '?') && (resourceProperty[0].value.slice(-1) === '?'))) {
	                  if (ownNodeProperty[0].value.slice(-1) === '?') {
	                    _results1.push(ownNodeProperty[0].value = ownNodeProperty[0].value.slice(0, -1));
	                  } else {
	                    _results1.push(void 0);
	                  }
	                } else {
	                  _results1.push(void 0);
	                }
	              } else {
	                _results1.push(void 0);
	              }
	            }
	            return _results1;
	          }).call(this));
	        } else {
	          _results.push(this.value.push([resourceProperty[0].clone(), resourceProperty[1].clone()]));
	        }
	      }
	      return _results;
	    };

	    MappingNode.prototype.remove_question_mark_properties = function() {
	      var property, _i, _len, _ref3, _results;
	      this.value = this.value.filter(function(property) {
	        return property[0].value.slice(-1) !== '?';
	      });
	      _ref3 = this.value;
	      _results = [];
	      for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
	        property = _ref3[_i];
	        _results.push(property[1].remove_question_mark_properties());
	      }
	      return _results;
	    };

	    return MappingNode;

	  })(this.CollectionNode);

	}).call(this);


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	(function() {
	  var build_lookup_map, lookup_map;

	  lookup_map = null;

	  module.exports = function(tag) {
	    return (lookup_map != null ? lookup_map : lookup_map = build_lookup_map())[tag.toLowerCase()] === true;
	  };

	  build_lookup_map = function() {
	    var all, k, map, obsolete, obsolete_self_closing, regular, self_closing, _i, _len;
	    regular = 'a abbr address article aside audio b bdi bdo blockquote body button canvas caption cite code colgroup datalist dd del details dfn div dl dt em fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup html i iframe ins kbd label legend li map mark menu meter nav noscript object ol optgroup option output p pre progress q rp rt ruby s samp script section select small span strong style sub summary sup table tbody td textarea tfoot th thead time title tr u ul var video';
	    self_closing = 'area base br col command embed hr img input keygen link meta param source track wbr';
	    obsolete = 'applet acronym bgsound dir frameset noframes isindex listing nextid noembed plaintext rb strike xmp big blink center font marquee multicol nobr spacer tt';
	    obsolete_self_closing = 'basefont frame';
	    all = [regular, self_closing, obsolete, obsolete_self_closing].join(' ').split(' ');
	    map = {};
	    for (_i = 0, _len = all.length; _i < _len; _i++) {
	      k = all[_i];
	      if (k !== ' ') {
	        map[k.trim()] = true;
	      }
	    }
	    return map;
	  };

	}).call(this);


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.6.3
	(function() {
	  var stackval;

	  stackval = __webpack_require__(53);

	  module.exports = function() {
	    var sv, x;
	    sv = stackval();
	    x = function(value) {
	      return sv.get().push(value);
	    };
	    x.attach = function(f) {
	      return function() {
	        var collected, f2;
	        collected = [];
	        f2 = sv.attach(f, function() {
	          return collected;
	        });
	        return collected.concat([f2.apply(this, arguments)]);
	      };
	    };
	    x.run = function(f) {
	      return x.attach(f)();
	    };
	    x.defined = function() {
	      return sv.defined();
	    };
	    x.collect = x;
	    return x;
	  };

	}).call(this);


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	(function() {
	  module.exports = (function() {
	    var line, obj, p, parts, s, _i, _len, _ref;
	    s = "actionsheet             Ext.ActionSheet\naudio                   Ext.Audio\nbutton                  Ext.Button\ncomponent               Ext.Component\ncontainer               Ext.Container\nimage                   Ext.Img\nlabel                   Ext.Label\nloadmask                Ext.LoadMask\nmap                     Ext.Map\nmask                    Ext.Mask\nmedia                   Ext.Media\npanel                   Ext.Panel\nsegmentedbutton         Ext.SegmentedButton\nsheet                   Ext.Sheet\nspacer                  Ext.Spacer\ntitle                   Ext.Title\ntitlebar                Ext.TitleBar\ntoolbar                 Ext.Toolbar\nvideo                   Ext.Video\ncarousel                Ext.carousel.Carousel\ncarouselindicator       Ext.carousel.Indicator\nnavigationview          Ext.navigation.View\ndatepicker              Ext.picker.Date\npicker                  Ext.picker.Picker\npickerslot              Ext.picker.Slot\nslider                  Ext.slider.Slider\nthumb                   Ext.slider.Thumb\ntabbar                  Ext.tab.Bar\ntabpanel                Ext.tab.Panel\ntab                     Ext.tab.Tab\nviewport                Ext.viewport.Default\ndataview                Ext.dataview.DataView\nlist                    Ext.dataview.List\nlistitemheader          Ext.dataview.ListItemHeader\nnestedlist              Ext.dataview.NestedList\ndataitem                Ext.dataview.component.DataItem\ncheckboxfield           Ext.field.Checkbox\ndatepickerfield         Ext.field.DatePicker\nemailfield              Ext.field.Email\nfield                   Ext.field.Field\nhiddenfield             Ext.field.Hidden\ninput                   Ext.field.Input\nnumberfield             Ext.field.Number\npasswordfield           Ext.field.Password\nradiofield              Ext.field.Radio\nsearchfield             Ext.field.Search\nselectfield             Ext.field.Select\nsliderfield             Ext.field.Slider\nspinnerfield            Ext.field.Spinner\ntextfield               Ext.field.Text\ntextareafield           Ext.field.TextArea\ntextareainput           Ext.field.TextAreaInput\ntogglefield             Ext.field.Toggle\nurlfield                Ext.field.Url\nfieldset                Ext.form.FieldSet\nformpanel               Ext.form.Panel\nmenu                    Ext.Menu";
	    obj = {};
	    _ref = s.split("\n");
	    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	      line = _ref[_i];
	      if (!(line.trim() !== '')) {
	        continue;
	      }
	      parts = (function() {
	        var _j, _len1, _ref1, _results;
	        _ref1 = line.split(" ");
	        _results = [];
	        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
	          p = _ref1[_j];
	          if (p !== '') {
	            _results.push(p);
	          }
	        }
	        return _results;
	      })();
	      obj[parts[0]] = parts[1];
	    }
	    return obj;
	  })();

	}).call(this);


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.6.3
	(function() {
	  var Binding, EQ;

	  module.exports = function(opts) {
	    return new Binding(opts);
	  };

	  EQ = function(x, y) {
	    return x === y;
	  };

	  Binding = (function() {
	    function Binding(_arg) {
	      this.get_a = _arg.get_a, this.get_b = _arg.get_b, this.set_a = _arg.set_a, this.set_b = _arg.set_b, this.equals = _arg.equals;
	      if (this.equals == null) {
	        this.equals = EQ;
	      }
	    }

	    Binding.prototype._run = function(func) {
	      if (this._m !== true) {
	        this._m = true;
	        func();
	        return this._m = false;
	      }
	    };

	    Binding.prototype.touch_a = function() {
	      var _this = this;
	      return this._run(function() {
	        var v;
	        if (!_this.equals(_this.get_b(), v = _this.get_a())) {
	          return _this.set_b(v);
	        }
	      });
	    };

	    Binding.prototype.touch_b = function() {
	      var _this = this;
	      return this._run(function() {
	        var v;
	        if (!_this.equals(_this.get_a(), v = _this.get_b())) {
	          return _this.set_a(v);
	        }
	      });
	    };

	    return Binding;

	  })();

	}).call(this);


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.6.3
	(function() {
	  var lazy, memoize, memoize_async, serial, _;

	  _ = __webpack_require__(54);

	  serial = 0;

	  module.exports = lazy = function(f) {
	    var id;
	    id = '___lazy___' + (serial++);
	    return function() {
	      if (typeof this[id] !== 'function') {
	        this[id] = memoize(f);
	      }
	      return this[id].apply(this, arguments);
	    };
	  };

	  lazy.async = function(f) {
	    var id;
	    id = '___lazy___' + (serial++);
	    return function() {
	      if (typeof this[id] !== 'function') {
	        this[id] = memoize_async(f);
	      }
	      return this[id].apply(this, arguments);
	    };
	  };

	  memoize = function(f) {
	    return _.memoize(f);
	  };

	  memoize_async = function(f) {
	    var cache, pending;
	    cache = {};
	    pending = {};
	    return function() {
	      var args, cb, key,
	        _this = this;
	      args = Array.prototype.slice.apply(arguments);
	      cb = args.pop();
	      key = JSON.stringify(args);
	      if (cache[key] != null) {
	        return process.nextTick(function() {
	          return cb(null, cache[key]);
	        });
	      } else if (pending[key] != null) {
	        return pending[key].push(cb);
	      } else {
	        pending[key] = [cb];
	        return f.apply(this, args.concat(function(e, r) {
	          var finish;
	          finish = function(e, r) {
	            var c, p, _i, _len;
	            p = pending[key];
	            for (_i = 0, _len = p.length; _i < _len; _i++) {
	              c = p[_i];
	              c(e, r);
	            }
	            return delete pending[key];
	          };
	          if (e != null) {
	            return finish(e);
	          }
	          return finish(null, cache[key] = r);
	        }));
	      }
	    };
	  };

	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var punycode = __webpack_require__(55);

	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;

	exports.Url = Url;

	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}

	// Reference: RFC 3986, RFC 1808, RFC 2396

	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,

	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = __webpack_require__(57);

	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && isObject(url) && url instanceof Url) return url;

	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}

	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }

	  var rest = url;

	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();

	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }

	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }

	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {

	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c

	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.

	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }

	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }

	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }

	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;

	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);

	    // pull out port.
	    this.parseHost();

	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';

	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';

	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }

	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }

	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a puny coded representation of "domain".
	      // It only converts the part of the domain name that
	      // has non ASCII characters. I.e. it dosent matter if
	      // you call it with a domain that already is in ASCII.
	      var domainArray = this.hostname.split('.');
	      var newOut = [];
	      for (var i = 0; i < domainArray.length; ++i) {
	        var s = domainArray[i];
	        newOut.push(s.match(/[^A-Za-z0-9_-]/) ?
	            'xn--' + punycode.encode(s) : s);
	      }
	      this.hostname = newOut.join('.');
	    }

	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;

	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }

	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {

	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }


	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }

	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }

	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};

	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}

	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }

	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';

	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }

	  if (this.query &&
	      isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }

	  var search = this.search || (query && ('?' + query)) || '';

	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }

	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;

	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');

	  return protocol + host + pathname + search + hash;
	};

	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}

	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};

	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}

	Url.prototype.resolveObject = function(relative) {
	  if (isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }

	  var result = new Url();
	  Object.keys(this).forEach(function(k) {
	    result[k] = this[k];
	  }, this);

	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;

	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }

	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    Object.keys(relative).forEach(function(k) {
	      if (k !== 'protocol')
	        result[k] = relative[k];
	    });

	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }

	    result.href = result.format();
	    return result;
	  }

	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      Object.keys(relative).forEach(function(k) {
	        result[k] = relative[k];
	      });
	      result.href = result.format();
	      return result;
	    }

	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }

	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];

	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }

	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especialy happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!isNull(result.pathname) || !isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }

	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }

	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host) && (last === '.' || last === '..') ||
	      last === '');

	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last == '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }

	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }

	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }

	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');

	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especialy happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }

	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }

	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }

	  //to support request.http
	  if (!isNull(result.pathname) || !isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};

	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};

	function isString(arg) {
	  return typeof arg === "string";
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isNull(arg) {
	  return arg === null;
	}
	function isNullOrUndefined(arg) {
	  return  arg == null;
	}


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var Mark, MarkedYAMLError, _ref, _ref1,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	  _ref = __webpack_require__(21), Mark = _ref.Mark, MarkedYAMLError = _ref.MarkedYAMLError;

	  this.ReaderError = (function(_super) {
	    __extends(ReaderError, _super);

	    function ReaderError() {
	      _ref1 = ReaderError.__super__.constructor.apply(this, arguments);
	      return _ref1;
	    }

	    return ReaderError;

	  })(MarkedYAMLError);

	  /*
	  Reader:
	    checks if characters are within the allowed range
	    add '\x00' to the end
	  */


	  this.Reader = (function() {
	    var NON_PRINTABLE;

	    NON_PRINTABLE = /[^\x09\x0A\x0D\x20-\x7E\x85\xA0-\uD7FF\uE000-\uFFFD]/;

	    function Reader(string, src) {
	      this.string = string;
	      this.src = src;
	      this.line = 0;
	      this.column = 0;
	      this.index = 0;
	      this.string += '\x00';
	    }

	    Reader.prototype.peek = function(index) {
	      if (index == null) {
	        index = 0;
	      }
	      return this.string[this.index + index];
	    };

	    Reader.prototype.prefix = function(length) {
	      if (length == null) {
	        length = 1;
	      }
	      return this.string.slice(this.index, this.index + length);
	    };

	    Reader.prototype.forward = function(length) {
	      var char, _results;
	      if (length == null) {
	        length = 1;
	      }
	      _results = [];
	      while (length) {
	        char = this.string[this.index];
	        this.index++;
	        if (__indexOf.call('\n\x85\u2082\u2029', char) >= 0 || (char === '\r' && this.string[this.index] !== '\n')) {
	          this.line++;
	          this.column = 0;
	        } else {
	          this.check_printable(char);
	          this.column++;
	        }
	        _results.push(length--);
	      }
	      return _results;
	    };

	    Reader.prototype.create_mark = function(line, column) {
	      if (line == null) {
	        line = this.line;
	      }
	      if (column == null) {
	        column = this.column;
	      }
	      return new Mark(this.src, line, column, this.string, this.index);
	    };

	    Reader.prototype.get_mark = function() {
	      return this.create_mark();
	    };

	    Reader.prototype.check_printable = function(char) {
	      if (NON_PRINTABLE.exec(char)) {
	        throw new exports.ReaderError('while reading file', null, "non printable characters are not allowed column: " + (this.get_mark().column), this.get_mark());
	      }
	    };

	    return Reader;

	  })();

	}).call(this);


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var MarkedYAMLError, SimpleKey, tokens, util, _ref,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    __slice = [].slice,
	    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	  MarkedYAMLError = __webpack_require__(21).MarkedYAMLError;

	  tokens = __webpack_require__(48);

	  util = __webpack_require__(23);

	  /*
	  The Scanner throws these.
	  */


	  this.ScannerError = (function(_super) {
	    __extends(ScannerError, _super);

	    function ScannerError() {
	      _ref = ScannerError.__super__.constructor.apply(this, arguments);
	      return _ref;
	    }

	    return ScannerError;

	  })(MarkedYAMLError);

	  /*
	  Represents a possible simple key.
	  */


	  SimpleKey = (function() {
	    function SimpleKey(token_number, required, index, line, column, mark) {
	      this.token_number = token_number;
	      this.required = required;
	      this.index = index;
	      this.line = line;
	      this.column = column;
	      this.mark = mark;
	    }

	    return SimpleKey;

	  })();

	  /*
	  The Scanner class deals with converting a YAML stream into a token stream.
	  */


	  this.Scanner = (function() {
	    var C_LB, C_NUMBERS, C_WS, ESCAPE_CODES, ESCAPE_REPLACEMENTS, RAML_VERSION, RAML_VERSION_RE;

	    C_LB = '\r\n\x85\u2028\u2029';

	    C_WS = '\t ';

	    C_NUMBERS = '0123456789';

	    ESCAPE_REPLACEMENTS = {
	      '0': '\x00',
	      'a': '\x07',
	      'b': '\x08',
	      't': '\x09',
	      '\t': '\x09',
	      'n': '\x0A',
	      'v': '\x0B',
	      'f': '\x0C',
	      'r': '\x0D',
	      'e': '\x1B',
	      ' ': '\x20',
	      '"': '"',
	      '\\': '\\',
	      'N': '\x85',
	      '_': '\xA0',
	      'L': '\u2028',
	      'P': '\u2029'
	    };

	    ESCAPE_CODES = {
	      'x': 2,
	      'u': 4,
	      'U': 8
	    };

	    RAML_VERSION = '#%RAML 0.8';

	    RAML_VERSION_RE = /^#%RAML .+$/;

	    /*
	    Initialise the Scanner
	    */


	    function Scanner(settings) {
	      this.settings = settings;
	      this.done = false;
	      this.ramlHeaderFound = !this.settings.validate;
	      this.flow_level = 0;
	      this.tokens = [];
	      this.fetch_stream_start();
	      this.tokens_taken = 0;
	      this.indent = -1;
	      this.indents = [];
	      this.allow_simple_key = true;
	      this.possible_simple_keys = {};
	    }

	    /*
	    Check if the next token is one of the given types.
	    */


	    Scanner.prototype.check_token = function() {
	      var choice, choices, _i, _len;
	      choices = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	      while (this.need_more_tokens()) {
	        this.fetch_more_tokens();
	      }
	      if (this.tokens.length !== 0) {
	        if (choices.length === 0) {
	          return true;
	        }
	        for (_i = 0, _len = choices.length; _i < _len; _i++) {
	          choice = choices[_i];
	          if (this.tokens[0] instanceof choice) {
	            return true;
	          }
	        }
	      }
	      return false;
	    };

	    /*
	    Return the next token, but do not delete it from the queue.
	    */


	    Scanner.prototype.peek_token = function() {
	      while (this.need_more_tokens()) {
	        this.fetch_more_tokens();
	      }
	      if (this.tokens.length !== 0) {
	        return this.tokens[0];
	      }
	    };

	    /*
	    Return the next token, and remove it from the queue.
	    */


	    Scanner.prototype.get_token = function() {
	      while (this.need_more_tokens()) {
	        this.fetch_more_tokens();
	      }
	      if (this.tokens.length !== 0) {
	        this.tokens_taken++;
	        return this.tokens.shift();
	      }
	    };

	    Scanner.prototype.need_more_tokens = function() {
	      if (this.done) {
	        return false;
	      }
	      if (this.tokens.length === 0) {
	        return true;
	      }
	      this.stale_possible_simple_keys();
	      if (this.next_possible_simple_key() === this.tokens_taken) {
	        return true;
	      }
	      return false;
	    };

	    Scanner.prototype.fetch_more_tokens = function() {
	      var char;
	      this.scan_to_next_token();
	      this.stale_possible_simple_keys();
	      this.unwind_indent(this.column);
	      char = this.peek();
	      if (char === '\x00') {
	        return this.fetch_stream_end();
	      }
	      if (char === '%' && this.check_directive()) {
	        return this.fetch_directive();
	      }
	      if (char === '-' && this.check_document_start()) {
	        return this.fetch_document_start();
	      }
	      if (char === '.' && this.check_document_end()) {
	        return this.fetch_document_end();
	      }
	      if (char === '[') {
	        return this.fetch_flow_sequence_start();
	      }
	      if (char === '{') {
	        return this.fetch_flow_mapping_start();
	      }
	      if (char === ']') {
	        return this.fetch_flow_sequence_end();
	      }
	      if (char === '}') {
	        return this.fetch_flow_mapping_end();
	      }
	      if (char === ',') {
	        return this.fetch_flow_entry();
	      }
	      if (char === '-' && this.check_block_entry()) {
	        return this.fetch_block_entry();
	      }
	      if (char === '?' && this.check_key()) {
	        return this.fetch_key();
	      }
	      if (char === ':' && this.check_value()) {
	        return this.fetch_value();
	      }
	      if (char === '*') {
	        return this.fetch_alias();
	      }
	      if (char === '&') {
	        return this.fetch_anchor();
	      }
	      if (char === '!') {
	        return this.fetch_tag();
	      }
	      if (char === '|' && this.flow_level === 0) {
	        return this.fetch_literal();
	      }
	      if (char === '>' && this.flow_level === 0) {
	        return this.fetch_folded();
	      }
	      if (char === '\'') {
	        return this.fetch_single();
	      }
	      if (char === '"') {
	        return this.fetch_double();
	      }
	      if (this.check_plain()) {
	        return this.fetch_plain();
	      }
	      throw new exports.ScannerError('while scanning for the next token', null, "found character " + char + " that cannot start any token", this.get_mark());
	    };

	    /*
	    Return the number of the nearest possible simple key.
	    */


	    Scanner.prototype.next_possible_simple_key = function() {
	      var key, level, min_token_number, _ref1;
	      min_token_number = null;
	      _ref1 = this.possible_simple_keys;
	      for (level in _ref1) {
	        if (!__hasProp.call(_ref1, level)) continue;
	        key = _ref1[level];
	        if (min_token_number === null || key.token_number < min_token_number) {
	          min_token_number = key.token_number;
	        }
	      }
	      return min_token_number;
	    };

	    /*
	    Remove entries that are no longer possible simple keys.  According to the
	    YAML spec, simple keys:
	      should be limited to a single line
	      should be no longer than 1024 characters
	    Disabling this procedure will allow simple keys of any length and height
	    (may cause problems if indentation is broken though).
	    */


	    Scanner.prototype.stale_possible_simple_keys = function() {
	      var key, level, _ref1, _results;
	      _ref1 = this.possible_simple_keys;
	      _results = [];
	      for (level in _ref1) {
	        if (!__hasProp.call(_ref1, level)) continue;
	        key = _ref1[level];
	        if (key.line === this.line && this.index - key.index <= 1024) {
	          continue;
	        }
	        if (!key.required) {
	          _results.push(delete this.possible_simple_keys[level]);
	        } else {
	          throw new exports.ScannerError('while scanning a simple key', key.mark, 'could not find expected \':\'', this.get_mark());
	        }
	      }
	      return _results;
	    };

	    /*
	    The next token may start a simple key.  We check if it's possible and save
	    its position.  This function is called for ALIAS, ANCHOR, TAG,
	    SCALAR (flow),'[' and '{'.
	    */


	    Scanner.prototype.save_possible_simple_key = function() {
	      var required, token_number;
	      required = this.flow_level === 0 && this.indent === this.column;
	      if (required && !this.allow_simple_key) {
	        throw new Error('logic failure');
	      }
	      if (!this.allow_simple_key) {
	        return;
	      }
	      this.remove_possible_simple_key();
	      token_number = this.tokens_taken + this.tokens.length;
	      return this.possible_simple_keys[this.flow_level] = new SimpleKey(token_number, required, this.index, this.line, this.column, this.get_mark());
	    };

	    /*
	    Remove the saved possible simple key at the current flow level.
	    */


	    Scanner.prototype.remove_possible_simple_key = function() {
	      var key;
	      if (!(key = this.possible_simple_keys[this.flow_level])) {
	        return;
	      }
	      if (!key.required) {
	        return delete this.possible_simple_keys[this.flow_level];
	      } else {
	        throw new exports.ScannerError('while scanning a simple key', key.mark, 'could not find expected \':\'', this.get_mark());
	      }
	    };

	    /*
	    In flow context, tokens should respect indentation.
	    Actually the condition should be `self.indent >= column` according to
	    the spec. But this condition will prohibit intuitively correct
	    constructions such as
	      key : {
	      }
	    */


	    Scanner.prototype.unwind_indent = function(column) {
	      var mark, _results;
	      if (this.flow_level !== 0) {
	        return;
	      }
	      _results = [];
	      while (this.indent > column) {
	        mark = this.get_mark();
	        this.indent = this.indents.pop();
	        _results.push(this.tokens.push(new tokens.BlockEndToken(mark, mark)));
	      }
	      return _results;
	    };

	    /*
	    Check if we need to increase indentation.
	    */


	    Scanner.prototype.add_indent = function(column) {
	      if (!(column > this.indent)) {
	        return false;
	      }
	      this.indents.push(this.indent);
	      this.indent = column;
	      return true;
	    };

	    Scanner.prototype.fetch_stream_start = function() {
	      var mark;
	      mark = this.get_mark();
	      return this.tokens.push(new tokens.StreamStartToken(mark, mark, this.encoding));
	    };

	    Scanner.prototype.fetch_stream_end = function() {
	      var mark;
	      this.unwind_indent(-1);
	      this.remove_possible_simple_key();
	      this.allow_possible_simple_key = false;
	      this.possible_simple_keys = {};
	      mark = this.get_mark();
	      this.tokens.push(new tokens.StreamEndToken(mark, mark));
	      return this.done = true;
	    };

	    Scanner.prototype.fetch_directive = function() {
	      this.unwind_indent(-1);
	      this.remove_possible_simple_key();
	      this.allow_simple_key = false;
	      return this.tokens.push(this.scan_directive());
	    };

	    Scanner.prototype.fetch_document_start = function() {
	      return this.fetch_document_indicator(tokens.DocumentStartToken);
	    };

	    Scanner.prototype.fetch_document_end = function() {
	      return this.fetch_document_indicator(tokens.DocumentEndToken);
	    };

	    Scanner.prototype.fetch_document_indicator = function(TokenClass) {
	      var start_mark;
	      this.unwind_indent(-1);
	      this.remove_possible_simple_key();
	      this.allow_simple_key = false;
	      start_mark = this.get_mark();
	      this.forward(3);
	      return this.tokens.push(new TokenClass(start_mark, this.get_mark()));
	    };

	    Scanner.prototype.fetch_flow_sequence_start = function() {
	      return this.fetch_flow_collection_start(tokens.FlowSequenceStartToken);
	    };

	    Scanner.prototype.fetch_flow_mapping_start = function() {
	      return this.fetch_flow_collection_start(tokens.FlowMappingStartToken);
	    };

	    Scanner.prototype.fetch_flow_collection_start = function(TokenClass) {
	      var start_mark;
	      this.save_possible_simple_key();
	      this.flow_level++;
	      this.allow_simple_key = true;
	      start_mark = this.get_mark();
	      this.forward();
	      return this.tokens.push(new TokenClass(start_mark, this.get_mark()));
	    };

	    Scanner.prototype.fetch_flow_sequence_end = function() {
	      return this.fetch_flow_collection_end(tokens.FlowSequenceEndToken);
	    };

	    Scanner.prototype.fetch_flow_mapping_end = function() {
	      return this.fetch_flow_collection_end(tokens.FlowMappingEndToken);
	    };

	    Scanner.prototype.fetch_flow_collection_end = function(TokenClass) {
	      var start_mark;
	      this.remove_possible_simple_key();
	      this.flow_level--;
	      this.allow_simple_key = false;
	      start_mark = this.get_mark();
	      this.forward();
	      return this.tokens.push(new TokenClass(start_mark, this.get_mark()));
	    };

	    Scanner.prototype.fetch_flow_entry = function() {
	      var start_mark;
	      this.allow_simple_key = true;
	      this.remove_possible_simple_key();
	      start_mark = this.get_mark();
	      this.forward();
	      return this.tokens.push(new tokens.FlowEntryToken(start_mark, this.get_mark()));
	    };

	    Scanner.prototype.fetch_block_entry = function() {
	      var mark, start_mark;
	      if (this.flow_level === 0) {
	        if (!this.allow_simple_key) {
	          throw new exports.ScannerError(null, null, 'sequence entries are not allowed here', this.get_mark());
	        }
	        if (this.add_indent(this.column)) {
	          mark = this.get_mark();
	          this.tokens.push(new tokens.BlockSequenceStartToken(mark, mark));
	        }
	      }
	      this.allow_simple_key = true;
	      this.remove_possible_simple_key();
	      start_mark = this.get_mark();
	      this.forward();
	      return this.tokens.push(new tokens.BlockEntryToken(start_mark, this.get_mark()));
	    };

	    Scanner.prototype.fetch_key = function() {
	      var mark, start_mark;
	      if (this.flow_level === 0) {
	        if (!this.allow_simple_key) {
	          throw new exports.ScannerError(null, null, 'mapping keys are not allowed here', this.get_mark());
	        }
	        if (this.add_indent(this.column)) {
	          mark = this.get_mark();
	          this.tokens.push(new tokens.BlockMappingStartToken(mark, mark));
	        }
	      }
	      this.allow_simple_key = !this.flow_level;
	      this.remove_possible_simple_key();
	      start_mark = this.get_mark();
	      this.forward();
	      return this.tokens.push(new tokens.KeyToken(start_mark, this.get_mark()));
	    };

	    Scanner.prototype.fetch_value = function() {
	      var key, mark, start_mark;
	      if (key = this.possible_simple_keys[this.flow_level]) {
	        delete this.possible_simple_keys[this.flow_level];
	        this.tokens.splice(key.token_number - this.tokens_taken, 0, new tokens.KeyToken(key.mark, key.mark));
	        if (this.flow_level === 0) {
	          if (this.add_indent(key.column)) {
	            this.tokens.splice(key.token_number - this.tokens_taken, 0, new tokens.BlockMappingStartToken(key.mark, key.mark));
	          }
	        }
	        this.allow_simple_key = false;
	      } else {
	        if (this.flow_level === 0) {
	          if (!this.allow_simple_key) {
	            throw new exports.ScannerError(null, null, 'mapping values are not allowed here', this.get_mark());
	          }
	          if (this.add_indent(this.column)) {
	            mark = this.get_mark();
	            this.tokens.push(new tokens.BlockMappingStartToken(mark, mark));
	          }
	        }
	        this.allow_simple_key = !this.flow_level;
	        this.remove_possible_simple_key();
	      }
	      start_mark = this.get_mark();
	      this.forward();
	      return this.tokens.push(new tokens.ValueToken(start_mark, this.get_mark()));
	    };

	    Scanner.prototype.fetch_alias = function() {
	      this.save_possible_simple_key();
	      this.allow_simple_key = false;
	      return this.tokens.push(this.scan_anchor(tokens.AliasToken));
	    };

	    Scanner.prototype.fetch_anchor = function() {
	      this.save_possible_simple_key();
	      this.allow_simple_key = false;
	      return this.tokens.push(this.scan_anchor(tokens.AnchorToken));
	    };

	    Scanner.prototype.fetch_tag = function() {
	      this.save_possible_simple_key();
	      this.allow_simple_key = false;
	      return this.tokens.push(this.scan_tag());
	    };

	    Scanner.prototype.fetch_literal = function() {
	      return this.fetch_block_scalar('|');
	    };

	    Scanner.prototype.fetch_folded = function() {
	      return this.fetch_block_scalar('>');
	    };

	    Scanner.prototype.fetch_block_scalar = function(style) {
	      this.allow_simple_key = true;
	      this.remove_possible_simple_key();
	      return this.tokens.push(this.scan_block_scalar(style));
	    };

	    Scanner.prototype.fetch_single = function() {
	      return this.fetch_flow_scalar('\'');
	    };

	    Scanner.prototype.fetch_double = function() {
	      return this.fetch_flow_scalar('"');
	    };

	    Scanner.prototype.fetch_flow_scalar = function(style) {
	      this.save_possible_simple_key();
	      this.allow_simple_key = false;
	      return this.tokens.push(this.scan_flow_scalar(style));
	    };

	    Scanner.prototype.fetch_plain = function() {
	      this.save_possible_simple_key();
	      this.allow_simple_key = false;
	      return this.tokens.push(this.scan_plain());
	    };

	    /*
	    DIRECTIVE: ^ '%'
	    */


	    Scanner.prototype.check_directive = function() {
	      if (this.column === 0) {
	        return true;
	      }
	      return false;
	    };

	    /*
	    DOCUMENT-START: ^ '---' (' '|'\n')
	    */


	    Scanner.prototype.check_document_start = function() {
	      var _ref1;
	      if (this.column === 0 && this.prefix(3) === '---' && (_ref1 = this.peek(3), __indexOf.call(C_LB + C_WS + '\x00', _ref1) >= 0)) {
	        return true;
	      }
	      return false;
	    };

	    /*
	    DOCUMENT-END: ^ '...' (' '|'\n')
	    */


	    Scanner.prototype.check_document_end = function() {
	      var _ref1;
	      if (this.column === 0 && this.prefix(3) === '...' && (_ref1 = this.peek(3), __indexOf.call(C_LB + C_WS + '\x00', _ref1) >= 0)) {
	        return true;
	      }
	      return false;
	    };

	    /*
	    BLOCK-ENTRY: '-' (' '|'\n')
	    */


	    Scanner.prototype.check_block_entry = function() {
	      var _ref1;
	      return _ref1 = this.peek(1), __indexOf.call(C_LB + C_WS + '\x00', _ref1) >= 0;
	    };

	    /*
	    KEY (flow context):  '?'
	    KEY (block context): '?' (' '|'\n')
	    */


	    Scanner.prototype.check_key = function() {
	      var _ref1;
	      if (this.flow_level !== 0) {
	        return true;
	      }
	      return _ref1 = this.peek(1), __indexOf.call(C_LB + C_WS + '\x00', _ref1) >= 0;
	    };

	    /*
	    VALUE (flow context):  ':'
	    VALUE (block context): ':' (' '|'\n')
	    */


	    Scanner.prototype.check_value = function() {
	      var _ref1;
	      if (this.flow_level !== 0) {
	        return true;
	      }
	      return _ref1 = this.peek(1), __indexOf.call(C_LB + C_WS + '\x00', _ref1) >= 0;
	    };

	    /*
	    A plain scalar may start with any non-space character except:
	      '-', '?', ':', ',', '[', ']', '{', '}',
	      '#', '&', '*', '!', '|', '>', '\'', '"',
	      '%', '@', '`'.
	    
	    It may also start with
	      '-', '?', ':'
	    if it is followed by a non-space character.
	    
	    Note that we limit the last rule to the block context (except the '-'
	    character) because we want the flow context to be space independent.
	    */


	    Scanner.prototype.check_plain = function() {
	      var char, _ref1;
	      char = this.peek();
	      return __indexOf.call(C_LB + C_WS + '\x00-?:,[]{}#&*!|>\'"%@`', char) < 0 || ((_ref1 = this.peek(1), __indexOf.call(C_LB + C_WS + '\x00', _ref1) < 0) && (char === '-' || (this.flow_level === 0 && __indexOf.call('?:', char) >= 0)));
	    };

	    /*
	    We ignore spaces, line breaks and comments.
	    If we find a line break in the block context, we set the flag
	    `allow_simple_key` on.
	    The byte order mark is stripped if it's the first character in the stream.
	    We do not yet support BOM inside the stream as the specification requires.
	    Any such mark will be considered as a part of the document.
	    
	    TODO: We need to make tab handling rules more sane.  A good rule is
	      Tabs cannot precede tokens BLOCK-SEQUENCE-START, BLOCK-MAPPING-START,
	      BLOCK-END, KEY (block context), VALUE (block context), BLOCK-ENTRY
	    So the tab checking code is
	      @allow_simple_key = off if <TAB>
	    We also need to add the check for `allow_simple_key is on` to
	    `unwind_indent` before issuing BLOCK-END.  Scanners for block, flow and
	    plain scalars need to be modified.
	    */


	    Scanner.prototype.scan_to_next_token = function() {
	      var comment, found, trimmedComment, _ref1, _results;
	      if (this.index === 0 && this.peek() === '\uFEFF') {
	        this.forward();
	      }
	      found = false;
	      _results = [];
	      while (!found) {
	        while (this.peek() === ' ') {
	          this.forward();
	        }
	        comment = '';
	        if (this.peek() === '#') {
	          while (_ref1 = this.peek(), __indexOf.call(C_LB + '\x00', _ref1) < 0) {
	            if (!this.ramlHeaderFound) {
	              comment += this.peek();
	            }
	            this.forward();
	          }
	        }
	        if (!this.ramlHeaderFound) {
	          trimmedComment = comment.trim();
	          if (trimmedComment && RAML_VERSION_RE.test(trimmedComment)) {
	            if (trimmedComment === RAML_VERSION) {
	              this.ramlHeaderFound = true;
	            } else {
	              throw new exports.ScannerError('version validation', null, "Unsupported RAML version: '" + comment + "'", this.create_mark(0, 0));
	            }
	          } else {
	            throw new exports.ScannerError('version validation', null, "The first line must be: '" + RAML_VERSION + "'", this.create_mark(0, 0));
	          }
	        }
	        if (this.scan_line_break()) {
	          if (this.flow_level === 0) {
	            _results.push(this.allow_simple_key = true);
	          } else {
	            _results.push(void 0);
	          }
	        } else {
	          _results.push(found = true);
	        }
	      }
	      return _results;
	    };

	    /*
	    See the specification for details.
	    */


	    Scanner.prototype.scan_directive = function() {
	      var end_mark, name, start_mark, value, _ref1;
	      start_mark = this.get_mark();
	      this.forward();
	      name = this.scan_directive_name(start_mark);
	      value = null;
	      if (name === 'YAML') {
	        value = this.scan_yaml_directive_value(start_mark);
	        end_mark = this.get_mark();
	      } else if (name === 'TAG') {
	        value = this.scan_tag_directive_value(start_mark);
	        end_mark = this.get_mark();
	      } else {
	        end_mark = this.get_mark();
	        while (_ref1 = this.peek(), __indexOf.call(C_LB + '\x00', _ref1) < 0) {
	          this.forward();
	        }
	      }
	      this.scan_directive_ignored_line(start_mark);
	      return new tokens.DirectiveToken(name, value, start_mark, end_mark);
	    };

	    /*
	    See the specification for details.
	    */


	    Scanner.prototype.scan_directive_name = function(start_mark) {
	      var char, length, value;
	      length = 0;
	      char = this.peek(length);
	      while (('0' <= char && char <= '9') || ('A' <= char && char <= 'Z') || ('a' <= char && char <= 'z') || __indexOf.call('-_', char) >= 0) {
	        length++;
	        char = this.peek(length);
	      }
	      if (length === 0) {
	        throw new exports.ScannerError('while scanning a directive', start_mark, "expected alphanumeric or numeric character but found " + char, this.get_mark());
	      }
	      value = this.prefix(length);
	      this.forward(length);
	      char = this.peek();
	      if (__indexOf.call(C_LB + '\x00 ', char) < 0) {
	        throw new exports.ScannerError('while scanning a directive', start_mark, "expected alphanumeric or numeric character but found " + char, this.get_mark());
	      }
	      return value;
	    };

	    /*
	    See the specification for details.
	    */


	    Scanner.prototype.scan_yaml_directive_value = function(start_mark) {
	      var major, minor, _ref1;
	      while (this.peek() === ' ') {
	        this.forward();
	      }
	      major = this.scan_yaml_directive_number(start_mark);
	      if (this.peek() !== '.') {
	        throw new exports.ScannerError('while scanning a directive', start_mark, "expected a digit or '.' but found " + (this.peek()), this.get_mark());
	      }
	      this.forward();
	      minor = this.scan_yaml_directive_number(start_mark);
	      if (_ref1 = this.peek(), __indexOf.call(C_LB + '\x00 ', _ref1) < 0) {
	        throw new exports.ScannerError('while scanning a directive', start_mark, "expected a digit or ' ' but found " + (this.peek()), this.get_mark());
	      }
	      return [major, minor];
	    };

	    /*
	    See the specification for details.
	    */


	    Scanner.prototype.scan_yaml_directive_number = function(start_mark) {
	      var char, length, value, _ref1;
	      char = this.peek();
	      if (!(('0' <= char && char <= '9'))) {
	        throw new exports.ScannerError('while scanning a directive', start_mark, "expected a digit but found " + char, this.get_mark());
	      }
	      length = 0;
	      while (('0' <= (_ref1 = this.peek(length)) && _ref1 <= '9')) {
	        length++;
	      }
	      value = parseInt(this.prefix(length));
	      this.forward(length);
	      return value;
	    };

	    /*
	    See the specification for details.
	    */


	    Scanner.prototype.scan_tag_directive_value = function(start_mark) {
	      var handle, prefix;
	      while (this.peek() === ' ') {
	        this.forward();
	      }
	      handle = this.scan_tag_directive_handle(start_mark);
	      while (this.peek() === ' ') {
	        this.forward();
	      }
	      prefix = this.scan_tag_directive_prefix(start_mark);
	      return [handle, prefix];
	    };

	    /*
	    See the specification for details.
	    */


	    Scanner.prototype.scan_tag_directive_handle = function(start_mark) {
	      var char, value;
	      value = this.scan_tag_handle('directive', start_mark);
	      char = this.peek();
	      if (char !== ' ') {
	        throw new exports.ScannerError('while scanning a directive', start_mark, "expected ' ' but found " + char, this.get_mark());
	      }
	      return value;
	    };

	    /*
	    See the specification for details.
	    */


	    Scanner.prototype.scan_tag_directive_prefix = function(start_mark) {
	      var char, value;
	      value = this.scan_tag_uri('directive', start_mark);
	      char = this.peek();
	      if (__indexOf.call(C_LB + '\x00 ', char) < 0) {
	        throw new exports.ScannerError('while scanning a directive', start_mark, "expected ' ' but found " + char, this.get_mark());
	      }
	      return value;
	    };

	    /*
	    See the specification for details.
	    */


	    Scanner.prototype.scan_directive_ignored_line = function(start_mark) {
	      var char, _ref1;
	      while (this.peek() === ' ') {
	        this.forward();
	      }
	      if (this.peek() === '#') {
	        while (_ref1 = this.peek(), __indexOf.call(C_LB + '\x00', _ref1) < 0) {
	          this.forward();
	        }
	      }
	      char = this.peek();
	      if (__indexOf.call(C_LB + '\x00', char) < 0) {
	        throw new exports.ScannerError('while scanning a directive', start_mark, "expected a comment or a line break but found " + char, this.get_mark());
	      }
	      return this.scan_line_break();
	    };

	    /*
	    The specification does not restrict characters for anchors and aliases.
	    This may lead to problems, for instance, the document:
	      [ *alias, value ]
	    can be interpteted in two ways, as
	      [ "value" ]
	    and
	      [ *alias , "value" ]
	    Therefore we restrict aliases to numbers and ASCII letters.
	    */


	    Scanner.prototype.scan_anchor = function(TokenClass) {
	      var char, indicator, length, name, start_mark, value;
	      start_mark = this.get_mark();
	      indicator = this.peek();
	      if (indicator === '*') {
	        name = 'alias';
	      } else {
	        name = 'anchor';
	      }
	      this.forward();
	      length = 0;
	      char = this.peek(length);
	      while (('0' <= char && char <= '9') || ('A' <= char && char <= 'Z') || ('a' <= char && char <= 'z') || __indexOf.call('-_', char) >= 0) {
	        length++;
	        char = this.peek(length);
	      }
	      if (length === 0) {
	        throw new exports.ScannerError("while scanning an " + name, start_mark, "expected alphabetic or numeric character but found '" + char + "'", this.get_mark());
	      }
	      value = this.prefix(length);
	      this.forward(length);
	      char = this.peek();
	      if (__indexOf.call(C_LB + C_WS + '\x00' + '?:,]}%@`', char) < 0) {
	        throw new exports.ScannerError("while scanning an " + name, start_mark, "expected alphabetic or numeric character but found '" + char + "'", this.get_mark());
	      }
	      return new TokenClass(value, start_mark, this.get_mark());
	    };

	    /*
	    See the specification for details.
	    */


	    Scanner.prototype.scan_tag = function() {
	      var char, handle, length, start_mark, suffix, use_handle;
	      start_mark = this.get_mark();
	      char = this.peek(1);
	      if (char === '<') {
	        handle = null;
	        this.forward(2);
	        suffix = this.scan_tag_uri('tag', start_mark);
	        if (this.peek() !== '>') {
	          throw new exports.ScannerError('while parsing a tag', start_mark, "expected '>' but found " + (this.peek()), this.get_mark());
	        }
	        this.forward();
	      } else if (__indexOf.call(C_LB + C_WS + '\x00', char) >= 0) {
	        handle = null;
	        suffix = '!';
	        this.forward();
	      } else {
	        length = 1;
	        use_handle = false;
	        while (__indexOf.call(C_LB + '\x00 ', char) < 0) {
	          if (char === '!') {
	            use_handle = true;
	            break;
	          }
	          length++;
	          char = this.peek(length);
	        }
	        if (use_handle) {
	          handle = this.scan_tag_handle('tag', start_mark);
	        } else {
	          handle = '!';
	          this.forward();
	        }
	        suffix = this.scan_tag_uri('tag', start_mark);
	      }
	      char = this.peek();
	      if (__indexOf.call(C_LB + '\x00 ', char) < 0) {
	        throw new exports.ScannerError('while scanning a tag', start_mark, "expected ' ' but found " + char, this.get_mark());
	      }
	      return new tokens.TagToken([handle, suffix], start_mark, this.get_mark());
	    };

	    /*
	    See the specification for details.
	    */


	    Scanner.prototype.scan_block_scalar = function(style) {
	      var breaks, chomping, chunks, end_mark, folded, increment, indent, leading_non_space, length, line_break, max_indent, min_indent, start_mark, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7;
	      folded = style === '>';
	      chunks = [];
	      start_mark = this.get_mark();
	      this.forward();
	      _ref1 = this.scan_block_scalar_indicators(start_mark), chomping = _ref1[0], increment = _ref1[1];
	      this.scan_block_scalar_ignored_line(start_mark);
	      min_indent = this.indent + 1;
	      if (min_indent < 1) {
	        min_indent = 1;
	      }
	      if (increment == null) {
	        _ref2 = this.scan_block_scalar_indentation(), breaks = _ref2[0], max_indent = _ref2[1], end_mark = _ref2[2];
	        indent = Math.max(min_indent, max_indent);
	      } else {
	        indent = min_indent + increment - 1;
	        _ref3 = this.scan_block_scalar_breaks(indent), breaks = _ref3[0], end_mark = _ref3[1];
	      }
	      line_break = '';
	      while (this.column === indent && this.peek() !== '\x00') {
	        chunks = chunks.concat(breaks);
	        leading_non_space = (_ref4 = this.peek(), __indexOf.call(' \t', _ref4) < 0);
	        length = 0;
	        while (_ref5 = this.peek(length), __indexOf.call(C_LB + '\x00', _ref5) < 0) {
	          length++;
	        }
	        chunks.push(this.prefix(length));
	        this.forward(length);
	        line_break = this.scan_line_break();
	        _ref6 = this.scan_block_scalar_breaks(indent), breaks = _ref6[0], end_mark = _ref6[1];
	        if (this.column === indent && this.peek() !== '\x00') {
	          if (folded && line_break === '\n' && leading_non_space && (_ref7 = this.peek(), __indexOf.call(' \t', _ref7) < 0)) {
	            if (util.is_empty(breaks)) {
	              chunks.push(' ');
	            }
	          } else {
	            chunks.push(line_break);
	          }
	        } else {
	          break;
	        }
	      }
	      if (chomping !== false) {
	        chunks.push(line_break);
	      }
	      if (chomping === true) {
	        chunks = chunks.concat(breaks);
	      }
	      return new tokens.ScalarToken(chunks.join(''), false, start_mark, end_mark, style);
	    };

	    /*
	    See the specification for details.
	    */


	    Scanner.prototype.scan_block_scalar_indicators = function(start_mark) {
	      var char, chomping, increment;
	      chomping = null;
	      increment = null;
	      char = this.peek();
	      if (__indexOf.call('+-', char) >= 0) {
	        chomping = char === '+';
	        this.forward();
	        char = this.peek();
	        if (__indexOf.call(C_NUMBERS, char) >= 0) {
	          increment = parseInt(char);
	          if (increment === 0) {
	            throw new exports.ScannerError('while scanning a block scalar', start_mark, 'expected indentation indicator in the range 1-9 but found 0', this.get_mark());
	          }
	          this.forward();
	        }
	      } else if (__indexOf.call(C_NUMBERS, char) >= 0) {
	        increment = parseInt(char);
	        if (increment === 0) {
	          throw new exports.ScannerError('while scanning a block scalar', start_mark, 'expected indentation indicator in the range 1-9 but found 0', this.get_mark());
	        }
	        this.forward();
	        char = this.peek();
	        if (__indexOf.call('+-', char) >= 0) {
	          chomping = char === '+';
	          this.forward();
	        }
	      }
	      char = this.peek();
	      if (__indexOf.call(C_LB + '\x00 ', char) < 0) {
	        throw new exports.ScannerError('while scanning a block scalar', start_mark, "expected chomping or indentation indicators, but found " + char, this.get_mark());
	      }
	      return [chomping, increment];
	    };

	    /*
	    See the specification for details.
	    */


	    Scanner.prototype.scan_block_scalar_ignored_line = function(start_mark) {
	      var char, _ref1;
	      while (this.peek() === ' ') {
	        this.forward();
	      }
	      if (this.peek() === '#') {
	        while (_ref1 = this.peek(), __indexOf.call(C_LB + '\x00', _ref1) < 0) {
	          this.forward();
	        }
	      }
	      char = this.peek();
	      if (__indexOf.call(C_LB + '\x00', char) < 0) {
	        throw new exports.ScannerError('while scanning a block scalar', start_mark, "expected a comment or a line break but found " + char, this.get_mark());
	      }
	      return this.scan_line_break();
	    };

	    /*
	    See the specification for details.
	    */


	    Scanner.prototype.scan_block_scalar_indentation = function() {
	      var chunks, end_mark, max_indent, _ref1;
	      chunks = [];
	      max_indent = 0;
	      end_mark = this.get_mark();
	      while (_ref1 = this.peek(), __indexOf.call(C_LB + ' ', _ref1) >= 0) {
	        if (this.peek() !== ' ') {
	          chunks.push(this.scan_line_break());
	          end_mark = this.get_mark();
	        } else {
	          this.forward();
	          if (this.column > max_indent) {
	            max_indent = this.column;
	          }
	        }
	      }
	      return [chunks, max_indent, end_mark];
	    };

	    /*
	    See the specification for details.
	    */


	    Scanner.prototype.scan_block_scalar_breaks = function(indent) {
	      var chunks, end_mark, _ref1;
	      chunks = [];
	      end_mark = this.get_mark();
	      while (this.column < indent && this.peek() === ' ') {
	        this.forward();
	      }
	      while (_ref1 = this.peek(), __indexOf.call(C_LB, _ref1) >= 0) {
	        chunks.push(this.scan_line_break());
	        end_mark = this.get_mark();
	        while (this.column < indent && this.peek() === ' ') {
	          this.forward();
	        }
	      }
	      return [chunks, end_mark];
	    };

	    /*
	    See the specification for details.
	    Note that we loose indentation rules for quoted scalars. Quoted scalars
	    don't need to adhere indentation because " and ' clearly mark the beginning
	    and the end of them. Therefore we are less restrictive than the
	    specification requires. We only need to check that document separators are
	    not included in scalars.
	    */


	    Scanner.prototype.scan_flow_scalar = function(style) {
	      var chunks, double, quote, start_mark;
	      double = style === '"';
	      chunks = [];
	      start_mark = this.get_mark();
	      quote = this.peek();
	      this.forward();
	      chunks = chunks.concat(this.scan_flow_scalar_non_spaces(double, start_mark));
	      while (this.peek() !== quote) {
	        chunks = chunks.concat(this.scan_flow_scalar_spaces(double, start_mark));
	        chunks = chunks.concat(this.scan_flow_scalar_non_spaces(double, start_mark));
	      }
	      this.forward();
	      return new tokens.ScalarToken(chunks.join(''), false, start_mark, this.get_mark(), style);
	    };

	    /*
	    See the specification for details.
	    */


	    Scanner.prototype.scan_flow_scalar_non_spaces = function(double, start_mark) {
	      var char, chunks, code, k, length, _i, _ref1, _ref2;
	      chunks = [];
	      while (true) {
	        length = 0;
	        while (_ref1 = this.peek(length), __indexOf.call(C_LB + C_WS + '\'"\\\x00', _ref1) < 0) {
	          length++;
	        }
	        if (length !== 0) {
	          chunks.push(this.prefix(length));
	          this.forward(length);
	        }
	        char = this.peek();
	        if (!double && char === '\'' && this.peek(1) === '\'') {
	          chunks.push('\'');
	          this.forward(2);
	        } else if ((double && char === '\'') || (!double && __indexOf.call('"\\', char) >= 0)) {
	          chunks.push(char);
	          this.forward();
	        } else if (double && char === '\\') {
	          this.forward();
	          char = this.peek();
	          if (char in ESCAPE_REPLACEMENTS) {
	            chunks.push(ESCAPE_REPLACEMENTS[char]);
	            this.forward();
	          } else if (char in ESCAPE_CODES) {
	            length = ESCAPE_CODES[char];
	            this.forward();
	            for (k = _i = 0; 0 <= length ? _i < length : _i > length; k = 0 <= length ? ++_i : --_i) {
	              if (_ref2 = this.peek(k), __indexOf.call(C_NUMBERS + 'ABCDEFabcdef', _ref2) < 0) {
	                throw new exports.ScannerError('while scanning a double-quoted scalar', start_mark, "expected escape sequence of " + length + " hexadecimal numbers, but found " + (this.peek(k)), this.get_mark());
	              }
	            }
	            code = parseInt(this.prefix(length), 16);
	            chunks.push(String.fromCharCode(code));
	            this.forward(length);
	          } else if (__indexOf.call(C_LB, char) >= 0) {
	            this.scan_line_break();
	            chunks = chunks.concat(this.scan_flow_scalar_breaks(double, start_mark));
	          } else {
	            throw new exports.ScannerError('while scanning a double-quoted scalar', start_mark, "found unknown escape character " + char, this.get_mark());
	          }
	        } else {
	          return chunks;
	        }
	      }
	    };

	    /*
	    See the specification for details.
	    */


	    Scanner.prototype.scan_flow_scalar_spaces = function(double, start_mark) {
	      var breaks, char, chunks, length, line_break, whitespaces, _ref1;
	      chunks = [];
	      length = 0;
	      while (_ref1 = this.peek(length), __indexOf.call(C_WS, _ref1) >= 0) {
	        length++;
	      }
	      whitespaces = this.prefix(length);
	      this.forward(length);
	      char = this.peek();
	      if (char === '\x00') {
	        throw new exports.ScannerError('while scanning a quoted scalar', start_mark, 'found unexpected end of stream', this.get_mark());
	      }
	      if (__indexOf.call(C_LB, char) >= 0) {
	        line_break = this.scan_line_break();
	        breaks = this.scan_flow_scalar_breaks(double, start_mark);
	        if (line_break !== '\n') {
	          chunks.push(line_break);
	        } else if (!breaks) {
	          chunks.push(' ');
	        }
	        chunks = chunks.concat(breaks);
	      } else {
	        chunks.push(whitespaces);
	      }
	      return chunks;
	    };

	    /*
	    See the specification for details.
	    */


	    Scanner.prototype.scan_flow_scalar_breaks = function(double, start_mark) {
	      var chunks, prefix, _ref1, _ref2, _ref3;
	      chunks = [];
	      while (true) {
	        prefix = this.prefix(3);
	        if (prefix === '---' || prefix === '...' && (_ref1 = this.peek(3), __indexOf.call(C_LB + C_WS + '\x00', _ref1) >= 0)) {
	          throw new exports.ScannerError('while scanning a quoted scalar', start_mark, 'found unexpected document separator', this.get_mark());
	        }
	        while (_ref2 = this.peek(), __indexOf.call(C_WS, _ref2) >= 0) {
	          this.forward();
	        }
	        if (_ref3 = this.peek(), __indexOf.call(C_LB, _ref3) >= 0) {
	          chunks.push(this.scan_line_break());
	        } else {
	          return chunks;
	        }
	      }
	    };

	    /*
	    See the specification for details.
	    We add an additional restriction for the flow context:
	      plain scalars in the flow context cannot contain ',', ':' and '?'.
	    We also keep track of the `allow_simple_key` flag here.
	    Indentation rules are loosed for the flow context.
	    */


	    Scanner.prototype.scan_plain = function() {
	      var char, chunks, end_mark, indent, length, spaces, start_mark, _ref1, _ref2;
	      chunks = [];
	      start_mark = end_mark = this.get_mark();
	      indent = this.indent + 1;
	      spaces = [];
	      while (true) {
	        length = 0;
	        if (this.peek() === '#') {
	          break;
	        }
	        while (true) {
	          char = this.peek(length);
	          if (__indexOf.call(C_LB + C_WS + '\x00', char) >= 0 || (this.flow_level === 0 && char === ':' && (_ref1 = this.peek(length + 1), __indexOf.call(C_LB + C_WS + '\x00', _ref1) >= 0)) || (this.flow_level !== 0 && __indexOf.call(',:?[]{}', char) >= 0)) {
	            break;
	          }
	          length++;
	        }
	        if (this.flow_level !== 0 && char === ':' && (_ref2 = this.peek(length + 1), __indexOf.call(C_LB + C_WS + '\x00,[]{}', _ref2) < 0)) {
	          this.forward(length);
	          throw new exports.ScannerError('while scanning a plain scalar', start_mark, 'found unexpected \':\'', this.get_mark(), 'Please check http://pyyaml.org/wiki/YAMLColonInFlowContext');
	        }
	        if (length === 0) {
	          break;
	        }
	        this.allow_simple_key = false;
	        chunks = chunks.concat(spaces);
	        chunks.push(this.prefix(length));
	        this.forward(length);
	        end_mark = this.get_mark();
	        spaces = this.scan_plain_spaces(indent, start_mark);
	        if ((spaces == null) || spaces.length === 0 || this.peek() === '#' || (this.flow_level === 0 && this.column < indent)) {
	          break;
	        }
	      }
	      return new tokens.ScalarToken(chunks.join(''), true, start_mark, end_mark);
	    };

	    /*
	    See the specification for details.
	    The specification is really confusing about tabs in plain scalars.
	    We just forbid them completely. Do not use tabs in YAML!
	    */


	    Scanner.prototype.scan_plain_spaces = function(indent, start_mark) {
	      var breaks, char, chunks, length, line_break, prefix, whitespaces, _ref1, _ref2;
	      chunks = [];
	      length = 0;
	      while (_ref1 = this.peek(length), __indexOf.call(' ', _ref1) >= 0) {
	        length++;
	      }
	      whitespaces = this.prefix(length);
	      this.forward(length);
	      char = this.peek();
	      if (__indexOf.call(C_LB, char) >= 0) {
	        line_break = this.scan_line_break();
	        this.allow_simple_key = true;
	        prefix = this.prefix(3);
	        if (prefix === '---' || prefix === '...' && this.peek(__indexOf.call(C_LB + C_WS + '\x00', 3) >= 0)) {
	          return;
	        }
	        breaks = [];
	        while (_ref2 = this.peek(), __indexOf.call(C_LB + ' ', _ref2) >= 0) {
	          if (this.peek() === ' ') {
	            this.forward();
	          } else {
	            breaks.push(this.scan_line_break());
	            prefix = this.prefix(3);
	            if (prefix === '---' || prefix === '...' && this.peek(__indexOf.call(C_LB + C_WS + '\x00', 3) >= 0)) {
	              return;
	            }
	          }
	        }
	        if (line_break !== '\n') {
	          chunks.push(line_break);
	        } else if (breaks.length === 0) {
	          chunks.push(' ');
	        }
	        chunks = chunks.concat(breaks);
	      } else if (whitespaces) {
	        chunks.push(whitespaces);
	      }
	      return chunks;
	    };

	    /*
	    See the specification for details.
	    For some strange reasons, the specification does not allow '_' in tag
	    handles. I have allowed it anyway.
	    */


	    Scanner.prototype.scan_tag_handle = function(name, start_mark) {
	      var char, length, value;
	      char = this.peek();
	      if (char !== '!') {
	        throw new exports.ScannerError("while scanning a " + name, start_mark, "expected '!' but found " + char, this.get_mark());
	      }
	      length = 1;
	      char = this.peek(length);
	      if (char !== ' ') {
	        while (('0' <= char && char <= '9') || ('A' <= char && char <= 'Z') || ('a' <= char && char <= 'z') || __indexOf.call('-_', char) >= 0) {
	          length++;
	          char = this.peek(length);
	        }
	        if (char !== '!') {
	          this.forward(length);
	          throw new exports.ScannerError("while scanning a " + name, start_mark, "expected '!' but found " + char, this.get_mark());
	        }
	        length++;
	      }
	      value = this.prefix(length);
	      this.forward(length);
	      return value;
	    };

	    /*
	    See the specification for details.
	    Note: we do not check if URI is well-formed.
	    */


	    Scanner.prototype.scan_tag_uri = function(name, start_mark) {
	      var char, chunks, length;
	      chunks = [];
	      length = 0;
	      char = this.peek(length);
	      while (('0' <= char && char <= '9') || ('A' <= char && char <= 'Z') || ('a' <= char && char <= 'z') || __indexOf.call('-;/?:@&=+$,_.!~*\'()[]%', char) >= 0) {
	        if (char === '%') {
	          chunks.push(this.prefix(length));
	          this.forward(length);
	          length = 0;
	          chunks.push(this.scan_uri_escapes(name, start_mark));
	        } else {
	          length++;
	        }
	        char = this.peek(length);
	      }
	      if (length !== 0) {
	        chunks.push(this.prefix(length));
	        this.forward(length);
	        length = 0;
	      }
	      if (chunks.length === 0) {
	        throw new exports.ScannerError("while parsing a " + name, start_mark, "expected URI but found " + char, this.get_mark());
	      }
	      return chunks.join('');
	    };

	    /*
	    See the specification for details.
	    */


	    Scanner.prototype.scan_uri_escapes = function(name, start_mark) {
	      var bytes, k, mark, _i;
	      bytes = [];
	      mark = this.get_mark();
	      while (this.peek() === '%') {
	        this.forward();
	        for (k = _i = 0; _i <= 2; k = ++_i) {
	          throw new exports.ScannerError("while scanning a " + name, start_mark, "expected URI escape sequence of 2 hexadecimal numbers but found          " + (this.peek(k)), this.get_mark());
	        }
	        bytes.push(String.fromCharCode(parseInt(this.prefix(2), 16)));
	        this.forward(2);
	      }
	      return bytes.join('');
	    };

	    /*
	    Transforms:
	      '\r\n'      :   '\n'
	      '\r'        :   '\n'
	      '\n'        :   '\n'
	      '\x85'      :   '\n'
	      '\u2028'    :   '\u2028'
	      '\u2029     :   '\u2029'
	      default     :   ''
	    */


	    Scanner.prototype.scan_line_break = function() {
	      var char;
	      char = this.peek();
	      if (__indexOf.call('\r\n\x85', char) >= 0) {
	        if (this.prefix(2) === '\r\n') {
	          this.forward(2);
	        } else {
	          this.forward();
	        }
	        return '\n';
	      } else if (__indexOf.call('\u2028\u2029', char) >= 0) {
	        this.forward();
	        return char;
	      }
	      return '';
	    };

	    return Scanner;

	  })();

	}).call(this);


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var MarkedYAMLError, events, tokens, _ref,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    __slice = [].slice;

	  events = __webpack_require__(49);

	  MarkedYAMLError = __webpack_require__(21).MarkedYAMLError;

	  tokens = __webpack_require__(48);

	  this.ParserError = (function(_super) {
	    __extends(ParserError, _super);

	    function ParserError() {
	      _ref = ParserError.__super__.constructor.apply(this, arguments);
	      return _ref;
	    }

	    return ParserError;

	  })(MarkedYAMLError);

	  this.Parser = (function() {
	    var DEFAULT_TAGS;

	    DEFAULT_TAGS = {
	      '!': '!',
	      '!!': 'tag:yaml.org,2002:'
	    };

	    function Parser() {
	      this.current_event = null;
	      this.yaml_version = null;
	      this.tag_handles = {};
	      this.states = [];
	      this.marks = [];
	      this.state = 'parse_stream_start';
	    }

	    /*
	    Reset the state attributes.
	    */


	    Parser.prototype.dispose = function() {
	      this.states = [];
	      return this.state = null;
	    };

	    /*
	    Check the type of the next event.
	    */


	    Parser.prototype.check_event = function() {
	      var choice, choices, _i, _len;
	      choices = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	      if (this.current_event === null) {
	        if (this.state != null) {
	          this.current_event = this[this.state]();
	        }
	      }
	      if (this.current_event !== null) {
	        if (choices.length === 0) {
	          return true;
	        }
	        for (_i = 0, _len = choices.length; _i < _len; _i++) {
	          choice = choices[_i];
	          if (this.current_event instanceof choice) {
	            return true;
	          }
	        }
	      }
	      return false;
	    };

	    /*
	    Get the next event.
	    */


	    Parser.prototype.peek_event = function() {
	      if (this.current_event === null && (this.state != null)) {
	        this.current_event = this[this.state]();
	      }
	      return this.current_event;
	    };

	    /*
	    Get the event and proceed further.
	    */


	    Parser.prototype.get_event = function() {
	      var event;
	      if (this.current_event === null && (this.state != null)) {
	        this.current_event = this[this.state]();
	      }
	      event = this.current_event;
	      this.current_event = null;
	      return event;
	    };

	    /*
	    Parse the stream start.
	    */


	    Parser.prototype.parse_stream_start = function() {
	      var event, token;
	      token = this.get_token();
	      event = new events.StreamStartEvent(token.start_mark, token.end_mark);
	      this.state = 'parse_implicit_document_start';
	      return event;
	    };

	    /*
	    Parse an implicit document.
	    */


	    Parser.prototype.parse_implicit_document_start = function() {
	      var end_mark, event, start_mark, token;
	      if (!this.check_token(tokens.DirectiveToken, tokens.DocumentStartToken, tokens.StreamEndToken)) {
	        this.tag_handles = DEFAULT_TAGS;
	        token = this.peek_token();
	        start_mark = end_mark = token.start_mark;
	        event = new events.DocumentStartEvent(start_mark, end_mark, false);
	        this.states.push('parse_document_end');
	        this.state = 'parse_block_node';
	        return event;
	      } else {
	        return this.parse_document_start();
	      }
	    };

	    /*
	    Parse an explicit document.
	    */


	    Parser.prototype.parse_document_start = function() {
	      var end_mark, event, start_mark, tags, token, version, _ref1;
	      while (this.check_token(tokens.DocumentEndToken)) {
	        this.get_token();
	      }
	      if (!this.check_token(tokens.StreamEndToken)) {
	        start_mark = this.peek_token().start_mark;
	        _ref1 = this.process_directives(), version = _ref1[0], tags = _ref1[1];
	        if (!this.check_token(tokens.DocumentStartToken)) {
	          throw new exports.ParserError("expected '<document start>', but found " + (this.peek_token().id), this.peek_token().start_mark);
	        }
	        token = this.get_token();
	        end_mark = token.end_mark;
	        event = new events.DocumentStartEvent(start_mark, end_mark, true, version, tags);
	        this.states.push('parse_document_end');
	        this.state = 'parse_document_content';
	      } else {
	        token = this.get_token();
	        event = new events.StreamEndEvent(token.start_mark, token.end_mark);
	        if (this.states.length !== 0) {
	          throw new Error('assertion error, states should be empty');
	        }
	        if (this.marks.length !== 0) {
	          throw new Error('assertion error, marks should be empty');
	        }
	        this.state = null;
	      }
	      return event;
	    };

	    /*
	    Parse the document end.
	    */


	    Parser.prototype.parse_document_end = function() {
	      var end_mark, event, explicit, start_mark, token;
	      token = this.peek_token();
	      start_mark = end_mark = token.start_mark;
	      explicit = false;
	      if (this.check_token(tokens.DocumentEndToken)) {
	        token = this.get_token();
	        end_mark = token.end_mark;
	        explicit = true;
	      }
	      event = new events.DocumentEndEvent(start_mark, end_mark, explicit);
	      this.state = 'parse_document_start';
	      return event;
	    };

	    Parser.prototype.parse_document_content = function() {
	      var event;
	      if (this.check_token(tokens.DirectiveToken, tokens.DocumentStartToken, tokens.DocumentEndToken, tokens.StreamEndToken)) {
	        event = this.process_empty_scalar(this.peek_token().start_mark);
	        this.state = this.states.pop();
	        return event;
	      } else {
	        return this.parse_block_node();
	      }
	    };

	    Parser.prototype.process_directives = function() {
	      var handle, major, minor, prefix, tag_handles_copy, token, value, _ref1, _ref2, _ref3;
	      this.yaml_version = null;
	      this.tag_handles = {};
	      while (this.check_token(tokens.DirectiveToken)) {
	        token = this.get_token();
	        if (token.name === 'YAML') {
	          if (this.yaml_version !== null) {
	            throw new exports.ParserError(null, null, 'found duplicate YAML directive', token.start_mark);
	          }
	          _ref1 = token.value, major = _ref1[0], minor = _ref1[1];
	          if (major !== 1 || minor !== 2) {
	            throw new exports.ParserError(null, null, 'found incompatible YAML document (version 1.2 is required)', token.start_mark);
	          }
	          this.yaml_version = token.value;
	        } else if (token.name === 'TAG') {
	          _ref2 = token.value, handle = _ref2[0], prefix = _ref2[1];
	          if (handle in this.tag_handles) {
	            throw new exports.ParserError(null, null, "duplicate tag handle " + handle, token.start_mark);
	          }
	          this.tag_handles[handle] = prefix;
	        }
	      }
	      tag_handles_copy = null;
	      _ref3 = this.tag_handles;
	      for (handle in _ref3) {
	        if (!__hasProp.call(_ref3, handle)) continue;
	        prefix = _ref3[handle];
	        if (tag_handles_copy == null) {
	          tag_handles_copy = {};
	        }
	        tag_handles_copy[handle] = prefix;
	      }
	      value = [this.yaml_version, tag_handles_copy];
	      for (handle in DEFAULT_TAGS) {
	        if (!__hasProp.call(DEFAULT_TAGS, handle)) continue;
	        prefix = DEFAULT_TAGS[handle];
	        if (!(prefix in this.tag_handles)) {
	          this.tag_handles[handle] = prefix;
	        }
	      }
	      return value;
	    };

	    Parser.prototype.parse_block_node = function() {
	      return this.parse_node(true);
	    };

	    Parser.prototype.parse_flow_node = function() {
	      return this.parse_node();
	    };

	    Parser.prototype.parse_block_node_or_indentless_sequence = function() {
	      return this.parse_node(true, true);
	    };

	    Parser.prototype.parse_node = function(block, indentless_sequence) {
	      var anchor, end_mark, event, handle, implicit, node, start_mark, suffix, tag, tag_mark, token;
	      if (block == null) {
	        block = false;
	      }
	      if (indentless_sequence == null) {
	        indentless_sequence = false;
	      }
	      if (this.check_token(tokens.AliasToken)) {
	        token = this.get_token();
	        event = new events.AliasEvent(token.value, token.start_mark, token.end_mark);
	        this.state = this.states.pop();
	      } else {
	        anchor = null;
	        tag = null;
	        start_mark = end_mark = tag_mark = null;
	        if (this.check_token(tokens.AnchorToken)) {
	          token = this.get_token();
	          start_mark = token.start_mark;
	          end_mark = token.end_mark;
	          anchor = token.value;
	          if (this.check_token(tokens.TagToken)) {
	            token = this.get_token();
	            tag_mark = token.start_mark;
	            end_mark = token.end_mark;
	            tag = token.value;
	          }
	        } else if (this.check_token(tokens.TagToken)) {
	          token = this.get_token();
	          start_mark = tag_mark = token.start_mark;
	          end_mark = token.end_mark;
	          tag = token.value;
	          if (this.check_token(tokens.AnchorToken)) {
	            token = this.get_token();
	            end_mark = token.end_mark;
	            anchor = token.value;
	          }
	        }
	        if (tag !== null) {
	          handle = tag[0], suffix = tag[1];
	          if (handle !== null) {
	            if (!(handle in this.tag_handles)) {
	              throw new exports.ParserError('while parsing a node', start_mark, "found undefined tag handle " + handle, tag_mark);
	            }
	            tag = this.tag_handles[handle] + suffix;
	          } else {
	            tag = suffix;
	          }
	        }
	        if (start_mark === null) {
	          start_mark = end_mark = this.peek_token().start_mark;
	        }
	        event = null;
	        implicit = tag === null || tag === '!';
	        if (indentless_sequence && this.check_token(tokens.BlockEntryToken)) {
	          end_mark = this.peek_token().end_mark;
	          event = new events.SequenceStartEvent(anchor, tag, implicit, start_mark, end_mark);
	          this.state = 'parse_indentless_sequence_entry';
	        } else {
	          if (this.check_token(tokens.ScalarToken)) {
	            token = this.get_token();
	            end_mark = token.end_mark;
	            if ((token.plain && tag === null) || tag === '!') {
	              implicit = [true, false];
	            } else if (tag === null) {
	              implicit = [false, true];
	            } else {
	              implicit = [false, false];
	            }
	            event = new events.ScalarEvent(anchor, tag, implicit, token.value, start_mark, end_mark, token.style);
	            this.state = this.states.pop();
	          } else if (this.check_token(tokens.FlowSequenceStartToken)) {
	            end_mark = this.peek_token().end_mark;
	            event = new events.SequenceStartEvent(anchor, tag, implicit, start_mark, end_mark, true);
	            this.state = 'parse_flow_sequence_first_entry';
	          } else if (this.check_token(tokens.FlowMappingStartToken)) {
	            end_mark = this.peek_token().end_mark;
	            event = new events.MappingStartEvent(anchor, tag, implicit, start_mark, end_mark, true);
	            this.state = 'parse_flow_mapping_first_key';
	          } else if (block && this.check_token(tokens.BlockSequenceStartToken)) {
	            end_mark = this.peek_token().end_mark;
	            event = new events.SequenceStartEvent(anchor, tag, implicit, start_mark, end_mark, false);
	            this.state = 'parse_block_sequence_first_entry';
	          } else if (block && this.check_token(tokens.BlockMappingStartToken)) {
	            end_mark = this.peek_token().end_mark;
	            event = new events.MappingStartEvent(anchor, tag, implicit, start_mark, end_mark, false);
	            this.state = 'parse_block_mapping_first_key';
	          } else if (anchor !== null || tag !== null) {
	            event = new events.ScalarEvent(anchor, tag, [implicit, false], '', start_mark, end_mark);
	            this.state = this.states.pop();
	          } else {
	            if (block) {
	              node = 'block';
	            } else {
	              node = 'flow';
	            }
	            token = this.peek_token();
	            throw new exports.ParserError("while parsing a " + node + " node", start_mark, "expected the node content, but found " + token.id, token.start_mark);
	          }
	        }
	      }
	      return event;
	    };

	    Parser.prototype.parse_block_sequence_first_entry = function() {
	      var token;
	      token = this.get_token();
	      this.marks.push(token.start_mark);
	      return this.parse_block_sequence_entry();
	    };

	    Parser.prototype.parse_block_sequence_entry = function() {
	      var event, token;
	      if (this.check_token(tokens.BlockEntryToken)) {
	        token = this.get_token();
	        if (!this.check_token(tokens.BlockEntryToken, tokens.BlockEndToken)) {
	          this.states.push('parse_block_sequence_entry');
	          return this.parse_block_node();
	        } else {
	          this.state = 'parse_block_sequence_entry';
	          return this.process_empty_scalar(token.end_mark);
	        }
	      }
	      if (!this.check_token(tokens.BlockEndToken)) {
	        token = this.peek_token();
	        throw new exports.ParserError('while parsing a block collection', this.marks.slice(-1)[0], "expected <block end>, but found " + token.id, token.start_mark);
	      }
	      token = this.get_token();
	      event = new events.SequenceEndEvent(token.start_mark, token.end_mark);
	      this.state = this.states.pop();
	      this.marks.pop();
	      return event;
	    };

	    Parser.prototype.parse_indentless_sequence_entry = function() {
	      var event, token;
	      if (this.check_token(tokens.BlockEntryToken)) {
	        token = this.get_token();
	        if (!this.check_token(tokens.BlockEntryToken, tokens.KeyToken, tokens.ValueToken, tokens.BlockEndToken)) {
	          this.states.push('parse_indentless_sequence_entry');
	          return this.parse_block_node();
	        } else {
	          this.state = 'parse_indentless_sequence_entry';
	          return this.process_empty_scalar(token.end_mark);
	        }
	      }
	      token = this.peek_token();
	      event = new events.SequenceEndEvent(token.start_mark, token.start_mark);
	      this.state = this.states.pop();
	      return event;
	    };

	    Parser.prototype.parse_block_mapping_first_key = function() {
	      var token;
	      token = this.get_token();
	      this.marks.push(token.start_mark);
	      return this.parse_block_mapping_key();
	    };

	    Parser.prototype.parse_block_mapping_key = function() {
	      var event, token;
	      if (this.check_token(tokens.KeyToken)) {
	        token = this.get_token();
	        if (!this.check_token(tokens.KeyToken, tokens.ValueToken, tokens.BlockEndToken)) {
	          this.states.push('parse_block_mapping_value');
	          return this.parse_block_node_or_indentless_sequence();
	        } else {
	          this.state = 'parse_block_mapping_value';
	          return this.process_empty_scalar(token.end_mark);
	        }
	      }
	      if (!this.check_token(tokens.BlockEndToken)) {
	        token = this.peek_token();
	        throw new exports.ParserError('while parsing a block mapping', this.marks.slice(-1)[0], "expected <block end>, but found " + token.id, token.start_mark);
	      }
	      token = this.get_token();
	      event = new events.MappingEndEvent(token.start_mark, token.end_mark);
	      this.state = this.states.pop();
	      this.marks.pop();
	      return event;
	    };

	    Parser.prototype.parse_block_mapping_value = function() {
	      var token;
	      if (this.check_token(tokens.ValueToken)) {
	        token = this.get_token();
	        if (!this.check_token(tokens.KeyToken, tokens.ValueToken, tokens.BlockEndToken)) {
	          this.states.push('parse_block_mapping_key');
	          return this.parse_block_node_or_indentless_sequence();
	        } else {
	          this.state = 'parse_block_mapping_key';
	          return this.process_empty_scalar(token.end_mark);
	        }
	      } else {
	        this.state = 'parse_block_mapping_key';
	        token = this.peek_token();
	        return this.process_empty_scalar(token.start_mark);
	      }
	    };

	    Parser.prototype.parse_flow_sequence_first_entry = function() {
	      var token;
	      token = this.get_token();
	      this.marks.push(token.start_mark);
	      return this.parse_flow_sequence_entry(true);
	    };

	    Parser.prototype.parse_flow_sequence_entry = function(first) {
	      var event, token;
	      if (first == null) {
	        first = false;
	      }
	      if (!this.check_token(tokens.FlowSequenceEndToken)) {
	        if (!first) {
	          if (this.check_token(tokens.FlowEntryToken)) {
	            this.get_token();
	          } else {
	            token = this.peek_token();
	            throw new exports.ParserError('while parsing a flow sequence', this.marks.slice(-1)[0], "expected ',' or ']', but got " + token.id, token.start_mark);
	          }
	        }
	        if (this.check_token(tokens.KeyToken)) {
	          token = this.peek_token();
	          event = new events.MappingStartEvent(null, null, true, token.start_mark, token.end_mark, true);
	          this.state = 'parse_flow_sequence_entry_mapping_key';
	          return event;
	        } else if (!this.check_token(tokens.FlowSequenceEndToken)) {
	          this.states.push('parse_flow_sequence_entry');
	          return this.parse_flow_node();
	        }
	      }
	      token = this.get_token();
	      event = new events.SequenceEndEvent(token.start_mark, token.end_mark);
	      this.state = this.states.pop();
	      this.marks.pop();
	      return event;
	    };

	    Parser.prototype.parse_flow_sequence_entry_mapping_key = function() {
	      var token;
	      token = this.get_token();
	      if (!this.check_token(tokens.ValueToken, tokens.FlowEntryToken, tokens.FlowSequenceEndToken)) {
	        this.states.push('parse_flow_sequence_entry_mapping_value');
	        return this.parse_flow_node();
	      } else {
	        this.state = 'parse_flow_sequence_entry_mapping_value';
	        return this.process_empty_scalar(token.end_mark);
	      }
	    };

	    Parser.prototype.parse_flow_sequence_entry_mapping_value = function() {
	      var token;
	      if (this.check_token(tokens.ValueToken)) {
	        token = this.get_token();
	        if (!this.check_token(tokens.FlowEntryToken, tokens.FlowSequenceEndToken)) {
	          this.states.push('parse_flow_sequence_entry_mapping_end');
	          return this.parse_flow_node();
	        } else {
	          this.state = 'parse_flow_sequence_entry_mapping_end';
	          return this.process_empty_scalar(token.end_mark);
	        }
	      } else {
	        this.state = 'parse_flow_sequence_entry_mapping_end';
	        token = this.peek_token();
	        return this.process_empty_scalar(token.start_mark);
	      }
	    };

	    Parser.prototype.parse_flow_sequence_entry_mapping_end = function() {
	      var token;
	      this.state = 'parse_flow_sequence_entry';
	      token = this.peek_token();
	      return new events.MappingEndEvent(token.start_mark, token.start_mark);
	    };

	    Parser.prototype.parse_flow_mapping_first_key = function() {
	      var token;
	      token = this.get_token();
	      this.marks.push(token.start_mark);
	      return this.parse_flow_mapping_key(true);
	    };

	    Parser.prototype.parse_flow_mapping_key = function(first) {
	      var event, token;
	      if (first == null) {
	        first = false;
	      }
	      if (!this.check_token(tokens.FlowMappingEndToken)) {
	        if (!first) {
	          if (this.check_token(tokens.FlowEntryToken)) {
	            this.get_token();
	          } else {
	            token = this.peek_token();
	            throw new exports.ParserError('while parsing a flow mapping', this.marks.slice(-1)[0], "expected ',' or '}', but got " + token.id, token.start_mark);
	          }
	        }
	        if (this.check_token(tokens.KeyToken)) {
	          token = this.get_token();
	          if (!this.check_token(tokens.ValueToken, tokens.FlowEntryToken, tokens.FlowMappingEndToken)) {
	            this.states.push('parse_flow_mapping_value');
	            return this.parse_flow_node();
	          } else {
	            this.state = 'parse_flow_mapping_value';
	            return this.process_empty_scalar(token.end_mark);
	          }
	        } else if (!this.check_token(tokens.FlowMappingEndToken)) {
	          this.states.push('parse_flow_mapping_empty_value');
	          return this.parse_flow_node();
	        }
	      }
	      token = this.get_token();
	      event = new events.MappingEndEvent(token.start_mark, token.end_mark);
	      this.state = this.states.pop();
	      this.marks.pop();
	      return event;
	    };

	    Parser.prototype.parse_flow_mapping_value = function() {
	      var token;
	      if (this.check_token(tokens.ValueToken)) {
	        token = this.get_token();
	        if (!this.check_token(tokens.FlowEntryToken, tokens.FlowMappingEndToken)) {
	          this.states.push('parse_flow_mapping_key');
	          return this.parse_flow_node();
	        } else {
	          this.state = 'parse_flow_mapping_key';
	          return this.process_empty_scalar(token.end_mark);
	        }
	      } else {
	        this.state = 'parse_flow_mapping_key';
	        token = this.peek_token();
	        return this.process_empty_scalar(token.start_mark);
	      }
	    };

	    Parser.prototype.parse_flow_mapping_empty_value = function() {
	      this.state = 'parse_flow_mapping_key';
	      return this.process_empty_scalar(this.peek_token().start_mark);
	    };

	    Parser.prototype.process_empty_scalar = function(mark) {
	      return new events.ScalarEvent(null, null, [true, false], '', mark, mark);
	    };

	    return Parser;

	  })();

	}).call(this);


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var MarkedYAMLError, events, nodes, raml, util, _ref,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	  events = __webpack_require__(49);

	  MarkedYAMLError = __webpack_require__(21).MarkedYAMLError;

	  nodes = __webpack_require__(24);

	  raml = __webpack_require__(16);

	  util = __webpack_require__(23);

	  this.ComposerError = (function(_super) {
	    __extends(ComposerError, _super);

	    function ComposerError() {
	      _ref = ComposerError.__super__.constructor.apply(this, arguments);
	      return _ref;
	    }

	    return ComposerError;

	  })(MarkedYAMLError);

	  this.Composer = (function() {
	    function Composer() {
	      this.composeRamlTree = __bind(this.composeRamlTree, this);
	      this.anchors = {};
	      this.filesToRead = [];
	    }

	    Composer.prototype.check_node = function() {
	      if (this.check_event(events.StreamStartEvent)) {
	        this.get_event();
	      }
	      return !this.check_event(events.StreamEndEvent);
	    };

	    /*
	    Get the root node of the next document.
	    */


	    Composer.prototype.get_node = function() {
	      if (!this.check_event(events.StreamEndEvent)) {
	        return this.compose_document();
	      }
	    };

	    Composer.prototype.getYamlRoot = function() {
	      var document, event;
	      this.get_event();
	      document = null;
	      if (!this.check_event(events.StreamEndEvent)) {
	        document = this.compose_document();
	      }
	      if (!this.check_event(events.StreamEndEvent)) {
	        event = this.get_event();
	        throw new exports.ComposerError('document scan', document.start_mark, 'expected a single document in the stream but found another document', event.start_mark);
	      }
	      this.get_event();
	      return document;
	    };

	    Composer.prototype.composeRamlTree = function(node, settings) {
	      if (settings.validate || settings.transform) {
	        this.load_schemas(node);
	        this.load_traits(node);
	        this.load_types(node);
	        this.load_security_schemes(node);
	      }
	      if (settings.validate) {
	        this.validate_document(node);
	      }
	      if (settings.transform) {
	        this.apply_types(node);
	        this.apply_traits(node);
	        this.apply_schemas(node);
	        this.apply_protocols(node);
	        this.join_resources(node);
	      }
	      return node;
	    };

	    Composer.prototype.compose_document = function() {
	      var node;
	      this.get_event();
	      node = this.compose_node();
	      this.get_event();
	      this.anchors = {};
	      return node;
	    };

	    Composer.prototype.getPendingFilesList = function() {
	      return this.filesToRead;
	    };

	    Composer.prototype.compose_node = function(parent, index) {
	      var anchor, event, node;
	      if (this.check_event(events.AliasEvent)) {
	        event = this.get_event();
	        anchor = event.anchor;
	        if (!(anchor in this.anchors)) {
	          throw new exports.ComposerError(null, null, "found undefined alias " + anchor, event.start_mark);
	        }
	        return this.anchors[anchor].clone();
	      }
	      event = this.peek_event();
	      anchor = event.anchor;
	      if (anchor !== null && anchor in this.anchors) {
	        throw new exports.ComposerError("found duplicate anchor " + anchor + "; first occurence", this.anchors[anchor].start_mark, 'second occurrence', event.start_mark);
	      }
	      this.descend_resolver(parent, index);
	      if (this.check_event(events.ScalarEvent)) {
	        node = this.compose_scalar_node(anchor, parent, index);
	      } else if (this.check_event(events.SequenceStartEvent)) {
	        node = this.compose_sequence_node(anchor);
	      } else if (this.check_event(events.MappingStartEvent)) {
	        node = this.compose_mapping_node(anchor);
	      }
	      this.ascend_resolver();
	      return node;
	    };

	    Composer.prototype.compose_fixed_scalar_node = function(anchor, value) {
	      var event, node;
	      event = this.get_event();
	      node = new nodes.ScalarNode('tag:yaml.org,2002:str', value, event.start_mark, event.end_mark, event.style);
	      if (anchor !== null) {
	        this.anchors[anchor] = node;
	      }
	      return node;
	    };

	    Composer.prototype.compose_scalar_node = function(anchor, parent, key) {
	      var event, extension, fileType, node, tag;
	      event = this.get_event();
	      tag = event.tag;
	      node = {};
	      if (tag === null || tag === '!') {
	        tag = this.resolve(nodes.ScalarNode, event.value, event.implicit);
	      }
	      if (event.tag === '!include') {
	        if (event.value.match(/^\s*$/)) {
	          throw new exports.ComposerError('while composing scalar out of !include', null, "file name/URL cannot be null", event.start_mark);
	        }
	        extension = event.value.split('.').pop();
	        if (extension === 'yaml' || extension === 'yml' || extension === 'raml') {
	          fileType = 'fragment';
	        } else {
	          fileType = 'scalar';
	        }
	        this.filesToRead.push({
	          targetUri: event.value,
	          type: fileType,
	          parentNode: parent,
	          parentKey: key,
	          event: event,
	          includingContext: this.src,
	          targetFileUri: event.value
	        });
	        node = void 0;
	      } else {
	        node = new nodes.ScalarNode(tag, event.value, event.start_mark, event.end_mark, event.style);
	      }
	      if (anchor && node) {
	        this.anchors[anchor] = node;
	      }
	      return node;
	    };

	    Composer.prototype.compose_sequence_node = function(anchor) {
	      var end_event, index, node, start_event, tag, value;
	      start_event = this.get_event();
	      tag = start_event.tag;
	      if (tag === null || tag === '!') {
	        tag = this.resolve(nodes.SequenceNode, null, start_event.implicit);
	      }
	      node = new nodes.SequenceNode(tag, [], start_event.start_mark, null, start_event.flow_style);
	      index = 0;
	      if (anchor) {
	        this.anchors[anchor] = node;
	      }
	      while (!this.check_event(events.SequenceEndEvent)) {
	        if (value = this.compose_node(node, index)) {
	          node.value[index] = value;
	        }
	        index++;
	      }
	      end_event = this.get_event();
	      node.end_mark = end_event.end_mark;
	      return node;
	    };

	    Composer.prototype.compose_mapping_node = function(anchor) {
	      var end_event, item_key, item_value, node, start_event, tag;
	      start_event = this.get_event();
	      tag = start_event.tag;
	      if (tag === null || tag === '!') {
	        tag = this.resolve(nodes.MappingNode, null, start_event.implicit);
	      }
	      node = new nodes.MappingNode(tag, [], start_event.start_mark, null, start_event.flow_style);
	      if (anchor !== null) {
	        this.anchors[anchor] = node;
	      }
	      while (!this.check_event(events.MappingEndEvent)) {
	        item_key = this.compose_node(node);
	        if (!util.isScalar(item_key)) {
	          throw new exports.ComposerError('while composing mapping key', null, "only scalar map keys are allowed in RAML", item_key.start_mark);
	        }
	        if (item_value = this.compose_node(node, item_key)) {
	          node.value.push([item_key, item_value]);
	        }
	      }
	      end_event = this.get_event();
	      node.end_mark = end_event.end_mark;
	      return node;
	    };

	    return Composer;

	  })();

	}).call(this);


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var YAMLError, nodes, util, _ref, _ref1,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	  nodes = __webpack_require__(24);

	  util = __webpack_require__(23);

	  YAMLError = __webpack_require__(21).YAMLError;

	  this.ResolverError = (function(_super) {
	    __extends(ResolverError, _super);

	    function ResolverError() {
	      _ref = ResolverError.__super__.constructor.apply(this, arguments);
	      return _ref;
	    }

	    return ResolverError;

	  })(YAMLError);

	  this.BaseResolver = (function() {
	    var DEFAULT_MAPPING_TAG, DEFAULT_SCALAR_TAG, DEFAULT_SEQUENCE_TAG;

	    DEFAULT_SCALAR_TAG = 'tag:yaml.org,2002:str';

	    DEFAULT_SEQUENCE_TAG = 'tag:yaml.org,2002:seq';

	    DEFAULT_MAPPING_TAG = 'tag:yaml.org,2002:map';

	    BaseResolver.prototype.yaml_implicit_resolvers = {};

	    BaseResolver.prototype.yaml_path_resolvers = {};

	    BaseResolver.add_implicit_resolver = function(tag, regexp, first) {
	      var char, _base, _i, _len, _results;
	      if (first == null) {
	        first = [null];
	      }
	      if (!this.prototype.hasOwnProperty('yaml_implicit_resolvers')) {
	        this.prototype.yaml_implicit_resolvers = util.extend({}, this.prototype.yaml_implicit_resolvers);
	      }
	      _results = [];
	      for (_i = 0, _len = first.length; _i < _len; _i++) {
	        char = first[_i];
	        _results.push(((_base = this.prototype.yaml_implicit_resolvers)[char] != null ? (_base = this.prototype.yaml_implicit_resolvers)[char] : _base[char] = []).push([tag, regexp]));
	      }
	      return _results;
	    };

	    function BaseResolver() {
	      this.resolver_exact_paths = [];
	      this.resolver_prefix_paths = [];
	    }

	    BaseResolver.prototype.descend_resolver = function(current_node, current_index) {
	      var depth, exact_paths, kind, path, prefix_paths, _i, _j, _len, _len1, _ref1, _ref2, _ref3, _ref4;
	      if (util.is_empty(this.yaml_path_resolvers)) {
	        return;
	      }
	      exact_paths = {};
	      prefix_paths = [];
	      if (current_node) {
	        depth = this.resolver_prefix_paths.length;
	        _ref1 = this.resolver_prefix_paths.slice(-1)[0];
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          _ref2 = _ref1[_i], path = _ref2[0], kind = _ref2[1];
	          if (this.check_resolver_prefix(depth, path, kind, current_node, current_index)) {
	            if (path.length > depth) {
	              prefix_paths.push([path, kind]);
	            } else {
	              exact_paths[kind] = this.yaml_path_resolvers[path][kind];
	            }
	          }
	        }
	      } else {
	        _ref3 = this.yaml_path_resolvers;
	        for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
	          _ref4 = _ref3[_j], path = _ref4[0], kind = _ref4[1];
	          if (!path) {
	            exact_paths[kind] = this.yaml_path_resolvers[path][kind];
	          } else {
	            prefix_paths.push([path, kind]);
	          }
	        }
	      }
	      this.resolver_exact_paths.push(exact_paths);
	      return this.resolver_prefix_paths.push(prefix_paths);
	    };

	    BaseResolver.prototype.ascend_resolver = function() {
	      if (util.is_empty(this.yaml_path_resolvers)) {
	        return;
	      }
	      this.resolver_exact_paths.pop();
	      return this.resolver_prefix_paths.pop();
	    };

	    BaseResolver.prototype.check_resolver_prefix = function(depth, path, kind, current_node, current_index) {
	      var index_check, node_check, _ref1;
	      _ref1 = path[depth - 1], node_check = _ref1[0], index_check = _ref1[1];
	      if (typeof node_check === 'string') {
	        if (current_node.tag !== node_check) {
	          return;
	        }
	      } else if (node_check !== null) {
	        if (!(current_node instanceof node_check)) {
	          return;
	        }
	      }
	      if (index_check === true && current_index !== null) {
	        return;
	      }
	      if ((index_check === false || index_check === null) && current_index === null) {
	        return;
	      }
	      if (typeof index_check === 'string') {
	        if (!(current_index instanceof nodes.ScalarNode) && index_check === current_index.value) {
	          return;
	        }
	      } else if (typeof index_check === 'number') {
	        if (index_check !== current_index) {
	          return;
	        }
	      }
	      return true;
	    };

	    BaseResolver.prototype.resolve = function(kind, value, implicit) {
	      var empty, exact_paths, k, regexp, resolvers, tag, _i, _len, _ref1, _ref2, _ref3, _ref4;
	      if (kind === nodes.ScalarNode && implicit[0]) {
	        if (value === '') {
	          resolvers = (_ref1 = this.yaml_implicit_resolvers['']) != null ? _ref1 : [];
	        } else {
	          resolvers = (_ref2 = this.yaml_implicit_resolvers[value[0]]) != null ? _ref2 : [];
	        }
	        resolvers = resolvers.concat((_ref3 = this.yaml_implicit_resolvers[null]) != null ? _ref3 : []);
	        for (_i = 0, _len = resolvers.length; _i < _len; _i++) {
	          _ref4 = resolvers[_i], tag = _ref4[0], regexp = _ref4[1];
	          if (value.match(regexp)) {
	            return tag;
	          }
	        }
	        implicit = implicit[1];
	      }
	      empty = true;
	      for (k in this.yaml_path_resolvers) {
	        if ({}[k] == null) {
	          empty = false;
	        }
	      }
	      if (!empty) {
	        exact_paths = this.resolver_exact_paths.slice(-1)[0];
	        if (__indexOf.call(exact_paths, kind) >= 0) {
	          return exact_paths[kind];
	        }
	        if (__indexOf.call(exact_paths, null) >= 0) {
	          return exact_paths[null];
	        }
	      }
	      if (kind === nodes.ScalarNode) {
	        return DEFAULT_SCALAR_TAG;
	      }
	      if (kind === nodes.SequenceNode) {
	        return DEFAULT_SEQUENCE_TAG;
	      }
	      if (kind === nodes.MappingNode) {
	        return DEFAULT_MAPPING_TAG;
	      }
	    };

	    return BaseResolver;

	  })();

	  this.Resolver = (function(_super) {
	    __extends(Resolver, _super);

	    function Resolver() {
	      _ref1 = Resolver.__super__.constructor.apply(this, arguments);
	      return _ref1;
	    }

	    return Resolver;

	  })(this.BaseResolver);

	  this.Resolver.add_implicit_resolver('tag:yaml.org,2002:bool', /^(?:true|True|TRUE|false|False|FALSE)$/, 'tTfF');

	  this.Resolver.add_implicit_resolver('tag:yaml.org,2002:float', /^(?:[-+]?(?:[0-9][0-9_]*)\.[0-9_]*(?:[eE][-+][0-9]+)?|\.[0-9_]+(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*|[-+]?\.(?:inf|Inf|INF)|\.(?:nan|NaN|NAN))$/, '-+0123456789.');

	  this.Resolver.add_implicit_resolver('tag:yaml.org,2002:int', /^(?:[-+]?0b[01_]+|[-+]?0[0-7_]+|[-+]?(?:0|[1-9][0-9_]*)|[-+]?0x[0-9a-fA-F_]+|[-+]?0o[0-7_]+|[-+]?[1-9][0-9_]*(?::[0-5]?[0-9])+)$/, '-+0123456789');

	  this.Resolver.add_implicit_resolver('tag:yaml.org,2002:merge', /^(?:<<)$/, '<');

	  this.Resolver.add_implicit_resolver('tag:yaml.org,2002:null', /^(?:~|null|Null|NULL|)$/, ['~', 'n', 'N', '']);

	  this.Resolver.add_implicit_resolver('tag:yaml.org,2002:timestamp', /^(?:[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]|[0-9][0-9][0-9][0-9]-[0-9][0-9]?-[0-9][0-9]?(?:[Tt]|[\x20\t]+)[0-9][0-9]?:[0-9][0-9]:[0-9][0-9](?:\.[0-9]*)?(?:[\x20\t]*(?:Z|[-+][0-9][0-9]?(?::[0-9][0-9])?))?)$/, '0123456789');

	  this.Resolver.add_implicit_resolver('tag:yaml.org,2002:value', /^(?:=)$/, '=');

	  this.Resolver.add_implicit_resolver('tag:yaml.org,2002:yaml', /^(?:!|&|\*)$/, '!&*');

	}).call(this);


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {(function() {
	  var MarkedYAMLError, nodes, util, _ref, _ref1,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	  MarkedYAMLError = __webpack_require__(21).MarkedYAMLError;

	  nodes = __webpack_require__(24);

	  util = __webpack_require__(23);

	  this.ConstructorError = (function(_super) {
	    __extends(ConstructorError, _super);

	    function ConstructorError() {
	      _ref = ConstructorError.__super__.constructor.apply(this, arguments);
	      return _ref;
	    }

	    return ConstructorError;

	  })(MarkedYAMLError);

	  this.BaseConstructor = (function() {
	    BaseConstructor.prototype.yaml_constructors = {};

	    BaseConstructor.prototype.yaml_multi_constructors = {};

	    BaseConstructor.add_constructor = function(tag, constructor) {
	      if (!this.prototype.hasOwnProperty('yaml_constructors')) {
	        this.prototype.yaml_constructors = util.extend({}, this.prototype.yaml_constructors);
	      }
	      return this.prototype.yaml_constructors[tag] = constructor;
	    };

	    BaseConstructor.add_multi_constructor = function(tag_prefix, multi_constructor) {
	      if (!this.prototype.hasOwnProperty('yaml_multi_constructors')) {
	        this.prototype.yaml_multi_constructors = util.extend({}, this.prototype.yaml_multi_constructors);
	      }
	      return this.prototype.yaml_multi_constructors[tag_prefix] = multi_constructor;
	    };

	    function BaseConstructor() {
	      this.constructed_objects = {};
	      this.constructing_nodes = [];
	      this.deferred_constructors = [];
	    }

	    BaseConstructor.prototype.construct_document = function(node) {
	      var data;
	      this.applyAstTransformations(node);
	      data = this.construct_object(node);
	      while (!util.is_empty(this.deferred_constructors)) {
	        this.deferred_constructors.pop()();
	      }
	      this.applyTransformations(data);
	      return data;
	    };

	    BaseConstructor.prototype.defer = function(f) {
	      return this.deferred_constructors.push(f);
	    };

	    BaseConstructor.prototype.construct_object = function(node) {
	      var constructor, object, tag_prefix, tag_suffix, _ref1;
	      if (node.unique_id in this.constructed_objects) {
	        return this.constructed_objects[node.unique_id];
	      }
	      if (_ref1 = node.unique_id, __indexOf.call(this.constructing_nodes, _ref1) >= 0) {
	        throw new exports.ConstructorError(null, null, 'found unconstructable recursive node', node.start_mark);
	      }
	      this.constructing_nodes.push(node.unique_id);
	      constructor = null;
	      tag_suffix = null;
	      if (node.tag in this.yaml_constructors) {
	        constructor = this.yaml_constructors[node.tag];
	      } else {
	        for (tag_prefix in this.yaml_multi_constructors) {
	          if (node.tag.indexOf(tag_prefix === 0)) {
	            tag_suffix = node.tag.slice(tag_prefix.length);
	            constructor = this.yaml_multi_constructors[tag_prefix];
	            break;
	          }
	        }
	        if (constructor == null) {
	          if (null in this.yaml_multi_constructors) {
	            tag_suffix = node.tag;
	            constructor = this.yaml_multi_constructors[null];
	          } else if (null in this.yaml_constructors) {
	            constructor = this.yaml_constructors[null];
	          } else if (node instanceof nodes.ScalarNode) {
	            constructor = this.construct_scalar;
	          } else if (node instanceof nodes.SequenceNode) {
	            constructor = this.construct_sequence;
	          } else if (node instanceof nodes.MappingNode) {
	            constructor = this.construct_mapping;
	          }
	        }
	      }
	      object = constructor.call(this, tag_suffix != null ? tag_suffix : node, node);
	      this.constructed_objects[node.unique_id] = object;
	      this.constructing_nodes.pop();
	      return object;
	    };

	    BaseConstructor.prototype.construct_scalar = function(node) {
	      if (!(node instanceof nodes.ScalarNode)) {
	        throw new exports.ConstructorError(null, null, "expected a scalar node but found " + node.id, node.start_mark);
	      }
	      return node.value;
	    };

	    BaseConstructor.prototype.construct_sequence = function(node) {
	      var child, _i, _len, _ref1, _results;
	      if (!(node instanceof nodes.SequenceNode)) {
	        throw new exports.ConstructorError(null, null, "expected an array node but found " + node.id, node.start_mark);
	      }
	      _ref1 = node.value;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        child = _ref1[_i];
	        _results.push(this.construct_object(child));
	      }
	      return _results;
	    };

	    BaseConstructor.prototype.construct_mapping = function(node) {
	      var key, key_item, key_item_value, key_node, mapping, value, value_node, _i, _j, _len, _len1, _ref1, _ref2, _ref3;
	      if (!(node instanceof nodes.MappingNode)) {
	        throw new exports.ConstructorError(null, null, "expected a map node but found " + node.id, node.start_mark);
	      }
	      mapping = {};
	      _ref1 = node.value;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        _ref2 = _ref1[_i], key_node = _ref2[0], value_node = _ref2[1];
	        key = this.construct_object(key_node);
	        value = this.construct_object(value_node);
	        if (typeof key === 'object' && key_node.tag === 'tag:yaml.org,2002:seq') {
	          _ref3 = key_node.value;
	          for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
	            key_item = _ref3[_j];
	            key_item_value = this.construct_object(key_item);
	            mapping[key_item_value] = value;
	          }
	        } else if (typeof key === 'object') {
	          throw new exports.ConstructorError('while constructing a map', node.start_mark, 'found unhashable key', key_node.start_mark);
	        } else {
	          mapping[key] = value;
	        }
	      }
	      return mapping;
	    };

	    BaseConstructor.prototype.construct_pairs = function(node) {
	      var key, key_node, pairs, value, value_node, _i, _len, _ref1, _ref2;
	      if (!(node instanceof nodes.MappingNode)) {
	        throw new exports.ConstructorError(null, null, "expected a map node but found " + node.id, node.start_mark);
	      }
	      pairs = [];
	      _ref1 = node.value;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        _ref2 = _ref1[_i], key_node = _ref2[0], value_node = _ref2[1];
	        key = this.construct_object(key_node);
	        value = this.construct_object(value_node);
	        pairs.push([key, value]);
	      }
	      return pairs;
	    };

	    return BaseConstructor;

	  })();

	  this.Constructor = (function(_super) {
	    var BOOL_VALUES, TIMESTAMP_PARTS, TIMESTAMP_REGEX;

	    __extends(Constructor, _super);

	    function Constructor() {
	      _ref1 = Constructor.__super__.constructor.apply(this, arguments);
	      return _ref1;
	    }

	    BOOL_VALUES = {
	      "true": true,
	      "false": false
	    };

	    TIMESTAMP_REGEX = /^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:(?:[Tt]|[\x20\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\.([0-9]*))?(?:[\x20\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?)?$/;

	    TIMESTAMP_PARTS = {
	      year: 1,
	      month: 2,
	      day: 3,
	      hour: 4,
	      minute: 5,
	      second: 6,
	      fraction: 7,
	      tz: 8,
	      tz_sign: 9,
	      tz_hour: 10,
	      tz_minute: 11
	    };

	    Constructor.prototype.yaml_constructors = {};

	    Constructor.prototype.yaml_multi_constructors = {};

	    Constructor.prototype.construct_scalar = function(node) {
	      var key_node, value_node, _i, _len, _ref2, _ref3;
	      if (node instanceof nodes.MappingNode) {
	        _ref2 = node.value;
	        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
	          _ref3 = _ref2[_i], key_node = _ref3[0], value_node = _ref3[1];
	          if (key_node.tag === 'tag:yaml.org,2002:value') {
	            return this.construct_scalar(value_node);
	          }
	        }
	      }
	      return Constructor.__super__.construct_scalar.call(this, node);
	    };

	    Constructor.prototype.flatten_mapping = function(node) {
	      var index, key_node, merge, submerge, subnode, value, value_node, _i, _j, _len, _len1, _ref2, _ref3;
	      merge = [];
	      index = 0;
	      while (index < node.value.length) {
	        _ref2 = node.value[index], key_node = _ref2[0], value_node = _ref2[1];
	        if (key_node.tag === 'tag:yaml.org,2002:merge') {
	          node.value.splice(index, 1);
	          if (value_node instanceof nodes.MappingNode) {
	            this.flatten_mapping(value_node);
	            merge = merge.concat(value_node.value);
	          } else if (value_node instanceof nodes.SequenceNode) {
	            submerge = [];
	            _ref3 = value_node.value;
	            for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
	              subnode = _ref3[_i];
	              if (!(subnode instanceof nodes.MappingNode)) {
	                throw new exports.ConstructorError('while constructing a map', node.start_mark, "expected a map for merging, but found " + subnode.id, subnode.start_mark);
	              }
	              this.flatten_mapping(subnode);
	              submerge.push(subnode.value);
	            }
	            submerge.reverse();
	            for (_j = 0, _len1 = submerge.length; _j < _len1; _j++) {
	              value = submerge[_j];
	              merge = merge.concat(value);
	            }
	          } else {
	            throw new exports.ConstructorError('while constructing a map', node.start_mark, "expected a map or an array of maps for            merging but found " + value_node.id, value_node.start_mark);
	          }
	        } else if (key_node.tag === 'tag:yaml.org,2002:value') {
	          key_node.tag = 'tag:yaml.org,2002:str';
	          index++;
	        } else {
	          index++;
	        }
	      }
	      if (merge.length) {
	        return node.value = merge.concat(node.value);
	      }
	    };

	    Constructor.prototype.construct_mapping = function(node) {
	      if (node instanceof nodes.MappingNode) {
	        this.flatten_mapping(node);
	      }
	      return Constructor.__super__.construct_mapping.call(this, node);
	    };

	    Constructor.prototype.construct_yaml_null = function(node) {
	      this.construct_scalar(node);
	      return null;
	    };

	    Constructor.prototype.construct_yaml_bool = function(node) {
	      var value;
	      value = this.construct_scalar(node);
	      return BOOL_VALUES[value.toLowerCase()];
	    };

	    Constructor.prototype.construct_yaml_int = function(node) {
	      var base, digit, digits, part, sign, value, _i, _len, _ref2;
	      value = this.construct_scalar(node);
	      value = value.replace(/_/g, '');
	      sign = value[0] === '-' ? -1 : 1;
	      if (_ref2 = value[0], __indexOf.call('+-', _ref2) >= 0) {
	        value = value.slice(1);
	      }
	      if (value === '0') {
	        return 0;
	      } else if (value.indexOf('0b') === 0) {
	        return sign * parseInt(value.slice(2), 2);
	      } else if (value.indexOf('0x') === 0) {
	        return sign * parseInt(value.slice(2), 16);
	      } else if (value.indexOf('0o') === 0) {
	        return sign * parseInt(value.slice(2), 8);
	      } else if (value[0] === '0') {
	        return sign * parseInt(value, 8);
	      } else if (__indexOf.call(value, ':') >= 0) {
	        digits = (function() {
	          var _i, _len, _ref3, _results;
	          _ref3 = value.split(/:/g);
	          _results = [];
	          for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
	            part = _ref3[_i];
	            _results.push(parseInt(part));
	          }
	          return _results;
	        })();
	        digits.reverse();
	        base = 1;
	        value = 0;
	        for (_i = 0, _len = digits.length; _i < _len; _i++) {
	          digit = digits[_i];
	          value += digit * base;
	          base *= 60;
	        }
	        return sign * value;
	      } else {
	        return sign * parseInt(value);
	      }
	    };

	    Constructor.prototype.construct_yaml_float = function(node) {
	      var base, digit, digits, part, sign, value, _i, _len, _ref2;
	      value = this.construct_scalar(node);
	      value = value.replace(/_/g, '').toLowerCase();
	      sign = value[0] === '-' ? -1 : 1;
	      if (_ref2 = value[0], __indexOf.call('+-', _ref2) >= 0) {
	        value = value.slice(1);
	      }
	      if (value === '.inf') {
	        return sign * Infinity;
	      } else if (value === '.nan') {
	        return NaN;
	      } else if (__indexOf.call(value, ':') >= 0) {
	        digits = (function() {
	          var _i, _len, _ref3, _results;
	          _ref3 = value.split(/:/g);
	          _results = [];
	          for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
	            part = _ref3[_i];
	            _results.push(parseFloat(part));
	          }
	          return _results;
	        })();
	        digits.reverse();
	        base = 1;
	        value = 0.0;
	        for (_i = 0, _len = digits.length; _i < _len; _i++) {
	          digit = digits[_i];
	          value += digit * base;
	          base *= 60;
	        }
	        return sign * value;
	      } else {
	        return sign * parseFloat(value);
	      }
	    };

	    Constructor.prototype.construct_yaml_binary = function(node) {
	      var error, value;
	      value = this.construct_scalar(node);
	      try {
	        if (typeof window !== "undefined" && window !== null) {
	          return atob(value);
	        }
	        return new Buffer(value, 'base64').toString('ascii');
	      } catch (_error) {
	        error = _error;
	        throw new exports.ConstructorError(null, null, "failed to decode base64 data: " + error, node.start_mark);
	      }
	    };

	    Constructor.prototype.construct_yaml_timestamp = function(node) {
	      var date, day, fraction, hour, index, key, match, millisecond, minute, month, second, tz_hour, tz_minute, tz_sign, value, values, year;
	      value = this.construct_scalar(node);
	      match = node.value.match(TIMESTAMP_REGEX);
	      values = {};
	      for (key in TIMESTAMP_PARTS) {
	        index = TIMESTAMP_PARTS[key];
	        values[key] = match[index];
	      }
	      year = parseInt(values.year);
	      month = parseInt(values.month) - 1;
	      day = parseInt(values.day);
	      if (!values.hour) {
	        return new Date(Date.UTC(year, month, day));
	      }
	      hour = parseInt(values.hour);
	      minute = parseInt(values.minute);
	      second = parseInt(values.second);
	      millisecond = 0;
	      if (values.fraction) {
	        fraction = values.fraction.slice(0, 6);
	        while (fraction.length < 6) {
	          fraction += '0';
	        }
	        fraction = parseInt(fraction);
	        millisecond = Math.round(fraction / 1000);
	      }
	      if (values.tz_sign) {
	        tz_sign = values.tz_sign === '-' ? 1 : -1;
	        if (tz_hour = parseInt(values.tz_hour)) {
	          hour += tz_sign * tz_hour;
	        }
	        if (tz_minute = parseInt(values.tz_minute)) {
	          minute += tz_sign * tz_minute;
	        }
	      }
	      date = new Date(Date.UTC(year, month, day, hour, minute, second, millisecond));
	      return date;
	    };

	    Constructor.prototype.construct_yaml_pair_list = function(type, node) {
	      var list,
	        _this = this;
	      list = [];
	      if (!(node instanceof nodes.SequenceNode)) {
	        throw new exports.ConstructorError("while constructing " + type, node.start_mark, "expected an array but found " + node.id, node.start_mark);
	      }
	      this.defer(function() {
	        var key, key_node, subnode, value, value_node, _i, _len, _ref2, _ref3, _results;
	        _ref2 = node.value;
	        _results = [];
	        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
	          subnode = _ref2[_i];
	          if (!(subnode instanceof nodes.MappingNode)) {
	            throw new exports.ConstructorError("while constructing " + type, node.start_mark, "expected a map of length 1 but found " + subnode.id, subnode.start_mark);
	          }
	          if (subnode.value.length !== 1) {
	            throw new exports.ConstructorError("while constructing " + type, node.start_mark, "expected a map of length 1 but found " + subnode.id, subnode.start_mark);
	          }
	          _ref3 = subnode.value[0], key_node = _ref3[0], value_node = _ref3[1];
	          key = _this.construct_object(key_node);
	          value = _this.construct_object(value_node);
	          _results.push(list.push([key, value]));
	        }
	        return _results;
	      });
	      return list;
	    };

	    Constructor.prototype.construct_yaml_omap = function(node) {
	      return this.construct_yaml_pair_list('an ordered map', node);
	    };

	    Constructor.prototype.construct_yaml_pairs = function(node) {
	      return this.construct_yaml_pair_list('pairs', node);
	    };

	    Constructor.prototype.construct_yaml_set = function(node) {
	      var data,
	        _this = this;
	      data = [];
	      this.defer(function() {
	        var item, _results;
	        _results = [];
	        for (item in _this.construct_mapping(node)) {
	          _results.push(data.push(item));
	        }
	        return _results;
	      });
	      return data;
	    };

	    Constructor.prototype.construct_yaml_str = function(node) {
	      return this.construct_scalar(node);
	    };

	    Constructor.prototype.construct_yaml_seq = function(node) {
	      var data,
	        _this = this;
	      data = [];
	      this.defer(function() {
	        var item, _i, _len, _ref2, _results;
	        _ref2 = _this.construct_sequence(node);
	        _results = [];
	        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
	          item = _ref2[_i];
	          _results.push(data.push(item));
	        }
	        return _results;
	      });
	      return data;
	    };

	    Constructor.prototype.construct_yaml_map = function(node) {
	      var data,
	        _this = this;
	      data = {};
	      this.defer(function() {
	        var key, value, _ref2, _results;
	        _ref2 = _this.construct_mapping(node);
	        _results = [];
	        for (key in _ref2) {
	          value = _ref2[key];
	          _results.push(data[key] = value);
	        }
	        return _results;
	      });
	      return data;
	    };

	    Constructor.prototype.construct_yaml_object = function(node, klass) {
	      var data,
	        _this = this;
	      data = new klass;
	      this.defer(function() {
	        var key, value, _ref2, _results;
	        _ref2 = _this.construct_mapping(node, true);
	        _results = [];
	        for (key in _ref2) {
	          value = _ref2[key];
	          _results.push(data[key] = value);
	        }
	        return _results;
	      });
	      return data;
	    };

	    Constructor.prototype.construct_undefined = function(node) {
	      throw new exports.ConstructorError(null, null, "could not determine a constructor for the tag " + node.tag, node.start_mark);
	    };

	    return Constructor;

	  })(this.BaseConstructor);

	  this.Constructor.add_constructor('tag:yaml.org,2002:null', this.Constructor.prototype.construct_yaml_null);

	  this.Constructor.add_constructor('tag:yaml.org,2002:bool', this.Constructor.prototype.construct_yaml_bool);

	  this.Constructor.add_constructor('tag:yaml.org,2002:int', this.Constructor.prototype.construct_yaml_int);

	  this.Constructor.add_constructor('tag:yaml.org,2002:float', this.Constructor.prototype.construct_yaml_float);

	  this.Constructor.add_constructor('tag:yaml.org,2002:binary', this.Constructor.prototype.construct_yaml_binary);

	  this.Constructor.add_constructor('tag:yaml.org,2002:timestamp', this.Constructor.prototype.construct_yaml_timestamp);

	  this.Constructor.add_constructor('tag:yaml.org,2002:omap', this.Constructor.prototype.construct_yaml_omap);

	  this.Constructor.add_constructor('tag:yaml.org,2002:pairs', this.Constructor.prototype.construct_yaml_pairs);

	  this.Constructor.add_constructor('tag:yaml.org,2002:set', this.Constructor.prototype.construct_yaml_set);

	  this.Constructor.add_constructor('tag:yaml.org,2002:str', this.Constructor.prototype.construct_yaml_str);

	  this.Constructor.add_constructor('tag:yaml.org,2002:seq', this.Constructor.prototype.construct_yaml_seq);

	  this.Constructor.add_constructor('tag:yaml.org,2002:map', this.Constructor.prototype.construct_yaml_map);

	  this.Constructor.add_constructor(null, this.Constructor.prototype.construct_undefined);

	  module.exports.Constructor = this.Constructor;

	  module.exports.ConstructorError = this.ConstructorError;

	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56).Buffer))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var MarkedYAMLError, jsonlint, nodes, traits, uritemplate, url, util, _ref,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	  url = __webpack_require__(30);

	  uritemplate = __webpack_require__(59);

	  MarkedYAMLError = __webpack_require__(21).MarkedYAMLError;

	  nodes = __webpack_require__(24);

	  traits = __webpack_require__(39);

	  util = __webpack_require__(23);

	  jsonlint = __webpack_require__(58);

	  /*
	  The Validator throws these.
	  */


	  this.ValidationError = (function(_super) {
	    __extends(ValidationError, _super);

	    function ValidationError() {
	      _ref = ValidationError.__super__.constructor.apply(this, arguments);
	      return _ref;
	    }

	    return ValidationError;

	  })(MarkedYAMLError);

	  /*
	  A collection of multiple validation errors
	  */


	  this.ValidationErrors = (function(_super) {
	    __extends(ValidationErrors, _super);

	    function ValidationErrors(validation_errors) {
	      this.validation_errors = validation_errors;
	    }

	    ValidationErrors.prototype.get_validation_errors = function() {
	      return this.validation_errors;
	    };

	    return ValidationErrors;

	  })(MarkedYAMLError);

	  /*
	  The Validator class deals with validating a YAML file according to the spec
	  */


	  this.Validator = (function() {
	    function Validator() {
	      this.get_properties = __bind(this.get_properties, this);
	      this.get_list_values = __bind(this.get_list_values, this);
	      this.validations = [this.validate_root, this.validate_root_properties, this.validate_base_uri_parameters, this.valid_absolute_uris];
	    }

	    Validator.prototype.validate_document = function(node) {
	      var validation, _i, _len, _ref1;
	      _ref1 = this.validations;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        validation = _ref1[_i];
	        validation.call(this, node);
	      }
	      return true;
	    };

	    Validator.prototype.validate_security_schemes = function(schemesProperty) {
	      var scheme, scheme_entry, _i, _len, _ref1, _results;
	      if (!util.isSequence(schemesProperty)) {
	        throw new exports.ValidationError('while validating securitySchemes', null, 'invalid security schemes property, it must be an array', schemesProperty.start_mark);
	      }
	      _ref1 = schemesProperty.value;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        scheme_entry = _ref1[_i];
	        if (!util.isMapping(scheme_entry)) {
	          throw new exports.ValidationError('while validating securitySchemes', null, 'invalid security scheme property, it must be a map', scheme_entry.start_mark);
	        }
	        _results.push((function() {
	          var _j, _len1, _ref2, _results1;
	          _ref2 = scheme_entry.value;
	          _results1 = [];
	          for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
	            scheme = _ref2[_j];
	            if (!util.isMapping(scheme[1])) {
	              throw new exports.ValidationError('while validating securitySchemes', null, 'invalid security scheme property, it must be a map', scheme[0].start_mark);
	            }
	            _results1.push(this.validate_security_scheme(scheme[1]));
	          }
	          return _results1;
	        }).call(this));
	      }
	      return _results;
	    };

	    Validator.prototype.trackRepeatedProperties = function(properties, key, property, section, errorMessage) {
	      if (section == null) {
	        section = "RAML";
	      }
	      if (errorMessage == null) {
	        errorMessage = "a property with the same name already exists";
	      }
	      if (key in properties) {
	        throw new exports.ValidationError("while validating " + section, null, "" + errorMessage + ": '" + key + "'", property.start_mark);
	      }
	      return properties[key] = property;
	    };

	    Validator.prototype.validate_security_scheme = function(scheme) {
	      var property, schemeProperties, settings, type, _i, _len, _ref1;
	      type = null;
	      settings = null;
	      schemeProperties = {};
	      _ref1 = scheme.value;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        property = _ref1[_i];
	        this.trackRepeatedProperties(schemeProperties, property[0].value, property[0], 'while validating security scheme', "property already used in security scheme");
	        switch (property[0].value) {
	          case "description":
	            if (!util.isScalar(property[1])) {
	              throw new exports.ValidationError('while validating security scheme', null, 'schemes description must be a string', property[1].start_mark);
	            }
	            break;
	          case "type":
	            type = property[1].value;
	            if (!(util.isString(property[1]) && type.match(/^(OAuth 1.0|OAuth 2.0|Basic Authentication|Digest Authentication|x-.+)$/))) {
	              throw new exports.ValidationError('while validating security scheme', null, 'schemes type must be any of: "OAuth 1.0", "OAuth 2.0", "Basic Authentication", "Digest Authentication", "x-\{.+\}"', property[1].start_mark);
	            }
	            break;
	          case "describedBy":
	            this.validate_method(property, true, "security scheme");
	            break;
	          case "settings":
	            settings = property;
	            if (!util.isNullableMapping(property[1])) {
	              throw new exports.ValidationError('while validating security scheme', null, 'schemes settings must be a map', property[1].start_mark);
	            }
	            break;
	          default:
	            throw new exports.ValidationError('while validating security scheme', null, "property: '" + property[0].value + "' is invalid in a security scheme", property[0].start_mark);
	        }
	      }
	      if (!type) {
	        throw new exports.ValidationError('while validating security scheme', null, 'schemes type must be any of: "OAuth 1.0", "OAuth 2.0", "Basic Authentication", "Digest Authentication", "x-\{.+\}"', scheme.start_mark);
	      } else if (type === "OAuth 2.0") {
	        if (!settings) {
	          throw new exports.ValidationError('while validating security scheme', null, 'for OAuth 2.0 settings must be a map', scheme.start_mark);
	        }
	        return this.validate_oauth2_settings(settings);
	      } else if (type === "OAuth 1.0") {
	        if (!settings) {
	          throw new exports.ValidationError('while validating security scheme', null, 'for OAuth 1.0 settings must be a map', scheme.start_mark);
	        }
	        return this.validate_oauth1_settings(settings);
	      }
	    };

	    Validator.prototype.validate_oauth2_settings = function(settings) {
	      var property, propertyName, settingProperties, _i, _j, _len, _len1, _ref1, _ref2, _results;
	      settingProperties = {};
	      _ref1 = settings[1].value;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        property = _ref1[_i];
	        this.trackRepeatedProperties(settingProperties, property[0].value, property[0], 'while validating security scheme', "setting with the same name already exists");
	        switch (property[0].value) {
	          case "authorizationUri":
	            if (!util.isString(property[1])) {
	              throw new exports.ValidationError('while validating security scheme', null, 'authorizationUri must be a URL', property[0].start_mark);
	            }
	            break;
	          case "accessTokenUri":
	            if (!util.isString(property[1])) {
	              throw new exports.ValidationError('while validating security scheme', null, 'accessTokenUri must be a URL', property[0].start_mark);
	            }
	        }
	      }
	      _ref2 = ['accessTokenUri', 'authorizationUri'];
	      _results = [];
	      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
	        propertyName = _ref2[_j];
	        if (!(propertyName in settingProperties)) {
	          throw new exports.ValidationError('while validating security scheme', null, "OAuth 2.0 settings must have " + propertyName + " property", settings[0].start_mark);
	        } else {
	          _results.push(void 0);
	        }
	      }
	      return _results;
	    };

	    Validator.prototype.validate_oauth1_settings = function(settings) {
	      var property, propertyName, settingProperties, _i, _j, _len, _len1, _ref1, _ref2, _results;
	      settingProperties = {};
	      _ref1 = settings[1].value;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        property = _ref1[_i];
	        this.trackRepeatedProperties(settingProperties, property[0].value, property[0], 'while validating security scheme', "setting with the same name already exists");
	        switch (property[0].value) {
	          case "requestTokenUri":
	            if (!util.isString(property[1])) {
	              throw new exports.ValidationError('while validating security scheme', null, 'requestTokenUri must be a URL', property[0].start_mark);
	            }
	            break;
	          case "authorizationUri":
	            if (!util.isString(property[1])) {
	              throw new exports.ValidationError('while validating security scheme', null, 'authorizationUri must be a URL', property[0].start_mark);
	            }
	            break;
	          case "tokenCredentialsUri":
	            if (!util.isString(property[1])) {
	              throw new exports.ValidationError('while validating security scheme', null, 'tokenCredentialsUri must be a URL', property[0].start_mark);
	            }
	        }
	      }
	      _ref2 = ['requestTokenUri', 'authorizationUri', 'tokenCredentialsUri'];
	      _results = [];
	      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
	        propertyName = _ref2[_j];
	        if (!(propertyName in settingProperties)) {
	          throw new exports.ValidationError('while validating security scheme', null, "OAuth 1.0 settings must have " + propertyName + " property", settings[0].start_mark);
	        } else {
	          _results.push(void 0);
	        }
	      }
	      return _results;
	    };

	    Validator.prototype.validate_root_schemas = function(schemas) {
	      var schema, schemaList, schemaName, _results;
	      if (!util.isSequence(schemas)) {
	        throw new exports.ValidationError('while validating schemas', null, 'schemas property must be an array', schemas.start_mark);
	      }
	      schemaList = this.get_all_schemas();
	      _results = [];
	      for (schemaName in schemaList) {
	        schema = schemaList[schemaName];
	        if (!(schema[1].tag && util.isString(schema[1]))) {
	          throw new exports.ValidationError('while validating schemas', null, 'schema ' + schemaName + ' must be a string', schema[0].start_mark);
	        }
	        _results.push(this.validateSchema(schema[1]));
	      }
	      return _results;
	    };

	    Validator.prototype.validate_root = function(node) {
	      if (!(node || util.isNull(node))) {
	        throw new exports.ValidationError('while validating root', null, 'empty document', node != null ? node.start_mark : void 0);
	      }
	      if (!util.isMapping(node)) {
	        throw new exports.ValidationError('while validating root', null, 'document must be a map', node.start_mark);
	      }
	    };

	    Validator.prototype.validate_base_uri_parameters = function() {
	      if (!this.baseUriParameters) {
	        return;
	      }
	      if (!this.baseUri) {
	        throw new exports.ValidationError('while validating uri parameters', null, 'uri parameters defined when there is no baseUri', this.baseUriParameters.start_mark);
	      }
	      if (!util.isNullableMapping(this.baseUriParameters)) {
	        throw new exports.ValidationError('while validating uri parameters', null, 'base uri parameters must be a map', this.baseUriParameters.start_mark);
	      }
	      return this.validate_uri_parameters(this.baseUri, this.baseUriParameters, false, false, ["version"]);
	    };

	    Validator.prototype.validate_uri_parameters = function(uri, uriProperty, allowParameterKeys, skipParameterUseCheck, reservedNames) {
	      var err, expressions, parameterName, template, uriParameter, uriParameters, _i, _len, _ref1, _ref2, _results;
	      if (reservedNames == null) {
	        reservedNames = [];
	      }
	      try {
	        template = uritemplate.parse(uri);
	      } catch (_error) {
	        err = _error;
	        throw new exports.ValidationError('while validating uri parameters', null, err != null ? (_ref1 = err.options) != null ? _ref1.message : void 0 : void 0, uriProperty.start_mark);
	      }
	      expressions = template.expressions.filter(function(expr) {
	        return "templateText" in expr;
	      }).map(function(expression) {
	        return expression.templateText;
	      });
	      uriParameters = {};
	      if (typeof uriProperty.value === "object") {
	        _ref2 = uriProperty.value;
	        _results = [];
	        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
	          uriParameter = _ref2[_i];
	          parameterName = this.canonicalizePropertyName(uriParameter[0].value, allowParameterKeys);
	          this.trackRepeatedProperties(uriParameters, parameterName, uriProperty, 'while validating URI parameters', "URI parameter with the same name already exists");
	          if (__indexOf.call(reservedNames, parameterName) >= 0) {
	            throw new exports.ValidationError('while validating baseUri', null, uriParameter[0].value + ' parameter not allowed here', uriParameter[0].start_mark);
	          }
	          if (!(util.isNullableMapping(uriParameter[1], allowParameterKeys) || util.isNullableSequence(uriParameter[1], allowParameterKeys))) {
	            throw new exports.ValidationError('while validating baseUri', null, 'URI parameter must be a map', uriParameter[0].start_mark);
	          }
	          if (!util.isNull(uriParameter[1])) {
	            this.valid_common_parameter_properties(uriParameter[1], allowParameterKeys);
	          }
	          if (!(skipParameterUseCheck || this.isParameterKey(uriParameter) || __indexOf.call(expressions, parameterName) >= 0)) {
	            throw new exports.ValidationError('while validating baseUri', null, uriParameter[0].value + ' uri parameter unused', uriParameter[0].start_mark);
	          } else {
	            _results.push(void 0);
	          }
	        }
	        return _results;
	      }
	    };

	    Validator.prototype.validate_types = function(typeProperty) {
	      var type, type_entry, types, _i, _len, _results;
	      types = typeProperty.value;
	      if (!util.isSequence(typeProperty)) {
	        throw new exports.ValidationError('while validating resource types', null, 'invalid resourceTypes definition, it must be an array', typeProperty.start_mark);
	      }
	      _results = [];
	      for (_i = 0, _len = types.length; _i < _len; _i++) {
	        type_entry = types[_i];
	        if (!util.isMapping(type_entry)) {
	          throw new exports.ValidationError('while validating resource types', null, 'invalid resourceType definition, it must be a map', type_entry.start_mark);
	        }
	        _results.push((function() {
	          var _j, _len1, _ref1, _results1;
	          _ref1 = type_entry.value;
	          _results1 = [];
	          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
	            type = _ref1[_j];
	            if (this.isParameterKey(type)) {
	              throw new exports.ValidationError('while validating resource types', null, 'parameter key cannot be used as a resource type name', type[0].start_mark);
	            }
	            if (!util.isMapping(type[1])) {
	              throw new exports.ValidationError('while validating resource types', null, 'invalid resourceType definition, it must be a map', type[1].start_mark);
	            }
	            _results1.push(this.validate_resource(type, true, 'resource type'));
	          }
	          return _results1;
	        }).call(this));
	      }
	      return _results;
	    };

	    Validator.prototype.validate_traits = function(traitProperty) {
	      var trait, trait_entry, _i, _len, _results;
	      traits = traitProperty.value;
	      if (!Array.isArray(traits)) {
	        throw new exports.ValidationError('while validating traits', null, 'invalid traits definition, it must be an array', traitProperty.start_mark);
	      }
	      _results = [];
	      for (_i = 0, _len = traits.length; _i < _len; _i++) {
	        trait_entry = traits[_i];
	        if (!Array.isArray(trait_entry.value)) {
	          throw new exports.ValidationError('while validating traits', null, 'invalid traits definition, it must be an array', traitProperty.start_mark);
	        }
	        _results.push((function() {
	          var _j, _len1, _ref1, _results1;
	          _ref1 = trait_entry.value;
	          _results1 = [];
	          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
	            trait = _ref1[_j];
	            if (this.isParameterKey(trait)) {
	              throw new exports.ValidationError('while validating traits', null, 'parameter key cannot be used as a trait name', trait[0].start_mark);
	            }
	            if (!util.isMapping(trait[1])) {
	              throw new exports.ValidationError('while validating traits', null, 'invalid trait definition, it must be a map', trait[1].start_mark);
	            }
	            _results1.push(this.valid_traits_properties(trait));
	          }
	          return _results1;
	        }).call(this));
	      }
	      return _results;
	    };

	    Validator.prototype.valid_traits_properties = function(node) {
	      var invalid;
	      if (!node[1].value) {
	        return;
	      }
	      if (!util.isMapping(node[1])) {
	        return;
	      }
	      invalid = node[1].value.filter(function(childNode) {
	        return childNode[0].value === "is" || childNode[0].value === "type";
	      });
	      if (invalid.length > 0) {
	        throw new exports.ValidationError('while validating trait properties', null, "property: '" + invalid[0][0].value + "' is invalid in a trait", invalid[0][0].start_mark);
	      }
	      return this.validate_method(node, true, 'trait');
	    };

	    Validator.prototype.canonicalizePropertyName = function(propertyName, mustRemoveQuestionMark) {
	      if (mustRemoveQuestionMark && propertyName.slice(-1) === '?') {
	        return propertyName.slice(0, -1);
	      }
	      return propertyName;
	    };

	    Validator.prototype.valid_common_parameter_properties = function(node, allowParameterKeys) {
	      var parameter, _i, _len, _ref1, _results;
	      if (!node.value) {
	        return;
	      }
	      if (util.isSequence(node)) {
	        if (node.value.length === 0) {
	          throw new exports.ValidationError('while validating parameter properties', null, 'named parameter needs at least one type', node.start_mark);
	        }
	        if (!(node.value.length > 1)) {
	          throw new exports.ValidationError('while validating parameter properties', null, 'single type for variably typed parameter', node.start_mark);
	        }
	        _ref1 = node.value;
	        _results = [];
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          parameter = _ref1[_i];
	          _results.push(this.validate_named_parameter(parameter, allowParameterKeys));
	        }
	        return _results;
	      } else {
	        return this.validate_named_parameter(node, allowParameterKeys);
	      }
	    };

	    Validator.prototype.validate_named_parameter = function(node, allowParameterKeys) {
	      var booleanValues, canonicalPropertyName, childNode, enumValues, parameterProperties, parameterType, propertyName, propertyValue, unusableProperty, valid, validTypes, _i, _j, _k, _len, _len1, _len2, _ref1, _ref2, _ref3, _results;
	      parameterProperties = {};
	      parameterType = "string";
	      _ref1 = node.value;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        childNode = _ref1[_i];
	        propertyName = childNode[0].value;
	        propertyValue = childNode[1].value;
	        this.trackRepeatedProperties(parameterProperties, this.canonicalizePropertyName(childNode[0].value, true), childNode[0], 'while validating parameter properties', "parameter property already used");
	        booleanValues = ["true", "false"];
	        if (allowParameterKeys) {
	          if (this.isParameterKey(childNode) || this.isParameterValue(childNode)) {
	            continue;
	          }
	        }
	        canonicalPropertyName = this.canonicalizePropertyName(propertyName, allowParameterKeys);
	        valid = true;
	        switch (propertyName) {
	          case "displayName":
	            if (!util.isScalar(childNode[1])) {
	              throw new exports.ValidationError('while validating parameter properties', null, 'the value of displayName must be a scalar', childNode[1].start_mark);
	            }
	            break;
	          case "pattern":
	            if (!util.isScalar(childNode[1])) {
	              throw new exports.ValidationError('while validating parameter properties', null, 'the value of pattern must be a scalar', childNode[1].start_mark);
	            }
	            break;
	          case "default":
	            if (!util.isScalar(childNode[1])) {
	              throw new exports.ValidationError('while validating parameter properties', null, 'the value of default must be a scalar', childNode[1].start_mark);
	            }
	            break;
	          case "description":
	            if (!util.isScalar(childNode[1])) {
	              throw new exports.ValidationError('while validating parameter properties', null, 'the value of description must be a scalar', childNode[1].start_mark);
	            }
	            break;
	          case "example":
	            if (!util.isScalar(childNode[1])) {
	              throw new exports.ValidationError('while validating parameter properties', null, 'the value of example must be a scalar', childNode[1].start_mark);
	            }
	            break;
	          case "minLength":
	            if (isNaN(propertyValue)) {
	              throw new exports.ValidationError('while validating parameter properties', null, 'the value of minLength must be a number', childNode[1].start_mark);
	            }
	            break;
	          case "maxLength":
	            if (isNaN(propertyValue)) {
	              throw new exports.ValidationError('while validating parameter properties', null, 'the value of maxLength must be a number', childNode[1].start_mark);
	            }
	            break;
	          case "minimum":
	            if (isNaN(propertyValue)) {
	              throw new exports.ValidationError('while validating parameter properties', null, 'the value of minimum must be a number', childNode[1].start_mark);
	            }
	            break;
	          case "maximum":
	            if (isNaN(propertyValue)) {
	              throw new exports.ValidationError('while validating parameter properties', null, 'the value of maximum must be a number', childNode[1].start_mark);
	            }
	            break;
	          case "type":
	            parameterType = propertyValue;
	            validTypes = ['string', 'number', 'integer', 'date', 'boolean', 'file'];
	            if (__indexOf.call(validTypes, propertyValue) < 0) {
	              throw new exports.ValidationError('while validating parameter properties', null, 'type can be either of: string, number, integer, file, date or boolean ', childNode[1].start_mark);
	            }
	            break;
	          case "required":
	            if (__indexOf.call(booleanValues, propertyValue) < 0) {
	              throw new exports.ValidationError('while validating parameter properties', null, 'required can be any either true or false', childNode[1].start_mark);
	            }
	            break;
	          case "repeat":
	            if (__indexOf.call(booleanValues, propertyValue) < 0) {
	              throw new exports.ValidationError('while validating parameter properties', null, 'repeat can be any either true or false', childNode[1].start_mark);
	            }
	            break;
	          default:
	            valid = false;
	        }
	        switch (canonicalPropertyName) {
	          case "enum":
	            if (!util.isNullableSequence(childNode[1])) {
	              throw new exports.ValidationError('while validating parameter properties', null, 'the value of enum must be an array', childNode[1].start_mark);
	            }
	            if (!childNode[1].value.length) {
	              throw new exports.ValidationError('while validating parameter properties', null, 'enum is empty', childNode[1].start_mark);
	            }
	            enumValues = this.get_list_values(childNode[1].value);
	            if (this.hasDuplicates(enumValues)) {
	              throw new exports.ValidationError('while validating parameter properties', null, 'enum contains duplicated values', childNode[1].start_mark);
	            }
	            break;
	          default:
	            if (!valid) {
	              throw new exports.ValidationError('while validating parameter properties', null, "unknown property " + propertyName, childNode[0].start_mark);
	            }
	        }
	      }
	      if (parameterType !== "string") {
	        _ref2 = ['enum', 'pattern', 'minLength', 'maxLength'];
	        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
	          unusableProperty = _ref2[_j];
	          if (unusableProperty in parameterProperties) {
	            throw new exports.ValidationError('while validating parameter properties', null, "property " + unusableProperty + " can only be used if type is 'string'", parameterProperties[unusableProperty].start_mark);
	          }
	        }
	      }
	      if (!(parameterType === "number" || parameterType === "integer")) {
	        _ref3 = ['minimum', 'maximum'];
	        _results = [];
	        for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
	          unusableProperty = _ref3[_k];
	          if (unusableProperty in parameterProperties) {
	            throw new exports.ValidationError('while validating parameter properties', null, "property " + unusableProperty + " can only be used if type is 'number' or 'integer'", parameterProperties[unusableProperty].start_mark);
	          } else {
	            _results.push(void 0);
	          }
	        }
	        return _results;
	      }
	    };

	    Validator.prototype.get_list_values = function(node) {
	      var _this = this;
	      return node.map(function(item) {
	        return item.value;
	      });
	    };

	    Validator.prototype.validate_root_properties = function(node) {
	      var checkVersion, property, rootProperties, _i, _len, _ref1;
	      checkVersion = false;
	      rootProperties = {};
	      if (node != null ? node.value : void 0) {
	        _ref1 = node.value;
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          property = _ref1[_i];
	          if (property[0].value.match(/^\//)) {
	            this.trackRepeatedProperties(rootProperties, this.canonicalizePropertyName(property[0].value, true), property[0], 'while validating root properties', "resource already declared");
	          } else {
	            this.trackRepeatedProperties(rootProperties, property[0].value, property[0], 'while validating root properties', 'root property already used');
	          }
	          switch (property[0].value) {
	            case 'title':
	              if (!util.isScalar(property[1])) {
	                throw new exports.ValidationError('while validating root properties', null, 'title must be a string', property[0].start_mark);
	              }
	              break;
	            case 'baseUri':
	              if (!util.isScalar(property[1])) {
	                throw new exports.ValidationError('while validating root properties', null, 'baseUri must be a string', property[0].start_mark);
	              }
	              this.baseUri = property[1].value;
	              checkVersion = this.validate_base_uri(property[1]);
	              break;
	            case 'securitySchemes':
	              this.validate_security_schemes(property[1]);
	              break;
	            case 'schemas':
	              this.validate_root_schemas(property[1]);
	              break;
	            case 'version':
	              if (!util.isScalar(property[1])) {
	                throw new exports.ValidationError('while validating root properties', null, 'version must be a string', property[0].start_mark);
	              }
	              if (!util.isNull(property[1])) {
	                property[1].tag = 'tag:yaml.org,2002:str';
	              }
	              break;
	            case 'traits':
	              this.validate_traits(property[1]);
	              break;
	            case 'documentation':
	              if (!util.isSequence(property[1])) {
	                throw new exports.ValidationError('while validating root properties', null, 'documentation must be an array', property[0].start_mark);
	              }
	              this.validate_documentation(property[1]);
	              break;
	            case 'mediaType':
	              if (!util.isString(property[1])) {
	                throw new exports.ValidationError('while validating root properties', null, 'mediaType must be a scalar', property[0].start_mark);
	              }
	              break;
	            case 'baseUriParameters':
	              this.baseUriParameters = property[1];
	              util.isNoop(property[1]);
	              break;
	            case 'resourceTypes':
	              this.validate_types(property[1]);
	              break;
	            case 'securedBy':
	              this.validate_secured_by(property);
	              break;
	            case 'protocols':
	              this.validate_protocols_property(property);
	              break;
	            default:
	              if (property[0].value.match(/^\//)) {
	                this.validate_resource(property);
	              } else {
	                throw new exports.ValidationError('while validating root properties', null, "unknown property " + property[0].value, property[0].start_mark);
	              }
	          }
	        }
	      }
	      if (!('title' in rootProperties)) {
	        throw new exports.ValidationError('while validating root properties', null, 'missing title', node.start_mark);
	      }
	      if (checkVersion && !('version' in rootProperties)) {
	        throw new exports.ValidationError('while validating version', null, 'missing version', node.start_mark);
	      }
	    };

	    Validator.prototype.validate_documentation = function(documentation_property) {
	      var docSection, _i, _len, _ref1, _results;
	      if (!documentation_property.value.length) {
	        throw new exports.ValidationError('while validating documentation section', null, 'there must be at least one document in the documentation section', documentation_property.start_mark);
	      }
	      _ref1 = documentation_property.value;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        docSection = _ref1[_i];
	        _results.push(this.validate_doc_section(docSection));
	      }
	      return _results;
	    };

	    Validator.prototype.validate_doc_section = function(docSection) {
	      var docProperties, property, _i, _len, _ref1;
	      if (!util.isMapping(docSection)) {
	        throw new exports.ValidationError('while validating documentation section', null, 'each documentation section must be a map', docSection.start_mark);
	      }
	      docProperties = {};
	      _ref1 = docSection.value;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        property = _ref1[_i];
	        this.trackRepeatedProperties(docProperties, property[0].value, property[0], 'while validating documentation section', "property already used");
	        switch (property[0].value) {
	          case "title":
	            if (!(util.isScalar(property[1]) && !util.isNull(property[1]))) {
	              throw new exports.ValidationError('while validating documentation section', null, 'title must be a string', property[0].start_mark);
	            }
	            break;
	          case "content":
	            if (!(util.isScalar(property[1]) && !util.isNull(property[1]))) {
	              throw new exports.ValidationError('while validating documentation section', null, 'content must be a string', property[0].start_mark);
	            }
	            break;
	          default:
	            throw new exports.ValidationError('while validating root properties', null, 'unknown property ' + property[0].value, property[0].start_mark);
	        }
	      }
	      if (!("content" in docProperties)) {
	        throw new exports.ValidationError('while validating documentation section', null, 'a documentation entry must have content property', docSection.start_mark);
	      }
	      if (!("title" in docProperties)) {
	        throw new exports.ValidationError('while validating documentation section', null, 'a documentation entry must have title property', docSection.start_mark);
	      }
	    };

	    Validator.prototype.child_resources = function(node) {
	      if (node && util.isMapping(node)) {
	        return node.value.filter(function(childNode) {
	          return childNode[0].value.match(/^\//);
	        });
	      }
	      return [];
	    };

	    Validator.prototype.validate_resource = function(resource, allowParameterKeys, context) {
	      var canonicalKey, err, key, property, resourceProperties, template, valid, _i, _len, _ref1, _ref2, _results;
	      if (allowParameterKeys == null) {
	        allowParameterKeys = false;
	      }
	      if (context == null) {
	        context = "resource";
	      }
	      if (!(resource[1] && util.isNullableMapping(resource[1]))) {
	        throw new exports.ValidationError('while validating resources', null, 'resource is not a map', resource[1].start_mark);
	      }
	      if (resource[0].value) {
	        try {
	          template = uritemplate.parse(resource[0].value);
	        } catch (_error) {
	          err = _error;
	          throw new exports.ValidationError('while validating resource', null, "Resource name is invalid: " + (err != null ? (_ref1 = err.options) != null ? _ref1.message : void 0 : void 0), resource[0].start_mark);
	        }
	      }
	      if (util.isNull(resource[1])) {
	        return;
	      }
	      if (resource[1].value) {
	        resourceProperties = {};
	        _ref2 = resource[1].value;
	        _results = [];
	        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
	          property = _ref2[_i];
	          if (property[0].value.match(/^\//)) {
	            this.trackRepeatedProperties(resourceProperties, this.canonicalizePropertyName(property[0].value, true), property[0], 'while validating resource', "resource already declared");
	          } else if (this.isHttpMethod(property[0].value, allowParameterKeys)) {
	            this.trackRepeatedProperties(resourceProperties, this.canonicalizePropertyName(property[0].value, true), property[0], 'while validating resource', "method already declared");
	          } else {
	            this.trackRepeatedProperties(resourceProperties, this.canonicalizePropertyName(property[0].value, true), property[0], 'while validating resource', "property already used");
	          }
	          if (!this.validate_common_properties(property, allowParameterKeys)) {
	            if (property[0].value.match(/^\//)) {
	              if (allowParameterKeys) {
	                throw new exports.ValidationError('while validating trait properties', null, 'resource type cannot define child resources', property[0].start_mark);
	              }
	              _results.push(this.validate_resource(property, allowParameterKeys));
	            } else if (this.isHttpMethod(property[0].value, allowParameterKeys)) {
	              _results.push(this.validate_method(property, allowParameterKeys, 'method'));
	            } else {
	              key = property[0].value;
	              canonicalKey = this.canonicalizePropertyName(key, allowParameterKeys);
	              valid = true;
	              switch (canonicalKey) {
	                case "uriParameters":
	                  if (!util.isNullableMapping(property[1])) {
	                    throw new exports.ValidationError('while validating uri parameters', null, 'uri parameters must be a map', property[0].start_mark);
	                  }
	                  this.validate_uri_parameters(resource[0].value, property[1], allowParameterKeys, allowParameterKeys);
	                  break;
	                case "baseUriParameters":
	                  if (!this.baseUri) {
	                    throw new exports.ValidationError('while validating uri parameters', null, 'base uri parameters defined when there is no baseUri', property[0].start_mark);
	                  }
	                  if (!util.isNullableMapping(property[1])) {
	                    throw new exports.ValidationError('while validating uri parameters', null, 'base uri parameters must be a map', property[0].start_mark);
	                  }
	                  this.validate_uri_parameters(this.baseUri, property[1], allowParameterKeys);
	                  break;
	                default:
	                  valid = false;
	              }
	              switch (key) {
	                case "type":
	                  _results.push(this.validate_type_property(property, allowParameterKeys));
	                  break;
	                case "usage":
	                  if (!allowParameterKeys) {
	                    throw new exports.ValidationError('while validating resources', null, "property: '" + property[0].value + "' is invalid in a resource", property[0].start_mark);
	                  } else {
	                    _results.push(void 0);
	                  }
	                  break;
	                case "securedBy":
	                  _results.push(this.validate_secured_by(property));
	                  break;
	                default:
	                  if (!valid) {
	                    throw new exports.ValidationError('while validating resources', null, "property: '" + property[0].value + ("' is invalid in a " + context), property[0].start_mark);
	                  } else {
	                    _results.push(void 0);
	                  }
	              }
	            }
	          } else {
	            _results.push(void 0);
	          }
	        }
	        return _results;
	      }
	    };

	    Validator.prototype.validate_secured_by = function(property) {
	      var secScheme, secSchemes, securitySchemeName, _i, _len, _ref1, _results;
	      if (!util.isSequence(property[1])) {
	        throw new exports.ValidationError('while validating securityScheme', null, "property 'securedBy' must be an array", property[0].start_mark);
	      }
	      secSchemes = this.get_list_values(property[1].value);
	      if (this.hasDuplicates(secSchemes)) {
	        throw new exports.ValidationError('while validating securityScheme consumption', null, 'securitySchemes can only be referenced once in a securedBy property', property[0].start_mark);
	      }
	      _ref1 = property[1].value;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        secScheme = _ref1[_i];
	        if (util.isSequence(secScheme)) {
	          throw new exports.ValidationError('while validating securityScheme consumption', null, 'securityScheme reference cannot be an array', secScheme.start_mark);
	        }
	        if (!util.isNull(secScheme)) {
	          securitySchemeName = this.key_or_value(secScheme);
	          if (!this.get_security_scheme(securitySchemeName)) {
	            throw new exports.ValidationError('while validating securityScheme consumption', null, 'there is no securityScheme named ' + securitySchemeName, secScheme.start_mark);
	          } else {
	            _results.push(void 0);
	          }
	        } else {
	          _results.push(void 0);
	        }
	      }
	      return _results;
	    };

	    Validator.prototype.validate_protocols_property = function(property) {
	      var protocol, _i, _len, _ref1, _ref2, _results;
	      if (!util.isSequence(property[1])) {
	        throw new exports.ValidationError('while validating protocols', null, 'property must be an array', property[0].start_mark);
	      }
	      _ref1 = property[1].value;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        protocol = _ref1[_i];
	        if (!util.isString(protocol)) {
	          throw new exports.ValidationError('while validating protocols', null, 'value must be a string', protocol.start_mark);
	        }
	        if ((_ref2 = protocol.value) !== 'HTTP' && _ref2 !== 'HTTPS') {
	          throw new exports.ValidationError('while validating protocols', null, 'only HTTP and HTTPS values are allowed', protocol.start_mark);
	        } else {
	          _results.push(void 0);
	        }
	      }
	      return _results;
	    };

	    Validator.prototype.validate_type_property = function(property) {
	      var parameter, typeName, _i, _len, _ref1, _results;
	      if (!(util.isMapping(property[1]) || util.isString(property[1]))) {
	        throw new exports.ValidationError('while validating resource types', null, "property 'type' must be a string or a map", property[0].start_mark);
	      }
	      if (util.isMapping(property[1])) {
	        if (property[1].value.length > 1) {
	          throw new exports.ValidationError('while validating resource types', null, 'a resource or resourceType can inherit from a single resourceType', property[0].start_mark);
	        }
	      }
	      typeName = this.key_or_value(property[1]);
	      if (!(typeName != null ? typeName.trim() : void 0)) {
	        throw new exports.ValidationError('while validating resource type consumption', null, 'resource type name must be provided', property[1].start_mark);
	      }
	      if (!(this.isParameterKeyValue(typeName) || this.get_type(typeName))) {
	        throw new exports.ValidationError('while validating resource type consumption', null, "there is no resource type named " + typeName, property[1].start_mark);
	      }
	      if (util.isMapping(property[1])) {
	        _ref1 = property[1].value;
	        _results = [];
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          parameter = _ref1[_i];
	          if (!(util.isNull(parameter[1]) || util.isMapping(parameter[1]))) {
	            throw new exports.ValidationError('while validating resource consumption', null, 'resource type parameters must be in a map', parameter[1].start_mark);
	          } else {
	            _results.push(void 0);
	          }
	        }
	        return _results;
	      }
	    };

	    Validator.prototype.validate_method = function(method, allowParameterKeys, context) {
	      var canonicalKey, key, methodProperties, property, valid, _i, _len, _ref1, _results;
	      if (context == null) {
	        context = 'method';
	      }
	      if (util.isNull(method[1])) {
	        return;
	      }
	      if (!util.isMapping(method[1])) {
	        throw new exports.ValidationError('while validating methods', null, "method must be a map", method[0].start_mark);
	      }
	      methodProperties = {};
	      _ref1 = method[1].value;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        property = _ref1[_i];
	        this.trackRepeatedProperties(methodProperties, this.canonicalizePropertyName(property[0].value, true), property[0], 'while validating method', "property already used");
	        if (this.validate_common_properties(property, allowParameterKeys, context)) {
	          continue;
	        }
	        key = property[0].value;
	        canonicalKey = this.canonicalizePropertyName(key, allowParameterKeys);
	        valid = true;
	        switch (canonicalKey) {
	          case 'headers':
	            this.validate_headers(property, allowParameterKeys);
	            break;
	          case 'queryParameters':
	            this.validate_query_params(property, allowParameterKeys);
	            break;
	          case 'body':
	            this.validate_body(property, allowParameterKeys, null, false);
	            break;
	          case 'responses':
	            this.validate_responses(property, allowParameterKeys);
	            break;
	          case 'baseUriParameters':
	            if (!this.baseUri) {
	              throw new exports.ValidationError('while validating uri parameters', null, 'base uri parameters defined when there is no baseUri', property[0].start_mark);
	            }
	            if (!util.isNullableMapping(property[1])) {
	              throw new exports.ValidationError('while validating uri parameters', null, 'base uri parameters must be a map', property[0].start_mark);
	            }
	            this.validate_uri_parameters(this.baseUri, property[1], allowParameterKeys);
	            break;
	          case 'protocols':
	            this.validate_protocols_property(property);
	            break;
	          default:
	            valid = false;
	        }
	        switch (key) {
	          case 'securedBy':
	            _results.push(this.validate_secured_by(property));
	            break;
	          case 'usage':
	            if (!(allowParameterKeys && context === 'trait')) {
	              throw new exports.ValidationError('while validating resources', null, "property: 'usage' is invalid in a " + context, property[0].start_mark);
	            } else {
	              _results.push(void 0);
	            }
	            break;
	          default:
	            if (!valid) {
	              throw new exports.ValidationError('while validating resources', null, "property: '" + property[0].value + "' is invalid in a " + context, property[0].start_mark);
	            } else {
	              _results.push(void 0);
	            }
	        }
	      }
	      return _results;
	    };

	    Validator.prototype.validate_responses = function(responses, allowParameterKeys) {
	      var response, responseValues, _i, _len, _ref1, _results;
	      if (util.isNull(responses[1])) {
	        return;
	      }
	      if (!util.isMapping(responses[1])) {
	        throw new exports.ValidationError('while validating responses', null, "property: 'responses' must be a map", responses[0].start_mark);
	      }
	      responseValues = {};
	      _ref1 = responses[1].value;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        response = _ref1[_i];
	        if (!util.isNullableMapping(response[1])) {
	          throw new exports.ValidationError('while validating responses', null, 'each response must be a map', response[1].start_mark);
	        }
	        this.trackRepeatedProperties(responseValues, this.canonicalizePropertyName(response[0].value, true), response[0], 'while validating responses', "response code already used");
	        _results.push(this.validate_response(response, allowParameterKeys));
	      }
	      return _results;
	    };

	    Validator.prototype.validate_query_params = function(property, allowParameterKeys) {
	      var param, queryParameters, _i, _len, _ref1, _results;
	      if (util.isNull(property[1])) {
	        return;
	      }
	      if (!util.isMapping(property[1])) {
	        throw new exports.ValidationError('while validating query parameters', null, "property: 'queryParameters' must be a map", property[0].start_mark);
	      }
	      queryParameters = {};
	      _ref1 = property[1].value;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        param = _ref1[_i];
	        if (!(util.isNullableMapping(param[1]) || util.isNullableSequence(param[1]))) {
	          throw new exports.ValidationError('while validating query parameters', null, "each query parameter must be a map", param[1].start_mark);
	        }
	        this.trackRepeatedProperties(queryParameters, this.canonicalizePropertyName(param[0].value, true), param[0], 'while validating query parameter', "parameter name already used");
	        _results.push(this.valid_common_parameter_properties(param[1], allowParameterKeys));
	      }
	      return _results;
	    };

	    Validator.prototype.validate_form_params = function(property, allowParameterKeys) {
	      var formParameters, param, _i, _len, _ref1, _results;
	      if (util.isNull(property[1])) {
	        return;
	      }
	      if (!util.isMapping(property[1])) {
	        throw new exports.ValidationError('while validating query parameters', null, "property: 'formParameters' must be a map", property[0].start_mark);
	      }
	      formParameters = {};
	      _ref1 = property[1].value;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        param = _ref1[_i];
	        if (!(util.isNullableMapping(param[1]) || util.isNullableSequence(param[1]))) {
	          throw new exports.ValidationError('while validating query parameters', null, 'each form parameter must be a map', param[1].start_mark);
	        }
	        this.trackRepeatedProperties(formParameters, this.canonicalizePropertyName(param[0].value, true), param[0], 'while validating form parameter', "parameter name already used");
	        _results.push(this.valid_common_parameter_properties(param[1], allowParameterKeys));
	      }
	      return _results;
	    };

	    Validator.prototype.validate_headers = function(property, allowParameterKeys) {
	      var headerNames, param, _i, _len, _ref1, _results;
	      if (util.isNull(property[1])) {
	        return;
	      }
	      if (!util.isMapping(property[1])) {
	        throw new exports.ValidationError('while validating headers', null, "property: 'headers' must be a map", property[0].start_mark);
	      }
	      headerNames = {};
	      _ref1 = property[1].value;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        param = _ref1[_i];
	        if (!(util.isNullableMapping(param[1]) || util.isNullableSequence(param[1]))) {
	          throw new exports.ValidationError('while validating query parameters', null, "each header must be a map", param[1].start_mark);
	        }
	        this.trackRepeatedProperties(headerNames, this.canonicalizePropertyName(param[0].value, true), param[0], 'while validating headers', "header name already used");
	        _results.push(this.valid_common_parameter_properties(param[1], allowParameterKeys));
	      }
	      return _results;
	    };

	    Validator.prototype.validate_response = function(response, allowParameterKeys) {
	      var canonicalKey, property, responseCode, responseProperties, valid, _i, _j, _len, _len1, _ref1, _ref2, _results;
	      if (util.isSequence(response[0])) {
	        if (!response[0].value.length) {
	          throw new exports.ValidationError('while validating responses', null, 'there must be at least one response code', response[0].start_mark);
	        }
	        _ref1 = response[0].value;
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          responseCode = _ref1[_i];
	          if (!(this.isParameterKey(responseCode) || util.isInteger(responseCode) || !isNaN(this.canonicalizePropertyName(responseCode, allowParameterKeys)))) {
	            throw new exports.ValidationError('while validating responses', null, "each response key must be an integer", responseCode.start_mark);
	          }
	        }
	      } else if (!(this.isParameterKey(response) || util.isInteger(response[0]) || !isNaN(this.canonicalizePropertyName(response[0].value, allowParameterKeys)))) {
	        throw new exports.ValidationError('while validating responses', null, "each response key must be an integer", response[0].start_mark);
	      }
	      if (!util.isNullableMapping(response[1])) {
	        throw new exports.ValidationError('while validating responses', null, "each response property must be a map", response[0].start_mark);
	      }
	      if (util.isMapping(response[1])) {
	        responseProperties = {};
	        _ref2 = response[1].value;
	        _results = [];
	        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
	          property = _ref2[_j];
	          canonicalKey = this.canonicalizePropertyName(property[0].value, allowParameterKeys);
	          this.trackRepeatedProperties(responseProperties, canonicalKey, property[0], 'while validating responses', "property already used");
	          valid = true;
	          if (!this.isParameterKey(property)) {
	            switch (property[0].value) {
	              case "description":
	                if (!util.isScalar(property[1])) {
	                  throw new exports.ValidationError('while validating responses', null, 'property description must be a string', response[0].start_mark);
	                }
	                break;
	              default:
	                valid = false;
	            }
	            switch (canonicalKey) {
	              case "body":
	                _results.push(this.validate_body(property, allowParameterKeys, null, true));
	                break;
	              case "headers":
	                if (!util.isNullableMapping(property[1])) {
	                  throw new exports.ValidationError('while validating resources', null, "property 'headers' must be a map", property[0].start_mark);
	                }
	                _results.push(this.validate_headers(property));
	                break;
	              default:
	                if (!valid) {
	                  throw new exports.ValidationError('while validating response', null, "property: '" + property[0].value + "' is invalid in a response", property[0].start_mark);
	                } else {
	                  _results.push(void 0);
	                }
	            }
	          } else {
	            _results.push(void 0);
	          }
	        }
	        return _results;
	      }
	    };

	    Validator.prototype.isHttpMethod = function(value, allowParameterKeys) {
	      var _ref1;
	      if (allowParameterKeys == null) {
	        allowParameterKeys = false;
	      }
	      if (value) {
	        value = this.canonicalizePropertyName(value, allowParameterKeys);
	        return (_ref1 = value.toLowerCase()) === 'options' || _ref1 === 'get' || _ref1 === 'head' || _ref1 === 'post' || _ref1 === 'put' || _ref1 === 'delete' || _ref1 === 'trace' || _ref1 === 'connect' || _ref1 === 'patch';
	      }
	      return false;
	    };

	    Validator.prototype.isParameterValue = function(property) {
	      return this.isParameterKey(property, false);
	    };

	    Validator.prototype.isParameterKey = function(property, checkKey) {
	      var offset;
	      if (checkKey == null) {
	        checkKey = true;
	      }
	      offset = checkKey ? 0 : 1;
	      if (!(checkKey || util.isScalar(property[1]))) {
	        return false;
	      }
	      if (this.isParameterKeyValue(property[offset].value)) {
	        return true;
	      } else if (property[offset].value.match(/<<\s*([^\|\s>]+)\s*\|.*\s*>>/g)) {
	        throw new exports.ValidationError('while validating parameter', null, "unknown function applied to property name", property[0].start_mark);
	      }
	      return false;
	    };

	    Validator.prototype.isParameterKeyValue = function(value) {
	      if (value.match(/<<\s*([^\|\s>]+)\s*>>/g) || value.match(/<<\s*([^\|\s>]+)\s*(\|\s*\!\s*(singularize|pluralize))?\s*>>/g)) {
	        return true;
	      }
	      return false;
	    };

	    Validator.prototype.validate_body = function(property, allowParameterKeys, bodyMode, isResponseBody) {
	      var bodyProperties, bodyProperty, canonicalProperty, implicitMode, key, start_mark, valid, _i, _len, _ref1;
	      if (bodyMode == null) {
	        bodyMode = null;
	      }
	      if (util.isNull(property[1])) {
	        return;
	      }
	      if (!util.isMapping(property[1])) {
	        throw new exports.ValidationError('while validating body', null, "property: body specification must be a map", property[0].start_mark);
	      }
	      implicitMode = ["implicit", "forcedImplicit"];
	      bodyProperties = {};
	      _ref1 = property[1].value;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        bodyProperty = _ref1[_i];
	        this.trackRepeatedProperties(bodyProperties, this.canonicalizePropertyName(bodyProperty[0].value, true), bodyProperty[0], 'while validating body', "property already used");
	        if (this.isParameterKey(bodyProperty)) {
	          if (!allowParameterKeys) {
	            throw new exports.ValidationError('while validating body', null, "property '" + bodyProperty[0].value + "' is invalid in a resource", bodyProperty[0].start_mark);
	          }
	        } else if (bodyProperty[0].value.match(/^[^\/]+\/[^\/]+$/)) {
	          if (bodyMode && bodyMode !== "explicit") {
	            throw new exports.ValidationError('while validating body', null, "not compatible with implicit default Media Type", bodyProperty[0].start_mark);
	          }
	          bodyMode = "explicit";
	          this.validate_body(bodyProperty, allowParameterKeys, "forcedImplicit", isResponseBody);
	        } else {
	          key = bodyProperty[0].value;
	          canonicalProperty = this.canonicalizePropertyName(key, allowParameterKeys);
	          valid = true;
	          switch (canonicalProperty) {
	            case "formParameters":
	              if (bodyMode && __indexOf.call(implicitMode, bodyMode) < 0) {
	                throw new exports.ValidationError('while validating body', null, "not compatible with explicit Media Type", bodyProperty[0].start_mark);
	              }
	              if (bodyMode == null) {
	                bodyMode = "implicit";
	              }
	              this.validate_form_params(bodyProperty, allowParameterKeys);
	              break;
	            default:
	              valid = false;
	          }
	          switch (key) {
	            case "example":
	              if (bodyMode && __indexOf.call(implicitMode, bodyMode) < 0) {
	                throw new exports.ValidationError('while validating body', null, "not compatible with explicit Media Type", bodyProperty[0].start_mark);
	              }
	              if (bodyMode == null) {
	                bodyMode = "implicit";
	              }
	              if (!util.isScalar(bodyProperty[1])) {
	                throw new exports.ValidationError('while validating body', null, "example must be a string", bodyProperty[0].start_mark);
	              }
	              break;
	            case "schema":
	              if (bodyMode && __indexOf.call(implicitMode, bodyMode) < 0) {
	                throw new exports.ValidationError('while validating body', null, "not compatible with explicit Media Type", bodyProperty[0].start_mark);
	              }
	              if (bodyMode == null) {
	                bodyMode = "implicit";
	              }
	              if (!util.isScalar(bodyProperty[1])) {
	                throw new exports.ValidationError('while validating body', null, "schema must be a string", bodyProperty[0].start_mark);
	              }
	              this.validateSchema(bodyProperty[1]);
	              break;
	            default:
	              if (!valid) {
	                throw new exports.ValidationError('while validating body', null, "property: '" + bodyProperty[0].value + "' is invalid in a body", bodyProperty[0].start_mark);
	              }
	          }
	        }
	      }
	      if ("formParameters" in bodyProperties) {
	        start_mark = bodyProperties.formParameters.start_mark;
	        if (isResponseBody) {
	          throw new exports.ValidationError('while validating body', null, "formParameters cannot be used to describe response bodies", start_mark);
	        }
	        if ("schema" in bodyProperties || "example" in bodyProperties) {
	          throw new exports.ValidationError('while validating body', null, "formParameters cannot be used together with the example or schema properties", start_mark);
	        }
	      }
	      if (bodyMode === "implicit") {
	        if (!this.get_media_type()) {
	          throw new exports.ValidationError('while validating body', null, "body tries to use default Media Type, but mediaType is null", property[0].start_mark);
	        }
	      }
	    };

	    Validator.prototype.validateSchema = function(property) {
	      var error, lint, mark, schema;
	      if (this.isXmlSchema(property.value)) {
	        return void 0;
	      } else if (this.isJsonSchema(property.value)) {
	        lint = jsonlint(property.value);
	        if (lint.error) {
	          mark = this.create_mark(property.start_mark.line + lint.line, 0);
	          if (property.end_mark.line === mark.line && property.end_mark.column === 0) {
	            mark.line--;
	          }
	          throw new exports.ValidationError('while validating body', null, "schema is not valid JSON error: '" + lint.error + "'", mark);
	        }
	        try {
	          return schema = JSON.parse(property.value);
	        } catch (_error) {
	          error = _error;
	          throw new exports.ValidationError('while validating body', null, "schema is not valid JSON error: '" + error + "'", property.start_mark);
	        }
	      }
	    };

	    Validator.prototype.isJsonSchema = function(string) {
	      return string != null ? string.match(/^\s*\{/) : void 0;
	    };

	    Validator.prototype.isXmlSchema = function(string) {
	      return string != null ? string.match(/^\s*(<\?xml[^>]+>)?[\s\n]*<xs:schema/) : void 0;
	    };

	    Validator.prototype.validate_common_properties = function(property, allowParameterKeys, context) {
	      var use, _i, _len, _ref1;
	      if (this.isParameterKey(property)) {
	        if (!allowParameterKeys) {
	          throw new exports.ValidationError('while validating resources', null, "property '" + property[0].value + "' is invalid in a resource", property[0].start_mark);
	        }
	        return true;
	      } else {
	        switch (property[0].value) {
	          case "displayName":
	            if (!util.isScalar(property[1])) {
	              throw new exports.ValidationError('while validating resources', null, "property 'displayName' must be a string", property[0].start_mark);
	            }
	            return true;
	          case "description":
	            if (!util.isScalar(property[1])) {
	              throw new exports.ValidationError('while validating resources', null, "property 'description' must be a string", property[0].start_mark);
	            }
	            return true;
	          case "is":
	            if (!util.isSequence(property[1])) {
	              throw new exports.ValidationError('while validating resources', null, "property 'is' must be an array", property[0].start_mark);
	            }
	            _ref1 = property[1].value;
	            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	              use = _ref1[_i];
	              this.validate_trait_use(use);
	            }
	            return true;
	        }
	      }
	      return false;
	    };

	    Validator.prototype.validate_trait_use = function(node) {
	      var parameter, traitName, traitValue, _i, _len, _ref1, _results;
	      if (!(util.isScalar(node) || util.isMapping(node))) {
	        throw new exports.ValidationError('while validating trait consumption', null, 'trait must be a string or a map', node.start_mark);
	      }
	      traitName = this.key_or_value(node);
	      if (!(traitName != null ? traitName.trim() : void 0)) {
	        throw new exports.ValidationError('while validating trait consumption', null, 'trait name must be provided', node.start_mark);
	      }
	      if (!(this.isParameterKeyValue(traitName) || this.get_trait(traitName))) {
	        throw new exports.ValidationError('while validating trait consumption', null, "there is no trait named " + traitName, node.start_mark);
	      }
	      if (util.isScalar(node)) {
	        return;
	      }
	      traitValue = node.value[0][1];
	      if (!(util.isNull(traitValue) || util.isMapping(traitValue))) {
	        throw new exports.ValidationError('while validating trait consumption', null, 'trait must be a map', traitValue.start_mark);
	      }
	      if (util.isNull(traitValue)) {
	        return;
	      }
	      _ref1 = traitValue.value;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        parameter = _ref1[_i];
	        if (!util.isScalar(parameter[1])) {
	          throw new exports.ValidationError('while validating trait consumption', null, 'parameter value must be a scalar', parameter[1].start_mark);
	        } else {
	          _results.push(void 0);
	        }
	      }
	      return _results;
	    };

	    Validator.prototype.child_methods = function(node) {
	      var _this = this;
	      if (!(node && util.isMapping(node))) {
	        return [];
	      }
	      return node.value.filter(function(childNode) {
	        return _this.isHttpMethod(childNode[0].value);
	      });
	    };

	    Validator.prototype.has_property = function(node, property) {
	      if (node && util.isMapping(node)) {
	        return node.value.some(function(childNode) {
	          return childNode[0].value && typeof childNode[0].value !== "object" && childNode[0].value === property;
	        });
	      }
	      return false;
	    };

	    Validator.prototype.property_value = function(node, property) {
	      var filteredNodes;
	      filteredNodes = node.value.filter(function(childNode) {
	        return typeof childNode[0].value !== "object" && childNode[0].value === property;
	      });
	      if (filteredNodes.length) {
	        return filteredNodes[0][1].value;
	      }
	    };

	    Validator.prototype.get_property = function(node, property) {
	      var filteredNodes,
	        _this = this;
	      if (node && util.isMapping(node)) {
	        filteredNodes = node.value.filter(function(childNode) {
	          return util.isString(childNode[0]) && childNode[0].value === property;
	        });
	        if (filteredNodes.length > 0) {
	          if (filteredNodes[0].length > 0) {
	            return filteredNodes[0][1];
	          }
	        }
	      }
	      return [];
	    };

	    Validator.prototype.get_properties = function(node, property) {
	      var prop, properties, _i, _len, _ref1;
	      properties = [];
	      if (node && util.isMapping(node)) {
	        _ref1 = node.value;
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          prop = _ref1[_i];
	          if (util.isString(prop[0]) && prop[0].value === property) {
	            properties.push(prop);
	          } else {
	            properties = properties.concat(this.get_properties(prop[1], property));
	          }
	        }
	      }
	      return properties;
	    };

	    Validator.prototype.valid_absolute_uris = function(node) {
	      var repeatedUri, uris;
	      uris = this.get_absolute_uris(node);
	      if (repeatedUri = this.hasDuplicatesUris(uris)) {
	        throw new exports.ValidationError('while validating trait consumption', null, "two resources share same URI " + repeatedUri.uri, repeatedUri.mark);
	      }
	    };

	    Validator.prototype.get_absolute_uris = function(node, parentPath) {
	      var childResource, child_resources, response, uri, _i, _len;
	      response = [];
	      if (!util.isNullableMapping(node)) {
	        throw new exports.ValidationError('while validating resources', null, 'resource is not a map', node.start_mark);
	      }
	      child_resources = this.child_resources(node);
	      for (_i = 0, _len = child_resources.length; _i < _len; _i++) {
	        childResource = child_resources[_i];
	        if (parentPath != null) {
	          uri = parentPath + childResource[0].value;
	        } else {
	          uri = childResource[0].value;
	        }
	        response.push({
	          uri: uri,
	          mark: childResource[0].start_mark
	        });
	        response = response.concat(this.get_absolute_uris(childResource[1], uri));
	      }
	      return response;
	    };

	    Validator.prototype.key_or_value = function(node) {
	      var possibleKeyName, _ref1, _ref2, _ref3;
	      if (node instanceof nodes.ScalarNode) {
	        return node.value;
	      }
	      if (node instanceof nodes.MappingNode) {
	        possibleKeyName = node != null ? (_ref1 = node.value) != null ? (_ref2 = _ref1[0]) != null ? (_ref3 = _ref2[0]) != null ? _ref3.value : void 0 : void 0 : void 0 : void 0;
	        if (possibleKeyName) {
	          return possibleKeyName;
	        }
	      }
	      return null;
	    };

	    Validator.prototype.value_or_undefined = function(node) {
	      if (node instanceof nodes.MappingNode) {
	        return node.value;
	      }
	      return void 0;
	    };

	    Validator.prototype.validate_base_uri = function(baseUriNode) {
	      var baseUri, err, expressions, protocol, template, _ref1, _ref2;
	      baseUri = (_ref1 = baseUriNode.value) != null ? _ref1.trim() : void 0;
	      if (!baseUri) {
	        throw new exports.ValidationError('while validating baseUri', null, 'baseUri must have a value', baseUriNode.start_mark);
	      }
	      protocol = ((url.parse(baseUri)).protocol || 'http:').slice(0, -1).toUpperCase();
	      if (protocol !== 'HTTP' && protocol !== 'HTTPS') {
	        throw new exports.ValidationError('while validating baseUri', null, 'baseUri protocol must be either HTTP or HTTPS', baseUriNode.start_mark);
	      }
	      try {
	        template = uritemplate.parse(baseUri);
	      } catch (_error) {
	        err = _error;
	        throw new exports.ValidationError('while validating baseUri', null, err != null ? (_ref2 = err.options) != null ? _ref2.message : void 0 : void 0, baseUriNode.start_mark);
	      }
	      expressions = template.expressions.filter(function(expr) {
	        return 'templateText' in expr;
	      }).map(function(expression) {
	        return expression.templateText;
	      });
	      if (__indexOf.call(expressions, 'version') >= 0) {
	        return true;
	      }
	    };

	    Validator.prototype.get_validation_errors = function() {
	      return this.validation_errors;
	    };

	    Validator.prototype.is_valid = function() {
	      return this.validation_errors.length === 0;
	    };

	    Validator.prototype.hasDuplicatesUris = function(array) {
	      var item, output, _i, _len;
	      output = {};
	      for (_i = 0, _len = array.length; _i < _len; _i++) {
	        item = array[_i];
	        if (item.uri in output) {
	          return item;
	        }
	        output[item.uri] = item;
	      }
	      return false;
	    };

	    Validator.prototype.hasDuplicates = function(array) {
	      var item, output, _i, _len;
	      output = {};
	      for (_i = 0, _len = array.length; _i < _len; _i++) {
	        item = array[_i];
	        if (item in output) {
	          return true;
	        }
	        output[item] = true;
	      }
	      return false;
	    };

	    return Validator;

	  })();

	}).call(this);


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var MarkedYAMLError, nodes, _ref,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	  MarkedYAMLError = __webpack_require__(21).MarkedYAMLError;

	  nodes = __webpack_require__(24);

	  /*
	  The Traits throws these.
	  */


	  this.JoinError = (function(_super) {
	    __extends(JoinError, _super);

	    function JoinError() {
	      _ref = JoinError.__super__.constructor.apply(this, arguments);
	      return _ref;
	    }

	    return JoinError;

	  })(MarkedYAMLError);

	  /*
	  The Joiner class groups resources under resource property and groups methods under operations property
	  */


	  this.Joiner = (function() {
	    function Joiner() {}

	    Joiner.prototype.join_resources = function(node, call) {
	      var resources, resourcesArray, resourcesName, resourcesValue,
	        _this = this;
	      if (call == null) {
	        call = 0;
	      }
	      resources = [];
	      if (node != null ? node.value : void 0) {
	        resources = node.value.filter(function(childNode) {
	          var _ref1;
	          return (_ref1 = childNode[0]) != null ? _ref1.value.match(/^\//) : void 0;
	        });
	      }
	      resourcesArray = [];
	      if (resources.length > 0) {
	        if (node != null ? node.value : void 0) {
	          node.value = node.value.filter(function(childNode) {
	            return !childNode[0].value.match(/^\//);
	          });
	        }
	        resourcesName = new nodes.ScalarNode('tag:yaml.org,2002:str', 'resources', resources[0][0].start_mark, resources[resources.length - 1][1].end_mark);
	        resources.forEach(function(resource) {
	          var relativeUriName, relativeUriValue;
	          relativeUriName = new nodes.ScalarNode('tag:yaml.org,2002:str', 'relativeUri', resource[0].start_mark, resource[1].end_mark);
	          relativeUriValue = new nodes.ScalarNode('tag:yaml.org,2002:str', resource[0].value, resource[0].start_mark, resource[1].end_mark);
	          if (resource[1].tag === "tag:yaml.org,2002:null") {
	            resource[1] = new nodes.MappingNode('tag:yaml.org,2002:map', [], resource[0].start_mark, resource[1].end_mark);
	          }
	          resource[1].value.push([relativeUriName, relativeUriValue]);
	          resourcesArray.push(resource[1]);
	          _this.join_methods(resource[1]);
	          return _this.join_resources(resource[1], ++call);
	        });
	        resourcesValue = new nodes.SequenceNode('tag:yaml.org,2002:seq', resourcesArray, resources[0][0].start_mark, resources[resources.length - 1][1].end_mark);
	        return node.value.push([resourcesName, resourcesValue]);
	      }
	    };

	    Joiner.prototype.join_methods = function(node) {
	      var methods, methodsArray, methodsName, methodsValue,
	        _this = this;
	      methods = [];
	      if (node && node.value) {
	        methods = node.value.filter(function(childNode) {
	          var _ref1;
	          return _this.isHttpMethod((_ref1 = childNode[0]) != null ? _ref1.value : void 0);
	        });
	      }
	      methodsArray = [];
	      if (methods.length > 0) {
	        node.value = node.value.filter(function(childNode) {
	          return !_this.isHttpMethod(childNode[0].value);
	        });
	        methodsName = new nodes.ScalarNode('tag:yaml.org,2002:str', 'methods', methods[0][0].start_mark, methods[methods.length - 1][1].end_mark);
	        methods.forEach(function(method) {
	          var methodName, methodValue;
	          methodName = new nodes.ScalarNode('tag:yaml.org,2002:str', 'method', method[0].start_mark, method[1].end_mark);
	          methodValue = new nodes.ScalarNode('tag:yaml.org,2002:str', method[0].value, method[0].start_mark, method[1].end_mark);
	          if (method[1].tag === 'tag:yaml.org,2002:null') {
	            method[1] = new nodes.MappingNode('tag:yaml.org,2002:map', [], method[1].start_mark, method[1].end_mark);
	          }
	          method[1].value.push([methodName, methodValue]);
	          return methodsArray.push(method[1]);
	        });
	        methodsValue = new nodes.SequenceNode('tag:yaml.org,2002:seq', methodsArray, methods[0][0].start_mark, methods[methods.length - 1][1].end_mark);
	        return node.value.push([methodsName, methodsValue]);
	      }
	    };

	    return Joiner;

	  })();

	}).call(this);


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var MarkedYAMLError, inflection, nodes, util, _ref, _ref1,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	  MarkedYAMLError = __webpack_require__(21).MarkedYAMLError;

	  nodes = __webpack_require__(24);

	  inflection = __webpack_require__(60);

	  util = __webpack_require__(23);

	  /*
	  The Traits throws these.
	  */


	  this.TraitError = (function(_super) {
	    __extends(TraitError, _super);

	    function TraitError() {
	      _ref = TraitError.__super__.constructor.apply(this, arguments);
	      return _ref;
	    }

	    return TraitError;

	  })(MarkedYAMLError);

	  /*
	  */


	  this.ParameterError = (function(_super) {
	    __extends(ParameterError, _super);

	    function ParameterError() {
	      _ref1 = ParameterError.__super__.constructor.apply(this, arguments);
	      return _ref1;
	    }

	    return ParameterError;

	  })(MarkedYAMLError);

	  /*
	  The Traits class deals with applying traits to resources according to the spec
	  */


	  this.Traits = (function() {
	    function Traits() {
	      this.declaredTraits = {};
	    }

	    Traits.prototype.load_traits = function(node) {
	      var allTraits,
	        _this = this;
	      if (this.has_property(node, 'traits')) {
	        allTraits = this.property_value(node, 'traits');
	        if (allTraits && typeof allTraits === "object") {
	          return allTraits.forEach(function(trait_item) {
	            if (trait_item && typeof trait_item === "object" && typeof trait_item.value === "object") {
	              return trait_item.value.forEach(function(trait) {
	                return _this.declaredTraits[trait[0].value] = trait;
	              });
	            }
	          });
	        }
	      }
	    };

	    Traits.prototype.has_traits = function(node) {
	      if (this.declaredTraits.length === 0 && this.has_property(node, 'traits')) {
	        this.load_traits(node);
	      }
	      return Object.keys(this.declaredTraits).length > 0;
	    };

	    Traits.prototype.get_trait = function(traitName) {
	      if (traitName in this.declaredTraits) {
	        return this.declaredTraits[traitName][1];
	      }
	      return null;
	    };

	    Traits.prototype.apply_traits = function(node, resourceUri, removeQs) {
	      var resources,
	        _this = this;
	      if (resourceUri == null) {
	        resourceUri = "";
	      }
	      if (removeQs == null) {
	        removeQs = true;
	      }
	      if (!util.isMapping(node)) {
	        return;
	      }
	      if (this.has_traits(node)) {
	        resources = this.child_resources(node);
	        return resources.forEach(function(resource) {
	          return _this.apply_traits_to_resource(resourceUri + resource[0].value, resource[1], removeQs);
	        });
	      }
	    };

	    Traits.prototype.apply_traits_to_resource = function(resourceUri, resource, removeQs) {
	      var methods, uses,
	        _this = this;
	      if (!util.isMapping(resource)) {
	        return;
	      }
	      methods = this.child_methods(resource);
	      if (this.has_property(resource, 'is')) {
	        uses = this.property_value(resource, 'is');
	        uses.forEach(function(use) {
	          return methods.forEach(function(method) {
	            return _this.apply_trait(resourceUri, method, use);
	          });
	        });
	      }
	      methods.forEach(function(method) {
	        if (_this.has_property(method[1], 'is')) {
	          uses = _this.property_value(method[1], 'is');
	          return uses.forEach(function(use) {
	            return _this.apply_trait(resourceUri, method, use);
	          });
	        }
	      });
	      if (removeQs) {
	        resource.remove_question_mark_properties();
	      }
	      return this.apply_traits(resource, resourceUri, removeQs);
	    };

	    Traits.prototype.apply_trait = function(resourceUri, method, useKey) {
	      var plainParameters, temp, trait, traitName;
	      traitName = this.key_or_value(useKey);
	      if (!(traitName != null ? traitName.trim() : void 0)) {
	        throw new exports.TraitError('while applying trait', null, 'trait name must be provided', useKey.start_mark);
	      }
	      if (!(trait = this.get_trait(traitName))) {
	        throw new exports.TraitError('while applying trait', null, "there is no trait named " + traitName, useKey.start_mark);
	      }
	      plainParameters = this.get_parameters_from_is_key(resourceUri, method[0].value, useKey);
	      temp = trait.cloneForTrait();
	      this.apply_parameters(temp, plainParameters, useKey);
	      this.apply_default_media_type_to_method(temp);
	      temp.combine(method[1]);
	      return method[1] = temp;
	    };

	    Traits.prototype.apply_parameters = function(resource, parameters, useKey) {
	      var parameterName, usedParameters, _results;
	      this._apply_parameters(resource, parameters, useKey, usedParameters = {
	        resourcePath: true,
	        resourcePathName: true,
	        methodName: true
	      });
	      _results = [];
	      for (parameterName in parameters) {
	        if (!usedParameters[parameterName]) {
	          throw new exports.ParameterError('while applying parameters', null, "unused parameter: " + parameterName, useKey.start_mark);
	        } else {
	          _results.push(void 0);
	        }
	      }
	      return _results;
	    };

	    Traits.prototype._apply_parameters = function(resource, parameters, useKey, usedParameters) {
	      var parameterUse,
	        _this = this;
	      if (!resource) {
	        return;
	      }
	      if (util.isString(resource)) {
	        if (parameterUse = resource.value.match(/<<\s*([^\|\s>]+)\s*(\|[^>]*)?\s*>>/g)) {
	          parameterUse.forEach(function(parameter) {
	            var method, parameterName, value, _ref2, _ref3;
	            parameterName = parameter != null ? (_ref2 = parameter.trim()) != null ? _ref2.replace(/[<>]+/g, '').trim() : void 0 : void 0;
	            _ref3 = parameterName.split(/\s*\|\s*/), parameterName = _ref3[0], method = _ref3[1];
	            if (!(parameterName in parameters)) {
	              throw new exports.ParameterError('while applying parameters', null, "value was not provided for parameter: " + parameterName, useKey.start_mark);
	            }
	            value = parameters[parameterName];
	            usedParameters[parameterName] = true;
	            if (method) {
	              if (method.match(/!\s*singularize/)) {
	                value = inflection.singularize(value);
	              } else if (method.match(/!\s*pluralize/)) {
	                value = inflection.pluralize(value);
	              } else {
	                throw new exports.ParameterError('while validating parameter', null, 'unknown function applied to parameter', resource.start_mark);
	              }
	            }
	            return resource.value = resource.value.replace(parameter, value);
	          });
	        }
	        return;
	      }
	      if (util.isSequence(resource)) {
	        resource.value.forEach(function(node) {
	          return _this._apply_parameters(node, parameters, useKey, usedParameters);
	        });
	        return;
	      }
	      if (util.isMapping(resource)) {
	        resource.value.forEach(function(property) {
	          _this._apply_parameters(property[0], parameters, useKey, usedParameters);
	          return _this._apply_parameters(property[1], parameters, useKey, usedParameters);
	        });
	      }
	    };

	    Traits.prototype.get_parameters_from_is_key = function(resourceUri, methodName, typeKey) {
	      var parameter, parameters, reserved, result, _i, _len, _ref2;
	      result = {};
	      reserved = {
	        methodName: methodName,
	        resourcePath: resourceUri.replace(/\/\/*/g, '/'),
	        resourcePathName: this.extractResourcePathName(resourceUri)
	      };
	      if (util.isMapping(typeKey)) {
	        parameters = this.value_or_undefined(typeKey);
	        if (util.isMapping(parameters[0][1])) {
	          _ref2 = parameters[0][1].value;
	          for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
	            parameter = _ref2[_i];
	            if (parameter[0].value in reserved) {
	              throw new exports.TraitError('while applying parameters', null, "invalid parameter name: " + parameter[0].value + " is reserved", parameter[0].start_mark);
	            }
	            result[parameter[0].value] = parameter[1].value;
	          }
	        }
	      }
	      return util.extend(result, reserved);
	    };

	    Traits.prototype.extractResourcePathName = function(resourceUri) {
	      var pathSegments, segment;
	      pathSegments = resourceUri.split(/\//);
	      while (segment = pathSegments.pop()) {
	        if (!(typeof segment !== "undefined" && segment !== null ? segment.match(/[{}]/) : void 0)) {
	          return segment;
	        }
	      }
	      return "";
	    };

	    return Traits;

	  })();

	}).call(this);


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var MarkedYAMLError, nodes, util, _ref,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	  MarkedYAMLError = __webpack_require__(21).MarkedYAMLError;

	  nodes = __webpack_require__(24);

	  util = __webpack_require__(23);

	  /*
	  The ResourceTypes throws these.
	  */


	  this.ResourceTypeError = (function(_super) {
	    __extends(ResourceTypeError, _super);

	    function ResourceTypeError() {
	      _ref = ResourceTypeError.__super__.constructor.apply(this, arguments);
	      return _ref;
	    }

	    return ResourceTypeError;

	  })(MarkedYAMLError);

	  /*
	  The ResourceTypes class deals with applying ResourceTypes to resources according to the spec
	  */


	  this.ResourceTypes = (function() {
	    function ResourceTypes() {
	      this.apply_parameters_to_type = __bind(this.apply_parameters_to_type, this);
	      this.apply_type = __bind(this.apply_type, this);
	      this.apply_types = __bind(this.apply_types, this);
	      this.get_type = __bind(this.get_type, this);
	      this.has_types = __bind(this.has_types, this);
	      this.load_types = __bind(this.load_types, this);
	      this.declaredTypes = {};
	    }

	    ResourceTypes.prototype.load_types = function(node) {
	      var allTypes,
	        _this = this;
	      this.load_default_media_type(node);
	      if (this.has_property(node, 'resourceTypes')) {
	        allTypes = this.property_value(node, 'resourceTypes');
	        if (allTypes && typeof allTypes === 'object') {
	          return allTypes.forEach(function(type_item) {
	            if (type_item && typeof type_item === 'object' && typeof type_item.value === 'object') {
	              return type_item.value.forEach(function(type) {
	                return _this.declaredTypes[type[0].value] = type;
	              });
	            }
	          });
	        }
	      }
	    };

	    ResourceTypes.prototype.has_types = function(node) {
	      if (Object.keys(this.declaredTypes).length === 0 && this.has_property(node, 'resourceTypes')) {
	        this.load_types(node);
	      }
	      return Object.keys(this.declaredTypes).length > 0;
	    };

	    ResourceTypes.prototype.get_type = function(typeName) {
	      return this.declaredTypes[typeName];
	    };

	    ResourceTypes.prototype.apply_types = function(node, resourceUri) {
	      var resources,
	        _this = this;
	      if (resourceUri == null) {
	        resourceUri = "";
	      }
	      if (!util.isMapping(node)) {
	        return;
	      }
	      if (this.has_types(node)) {
	        resources = this.child_resources(node);
	        return resources.forEach(function(resource) {
	          var type;
	          _this.apply_default_media_type_to_resource(resource[1]);
	          if (_this.has_property(resource[1], 'type')) {
	            type = _this.get_property(resource[1], 'type');
	            _this.apply_type(resourceUri + resource[0].value, resource, type);
	          }
	          return _this.apply_types(resource[1], resourceUri + resource[0].value);
	        });
	      } else {
	        resources = this.child_resources(node);
	        return resources.forEach(function(resource) {
	          return _this.apply_default_media_type_to_resource(resource[1]);
	        });
	      }
	    };

	    ResourceTypes.prototype.apply_type = function(resourceUri, resource, typeKey) {
	      var tempType;
	      tempType = this.resolve_inheritance_chain(resourceUri, typeKey);
	      tempType.combine(resource[1]);
	      resource[1] = tempType;
	      return resource[1].remove_question_mark_properties();
	    };

	    ResourceTypes.prototype.resolve_inheritance_chain = function(resourceUri, typeKey) {
	      var baseType, childType, childTypeName, childTypeProperty, compiledTypes, inheritsFrom, parentType, parentTypeName, pathToCircularRef, result, rootType, typesToApply;
	      childTypeName = this.key_or_value(typeKey);
	      childType = this.apply_parameters_to_type(resourceUri, childTypeName, typeKey);
	      typesToApply = [childTypeName];
	      compiledTypes = {};
	      compiledTypes[childTypeName] = childType;
	      this.apply_default_media_type_to_resource(childType);
	      this.apply_traits_to_resource(resourceUri, childType, false);
	      while (this.has_property(childType, 'type')) {
	        typeKey = this.get_property(childType, 'type');
	        parentTypeName = this.key_or_value(typeKey);
	        if (parentTypeName in compiledTypes) {
	          pathToCircularRef = typesToApply.concat(parentTypeName).join(' -> ');
	          childTypeProperty = this.get_type(childTypeName)[0];
	          throw new exports.ResourceTypeError('while applying resourceTypes', null, "circular reference of \"" + parentTypeName + "\" has been detected: " + pathToCircularRef, childTypeProperty.start_mark);
	        }
	        parentType = this.apply_parameters_to_type(resourceUri, parentTypeName, typeKey);
	        this.apply_default_media_type_to_resource(parentType);
	        this.apply_traits_to_resource(resourceUri, parentType, false);
	        childTypeName = parentTypeName;
	        childType = parentType;
	        compiledTypes[childTypeName] = childType;
	        typesToApply.push(childTypeName);
	      }
	      rootType = typesToApply.pop();
	      baseType = compiledTypes[rootType].cloneForResourceType();
	      result = baseType;
	      while (inheritsFrom = typesToApply.pop()) {
	        baseType = compiledTypes[inheritsFrom].cloneForResourceType();
	        result.combine(baseType);
	      }
	      return result;
	    };

	    ResourceTypes.prototype.apply_parameters_to_type = function(resourceUri, typeName, typeKey) {
	      var parameters, type;
	      if (!(typeName != null ? typeName.trim() : void 0)) {
	        throw new exports.ResourceTypeError('while applying resource type', null, 'resource type name must be provided', typeKey.start_mark);
	      }
	      if (!(type = this.get_type(typeName))) {
	        throw new exports.ResourceTypeError('while applying resource type', null, "there is no resource type named " + typeName, typeKey.start_mark);
	      }
	      type = type[1].clone();
	      parameters = this._get_parameters_from_type_key(resourceUri, typeKey);
	      this.apply_parameters(type, parameters, typeKey);
	      return type;
	    };

	    ResourceTypes.prototype._get_parameters_from_type_key = function(resourceUri, typeKey) {
	      var parameter, parameters, reserved, result, _i, _len, _ref1;
	      result = {};
	      reserved = {
	        resourcePath: resourceUri.replace(/\/\/*/g, '/'),
	        resourcePathName: this.extractResourcePathName(resourceUri)
	      };
	      if (util.isMapping(typeKey)) {
	        parameters = this.value_or_undefined(typeKey);
	        if (util.isMapping(parameters[0][1])) {
	          _ref1 = parameters[0][1].value;
	          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	            parameter = _ref1[_i];
	            if (parameter[0].value in reserved) {
	              throw new exports.ResourceTypeError('while applying parameters', null, "invalid parameter name: " + parameter[0].value + " is reserved", parameter[0].start_mark);
	            }
	            result[parameter[0].value] = parameter[1].value;
	          }
	        }
	      }
	      return util.extend(result, reserved);
	    };

	    return ResourceTypes;

	  })();

	}).call(this);


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var MarkedYAMLError, nodes, _ref,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	  MarkedYAMLError = __webpack_require__(21).MarkedYAMLError;

	  nodes = __webpack_require__(24);

	  /*
	  The Schemas throws these.
	  */


	  this.SchemaError = (function(_super) {
	    __extends(SchemaError, _super);

	    function SchemaError() {
	      _ref = SchemaError.__super__.constructor.apply(this, arguments);
	      return _ref;
	    }

	    return SchemaError;

	  })(MarkedYAMLError);

	  /*
	    The Schemas class deals with applying schemas to resources according to the spec
	  */


	  this.Schemas = (function() {
	    function Schemas() {
	      this.get_schemas_used = __bind(this.get_schemas_used, this);
	      this.apply_schemas = __bind(this.apply_schemas, this);
	      this.get_all_schemas = __bind(this.get_all_schemas, this);
	      this.has_schemas = __bind(this.has_schemas, this);
	      this.load_schemas = __bind(this.load_schemas, this);
	      this.declaredSchemas = {};
	    }

	    Schemas.prototype.load_schemas = function(node) {
	      var allSchemas,
	        _this = this;
	      if (this.has_property(node, "schemas")) {
	        allSchemas = this.property_value(node, 'schemas');
	        if (allSchemas && typeof allSchemas === "object") {
	          return allSchemas.forEach(function(schema_entry) {
	            if (schema_entry && typeof schema_entry === "object" && typeof schema_entry.value === "object") {
	              return schema_entry.value.forEach(function(schema) {
	                return _this.declaredSchemas[schema[0].value] = schema;
	              });
	            }
	          });
	        }
	      }
	    };

	    Schemas.prototype.has_schemas = function(node) {
	      if (this.declaredSchemas.length === 0 && this.has_property(node, "schemas")) {
	        this.load_schemas(node);
	      }
	      return Object.keys(this.declaredSchemas).length > 0;
	    };

	    Schemas.prototype.get_all_schemas = function() {
	      return this.declaredSchemas;
	    };

	    Schemas.prototype.apply_schemas = function(node) {
	      var resources, schemas,
	        _this = this;
	      resources = this.child_resources(node);
	      schemas = this.get_schemas_used(resources);
	      return schemas.forEach(function(schema) {
	        if (schema[1].value in _this.declaredSchemas) {
	          return schema[1].value = _this.declaredSchemas[schema[1].value][1].value;
	        }
	      });
	    };

	    Schemas.prototype.get_schemas_used = function(resources) {
	      var schemas,
	        _this = this;
	      schemas = [];
	      resources.forEach(function(resource) {
	        var properties;
	        properties = _this.get_properties(resource[1], "schema");
	        return schemas = schemas.concat(properties);
	      });
	      return schemas;
	    };

	    return Schemas;

	  })();

	}).call(this);


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var MarkedYAMLError, nodes, url, util,
	    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	  url = __webpack_require__(30);

	  MarkedYAMLError = __webpack_require__(21).MarkedYAMLError;

	  nodes = __webpack_require__(24);

	  util = __webpack_require__(23);

	  /*
	  The Protocols class deals with applying protocols to methods according to the spec
	  */


	  this.Protocols = (function() {
	    function Protocols() {
	      this.apply_protocols = __bind(this.apply_protocols, this);
	    }

	    Protocols.prototype.apply_protocols = function(node) {
	      var protocols;
	      if (protocols = this.apply_protocols_to_root(node)) {
	        return this.apply_protocols_to_resources(node, protocols);
	      }
	    };

	    Protocols.prototype.apply_protocols_to_root = function(node) {
	      var baseUri, parsedBaseUri, protocol, protocols;
	      if (this.has_property(node, 'protocols')) {
	        return this.get_property(node, 'protocols');
	      }
	      if (!(baseUri = this.property_value(node, 'baseUri'))) {
	        return;
	      }
	      parsedBaseUri = url.parse(baseUri);
	      protocol = (parsedBaseUri.protocol || 'http:').slice(0, -1).toUpperCase();
	      protocols = [new nodes.ScalarNode('tag:yaml.org,2002:str', 'protocols', node.start_mark, node.end_mark), new nodes.SequenceNode('tag:yaml.org,2002:seq', [new nodes.ScalarNode('tag:yaml.org,2002:str', protocol, node.start_mark, node.end_mark)], node.start_mark, node.end_mark)];
	      node.value.push(protocols);
	      return protocols[1];
	    };

	    Protocols.prototype.apply_protocols_to_resources = function(node, protocols) {
	      var resource, _i, _len, _ref, _results;
	      _ref = this.child_resources(node);
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        resource = _ref[_i];
	        this.apply_protocols_to_resources(resource, protocols);
	        _results.push(this.apply_protocols_to_methods(resource, protocols));
	      }
	      return _results;
	    };

	    Protocols.prototype.apply_protocols_to_methods = function(node, protocols) {
	      var method, _i, _len, _ref, _results;
	      _ref = this.child_methods(node[1]);
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        method = _ref[_i];
	        if (!this.has_property(method[1], 'protocols')) {
	          if (!util.isMapping(method[1])) {
	            method[1] = new nodes.MappingNode('tag:yaml.org,2002:map', [], method[1].start_mark, method[1].end_mark);
	          }
	          _results.push(method[1].value.push([new nodes.ScalarNode('tag:yaml.org,2002:str', 'protocols', method[0].start_mark, method[0].end_mark), protocols.clone()]));
	        } else {
	          _results.push(void 0);
	        }
	      }
	      return _results;
	    };

	    return Protocols;

	  })();

	}).call(this);


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var MarkedYAMLError, nodes, _ref,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	  MarkedYAMLError = __webpack_require__(21).MarkedYAMLError;

	  nodes = __webpack_require__(24);

	  /*
	  The Schemas throws these.
	  */


	  this.SecuritySchemeError = (function(_super) {
	    __extends(SecuritySchemeError, _super);

	    /*
	      The Schemas class deals with applying schemas to resources according to the spec
	    */


	    function SecuritySchemeError() {
	      _ref = SecuritySchemeError.__super__.constructor.apply(this, arguments);
	      return _ref;
	    }

	    return SecuritySchemeError;

	  })(MarkedYAMLError);

	  this.SecuritySchemes = (function() {
	    function SecuritySchemes() {
	      this.get_security_scheme = __bind(this.get_security_scheme, this);
	      this.get_all_schemes = __bind(this.get_all_schemes, this);
	      this.load_security_schemes = __bind(this.load_security_schemes, this);
	      this.declaredSchemes = {};
	    }

	    SecuritySchemes.prototype.load_security_schemes = function(node) {
	      var allschemes,
	        _this = this;
	      if (this.has_property(node, "securitySchemes")) {
	        allschemes = this.property_value(node, 'securitySchemes');
	        if (allschemes && typeof allschemes === "object") {
	          return allschemes.forEach(function(scheme_entry) {
	            if (scheme_entry.tag === 'tag:yaml.org,2002:map') {
	              return scheme_entry.value.forEach(function(scheme) {
	                return _this.declaredSchemes[scheme[0].value] = scheme[1].value;
	              });
	            }
	          });
	        }
	      }
	    };

	    SecuritySchemes.prototype.get_all_schemes = function() {
	      return this.declaredSchemes;
	    };

	    SecuritySchemes.prototype.get_security_scheme = function(schemaName) {
	      return this.declaredSchemes[schemaName];
	    };

	    return SecuritySchemes;

	  })();

	}).call(this);


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var nodes, uritemplate, util,
	    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	  uritemplate = __webpack_require__(59);

	  nodes = __webpack_require__(24);

	  util = __webpack_require__(23);

	  /*
	     Applies transformations to the RAML
	  */


	  this.Transformations = (function() {
	    function Transformations(settings) {
	      this.settings = settings;
	      this.isContentTypeString = __bind(this.isContentTypeString, this);
	      this.add_key_value_to_node = __bind(this.add_key_value_to_node, this);
	      this.apply_default_media_type_to_resource = __bind(this.apply_default_media_type_to_resource, this);
	      this.get_media_type = __bind(this.get_media_type, this);
	      this.load_default_media_type = __bind(this.load_default_media_type, this);
	      this.applyAstTransformations = __bind(this.applyAstTransformations, this);
	      this.applyTransformations = __bind(this.applyTransformations, this);
	      this.declaredSchemas = {};
	    }

	    Transformations.prototype.applyTransformations = function(rootObject) {
	      var resources;
	      if (this.settings.transform) {
	        this.applyTransformationsToRoot(rootObject);
	        resources = rootObject.resources;
	        return this.applyTransformationsToResources(rootObject, resources);
	      }
	    };

	    Transformations.prototype.applyAstTransformations = function(document) {
	      if (this.settings.transform) {
	        return this.transform_document(document);
	      }
	    };

	    Transformations.prototype.load_default_media_type = function(node) {
	      if (!util.isMapping(node || (node != null ? node.value : void 0))) {
	        return;
	      }
	      return this.mediaType = this.property_value(node, 'mediaType');
	    };

	    Transformations.prototype.get_media_type = function() {
	      return this.mediaType;
	    };

	    Transformations.prototype.applyTransformationsToRoot = function(rootObject) {
	      var expressions, template;
	      if (rootObject.baseUri) {
	        template = uritemplate.parse(rootObject.baseUri);
	        expressions = template.expressions.filter(function(expr) {
	          return 'templateText' in expr;
	        }).map(function(expression) {
	          return expression.templateText;
	        });
	        if (expressions.length) {
	          if (!rootObject.baseUriParameters) {
	            rootObject.baseUriParameters = {};
	          }
	        }
	        return expressions.forEach(function(parameterName) {
	          if (!(parameterName in rootObject.baseUriParameters)) {
	            rootObject.baseUriParameters[parameterName] = {
	              type: "string",
	              required: true,
	              displayName: parameterName
	            };
	            if (parameterName === "version") {
	              return rootObject.baseUriParameters[parameterName]["enum"] = [rootObject.version];
	            }
	          }
	        });
	      }
	    };

	    Transformations.prototype.applyTransformationsToResources = function(rootObject, resources) {
	      var expressions, inheritedSecScheme, method, parameterName, pathParts, resource, template, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _results;
	      if (resources != null ? resources.length : void 0) {
	        _results = [];
	        for (_i = 0, _len = resources.length; _i < _len; _i++) {
	          resource = resources[_i];
	          inheritedSecScheme = resource.securedBy ? resource.securedBy : rootObject != null ? rootObject.securedBy : void 0;
	          if ((_ref = resource.methods) != null ? _ref.length : void 0) {
	            _ref1 = resource.methods;
	            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
	              method = _ref1[_j];
	              if (!("securedBy" in method)) {
	                if (inheritedSecScheme) {
	                  method.securedBy = inheritedSecScheme;
	                }
	              }
	            }
	          }
	          pathParts = resource.relativeUri.split('\/');
	          while (!pathParts[0] && pathParts.length) {
	            pathParts.shift();
	          }
	          resource.relativeUriPathSegments = pathParts;
	          template = uritemplate.parse(resource.relativeUri);
	          expressions = template.expressions.filter(function(expr) {
	            return 'templateText' in expr;
	          }).map(function(expression) {
	            return expression.templateText;
	          });
	          if (expressions.length) {
	            if (!resource.uriParameters) {
	              resource.uriParameters = {};
	            }
	          }
	          for (_k = 0, _len2 = expressions.length; _k < _len2; _k++) {
	            parameterName = expressions[_k];
	            if (!(parameterName in resource.uriParameters)) {
	              resource.uriParameters[parameterName] = {
	                type: "string",
	                required: true,
	                displayName: parameterName
	              };
	            }
	          }
	          _results.push(this.applyTransformationsToResources(rootObject, resource.resources));
	        }
	        return _results;
	      }
	    };

	    /*
	    Media Type pivot when using default mediaType property
	    */


	    Transformations.prototype.apply_default_media_type_to_resource = function(resource) {
	      var childResource, method, _i, _j, _len, _len1, _ref, _ref1, _results;
	      if (!this.mediaType) {
	        return;
	      }
	      if (!util.isMapping(resource)) {
	        return;
	      }
	      _ref = this.child_resources(resource);
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        childResource = _ref[_i];
	        this.apply_default_media_type_to_resource(childResource[1]);
	      }
	      _ref1 = this.child_methods(resource);
	      _results = [];
	      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
	        method = _ref1[_j];
	        _results.push(this.apply_default_media_type_to_method(method[1]));
	      }
	      return _results;
	    };

	    Transformations.prototype.apply_default_media_type_to_method = function(method) {
	      var responses,
	        _this = this;
	      if (!this.mediaType) {
	        return;
	      }
	      if (!util.isMapping(method)) {
	        return;
	      }
	      if (this.has_property(method, 'body')) {
	        this.apply_default_media_type_to_body(this.get_property(method, 'body'));
	      }
	      if (this.has_property(method, 'responses')) {
	        responses = this.get_property(method, 'responses');
	        if (!(responses && responses.value)) {
	          return;
	        }
	        return responses.value.forEach(function(response) {
	          if (_this.has_property(response[1], 'body')) {
	            return _this.apply_default_media_type_to_body(_this.get_property(response[1], 'body'));
	          }
	        });
	      }
	    };

	    Transformations.prototype.apply_default_media_type_to_body = function(body) {
	      var key, responseType, responseTypeKey, _ref, _ref1, _ref2;
	      if (!util.isMapping(body)) {
	        return;
	      }
	      if (body != null ? (_ref = body.value) != null ? (_ref1 = _ref[0]) != null ? (_ref2 = _ref1[0]) != null ? _ref2.value : void 0 : void 0 : void 0 : void 0) {
	        key = body.value[0][0].value;
	        if (!key.match(/\//)) {
	          responseType = new nodes.MappingNode('tag:yaml.org,2002:map', [], body.start_mark, body.end_mark);
	          responseTypeKey = new nodes.ScalarNode('tag:yaml.org,2002:str', this.mediaType, body.start_mark, body.end_mark);
	          responseType.value.push([responseTypeKey, body.clone()]);
	          return body.value = responseType.value;
	        }
	      }
	    };

	    Transformations.prototype.noop = function() {};

	    Transformations.prototype.transform_types = function(typeProperty) {
	      var types,
	        _this = this;
	      types = typeProperty.value;
	      return types.forEach(function(type_entry) {
	        return type_entry.value.forEach(function(type) {
	          return _this.transform_resource(type, true);
	        });
	      });
	    };

	    Transformations.prototype.transform_traits = function(traitProperty) {
	      var traits,
	        _this = this;
	      traits = traitProperty.value;
	      return traits.forEach(function(trait_entry) {
	        return trait_entry.value.forEach(function(trait) {
	          return _this.transform_method(trait[1], true);
	        });
	      });
	    };

	    Transformations.prototype.transform_named_params = function(property, allowParameterKeys, requiredByDefault) {
	      var _this = this;
	      if (requiredByDefault == null) {
	        requiredByDefault = true;
	      }
	      if (util.isNull(property[1])) {
	        return;
	      }
	      return property[1].value.forEach(function(param) {
	        if (util.isNull(param[1])) {
	          param[1] = new nodes.MappingNode('tag:yaml.org,2002:map', [], param[1].start_mark, param[1].end_mark);
	        }
	        return _this.transform_common_parameter_properties(param[0].value, param[1], allowParameterKeys, requiredByDefault);
	      });
	    };

	    Transformations.prototype.transform_common_parameter_properties = function(parameterName, node, allowParameterKeys, requiredByDefault) {
	      var _this = this;
	      if (util.isSequence(node)) {
	        return node.value.forEach(function(parameter) {
	          return _this.transform_named_parameter(parameterName, parameter, allowParameterKeys, requiredByDefault);
	        });
	      } else {
	        return this.transform_named_parameter(parameterName, node, allowParameterKeys, requiredByDefault);
	      }
	    };

	    Transformations.prototype.transform_named_parameter = function(parameterName, node, allowParameterKeys, requiredByDefault) {
	      var hasDisplayName, hasRequired, hasType,
	        _this = this;
	      hasDisplayName = false;
	      hasRequired = false;
	      hasType = false;
	      node.value.forEach(function(childNode) {
	        var canonicalPropertyName;
	        if (allowParameterKeys && _this.isParameterKey(childNode)) {
	          return;
	        }
	        canonicalPropertyName = _this.canonicalizePropertyName(childNode[0].value, allowParameterKeys);
	        switch (canonicalPropertyName) {
	          case "pattern":
	            return _this.noop();
	          case "default":
	            return _this.noop();
	          case "enum":
	            return _this.noop();
	          case "description":
	            return _this.noop();
	          case "example":
	            return _this.noop();
	          case "minLength":
	            return _this.noop();
	          case "maxLength":
	            return _this.noop();
	          case "minimum":
	            return _this.noop();
	          case "maximum":
	            return _this.noop();
	          case "repeat":
	            return _this.noop();
	          case "displayName":
	            return hasDisplayName = true;
	          case "type":
	            return hasType = true;
	          case "required":
	            return hasRequired = true;
	          default:
	            return _this.noop();
	        }
	      });
	      if (!hasDisplayName) {
	        this.add_key_value_to_node(node, 'displayName', 'tag:yaml.org,2002:str', this.canonicalizePropertyName(parameterName, allowParameterKeys));
	      }
	      if (!hasRequired) {
	        if (requiredByDefault) {
	          this.add_key_value_to_node(node, 'required', 'tag:yaml.org,2002:bool', 'true');
	        }
	      }
	      if (!hasType) {
	        return this.add_key_value_to_node(node, 'type', 'tag:yaml.org,2002:str', 'string');
	      }
	    };

	    Transformations.prototype.add_key_value_to_node = function(node, keyName, valueTag, value) {
	      var propertyName, propertyValue;
	      propertyName = new nodes.ScalarNode('tag:yaml.org,2002:str', keyName, node.start_mark, node.end_mark);
	      propertyValue = new nodes.ScalarNode(valueTag, value, node.start_mark, node.end_mark);
	      return node.value.push([propertyName, propertyValue]);
	    };

	    Transformations.prototype.transform_document = function(node) {
	      var _this = this;
	      if (node != null ? node.value : void 0) {
	        return node.value.forEach(function(property) {
	          var _ref;
	          switch (property[0].value) {
	            case "title":
	              return _this.noop();
	            case "securitySchemes":
	              return _this.noop();
	            case "schemas":
	              return _this.noop();
	            case "version":
	              return _this.noop();
	            case "documentation":
	              return _this.noop();
	            case "mediaType":
	              return _this.noop();
	            case "securedBy":
	              return _this.noop();
	            case "baseUri":
	              return _this.noop();
	            case "traits":
	              return _this.transform_traits(property[1]);
	            case "baseUriParameters":
	              return _this.transform_named_params(property, false);
	            case "resourceTypes":
	              return _this.transform_types(property[1]);
	            case "resources":
	              return (_ref = property[1]) != null ? _ref.value.forEach(function(resource) {
	                return _this.transform_resource(resource);
	              }) : void 0;
	            default:
	              return _this.noop();
	          }
	        });
	      }
	    };

	    Transformations.prototype.transform_resource = function(resource, allowParameterKeys) {
	      var _this = this;
	      if (allowParameterKeys == null) {
	        allowParameterKeys = false;
	      }
	      if (resource.value) {
	        return resource.value.forEach(function(property) {
	          var canonicalKey, isKnownCommonProperty, _ref, _ref1;
	          isKnownCommonProperty = _this.transform_common_properties(property, allowParameterKeys);
	          if (!isKnownCommonProperty) {
	            if (_this.isHttpMethod(property[0].value, allowParameterKeys)) {
	              return _this.transform_method(property[1], allowParameterKeys);
	            } else {
	              canonicalKey = _this.canonicalizePropertyName(property[0].value, allowParameterKeys);
	              switch (canonicalKey) {
	                case "type":
	                  return _this.noop();
	                case "usage":
	                  return _this.noop();
	                case "securedBy":
	                  return _this.noop();
	                case "uriParameters":
	                  return _this.transform_named_params(property, allowParameterKeys);
	                case "baseUriParameters":
	                  return _this.transform_named_params(property, allowParameterKeys);
	                case "resources":
	                  return (_ref = property[1]) != null ? _ref.value.forEach(function(resource) {
	                    return _this.transform_resource(resource);
	                  }) : void 0;
	                case "methods":
	                  return (_ref1 = property[1]) != null ? _ref1.value.forEach(function(method) {
	                    return _this.transform_method(method, allowParameterKeys);
	                  }) : void 0;
	                default:
	                  return _this.noop();
	              }
	            }
	          }
	        });
	      }
	    };

	    Transformations.prototype.transform_method = function(method, allowParameterKeys) {
	      var _this = this;
	      if (util.isNull(method)) {
	        return;
	      }
	      return method.value.forEach(function(property) {
	        var canonicalKey;
	        if (_this.transform_common_properties(property, allowParameterKeys)) {
	          return;
	        }
	        canonicalKey = _this.canonicalizePropertyName(property[0].value, allowParameterKeys);
	        switch (canonicalKey) {
	          case "securedBy":
	            return _this.noop();
	          case "usage":
	            return _this.noop();
	          case "headers":
	            return _this.transform_named_params(property, allowParameterKeys, false);
	          case "queryParameters":
	            return _this.transform_named_params(property, allowParameterKeys, false);
	          case "baseUriParameters":
	            return _this.transform_named_params(property, allowParameterKeys);
	          case "body":
	            return _this.transform_body(property, allowParameterKeys);
	          case "responses":
	            return _this.transform_responses(property, allowParameterKeys);
	          default:
	            return _this.noop();
	        }
	      });
	    };

	    Transformations.prototype.transform_responses = function(responses, allowParameterKeys) {
	      var _this = this;
	      if (util.isNull(responses[1])) {
	        return;
	      }
	      return responses[1].value.forEach(function(response) {
	        return _this.transform_response(response, allowParameterKeys);
	      });
	    };

	    Transformations.prototype.transform_response = function(response, allowParameterKeys) {
	      var _this = this;
	      if (util.isMapping(response[1])) {
	        return response[1].value.forEach(function(property) {
	          var canonicalKey;
	          canonicalKey = _this.canonicalizePropertyName(property[0].value, allowParameterKeys);
	          switch (canonicalKey) {
	            case "description":
	              return _this.noop();
	            case "body":
	              return _this.transform_body(property, allowParameterKeys);
	            case "headers":
	              return _this.transform_named_params(property, allowParameterKeys, false);
	            default:
	              return _this.noop();
	          }
	        });
	      }
	    };

	    Transformations.prototype.isContentTypeString = function(value) {
	      return value != null ? value.match(/^[^\/]+\/[^\/]+$/) : void 0;
	    };

	    Transformations.prototype.transform_body = function(property, allowParameterKeys) {
	      var _ref,
	        _this = this;
	      if (util.isNull(property[1])) {
	        return;
	      }
	      return (_ref = property[1].value) != null ? _ref.forEach(function(bodyProperty) {
	        var canonicalProperty;
	        if (_this.isParameterKey(bodyProperty)) {
	          return _this.noop();
	        } else if (_this.isContentTypeString(bodyProperty[0].value)) {
	          return _this.transform_body(bodyProperty, allowParameterKeys);
	        } else {
	          canonicalProperty = _this.canonicalizePropertyName(bodyProperty[0].value, allowParameterKeys);
	          switch (canonicalProperty) {
	            case "example":
	              return _this.noop();
	            case "schema":
	              return _this.noop();
	            case "formParameters":
	              return _this.transform_named_params(bodyProperty, allowParameterKeys, false);
	            default:
	              return _this.noop();
	          }
	        }
	      }) : void 0;
	    };

	    Transformations.prototype.transform_common_properties = function(property, allowParameterKeys) {
	      var canonicalProperty;
	      if (this.isParameterKey(property)) {
	        return true;
	      } else {
	        canonicalProperty = this.canonicalizePropertyName(property[0].value, allowParameterKeys);
	        switch (canonicalProperty) {
	          case "displayName":
	            return true;
	          case "description":
	            return true;
	          case "is":
	            return true;
	          default:
	            this.noop();
	        }
	      }
	      return false;
	    };

	    return Transformations;

	  })();

	}).call(this);


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {



/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.6.3
	(function() {
	  var ParseError, UnknownTagError, main, syntax_parser, valid_html_tags,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	  valid_html_tags = __webpack_require__(51);

	  syntax_parser = __webpack_require__(52);

	  /*
	  parse string into an object with "tag, id, classes"
	  throws ParseError, UnknownTagError
	  
	  @str the string to parse
	  @strict whether to check for valid HTML tags. Defaults to yes
	  
	  returns:
	  @tag      the type/name of tag ( div, input, etc )
	  @id       optional ID string ( '#my-form' --> 'my-form' ) ( null if no ID )
	  @classes  array of strings containing classes ( empty if no classes )
	  */


	  module.exports = main = function(str, strict, lowercase) {
	    var classes, id, t, tag;
	    if (strict == null) {
	      strict = true;
	    }
	    if (lowercase == null) {
	      lowercase = true;
	    }
	    if (typeof str !== 'string') {
	      throw new ParseError('(undefined)');
	    }
	    if (str.length === 0) {
	      throw new ParseError('(empty string)');
	    }
	    if ((t = syntax_parser(str)) == null) {
	      throw new ParseError(str);
	    }
	    tag = t.tag, id = t.id, classes = t.classes;
	    if (lowercase) {
	      tag = tag.toLowerCase();
	    }
	    if (strict && !valid_html_tags(tag.toLowerCase())) {
	      throw new UnknownTagError(tag);
	    }
	    return {
	      tag: tag,
	      id: id,
	      classes: classes
	    };
	  };

	  main.ParseError = ParseError = (function(_super) {
	    __extends(ParseError, _super);

	    function ParseError(tag) {
	      this.message = "[htmltagparser] Can't parse HTML tag: '" + tag + "'";
	    }

	    return ParseError;

	  })(Error);

	  UnknownTagError = UnknownTagError = (function(_super) {
	    __extends(UnknownTagError, _super);

	    function UnknownTagError(tag) {
	      this.message = "[htmltagparser] Unknown HTML tag: '" + tag + "'";
	    }

	    return UnknownTagError;

	  })(Error);

	}).call(this);


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// vim:ts=4:sts=4:sw=4:
	/*!
	 *
	 * Copyright 2009-2012 Kris Kowal under the terms of the MIT
	 * license found at http://github.com/kriskowal/q/raw/master/LICENSE
	 *
	 * With parts by Tyler Close
	 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
	 * at http://www.opensource.org/licenses/mit-license.html
	 * Forked at ref_send.js version: 2009-05-11
	 *
	 * With parts by Mark Miller
	 * Copyright (C) 2011 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */

	(function (definition) {
	    // Turn off strict mode for this function so we can assign to global.Q
	    /* jshint strict: false */

	    // This file will function properly as a <script> tag, or a module
	    // using CommonJS and NodeJS or RequireJS module formats.  In
	    // Common/Node/RequireJS, the module exports the Q API and when
	    // executed as a simple <script>, it creates a Q global instead.

	    // Montage Require
	    if (typeof bootstrap === "function") {
	        bootstrap("promise", definition);

	    // CommonJS
	    } else if (true) {
	        module.exports = definition();

	    // RequireJS
	    } else if (typeof define === "function" && define.amd) {
	        define(definition);

	    // SES (Secure EcmaScript)
	    } else if (typeof ses !== "undefined") {
	        if (!ses.ok()) {
	            return;
	        } else {
	            ses.makeQ = definition;
	        }

	    // <script>
	    } else {
	        Q = definition();
	    }

	})(function () {
	"use strict";

	var hasStacks = false;
	try {
	    throw new Error();
	} catch (e) {
	    hasStacks = !!e.stack;
	}

	// All code after this point will be filtered from stack traces reported
	// by Q.
	var qStartingLine = captureLine();
	var qFileName;

	// shims

	// used for fallback in "allResolved"
	var noop = function () {};

	// Use the fastest possible means to execute a task in a future turn
	// of the event loop.
	var nextTick =(function () {
	    // linked list of tasks (single, with head node)
	    var head = {task: void 0, next: null};
	    var tail = head;
	    var flushing = false;
	    var requestTick = void 0;
	    var isNodeJS = false;

	    function flush() {
	        /* jshint loopfunc: true */

	        while (head.next) {
	            head = head.next;
	            var task = head.task;
	            head.task = void 0;
	            var domain = head.domain;

	            if (domain) {
	                head.domain = void 0;
	                domain.enter();
	            }

	            try {
	                task();

	            } catch (e) {
	                if (isNodeJS) {
	                    // In node, uncaught exceptions are considered fatal errors.
	                    // Re-throw them synchronously to interrupt flushing!

	                    // Ensure continuation if the uncaught exception is suppressed
	                    // listening "uncaughtException" events (as domains does).
	                    // Continue in next event to avoid tick recursion.
	                    if (domain) {
	                        domain.exit();
	                    }
	                    setTimeout(flush, 0);
	                    if (domain) {
	                        domain.enter();
	                    }

	                    throw e;

	                } else {
	                    // In browsers, uncaught exceptions are not fatal.
	                    // Re-throw them asynchronously to avoid slow-downs.
	                    setTimeout(function() {
	                       throw e;
	                    }, 0);
	                }
	            }

	            if (domain) {
	                domain.exit();
	            }
	        }

	        flushing = false;
	    }

	    nextTick = function (task) {
	        tail = tail.next = {
	            task: task,
	            domain: isNodeJS && process.domain,
	            next: null
	        };

	        if (!flushing) {
	            flushing = true;
	            requestTick();
	        }
	    };

	    if (typeof process !== "undefined" && process.nextTick) {
	        // Node.js before 0.9. Note that some fake-Node environments, like the
	        // Mocha test runner, introduce a `process` global without a `nextTick`.
	        isNodeJS = true;

	        requestTick = function () {
	            process.nextTick(flush);
	        };

	    } else if (typeof setImmediate === "function") {
	        // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
	        if (typeof window !== "undefined") {
	            requestTick = setImmediate.bind(window, flush);
	        } else {
	            requestTick = function () {
	                setImmediate(flush);
	            };
	        }

	    } else if (typeof MessageChannel !== "undefined") {
	        // modern browsers
	        // http://www.nonblocking.io/2011/06/windownexttick.html
	        var channel = new MessageChannel();
	        // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
	        // working message ports the first time a page loads.
	        channel.port1.onmessage = function () {
	            requestTick = requestPortTick;
	            channel.port1.onmessage = flush;
	            flush();
	        };
	        var requestPortTick = function () {
	            // Opera requires us to provide a message payload, regardless of
	            // whether we use it.
	            channel.port2.postMessage(0);
	        };
	        requestTick = function () {
	            setTimeout(flush, 0);
	            requestPortTick();
	        };

	    } else {
	        // old browsers
	        requestTick = function () {
	            setTimeout(flush, 0);
	        };
	    }

	    return nextTick;
	})();

	// Attempt to make generics safe in the face of downstream
	// modifications.
	// There is no situation where this is necessary.
	// If you need a security guarantee, these primordials need to be
	// deeply frozen anyway, and if you don’t need a security guarantee,
	// this is just plain paranoid.
	// However, this does have the nice side-effect of reducing the size
	// of the code by reducing x.call() to merely x(), eliminating many
	// hard-to-minify characters.
	// See Mark Miller’s explanation of what this does.
	// http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
	var call = Function.call;
	function uncurryThis(f) {
	    return function () {
	        return call.apply(f, arguments);
	    };
	}
	// This is equivalent, but slower:
	// uncurryThis = Function_bind.bind(Function_bind.call);
	// http://jsperf.com/uncurrythis

	var array_slice = uncurryThis(Array.prototype.slice);

	var array_reduce = uncurryThis(
	    Array.prototype.reduce || function (callback, basis) {
	        var index = 0,
	            length = this.length;
	        // concerning the initial value, if one is not provided
	        if (arguments.length === 1) {
	            // seek to the first value in the array, accounting
	            // for the possibility that is is a sparse array
	            do {
	                if (index in this) {
	                    basis = this[index++];
	                    break;
	                }
	                if (++index >= length) {
	                    throw new TypeError();
	                }
	            } while (1);
	        }
	        // reduce
	        for (; index < length; index++) {
	            // account for the possibility that the array is sparse
	            if (index in this) {
	                basis = callback(basis, this[index], index);
	            }
	        }
	        return basis;
	    }
	);

	var array_indexOf = uncurryThis(
	    Array.prototype.indexOf || function (value) {
	        // not a very good shim, but good enough for our one use of it
	        for (var i = 0; i < this.length; i++) {
	            if (this[i] === value) {
	                return i;
	            }
	        }
	        return -1;
	    }
	);

	var array_map = uncurryThis(
	    Array.prototype.map || function (callback, thisp) {
	        var self = this;
	        var collect = [];
	        array_reduce(self, function (undefined, value, index) {
	            collect.push(callback.call(thisp, value, index, self));
	        }, void 0);
	        return collect;
	    }
	);

	var object_create = Object.create || function (prototype) {
	    function Type() { }
	    Type.prototype = prototype;
	    return new Type();
	};

	var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

	var object_keys = Object.keys || function (object) {
	    var keys = [];
	    for (var key in object) {
	        if (object_hasOwnProperty(object, key)) {
	            keys.push(key);
	        }
	    }
	    return keys;
	};

	var object_toString = uncurryThis(Object.prototype.toString);

	function isObject(value) {
	    return value === Object(value);
	}

	// generator related shims

	// FIXME: Remove this function once ES6 generators are in SpiderMonkey.
	function isStopIteration(exception) {
	    return (
	        object_toString(exception) === "[object StopIteration]" ||
	        exception instanceof QReturnValue
	    );
	}

	// FIXME: Remove this helper and Q.return once ES6 generators are in
	// SpiderMonkey.
	var QReturnValue;
	if (typeof ReturnValue !== "undefined") {
	    QReturnValue = ReturnValue;
	} else {
	    QReturnValue = function (value) {
	        this.value = value;
	    };
	}

	// Until V8 3.19 / Chromium 29 is released, SpiderMonkey is the only
	// engine that has a deployed base of browsers that support generators.
	// However, SM's generators use the Python-inspired semantics of
	// outdated ES6 drafts.  We would like to support ES6, but we'd also
	// like to make it possible to use generators in deployed browsers, so
	// we also support Python-style generators.  At some point we can remove
	// this block.
	var hasES6Generators;
	try {
	    /* jshint evil: true, nonew: false */
	    new Function("(function* (){ yield 1; })");
	    hasES6Generators = true;
	} catch (e) {
	    hasES6Generators = false;
	}

	// long stack traces

	var STACK_JUMP_SEPARATOR = "From previous event:";

	function makeStackTraceLong(error, promise) {
	    // If possible, transform the error stack trace by removing Node and Q
	    // cruft, then concatenating with the stack trace of `promise`. See #57.
	    if (hasStacks &&
	        promise.stack &&
	        typeof error === "object" &&
	        error !== null &&
	        error.stack &&
	        error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1
	    ) {
	        var stacks = [];
	        for (var p = promise; !!p; p = p.source) {
	            if (p.stack) {
	                stacks.unshift(p.stack);
	            }
	        }
	        stacks.unshift(error.stack);

	        var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
	        error.stack = filterStackString(concatedStacks);
	    }
	}

	function filterStackString(stackString) {
	    var lines = stackString.split("\n");
	    var desiredLines = [];
	    for (var i = 0; i < lines.length; ++i) {
	        var line = lines[i];

	        if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
	            desiredLines.push(line);
	        }
	    }
	    return desiredLines.join("\n");
	}

	function isNodeFrame(stackLine) {
	    return stackLine.indexOf("(module.js:") !== -1 ||
	           stackLine.indexOf("(node.js:") !== -1;
	}

	function getFileNameAndLineNumber(stackLine) {
	    // Named functions: "at functionName (filename:lineNumber:columnNumber)"
	    // In IE10 function name can have spaces ("Anonymous function") O_o
	    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
	    if (attempt1) {
	        return [attempt1[1], Number(attempt1[2])];
	    }

	    // Anonymous functions: "at filename:lineNumber:columnNumber"
	    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
	    if (attempt2) {
	        return [attempt2[1], Number(attempt2[2])];
	    }

	    // Firefox style: "function@filename:lineNumber or @filename:lineNumber"
	    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
	    if (attempt3) {
	        return [attempt3[1], Number(attempt3[2])];
	    }
	}

	function isInternalFrame(stackLine) {
	    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

	    if (!fileNameAndLineNumber) {
	        return false;
	    }

	    var fileName = fileNameAndLineNumber[0];
	    var lineNumber = fileNameAndLineNumber[1];

	    return fileName === qFileName &&
	        lineNumber >= qStartingLine &&
	        lineNumber <= qEndingLine;
	}

	// discover own file name and line number range for filtering stack
	// traces
	function captureLine() {
	    if (!hasStacks) {
	        return;
	    }

	    try {
	        throw new Error();
	    } catch (e) {
	        var lines = e.stack.split("\n");
	        var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
	        var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
	        if (!fileNameAndLineNumber) {
	            return;
	        }

	        qFileName = fileNameAndLineNumber[0];
	        return fileNameAndLineNumber[1];
	    }
	}

	function deprecate(callback, name, alternative) {
	    return function () {
	        if (typeof console !== "undefined" &&
	            typeof console.warn === "function") {
	            console.warn(name + " is deprecated, use " + alternative +
	                         " instead.", new Error("").stack);
	        }
	        return callback.apply(callback, arguments);
	    };
	}

	// end of shims
	// beginning of real work

	/**
	 * Constructs a promise for an immediate reference, passes promises through, or
	 * coerces promises from different systems.
	 * @param value immediate reference or promise
	 */
	function Q(value) {
	    // If the object is already a Promise, return it directly.  This enables
	    // the resolve function to both be used to created references from objects,
	    // but to tolerably coerce non-promises to promises.
	    if (isPromise(value)) {
	        return value;
	    }

	    // assimilate thenables
	    if (isPromiseAlike(value)) {
	        return coerce(value);
	    } else {
	        return fulfill(value);
	    }
	}
	Q.resolve = Q;

	/**
	 * Performs a task in a future turn of the event loop.
	 * @param {Function} task
	 */
	Q.nextTick = nextTick;

	/**
	 * Controls whether or not long stack traces will be on
	 */
	Q.longStackSupport = false;

	/**
	 * Constructs a {promise, resolve, reject} object.
	 *
	 * `resolve` is a callback to invoke with a more resolved value for the
	 * promise. To fulfill the promise, invoke `resolve` with any value that is
	 * not a thenable. To reject the promise, invoke `resolve` with a rejected
	 * thenable, or invoke `reject` with the reason directly. To resolve the
	 * promise to another thenable, thus putting it in the same state, invoke
	 * `resolve` with that other thenable.
	 */
	Q.defer = defer;
	function defer() {
	    // if "messages" is an "Array", that indicates that the promise has not yet
	    // been resolved.  If it is "undefined", it has been resolved.  Each
	    // element of the messages array is itself an array of complete arguments to
	    // forward to the resolved promise.  We coerce the resolution value to a
	    // promise using the `resolve` function because it handles both fully
	    // non-thenable values and other thenables gracefully.
	    var messages = [], progressListeners = [], resolvedPromise;

	    var deferred = object_create(defer.prototype);
	    var promise = object_create(Promise.prototype);

	    promise.promiseDispatch = function (resolve, op, operands) {
	        var args = array_slice(arguments);
	        if (messages) {
	            messages.push(args);
	            if (op === "when" && operands[1]) { // progress operand
	                progressListeners.push(operands[1]);
	            }
	        } else {
	            nextTick(function () {
	                resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
	            });
	        }
	    };

	    // XXX deprecated
	    promise.valueOf = deprecate(function () {
	        if (messages) {
	            return promise;
	        }
	        var nearerValue = nearer(resolvedPromise);
	        if (isPromise(nearerValue)) {
	            resolvedPromise = nearerValue; // shorten chain
	        }
	        return nearerValue;
	    }, "valueOf", "inspect");

	    promise.inspect = function () {
	        if (!resolvedPromise) {
	            return { state: "pending" };
	        }
	        return resolvedPromise.inspect();
	    };

	    if (Q.longStackSupport && hasStacks) {
	        try {
	            throw new Error();
	        } catch (e) {
	            // NOTE: don't try to use `Error.captureStackTrace` or transfer the
	            // accessor around; that causes memory leaks as per GH-111. Just
	            // reify the stack trace as a string ASAP.
	            //
	            // At the same time, cut off the first line; it's always just
	            // "[object Promise]\n", as per the `toString`.
	            promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
	        }
	    }

	    // NOTE: we do the checks for `resolvedPromise` in each method, instead of
	    // consolidating them into `become`, since otherwise we'd create new
	    // promises with the lines `become(whatever(value))`. See e.g. GH-252.

	    function become(newPromise) {
	        resolvedPromise = newPromise;
	        promise.source = newPromise;

	        array_reduce(messages, function (undefined, message) {
	            nextTick(function () {
	                newPromise.promiseDispatch.apply(newPromise, message);
	            });
	        }, void 0);

	        messages = void 0;
	        progressListeners = void 0;
	    }

	    deferred.promise = promise;
	    deferred.resolve = function (value) {
	        if (resolvedPromise) {
	            return;
	        }

	        become(Q(value));
	    };

	    deferred.fulfill = function (value) {
	        if (resolvedPromise) {
	            return;
	        }

	        become(fulfill(value));
	    };
	    deferred.reject = function (reason) {
	        if (resolvedPromise) {
	            return;
	        }

	        become(reject(reason));
	    };
	    deferred.notify = function (progress) {
	        if (resolvedPromise) {
	            return;
	        }

	        array_reduce(progressListeners, function (undefined, progressListener) {
	            nextTick(function () {
	                progressListener(progress);
	            });
	        }, void 0);
	    };

	    return deferred;
	}

	/**
	 * Creates a Node-style callback that will resolve or reject the deferred
	 * promise.
	 * @returns a nodeback
	 */
	defer.prototype.makeNodeResolver = function () {
	    var self = this;
	    return function (error, value) {
	        if (error) {
	            self.reject(error);
	        } else if (arguments.length > 2) {
	            self.resolve(array_slice(arguments, 1));
	        } else {
	            self.resolve(value);
	        }
	    };
	};

	/**
	 * @param resolver {Function} a function that returns nothing and accepts
	 * the resolve, reject, and notify functions for a deferred.
	 * @returns a promise that may be resolved with the given resolve and reject
	 * functions, or rejected by a thrown exception in resolver
	 */
	Q.promise = promise;
	function promise(resolver) {
	    if (typeof resolver !== "function") {
	        throw new TypeError("resolver must be a function.");
	    }
	    var deferred = defer();
	    try {
	        resolver(deferred.resolve, deferred.reject, deferred.notify);
	    } catch (reason) {
	        deferred.reject(reason);
	    }
	    return deferred.promise;
	}

	// XXX experimental.  This method is a way to denote that a local value is
	// serializable and should be immediately dispatched to a remote upon request,
	// instead of passing a reference.
	Q.passByCopy = function (object) {
	    //freeze(object);
	    //passByCopies.set(object, true);
	    return object;
	};

	Promise.prototype.passByCopy = function () {
	    //freeze(object);
	    //passByCopies.set(object, true);
	    return this;
	};

	/**
	 * If two promises eventually fulfill to the same value, promises that value,
	 * but otherwise rejects.
	 * @param x {Any*}
	 * @param y {Any*}
	 * @returns {Any*} a promise for x and y if they are the same, but a rejection
	 * otherwise.
	 *
	 */
	Q.join = function (x, y) {
	    return Q(x).join(y);
	};

	Promise.prototype.join = function (that) {
	    return Q([this, that]).spread(function (x, y) {
	        if (x === y) {
	            // TODO: "===" should be Object.is or equiv
	            return x;
	        } else {
	            throw new Error("Can't join: not the same: " + x + " " + y);
	        }
	    });
	};

	/**
	 * Returns a promise for the first of an array of promises to become fulfilled.
	 * @param answers {Array[Any*]} promises to race
	 * @returns {Any*} the first promise to be fulfilled
	 */
	Q.race = race;
	function race(answerPs) {
	    return promise(function(resolve, reject) {
	        // Switch to this once we can assume at least ES5
	        // answerPs.forEach(function(answerP) {
	        //     Q(answerP).then(resolve, reject);
	        // });
	        // Use this in the meantime
	        for (var i = 0, len = answerPs.length; i < len; i++) {
	            Q(answerPs[i]).then(resolve, reject);
	        }
	    });
	}

	Promise.prototype.race = function () {
	    return this.then(Q.race);
	};

	/**
	 * Constructs a Promise with a promise descriptor object and optional fallback
	 * function.  The descriptor contains methods like when(rejected), get(name),
	 * set(name, value), post(name, args), and delete(name), which all
	 * return either a value, a promise for a value, or a rejection.  The fallback
	 * accepts the operation name, a resolver, and any further arguments that would
	 * have been forwarded to the appropriate method above had a method been
	 * provided with the proper name.  The API makes no guarantees about the nature
	 * of the returned object, apart from that it is usable whereever promises are
	 * bought and sold.
	 */
	Q.makePromise = Promise;
	function Promise(descriptor, fallback, inspect) {
	    if (fallback === void 0) {
	        fallback = function (op) {
	            return reject(new Error(
	                "Promise does not support operation: " + op
	            ));
	        };
	    }
	    if (inspect === void 0) {
	        inspect = function () {
	            return {state: "unknown"};
	        };
	    }

	    var promise = object_create(Promise.prototype);

	    promise.promiseDispatch = function (resolve, op, args) {
	        var result;
	        try {
	            if (descriptor[op]) {
	                result = descriptor[op].apply(promise, args);
	            } else {
	                result = fallback.call(promise, op, args);
	            }
	        } catch (exception) {
	            result = reject(exception);
	        }
	        if (resolve) {
	            resolve(result);
	        }
	    };

	    promise.inspect = inspect;

	    // XXX deprecated `valueOf` and `exception` support
	    if (inspect) {
	        var inspected = inspect();
	        if (inspected.state === "rejected") {
	            promise.exception = inspected.reason;
	        }

	        promise.valueOf = deprecate(function () {
	            var inspected = inspect();
	            if (inspected.state === "pending" ||
	                inspected.state === "rejected") {
	                return promise;
	            }
	            return inspected.value;
	        });
	    }

	    return promise;
	}

	Promise.prototype.toString = function () {
	    return "[object Promise]";
	};

	Promise.prototype.then = function (fulfilled, rejected, progressed) {
	    var self = this;
	    var deferred = defer();
	    var done = false;   // ensure the untrusted promise makes at most a
	                        // single call to one of the callbacks

	    function _fulfilled(value) {
	        try {
	            return typeof fulfilled === "function" ? fulfilled(value) : value;
	        } catch (exception) {
	            return reject(exception);
	        }
	    }

	    function _rejected(exception) {
	        if (typeof rejected === "function") {
	            makeStackTraceLong(exception, self);
	            try {
	                return rejected(exception);
	            } catch (newException) {
	                return reject(newException);
	            }
	        }
	        return reject(exception);
	    }

	    function _progressed(value) {
	        return typeof progressed === "function" ? progressed(value) : value;
	    }

	    nextTick(function () {
	        self.promiseDispatch(function (value) {
	            if (done) {
	                return;
	            }
	            done = true;

	            deferred.resolve(_fulfilled(value));
	        }, "when", [function (exception) {
	            if (done) {
	                return;
	            }
	            done = true;

	            deferred.resolve(_rejected(exception));
	        }]);
	    });

	    // Progress propagator need to be attached in the current tick.
	    self.promiseDispatch(void 0, "when", [void 0, function (value) {
	        var newValue;
	        var threw = false;
	        try {
	            newValue = _progressed(value);
	        } catch (e) {
	            threw = true;
	            if (Q.onerror) {
	                Q.onerror(e);
	            } else {
	                throw e;
	            }
	        }

	        if (!threw) {
	            deferred.notify(newValue);
	        }
	    }]);

	    return deferred.promise;
	};

	/**
	 * Registers an observer on a promise.
	 *
	 * Guarantees:
	 *
	 * 1. that fulfilled and rejected will be called only once.
	 * 2. that either the fulfilled callback or the rejected callback will be
	 *    called, but not both.
	 * 3. that fulfilled and rejected will not be called in this turn.
	 *
	 * @param value      promise or immediate reference to observe
	 * @param fulfilled  function to be called with the fulfilled value
	 * @param rejected   function to be called with the rejection exception
	 * @param progressed function to be called on any progress notifications
	 * @return promise for the return value from the invoked callback
	 */
	Q.when = when;
	function when(value, fulfilled, rejected, progressed) {
	    return Q(value).then(fulfilled, rejected, progressed);
	}

	Promise.prototype.thenResolve = function (value) {
	    return this.then(function () { return value; });
	};

	Q.thenResolve = function (promise, value) {
	    return Q(promise).thenResolve(value);
	};

	Promise.prototype.thenReject = function (reason) {
	    return this.then(function () { throw reason; });
	};

	Q.thenReject = function (promise, reason) {
	    return Q(promise).thenReject(reason);
	};

	/**
	 * If an object is not a promise, it is as "near" as possible.
	 * If a promise is rejected, it is as "near" as possible too.
	 * If it’s a fulfilled promise, the fulfillment value is nearer.
	 * If it’s a deferred promise and the deferred has been resolved, the
	 * resolution is "nearer".
	 * @param object
	 * @returns most resolved (nearest) form of the object
	 */

	// XXX should we re-do this?
	Q.nearer = nearer;
	function nearer(value) {
	    if (isPromise(value)) {
	        var inspected = value.inspect();
	        if (inspected.state === "fulfilled") {
	            return inspected.value;
	        }
	    }
	    return value;
	}

	/**
	 * @returns whether the given object is a promise.
	 * Otherwise it is a fulfilled value.
	 */
	Q.isPromise = isPromise;
	function isPromise(object) {
	    return isObject(object) &&
	        typeof object.promiseDispatch === "function" &&
	        typeof object.inspect === "function";
	}

	Q.isPromiseAlike = isPromiseAlike;
	function isPromiseAlike(object) {
	    return isObject(object) && typeof object.then === "function";
	}

	/**
	 * @returns whether the given object is a pending promise, meaning not
	 * fulfilled or rejected.
	 */
	Q.isPending = isPending;
	function isPending(object) {
	    return isPromise(object) && object.inspect().state === "pending";
	}

	Promise.prototype.isPending = function () {
	    return this.inspect().state === "pending";
	};

	/**
	 * @returns whether the given object is a value or fulfilled
	 * promise.
	 */
	Q.isFulfilled = isFulfilled;
	function isFulfilled(object) {
	    return !isPromise(object) || object.inspect().state === "fulfilled";
	}

	Promise.prototype.isFulfilled = function () {
	    return this.inspect().state === "fulfilled";
	};

	/**
	 * @returns whether the given object is a rejected promise.
	 */
	Q.isRejected = isRejected;
	function isRejected(object) {
	    return isPromise(object) && object.inspect().state === "rejected";
	}

	Promise.prototype.isRejected = function () {
	    return this.inspect().state === "rejected";
	};

	//// BEGIN UNHANDLED REJECTION TRACKING

	// This promise library consumes exceptions thrown in handlers so they can be
	// handled by a subsequent promise.  The exceptions get added to this array when
	// they are created, and removed when they are handled.  Note that in ES6 or
	// shimmed environments, this would naturally be a `Set`.
	var unhandledReasons = [];
	var unhandledRejections = [];
	var unhandledReasonsDisplayed = false;
	var trackUnhandledRejections = true;
	function displayUnhandledReasons() {
	    if (
	        !unhandledReasonsDisplayed &&
	        typeof window !== "undefined" &&
	        !window.Touch &&
	        window.console
	    ) {
	        console.warn("[Q] Unhandled rejection reasons (should be empty):",
	                     unhandledReasons);
	    }

	    unhandledReasonsDisplayed = true;
	}

	function logUnhandledReasons() {
	    for (var i = 0; i < unhandledReasons.length; i++) {
	        var reason = unhandledReasons[i];
	        console.warn("Unhandled rejection reason:", reason);
	    }
	}

	function resetUnhandledRejections() {
	    unhandledReasons.length = 0;
	    unhandledRejections.length = 0;
	    unhandledReasonsDisplayed = false;

	    if (!trackUnhandledRejections) {
	        trackUnhandledRejections = true;

	        // Show unhandled rejection reasons if Node exits without handling an
	        // outstanding rejection.  (Note that Browserify presently produces a
	        // `process` global without the `EventEmitter` `on` method.)
	        if (typeof process !== "undefined" && process.on) {
	            process.on("exit", logUnhandledReasons);
	        }
	    }
	}

	function trackRejection(promise, reason) {
	    if (!trackUnhandledRejections) {
	        return;
	    }

	    unhandledRejections.push(promise);
	    if (reason && typeof reason.stack !== "undefined") {
	        unhandledReasons.push(reason.stack);
	    } else {
	        unhandledReasons.push("(no stack) " + reason);
	    }
	    displayUnhandledReasons();
	}

	function untrackRejection(promise) {
	    if (!trackUnhandledRejections) {
	        return;
	    }

	    var at = array_indexOf(unhandledRejections, promise);
	    if (at !== -1) {
	        unhandledRejections.splice(at, 1);
	        unhandledReasons.splice(at, 1);
	    }
	}

	Q.resetUnhandledRejections = resetUnhandledRejections;

	Q.getUnhandledReasons = function () {
	    // Make a copy so that consumers can't interfere with our internal state.
	    return unhandledReasons.slice();
	};

	Q.stopUnhandledRejectionTracking = function () {
	    resetUnhandledRejections();
	    if (typeof process !== "undefined" && process.on) {
	        process.removeListener("exit", logUnhandledReasons);
	    }
	    trackUnhandledRejections = false;
	};

	resetUnhandledRejections();

	//// END UNHANDLED REJECTION TRACKING

	/**
	 * Constructs a rejected promise.
	 * @param reason value describing the failure
	 */
	Q.reject = reject;
	function reject(reason) {
	    var rejection = Promise({
	        "when": function (rejected) {
	            // note that the error has been handled
	            if (rejected) {
	                untrackRejection(this);
	            }
	            return rejected ? rejected(reason) : this;
	        }
	    }, function fallback() {
	        return this;
	    }, function inspect() {
	        return { state: "rejected", reason: reason };
	    });

	    // Note that the reason has not been handled.
	    trackRejection(rejection, reason);

	    return rejection;
	}

	/**
	 * Constructs a fulfilled promise for an immediate reference.
	 * @param value immediate reference
	 */
	Q.fulfill = fulfill;
	function fulfill(value) {
	    return Promise({
	        "when": function () {
	            return value;
	        },
	        "get": function (name) {
	            return value[name];
	        },
	        "set": function (name, rhs) {
	            value[name] = rhs;
	        },
	        "delete": function (name) {
	            delete value[name];
	        },
	        "post": function (name, args) {
	            // Mark Miller proposes that post with no name should apply a
	            // promised function.
	            if (name === null || name === void 0) {
	                return value.apply(void 0, args);
	            } else {
	                return value[name].apply(value, args);
	            }
	        },
	        "apply": function (thisp, args) {
	            return value.apply(thisp, args);
	        },
	        "keys": function () {
	            return object_keys(value);
	        }
	    }, void 0, function inspect() {
	        return { state: "fulfilled", value: value };
	    });
	}

	/**
	 * Converts thenables to Q promises.
	 * @param promise thenable promise
	 * @returns a Q promise
	 */
	function coerce(promise) {
	    var deferred = defer();
	    nextTick(function () {
	        try {
	            promise.then(deferred.resolve, deferred.reject, deferred.notify);
	        } catch (exception) {
	            deferred.reject(exception);
	        }
	    });
	    return deferred.promise;
	}

	/**
	 * Annotates an object such that it will never be
	 * transferred away from this process over any promise
	 * communication channel.
	 * @param object
	 * @returns promise a wrapping of that object that
	 * additionally responds to the "isDef" message
	 * without a rejection.
	 */
	Q.master = master;
	function master(object) {
	    return Promise({
	        "isDef": function () {}
	    }, function fallback(op, args) {
	        return dispatch(object, op, args);
	    }, function () {
	        return Q(object).inspect();
	    });
	}

	/**
	 * Spreads the values of a promised array of arguments into the
	 * fulfillment callback.
	 * @param fulfilled callback that receives variadic arguments from the
	 * promised array
	 * @param rejected callback that receives the exception if the promise
	 * is rejected.
	 * @returns a promise for the return value or thrown exception of
	 * either callback.
	 */
	Q.spread = spread;
	function spread(value, fulfilled, rejected) {
	    return Q(value).spread(fulfilled, rejected);
	}

	Promise.prototype.spread = function (fulfilled, rejected) {
	    return this.all().then(function (array) {
	        return fulfilled.apply(void 0, array);
	    }, rejected);
	};

	/**
	 * The async function is a decorator for generator functions, turning
	 * them into asynchronous generators.  Although generators are only part
	 * of the newest ECMAScript 6 drafts, this code does not cause syntax
	 * errors in older engines.  This code should continue to work and will
	 * in fact improve over time as the language improves.
	 *
	 * ES6 generators are currently part of V8 version 3.19 with the
	 * --harmony-generators runtime flag enabled.  SpiderMonkey has had them
	 * for longer, but under an older Python-inspired form.  This function
	 * works on both kinds of generators.
	 *
	 * Decorates a generator function such that:
	 *  - it may yield promises
	 *  - execution will continue when that promise is fulfilled
	 *  - the value of the yield expression will be the fulfilled value
	 *  - it returns a promise for the return value (when the generator
	 *    stops iterating)
	 *  - the decorated function returns a promise for the return value
	 *    of the generator or the first rejected promise among those
	 *    yielded.
	 *  - if an error is thrown in the generator, it propagates through
	 *    every following yield until it is caught, or until it escapes
	 *    the generator function altogether, and is translated into a
	 *    rejection for the promise returned by the decorated generator.
	 */
	Q.async = async;
	function async(makeGenerator) {
	    return function () {
	        // when verb is "send", arg is a value
	        // when verb is "throw", arg is an exception
	        function continuer(verb, arg) {
	            var result;
	            if (hasES6Generators) {
	                try {
	                    result = generator[verb](arg);
	                } catch (exception) {
	                    return reject(exception);
	                }
	                if (result.done) {
	                    return result.value;
	                } else {
	                    return when(result.value, callback, errback);
	                }
	            } else {
	                // FIXME: Remove this case when SM does ES6 generators.
	                try {
	                    result = generator[verb](arg);
	                } catch (exception) {
	                    if (isStopIteration(exception)) {
	                        return exception.value;
	                    } else {
	                        return reject(exception);
	                    }
	                }
	                return when(result, callback, errback);
	            }
	        }
	        var generator = makeGenerator.apply(this, arguments);
	        var callback = continuer.bind(continuer, "next");
	        var errback = continuer.bind(continuer, "throw");
	        return callback();
	    };
	}

	/**
	 * The spawn function is a small wrapper around async that immediately
	 * calls the generator and also ends the promise chain, so that any
	 * unhandled errors are thrown instead of forwarded to the error
	 * handler. This is useful because it's extremely common to run
	 * generators at the top-level to work with libraries.
	 */
	Q.spawn = spawn;
	function spawn(makeGenerator) {
	    Q.done(Q.async(makeGenerator)());
	}

	// FIXME: Remove this interface once ES6 generators are in SpiderMonkey.
	/**
	 * Throws a ReturnValue exception to stop an asynchronous generator.
	 *
	 * This interface is a stop-gap measure to support generator return
	 * values in older Firefox/SpiderMonkey.  In browsers that support ES6
	 * generators like Chromium 29, just use "return" in your generator
	 * functions.
	 *
	 * @param value the return value for the surrounding generator
	 * @throws ReturnValue exception with the value.
	 * @example
	 * // ES6 style
	 * Q.async(function* () {
	 *      var foo = yield getFooPromise();
	 *      var bar = yield getBarPromise();
	 *      return foo + bar;
	 * })
	 * // Older SpiderMonkey style
	 * Q.async(function () {
	 *      var foo = yield getFooPromise();
	 *      var bar = yield getBarPromise();
	 *      Q.return(foo + bar);
	 * })
	 */
	Q["return"] = _return;
	function _return(value) {
	    throw new QReturnValue(value);
	}

	/**
	 * The promised function decorator ensures that any promise arguments
	 * are settled and passed as values (`this` is also settled and passed
	 * as a value).  It will also ensure that the result of a function is
	 * always a promise.
	 *
	 * @example
	 * var add = Q.promised(function (a, b) {
	 *     return a + b;
	 * });
	 * add(Q(a), Q(B));
	 *
	 * @param {function} callback The function to decorate
	 * @returns {function} a function that has been decorated.
	 */
	Q.promised = promised;
	function promised(callback) {
	    return function () {
	        return spread([this, all(arguments)], function (self, args) {
	            return callback.apply(self, args);
	        });
	    };
	}

	/**
	 * sends a message to a value in a future turn
	 * @param object* the recipient
	 * @param op the name of the message operation, e.g., "when",
	 * @param args further arguments to be forwarded to the operation
	 * @returns result {Promise} a promise for the result of the operation
	 */
	Q.dispatch = dispatch;
	function dispatch(object, op, args) {
	    return Q(object).dispatch(op, args);
	}

	Promise.prototype.dispatch = function (op, args) {
	    var self = this;
	    var deferred = defer();
	    nextTick(function () {
	        self.promiseDispatch(deferred.resolve, op, args);
	    });
	    return deferred.promise;
	};

	/**
	 * Gets the value of a property in a future turn.
	 * @param object    promise or immediate reference for target object
	 * @param name      name of property to get
	 * @return promise for the property value
	 */
	Q.get = function (object, key) {
	    return Q(object).dispatch("get", [key]);
	};

	Promise.prototype.get = function (key) {
	    return this.dispatch("get", [key]);
	};

	/**
	 * Sets the value of a property in a future turn.
	 * @param object    promise or immediate reference for object object
	 * @param name      name of property to set
	 * @param value     new value of property
	 * @return promise for the return value
	 */
	Q.set = function (object, key, value) {
	    return Q(object).dispatch("set", [key, value]);
	};

	Promise.prototype.set = function (key, value) {
	    return this.dispatch("set", [key, value]);
	};

	/**
	 * Deletes a property in a future turn.
	 * @param object    promise or immediate reference for target object
	 * @param name      name of property to delete
	 * @return promise for the return value
	 */
	Q.del = // XXX legacy
	Q["delete"] = function (object, key) {
	    return Q(object).dispatch("delete", [key]);
	};

	Promise.prototype.del = // XXX legacy
	Promise.prototype["delete"] = function (key) {
	    return this.dispatch("delete", [key]);
	};

	/**
	 * Invokes a method in a future turn.
	 * @param object    promise or immediate reference for target object
	 * @param name      name of method to invoke
	 * @param value     a value to post, typically an array of
	 *                  invocation arguments for promises that
	 *                  are ultimately backed with `resolve` values,
	 *                  as opposed to those backed with URLs
	 *                  wherein the posted value can be any
	 *                  JSON serializable object.
	 * @return promise for the return value
	 */
	// bound locally because it is used by other methods
	Q.mapply = // XXX As proposed by "Redsandro"
	Q.post = function (object, name, args) {
	    return Q(object).dispatch("post", [name, args]);
	};

	Promise.prototype.mapply = // XXX As proposed by "Redsandro"
	Promise.prototype.post = function (name, args) {
	    return this.dispatch("post", [name, args]);
	};

	/**
	 * Invokes a method in a future turn.
	 * @param object    promise or immediate reference for target object
	 * @param name      name of method to invoke
	 * @param ...args   array of invocation arguments
	 * @return promise for the return value
	 */
	Q.send = // XXX Mark Miller's proposed parlance
	Q.mcall = // XXX As proposed by "Redsandro"
	Q.invoke = function (object, name /*...args*/) {
	    return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
	};

	Promise.prototype.send = // XXX Mark Miller's proposed parlance
	Promise.prototype.mcall = // XXX As proposed by "Redsandro"
	Promise.prototype.invoke = function (name /*...args*/) {
	    return this.dispatch("post", [name, array_slice(arguments, 1)]);
	};

	/**
	 * Applies the promised function in a future turn.
	 * @param object    promise or immediate reference for target function
	 * @param args      array of application arguments
	 */
	Q.fapply = function (object, args) {
	    return Q(object).dispatch("apply", [void 0, args]);
	};

	Promise.prototype.fapply = function (args) {
	    return this.dispatch("apply", [void 0, args]);
	};

	/**
	 * Calls the promised function in a future turn.
	 * @param object    promise or immediate reference for target function
	 * @param ...args   array of application arguments
	 */
	Q["try"] =
	Q.fcall = function (object /* ...args*/) {
	    return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
	};

	Promise.prototype.fcall = function (/*...args*/) {
	    return this.dispatch("apply", [void 0, array_slice(arguments)]);
	};

	/**
	 * Binds the promised function, transforming return values into a fulfilled
	 * promise and thrown errors into a rejected one.
	 * @param object    promise or immediate reference for target function
	 * @param ...args   array of application arguments
	 */
	Q.fbind = function (object /*...args*/) {
	    var promise = Q(object);
	    var args = array_slice(arguments, 1);
	    return function fbound() {
	        return promise.dispatch("apply", [
	            this,
	            args.concat(array_slice(arguments))
	        ]);
	    };
	};
	Promise.prototype.fbind = function (/*...args*/) {
	    var promise = this;
	    var args = array_slice(arguments);
	    return function fbound() {
	        return promise.dispatch("apply", [
	            this,
	            args.concat(array_slice(arguments))
	        ]);
	    };
	};

	/**
	 * Requests the names of the owned properties of a promised
	 * object in a future turn.
	 * @param object    promise or immediate reference for target object
	 * @return promise for the keys of the eventually settled object
	 */
	Q.keys = function (object) {
	    return Q(object).dispatch("keys", []);
	};

	Promise.prototype.keys = function () {
	    return this.dispatch("keys", []);
	};

	/**
	 * Turns an array of promises into a promise for an array.  If any of
	 * the promises gets rejected, the whole array is rejected immediately.
	 * @param {Array*} an array (or promise for an array) of values (or
	 * promises for values)
	 * @returns a promise for an array of the corresponding values
	 */
	// By Mark Miller
	// http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled
	Q.all = all;
	function all(promises) {
	    return when(promises, function (promises) {
	        var countDown = 0;
	        var deferred = defer();
	        array_reduce(promises, function (undefined, promise, index) {
	            var snapshot;
	            if (
	                isPromise(promise) &&
	                (snapshot = promise.inspect()).state === "fulfilled"
	            ) {
	                promises[index] = snapshot.value;
	            } else {
	                ++countDown;
	                when(
	                    promise,
	                    function (value) {
	                        promises[index] = value;
	                        if (--countDown === 0) {
	                            deferred.resolve(promises);
	                        }
	                    },
	                    deferred.reject,
	                    function (progress) {
	                        deferred.notify({ index: index, value: progress });
	                    }
	                );
	            }
	        }, void 0);
	        if (countDown === 0) {
	            deferred.resolve(promises);
	        }
	        return deferred.promise;
	    });
	}

	Promise.prototype.all = function () {
	    return all(this);
	};

	/**
	 * Waits for all promises to be settled, either fulfilled or
	 * rejected.  This is distinct from `all` since that would stop
	 * waiting at the first rejection.  The promise returned by
	 * `allResolved` will never be rejected.
	 * @param promises a promise for an array (or an array) of promises
	 * (or values)
	 * @return a promise for an array of promises
	 */
	Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
	function allResolved(promises) {
	    return when(promises, function (promises) {
	        promises = array_map(promises, Q);
	        return when(all(array_map(promises, function (promise) {
	            return when(promise, noop, noop);
	        })), function () {
	            return promises;
	        });
	    });
	}

	Promise.prototype.allResolved = function () {
	    return allResolved(this);
	};

	/**
	 * @see Promise#allSettled
	 */
	Q.allSettled = allSettled;
	function allSettled(promises) {
	    return Q(promises).allSettled();
	}

	/**
	 * Turns an array of promises into a promise for an array of their states (as
	 * returned by `inspect`) when they have all settled.
	 * @param {Array[Any*]} values an array (or promise for an array) of values (or
	 * promises for values)
	 * @returns {Array[State]} an array of states for the respective values.
	 */
	Promise.prototype.allSettled = function () {
	    return this.then(function (promises) {
	        return all(array_map(promises, function (promise) {
	            promise = Q(promise);
	            function regardless() {
	                return promise.inspect();
	            }
	            return promise.then(regardless, regardless);
	        }));
	    });
	};

	/**
	 * Captures the failure of a promise, giving an oportunity to recover
	 * with a callback.  If the given promise is fulfilled, the returned
	 * promise is fulfilled.
	 * @param {Any*} promise for something
	 * @param {Function} callback to fulfill the returned promise if the
	 * given promise is rejected
	 * @returns a promise for the return value of the callback
	 */
	Q.fail = // XXX legacy
	Q["catch"] = function (object, rejected) {
	    return Q(object).then(void 0, rejected);
	};

	Promise.prototype.fail = // XXX legacy
	Promise.prototype["catch"] = function (rejected) {
	    return this.then(void 0, rejected);
	};

	/**
	 * Attaches a listener that can respond to progress notifications from a
	 * promise's originating deferred. This listener receives the exact arguments
	 * passed to ``deferred.notify``.
	 * @param {Any*} promise for something
	 * @param {Function} callback to receive any progress notifications
	 * @returns the given promise, unchanged
	 */
	Q.progress = progress;
	function progress(object, progressed) {
	    return Q(object).then(void 0, void 0, progressed);
	}

	Promise.prototype.progress = function (progressed) {
	    return this.then(void 0, void 0, progressed);
	};

	/**
	 * Provides an opportunity to observe the settling of a promise,
	 * regardless of whether the promise is fulfilled or rejected.  Forwards
	 * the resolution to the returned promise when the callback is done.
	 * The callback can return a promise to defer completion.
	 * @param {Any*} promise
	 * @param {Function} callback to observe the resolution of the given
	 * promise, takes no arguments.
	 * @returns a promise for the resolution of the given promise when
	 * ``fin`` is done.
	 */
	Q.fin = // XXX legacy
	Q["finally"] = function (object, callback) {
	    return Q(object)["finally"](callback);
	};

	Promise.prototype.fin = // XXX legacy
	Promise.prototype["finally"] = function (callback) {
	    callback = Q(callback);
	    return this.then(function (value) {
	        return callback.fcall().then(function () {
	            return value;
	        });
	    }, function (reason) {
	        // TODO attempt to recycle the rejection with "this".
	        return callback.fcall().then(function () {
	            throw reason;
	        });
	    });
	};

	/**
	 * Terminates a chain of promises, forcing rejections to be
	 * thrown as exceptions.
	 * @param {Any*} promise at the end of a chain of promises
	 * @returns nothing
	 */
	Q.done = function (object, fulfilled, rejected, progress) {
	    return Q(object).done(fulfilled, rejected, progress);
	};

	Promise.prototype.done = function (fulfilled, rejected, progress) {
	    var onUnhandledError = function (error) {
	        // forward to a future turn so that ``when``
	        // does not catch it and turn it into a rejection.
	        nextTick(function () {
	            makeStackTraceLong(error, promise);
	            if (Q.onerror) {
	                Q.onerror(error);
	            } else {
	                throw error;
	            }
	        });
	    };

	    // Avoid unnecessary `nextTick`ing via an unnecessary `when`.
	    var promise = fulfilled || rejected || progress ?
	        this.then(fulfilled, rejected, progress) :
	        this;

	    if (typeof process === "object" && process && process.domain) {
	        onUnhandledError = process.domain.bind(onUnhandledError);
	    }

	    promise.then(void 0, onUnhandledError);
	};

	/**
	 * Causes a promise to be rejected if it does not get fulfilled before
	 * some milliseconds time out.
	 * @param {Any*} promise
	 * @param {Number} milliseconds timeout
	 * @param {String} custom error message (optional)
	 * @returns a promise for the resolution of the given promise if it is
	 * fulfilled before the timeout, otherwise rejected.
	 */
	Q.timeout = function (object, ms, message) {
	    return Q(object).timeout(ms, message);
	};

	Promise.prototype.timeout = function (ms, message) {
	    var deferred = defer();
	    var timeoutId = setTimeout(function () {
	        deferred.reject(new Error(message || "Timed out after " + ms + " ms"));
	    }, ms);

	    this.then(function (value) {
	        clearTimeout(timeoutId);
	        deferred.resolve(value);
	    }, function (exception) {
	        clearTimeout(timeoutId);
	        deferred.reject(exception);
	    }, deferred.notify);

	    return deferred.promise;
	};

	/**
	 * Returns a promise for the given value (or promised value), some
	 * milliseconds after it resolved. Passes rejections immediately.
	 * @param {Any*} promise
	 * @param {Number} milliseconds
	 * @returns a promise for the resolution of the given promise after milliseconds
	 * time has elapsed since the resolution of the given promise.
	 * If the given promise rejects, that is passed immediately.
	 */
	Q.delay = function (object, timeout) {
	    if (timeout === void 0) {
	        timeout = object;
	        object = void 0;
	    }
	    return Q(object).delay(timeout);
	};

	Promise.prototype.delay = function (timeout) {
	    return this.then(function (value) {
	        var deferred = defer();
	        setTimeout(function () {
	            deferred.resolve(value);
	        }, timeout);
	        return deferred.promise;
	    });
	};

	/**
	 * Passes a continuation to a Node function, which is called with the given
	 * arguments provided as an array, and returns a promise.
	 *
	 *      Q.nfapply(FS.readFile, [__filename])
	 *      .then(function (content) {
	 *      })
	 *
	 */
	Q.nfapply = function (callback, args) {
	    return Q(callback).nfapply(args);
	};

	Promise.prototype.nfapply = function (args) {
	    var deferred = defer();
	    var nodeArgs = array_slice(args);
	    nodeArgs.push(deferred.makeNodeResolver());
	    this.fapply(nodeArgs).fail(deferred.reject);
	    return deferred.promise;
	};

	/**
	 * Passes a continuation to a Node function, which is called with the given
	 * arguments provided individually, and returns a promise.
	 * @example
	 * Q.nfcall(FS.readFile, __filename)
	 * .then(function (content) {
	 * })
	 *
	 */
	Q.nfcall = function (callback /*...args*/) {
	    var args = array_slice(arguments, 1);
	    return Q(callback).nfapply(args);
	};

	Promise.prototype.nfcall = function (/*...args*/) {
	    var nodeArgs = array_slice(arguments);
	    var deferred = defer();
	    nodeArgs.push(deferred.makeNodeResolver());
	    this.fapply(nodeArgs).fail(deferred.reject);
	    return deferred.promise;
	};

	/**
	 * Wraps a NodeJS continuation passing function and returns an equivalent
	 * version that returns a promise.
	 * @example
	 * Q.nfbind(FS.readFile, __filename)("utf-8")
	 * .then(console.log)
	 * .done()
	 */
	Q.nfbind =
	Q.denodeify = function (callback /*...args*/) {
	    var baseArgs = array_slice(arguments, 1);
	    return function () {
	        var nodeArgs = baseArgs.concat(array_slice(arguments));
	        var deferred = defer();
	        nodeArgs.push(deferred.makeNodeResolver());
	        Q(callback).fapply(nodeArgs).fail(deferred.reject);
	        return deferred.promise;
	    };
	};

	Promise.prototype.nfbind =
	Promise.prototype.denodeify = function (/*...args*/) {
	    var args = array_slice(arguments);
	    args.unshift(this);
	    return Q.denodeify.apply(void 0, args);
	};

	Q.nbind = function (callback, thisp /*...args*/) {
	    var baseArgs = array_slice(arguments, 2);
	    return function () {
	        var nodeArgs = baseArgs.concat(array_slice(arguments));
	        var deferred = defer();
	        nodeArgs.push(deferred.makeNodeResolver());
	        function bound() {
	            return callback.apply(thisp, arguments);
	        }
	        Q(bound).fapply(nodeArgs).fail(deferred.reject);
	        return deferred.promise;
	    };
	};

	Promise.prototype.nbind = function (/*thisp, ...args*/) {
	    var args = array_slice(arguments, 0);
	    args.unshift(this);
	    return Q.nbind.apply(void 0, args);
	};

	/**
	 * Calls a method of a Node-style object that accepts a Node-style
	 * callback with a given array of arguments, plus a provided callback.
	 * @param object an object that has the named method
	 * @param {String} name name of the method of object
	 * @param {Array} args arguments to pass to the method; the callback
	 * will be provided by Q and appended to these arguments.
	 * @returns a promise for the value or error
	 */
	Q.nmapply = // XXX As proposed by "Redsandro"
	Q.npost = function (object, name, args) {
	    return Q(object).npost(name, args);
	};

	Promise.prototype.nmapply = // XXX As proposed by "Redsandro"
	Promise.prototype.npost = function (name, args) {
	    var nodeArgs = array_slice(args || []);
	    var deferred = defer();
	    nodeArgs.push(deferred.makeNodeResolver());
	    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
	    return deferred.promise;
	};

	/**
	 * Calls a method of a Node-style object that accepts a Node-style
	 * callback, forwarding the given variadic arguments, plus a provided
	 * callback argument.
	 * @param object an object that has the named method
	 * @param {String} name name of the method of object
	 * @param ...args arguments to pass to the method; the callback will
	 * be provided by Q and appended to these arguments.
	 * @returns a promise for the value or error
	 */
	Q.nsend = // XXX Based on Mark Miller's proposed "send"
	Q.nmcall = // XXX Based on "Redsandro's" proposal
	Q.ninvoke = function (object, name /*...args*/) {
	    var nodeArgs = array_slice(arguments, 2);
	    var deferred = defer();
	    nodeArgs.push(deferred.makeNodeResolver());
	    Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
	    return deferred.promise;
	};

	Promise.prototype.nsend = // XXX Based on Mark Miller's proposed "send"
	Promise.prototype.nmcall = // XXX Based on "Redsandro's" proposal
	Promise.prototype.ninvoke = function (name /*...args*/) {
	    var nodeArgs = array_slice(arguments, 1);
	    var deferred = defer();
	    nodeArgs.push(deferred.makeNodeResolver());
	    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
	    return deferred.promise;
	};

	/**
	 * If a function would like to support both Node continuation-passing-style and
	 * promise-returning-style, it can end its internal promise chain with
	 * `nodeify(nodeback)`, forwarding the optional nodeback argument.  If the user
	 * elects to use a nodeback, the result will be sent there.  If they do not
	 * pass a nodeback, they will receive the result promise.
	 * @param object a result (or a promise for a result)
	 * @param {Function} nodeback a Node.js-style callback
	 * @returns either the promise or nothing
	 */
	Q.nodeify = nodeify;
	function nodeify(object, nodeback) {
	    return Q(object).nodeify(nodeback);
	}

	Promise.prototype.nodeify = function (nodeback) {
	    if (nodeback) {
	        this.then(function (value) {
	            nextTick(function () {
	                nodeback(null, value);
	            });
	        }, function (error) {
	            nextTick(function () {
	                nodeback(error);
	            });
	        });
	    } else {
	        return this;
	    }
	};

	// All code before this point will be filtered from stack traces.
	var qEndingLine = captureLine();

	return Q;

	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	  this.Token = (function() {
	    function Token(start_mark, end_mark) {
	      this.start_mark = start_mark;
	      this.end_mark = end_mark;
	    }

	    return Token;

	  })();

	  this.DirectiveToken = (function(_super) {
	    __extends(DirectiveToken, _super);

	    DirectiveToken.prototype.id = '<directive>';

	    function DirectiveToken(name, value, start_mark, end_mark) {
	      this.name = name;
	      this.value = value;
	      this.start_mark = start_mark;
	      this.end_mark = end_mark;
	    }

	    return DirectiveToken;

	  })(this.Token);

	  this.DocumentStartToken = (function(_super) {
	    __extends(DocumentStartToken, _super);

	    function DocumentStartToken() {
	      _ref = DocumentStartToken.__super__.constructor.apply(this, arguments);
	      return _ref;
	    }

	    DocumentStartToken.prototype.id = '<document start>';

	    return DocumentStartToken;

	  })(this.Token);

	  this.DocumentEndToken = (function(_super) {
	    __extends(DocumentEndToken, _super);

	    function DocumentEndToken() {
	      _ref1 = DocumentEndToken.__super__.constructor.apply(this, arguments);
	      return _ref1;
	    }

	    DocumentEndToken.prototype.id = '<document end>';

	    return DocumentEndToken;

	  })(this.Token);

	  this.StreamStartToken = (function(_super) {
	    __extends(StreamStartToken, _super);

	    StreamStartToken.prototype.id = '<stream start>';

	    function StreamStartToken(start_mark, end_mark, encoding) {
	      this.start_mark = start_mark;
	      this.end_mark = end_mark;
	      this.encoding = encoding;
	    }

	    return StreamStartToken;

	  })(this.Token);

	  this.StreamEndToken = (function(_super) {
	    __extends(StreamEndToken, _super);

	    function StreamEndToken() {
	      _ref2 = StreamEndToken.__super__.constructor.apply(this, arguments);
	      return _ref2;
	    }

	    StreamEndToken.prototype.id = '<stream end>';

	    return StreamEndToken;

	  })(this.Token);

	  this.BlockSequenceStartToken = (function(_super) {
	    __extends(BlockSequenceStartToken, _super);

	    function BlockSequenceStartToken() {
	      _ref3 = BlockSequenceStartToken.__super__.constructor.apply(this, arguments);
	      return _ref3;
	    }

	    BlockSequenceStartToken.prototype.id = '<block sequence start>';

	    return BlockSequenceStartToken;

	  })(this.Token);

	  this.BlockMappingStartToken = (function(_super) {
	    __extends(BlockMappingStartToken, _super);

	    function BlockMappingStartToken() {
	      _ref4 = BlockMappingStartToken.__super__.constructor.apply(this, arguments);
	      return _ref4;
	    }

	    BlockMappingStartToken.prototype.id = '<block mapping end>';

	    return BlockMappingStartToken;

	  })(this.Token);

	  this.BlockEndToken = (function(_super) {
	    __extends(BlockEndToken, _super);

	    function BlockEndToken() {
	      _ref5 = BlockEndToken.__super__.constructor.apply(this, arguments);
	      return _ref5;
	    }

	    BlockEndToken.prototype.id = '<block end>';

	    return BlockEndToken;

	  })(this.Token);

	  this.FlowSequenceStartToken = (function(_super) {
	    __extends(FlowSequenceStartToken, _super);

	    function FlowSequenceStartToken() {
	      _ref6 = FlowSequenceStartToken.__super__.constructor.apply(this, arguments);
	      return _ref6;
	    }

	    FlowSequenceStartToken.prototype.id = '[';

	    return FlowSequenceStartToken;

	  })(this.Token);

	  this.FlowMappingStartToken = (function(_super) {
	    __extends(FlowMappingStartToken, _super);

	    function FlowMappingStartToken() {
	      _ref7 = FlowMappingStartToken.__super__.constructor.apply(this, arguments);
	      return _ref7;
	    }

	    FlowMappingStartToken.prototype.id = '{';

	    return FlowMappingStartToken;

	  })(this.Token);

	  this.FlowSequenceEndToken = (function(_super) {
	    __extends(FlowSequenceEndToken, _super);

	    function FlowSequenceEndToken() {
	      _ref8 = FlowSequenceEndToken.__super__.constructor.apply(this, arguments);
	      return _ref8;
	    }

	    FlowSequenceEndToken.prototype.id = ']';

	    return FlowSequenceEndToken;

	  })(this.Token);

	  this.FlowMappingEndToken = (function(_super) {
	    __extends(FlowMappingEndToken, _super);

	    function FlowMappingEndToken() {
	      _ref9 = FlowMappingEndToken.__super__.constructor.apply(this, arguments);
	      return _ref9;
	    }

	    FlowMappingEndToken.prototype.id = '}';

	    return FlowMappingEndToken;

	  })(this.Token);

	  this.KeyToken = (function(_super) {
	    __extends(KeyToken, _super);

	    function KeyToken() {
	      _ref10 = KeyToken.__super__.constructor.apply(this, arguments);
	      return _ref10;
	    }

	    KeyToken.prototype.id = '?';

	    return KeyToken;

	  })(this.Token);

	  this.ValueToken = (function(_super) {
	    __extends(ValueToken, _super);

	    function ValueToken() {
	      _ref11 = ValueToken.__super__.constructor.apply(this, arguments);
	      return _ref11;
	    }

	    ValueToken.prototype.id = ':';

	    return ValueToken;

	  })(this.Token);

	  this.BlockEntryToken = (function(_super) {
	    __extends(BlockEntryToken, _super);

	    function BlockEntryToken() {
	      _ref12 = BlockEntryToken.__super__.constructor.apply(this, arguments);
	      return _ref12;
	    }

	    BlockEntryToken.prototype.id = '-';

	    return BlockEntryToken;

	  })(this.Token);

	  this.FlowEntryToken = (function(_super) {
	    __extends(FlowEntryToken, _super);

	    function FlowEntryToken() {
	      _ref13 = FlowEntryToken.__super__.constructor.apply(this, arguments);
	      return _ref13;
	    }

	    FlowEntryToken.prototype.id = ',';

	    return FlowEntryToken;

	  })(this.Token);

	  this.AliasToken = (function(_super) {
	    __extends(AliasToken, _super);

	    AliasToken.prototype.id = '<alias>';

	    function AliasToken(value, start_mark, end_mark) {
	      this.value = value;
	      this.start_mark = start_mark;
	      this.end_mark = end_mark;
	    }

	    return AliasToken;

	  })(this.Token);

	  this.AnchorToken = (function(_super) {
	    __extends(AnchorToken, _super);

	    AnchorToken.prototype.id = '<anchor>';

	    function AnchorToken(value, start_mark, end_mark) {
	      this.value = value;
	      this.start_mark = start_mark;
	      this.end_mark = end_mark;
	    }

	    return AnchorToken;

	  })(this.Token);

	  this.TagToken = (function(_super) {
	    __extends(TagToken, _super);

	    TagToken.prototype.id = '<tag>';

	    function TagToken(value, start_mark, end_mark) {
	      this.value = value;
	      this.start_mark = start_mark;
	      this.end_mark = end_mark;
	    }

	    return TagToken;

	  })(this.Token);

	  this.ScalarToken = (function(_super) {
	    __extends(ScalarToken, _super);

	    ScalarToken.prototype.id = '<scalar>';

	    function ScalarToken(value, plain, start_mark, end_mark, style) {
	      this.value = value;
	      this.plain = plain;
	      this.start_mark = start_mark;
	      this.end_mark = end_mark;
	      this.style = style;
	    }

	    return ScalarToken;

	  })(this.Token);

	}).call(this);


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	  this.Event = (function() {
	    function Event(start_mark, end_mark) {
	      this.start_mark = start_mark;
	      this.end_mark = end_mark;
	    }

	    return Event;

	  })();

	  this.NodeEvent = (function(_super) {
	    __extends(NodeEvent, _super);

	    function NodeEvent(anchor, start_mark, end_mark) {
	      this.anchor = anchor;
	      this.start_mark = start_mark;
	      this.end_mark = end_mark;
	    }

	    return NodeEvent;

	  })(this.Event);

	  this.CollectionStartEvent = (function(_super) {
	    __extends(CollectionStartEvent, _super);

	    function CollectionStartEvent(anchor, tag, implicit, start_mark, end_mark) {
	      this.anchor = anchor;
	      this.tag = tag;
	      this.implicit = implicit;
	      this.start_mark = start_mark;
	      this.end_mark = end_mark;
	    }

	    return CollectionStartEvent;

	  })(this.NodeEvent);

	  this.CollectionEndEvent = (function(_super) {
	    __extends(CollectionEndEvent, _super);

	    function CollectionEndEvent() {
	      _ref = CollectionEndEvent.__super__.constructor.apply(this, arguments);
	      return _ref;
	    }

	    return CollectionEndEvent;

	  })(this.Event);

	  this.StreamStartEvent = (function(_super) {
	    __extends(StreamStartEvent, _super);

	    function StreamStartEvent(start_mark, end_mark, explicit, version, tags) {
	      this.start_mark = start_mark;
	      this.end_mark = end_mark;
	      this.explicit = explicit;
	      this.version = version;
	      this.tags = tags;
	    }

	    return StreamStartEvent;

	  })(this.Event);

	  this.StreamEndEvent = (function(_super) {
	    __extends(StreamEndEvent, _super);

	    function StreamEndEvent() {
	      _ref1 = StreamEndEvent.__super__.constructor.apply(this, arguments);
	      return _ref1;
	    }

	    return StreamEndEvent;

	  })(this.Event);

	  this.DocumentStartEvent = (function(_super) {
	    __extends(DocumentStartEvent, _super);

	    function DocumentStartEvent(start_mark, end_mark, explicit, version, tags) {
	      this.start_mark = start_mark;
	      this.end_mark = end_mark;
	      this.explicit = explicit;
	      this.version = version;
	      this.tags = tags;
	    }

	    return DocumentStartEvent;

	  })(this.Event);

	  this.DocumentEndEvent = (function(_super) {
	    __extends(DocumentEndEvent, _super);

	    function DocumentEndEvent(start_mark, end_mark, explicit) {
	      this.start_mark = start_mark;
	      this.end_mark = end_mark;
	      this.explicit = explicit;
	    }

	    return DocumentEndEvent;

	  })(this.Event);

	  this.AliasEvent = (function(_super) {
	    __extends(AliasEvent, _super);

	    function AliasEvent() {
	      _ref2 = AliasEvent.__super__.constructor.apply(this, arguments);
	      return _ref2;
	    }

	    return AliasEvent;

	  })(this.NodeEvent);

	  this.ScalarEvent = (function(_super) {
	    __extends(ScalarEvent, _super);

	    function ScalarEvent(anchor, tag, implicit, value, start_mark, end_mark, style) {
	      this.anchor = anchor;
	      this.tag = tag;
	      this.implicit = implicit;
	      this.value = value;
	      this.start_mark = start_mark;
	      this.end_mark = end_mark;
	      this.style = style;
	    }

	    return ScalarEvent;

	  })(this.NodeEvent);

	  this.SequenceStartEvent = (function(_super) {
	    __extends(SequenceStartEvent, _super);

	    function SequenceStartEvent() {
	      _ref3 = SequenceStartEvent.__super__.constructor.apply(this, arguments);
	      return _ref3;
	    }

	    return SequenceStartEvent;

	  })(this.CollectionStartEvent);

	  this.SequenceEndEvent = (function(_super) {
	    __extends(SequenceEndEvent, _super);

	    function SequenceEndEvent() {
	      _ref4 = SequenceEndEvent.__super__.constructor.apply(this, arguments);
	      return _ref4;
	    }

	    return SequenceEndEvent;

	  })(this.CollectionEndEvent);

	  this.MappingStartEvent = (function(_super) {
	    __extends(MappingStartEvent, _super);

	    function MappingStartEvent() {
	      _ref5 = MappingStartEvent.__super__.constructor.apply(this, arguments);
	      return _ref5;
	    }

	    return MappingStartEvent;

	  })(this.CollectionStartEvent);

	  this.MappingEndEvent = (function(_super) {
	    __extends(MappingEndEvent, _super);

	    function MappingEndEvent() {
	      _ref6 = MappingEndEvent.__super__.constructor.apply(this, arguments);
	      return _ref6;
	    }

	    return MappingEndEvent;

	  })(this.CollectionEndEvent);

	}).call(this);


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// shim for using process in browser

	var process = module.exports = {};

	process.nextTick = (function () {
	    var canSetImmediate = typeof window !== 'undefined'
	    && window.setImmediate;
	    var canPost = typeof window !== 'undefined'
	    && window.postMessage && window.addEventListener
	    ;

	    if (canSetImmediate) {
	        return function (f) { return window.setImmediate(f) };
	    }

	    if (canPost) {
	        var queue = [];
	        window.addEventListener('message', function (ev) {
	            var source = ev.source;
	            if ((source === window || source === null) && ev.data === 'process-tick') {
	                ev.stopPropagation();
	                if (queue.length > 0) {
	                    var fn = queue.shift();
	                    fn();
	                }
	            }
	        }, true);

	        return function nextTick(fn) {
	            queue.push(fn);
	            window.postMessage('process-tick', '*');
	        };
	    }

	    return function nextTick(fn) {
	        setTimeout(fn, 0);
	    };
	})();

	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	}

	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.6.3
	(function() {
	  var build_lookup_map, lookup_map;

	  lookup_map = null;

	  module.exports = function(tag) {
	    return (lookup_map != null ? lookup_map : lookup_map = build_lookup_map())[tag.toLowerCase()] === true;
	  };

	  build_lookup_map = function() {
	    var all, k, map, obsolete, obsolete_self_closing, regular, self_closing, _i, _len;
	    regular = 'a abbr address article aside audio b bdi bdo blockquote body button\
	 canvas caption cite code colgroup datalist dd del details dfn div dl dt em\
	 fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup\
	 html i iframe ins kbd label legend li map mark menu meter nav noscript object\
	 ol optgroup option output p pre progress q rp rt ruby s samp script section\
	 select small span strong style sub summary sup table tbody td textarea tfoot\
	 th thead time title tr u ul var video';
	    self_closing = 'area base br col command embed hr img input keygen link meta param\
	 source track wbr';
	    obsolete = 'applet acronym bgsound dir frameset noframes isindex listing\
	 nextid noembed plaintext rb strike xmp big blink center font marquee multicol\
	 nobr spacer tt';
	    obsolete_self_closing = 'basefont frame';
	    all = [regular, self_closing, obsolete, obsolete_self_closing].join(' ').split(' ');
	    map = {};
	    for (_i = 0, _len = all.length; _i < _len; _i++) {
	      k = all[_i];
	      if (k !== ' ') {
	        map[k.trim()] = true;
	      }
	    }
	    return map;
	  };

	}).call(this);


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.6.3
	(function() {
	  var html_tag_re, str_ok, syntax_parser;

	  module.exports = syntax_parser = function(tag) {
	    /*
	    [ 'p#id.class1.class2',  #0
	    'p',                   #1
	    '#id',                 #2
	    'id',                  #3
	    '.class1.class2',      #4
	    '.class2',             #5
	    index: 0,
	    input: 'p#id.class1.class2' ]
	    */

	    var classes, id, name, _, _ref;
	    _ref = tag.trim().match(html_tag_re), _ = _ref[0], name = _ref[1], _ = _ref[2], id = _ref[3], classes = _ref[4];
	    return {
	      tag: str_ok(name) ? name : 'div',
	      id: id,
	      classes: str_ok(classes) ? classes.split('.').slice(1) : []
	    };
	  };

	  html_tag_re = /^([\w\-]+)?([#]([\w\-]+))?((\.[\w\-]+)*)$/i;

	  str_ok = function(s) {
	    return (s != null) && ('string' === typeof s) && (s !== '');
	  };

	}).call(this);


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.6.3
	(function() {
	  var StackVal,
	    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	  StackVal = (function() {
	    function StackVal() {
	      this.defined = __bind(this.defined, this);
	      this.get = __bind(this.get, this);
	      this.attach = __bind(this.attach, this);
	      this._stack = [];
	    }

	    /*
	    Combinator that returns a function with an attached stack value.
	    Whenever you execute this function  the generator function will be executed
	    and the resulting value will will be accessible to any downstack function.
	    */


	    StackVal.prototype.attach = function(f, generator) {
	      var sv;
	      if (typeof f !== 'function') {
	        throw new Error('function argument required');
	      }
	      sv = this;
	      return function() {
	        try {
	          sv._stack.push(generator());
	          return f.apply(this, arguments);
	        } finally {
	          sv._stack.pop();
	        }
	      };
	    };

	    /*
	    Gets a stackval that was attached to an upstack function
	    will throw an error if there is no upstack function with a value
	    attached
	    */


	    StackVal.prototype.get = function() {
	      if (this.defined()) {
	        return this._stack[this._stack.length - 1];
	      } else {
	        throw new Error('No stackval found upstack');
	      }
	    };

	    /*
	    true if there is a value attached upstack
	    */


	    StackVal.prototype.defined = function() {
	      return this._stack.length !== 0;
	    };

	    return StackVal;

	  })();

	  module.exports = function() {
	    var main, s;
	    s = new StackVal();
	    main = function() {
	      var a;
	      a = arguments;
	      if (a.length === 2) {
	        return s.attach(a[0], a[1]);
	      } else {
	        return s.get();
	      }
	    };
	    main.attach = function() {
	      return s.attach.apply(s, arguments);
	    };
	    main.get = function() {
	      return s.get.apply(s, arguments);
	    };
	    main.defined = function() {
	      return s.defined.apply(s, arguments);
	    };
	    return main;
	  };

	}).call(this);


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	//     Underscore.js 1.5.2
	//     http://underscorejs.org
	//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Establish the object that gets returned to break out of a loop iteration.
	  var breaker = {};

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    concat           = ArrayProto.concat,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeForEach      = ArrayProto.forEach,
	    nativeMap          = ArrayProto.map,
	    nativeReduce       = ArrayProto.reduce,
	    nativeReduceRight  = ArrayProto.reduceRight,
	    nativeFilter       = ArrayProto.filter,
	    nativeEvery        = ArrayProto.every,
	    nativeSome         = ArrayProto.some,
	    nativeIndexOf      = ArrayProto.indexOf,
	    nativeLastIndexOf  = ArrayProto.lastIndexOf,
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind;

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object via a string identifier,
	  // for Closure Compiler "advanced" mode.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.5.2';

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles objects with the built-in `forEach`, arrays, and raw objects.
	  // Delegates to **ECMAScript 5**'s native `forEach` if available.
	  var each = _.each = _.forEach = function(obj, iterator, context) {
	    if (obj == null) return;
	    if (nativeForEach && obj.forEach === nativeForEach) {
	      obj.forEach(iterator, context);
	    } else if (obj.length === +obj.length) {
	      for (var i = 0, length = obj.length; i < length; i++) {
	        if (iterator.call(context, obj[i], i, obj) === breaker) return;
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (var i = 0, length = keys.length; i < length; i++) {
	        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
	      }
	    }
	  };

	  // Return the results of applying the iterator to each element.
	  // Delegates to **ECMAScript 5**'s native `map` if available.
	  _.map = _.collect = function(obj, iterator, context) {
	    var results = [];
	    if (obj == null) return results;
	    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
	    each(obj, function(value, index, list) {
	      results.push(iterator.call(context, value, index, list));
	    });
	    return results;
	  };

	  var reduceError = 'Reduce of empty array with no initial value';

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
	  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
	    var initial = arguments.length > 2;
	    if (obj == null) obj = [];
	    if (nativeReduce && obj.reduce === nativeReduce) {
	      if (context) iterator = _.bind(iterator, context);
	      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
	    }
	    each(obj, function(value, index, list) {
	      if (!initial) {
	        memo = value;
	        initial = true;
	      } else {
	        memo = iterator.call(context, memo, value, index, list);
	      }
	    });
	    if (!initial) throw new TypeError(reduceError);
	    return memo;
	  };

	  // The right-associative version of reduce, also known as `foldr`.
	  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
	  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
	    var initial = arguments.length > 2;
	    if (obj == null) obj = [];
	    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
	      if (context) iterator = _.bind(iterator, context);
	      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
	    }
	    var length = obj.length;
	    if (length !== +length) {
	      var keys = _.keys(obj);
	      length = keys.length;
	    }
	    each(obj, function(value, index, list) {
	      index = keys ? keys[--length] : --length;
	      if (!initial) {
	        memo = obj[index];
	        initial = true;
	      } else {
	        memo = iterator.call(context, memo, obj[index], index, list);
	      }
	    });
	    if (!initial) throw new TypeError(reduceError);
	    return memo;
	  };

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, iterator, context) {
	    var result;
	    any(obj, function(value, index, list) {
	      if (iterator.call(context, value, index, list)) {
	        result = value;
	        return true;
	      }
	    });
	    return result;
	  };

	  // Return all the elements that pass a truth test.
	  // Delegates to **ECMAScript 5**'s native `filter` if available.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, iterator, context) {
	    var results = [];
	    if (obj == null) return results;
	    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
	    each(obj, function(value, index, list) {
	      if (iterator.call(context, value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, iterator, context) {
	    return _.filter(obj, function(value, index, list) {
	      return !iterator.call(context, value, index, list);
	    }, context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Delegates to **ECMAScript 5**'s native `every` if available.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, iterator, context) {
	    iterator || (iterator = _.identity);
	    var result = true;
	    if (obj == null) return result;
	    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
	    each(obj, function(value, index, list) {
	      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
	    });
	    return !!result;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Delegates to **ECMAScript 5**'s native `some` if available.
	  // Aliased as `any`.
	  var any = _.some = _.any = function(obj, iterator, context) {
	    iterator || (iterator = _.identity);
	    var result = false;
	    if (obj == null) return result;
	    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
	    each(obj, function(value, index, list) {
	      if (result || (result = iterator.call(context, value, index, list))) return breaker;
	    });
	    return !!result;
	  };

	  // Determine if the array or object contains a given value (using `===`).
	  // Aliased as `include`.
	  _.contains = _.include = function(obj, target) {
	    if (obj == null) return false;
	    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
	    return any(obj, function(value) {
	      return value === target;
	    });
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      return (isFunc ? method : value[method]).apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, function(value){ return value[key]; });
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs, first) {
	    if (_.isEmpty(attrs)) return first ? void 0 : [];
	    return _[first ? 'find' : 'filter'](obj, function(value) {
	      for (var key in attrs) {
	        if (attrs[key] !== value[key]) return false;
	      }
	      return true;
	    });
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.where(obj, attrs, true);
	  };

	  // Return the maximum element or (element-based computation).
	  // Can't optimize arrays of integers longer than 65,535 elements.
	  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
	  _.max = function(obj, iterator, context) {
	    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
	      return Math.max.apply(Math, obj);
	    }
	    if (!iterator && _.isEmpty(obj)) return -Infinity;
	    var result = {computed : -Infinity, value: -Infinity};
	    each(obj, function(value, index, list) {
	      var computed = iterator ? iterator.call(context, value, index, list) : value;
	      computed > result.computed && (result = {value : value, computed : computed});
	    });
	    return result.value;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iterator, context) {
	    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
	      return Math.min.apply(Math, obj);
	    }
	    if (!iterator && _.isEmpty(obj)) return Infinity;
	    var result = {computed : Infinity, value: Infinity};
	    each(obj, function(value, index, list) {
	      var computed = iterator ? iterator.call(context, value, index, list) : value;
	      computed < result.computed && (result = {value : value, computed : computed});
	    });
	    return result.value;
	  };

	  // Shuffle an array, using the modern version of the 
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var rand;
	    var index = 0;
	    var shuffled = [];
	    each(obj, function(value) {
	      rand = _.random(index++);
	      shuffled[index - 1] = shuffled[rand];
	      shuffled[rand] = value;
	    });
	    return shuffled;
	  };

	  // Sample **n** random values from an array.
	  // If **n** is not specified, returns a single random element from the array.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (arguments.length < 2 || guard) {
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // An internal function to generate lookup iterators.
	  var lookupIterator = function(value) {
	    return _.isFunction(value) ? value : function(obj){ return obj[value]; };
	  };

	  // Sort the object's values by a criterion produced by an iterator.
	  _.sortBy = function(obj, value, context) {
	    var iterator = lookupIterator(value);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iterator.call(context, value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, value, context) {
	      var result = {};
	      var iterator = value == null ? _.identity : lookupIterator(value);
	      each(obj, function(value, index) {
	        var key = iterator.call(context, value, index, obj);
	        behavior(result, key, value);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, key, value) {
	    (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, key, value) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, key) {
	    _.has(result, key) ? result[key]++ : result[key] = 1;
	  });

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iterator, context) {
	    iterator = iterator == null ? _.identity : lookupIterator(iterator);
	    var value = iterator.call(context, obj);
	    var low = 0, high = array.length;
	    while (low < high) {
	      var mid = (low + high) >>> 1;
	      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
	    }
	    return low;
	  };

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (obj.length === +obj.length) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    return (n == null) || guard ? array[0] : slice.call(array, 0, n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N. The **guard** check allows it to work with
	  // `_.map`.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array. The **guard** check allows it to work with `_.map`.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if ((n == null) || guard) {
	      return array[array.length - 1];
	    } else {
	      return slice.call(array, Math.max(array.length - n, 0));
	    }
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array. The **guard**
	  // check allows it to work with `_.map`.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, (n == null) || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, output) {
	    if (shallow && _.every(input, _.isArray)) {
	      return concat.apply(output, input);
	    }
	    each(input, function(value) {
	      if (_.isArray(value) || _.isArguments(value)) {
	        shallow ? push.apply(output, value) : flatten(value, shallow, output);
	      } else {
	        output.push(value);
	      }
	    });
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, []);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iterator, context) {
	    if (_.isFunction(isSorted)) {
	      context = iterator;
	      iterator = isSorted;
	      isSorted = false;
	    }
	    var initial = iterator ? _.map(array, iterator, context) : array;
	    var results = [];
	    var seen = [];
	    each(initial, function(value, index) {
	      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
	        seen.push(value);
	        results.push(array[index]);
	      }
	    });
	    return results;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(_.flatten(arguments, true));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var rest = slice.call(arguments, 1);
	    return _.filter(_.uniq(array), function(item) {
	      return _.every(rest, function(other) {
	        return _.indexOf(other, item) >= 0;
	      });
	    });
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
	    return _.filter(array, function(value){ return !_.contains(rest, value); });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    var length = _.max(_.pluck(arguments, "length").concat(0));
	    var results = new Array(length);
	    for (var i = 0; i < length; i++) {
	      results[i] = _.pluck(arguments, '' + i);
	    }
	    return results;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    if (list == null) return {};
	    var result = {};
	    for (var i = 0, length = list.length; i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
	  // we need this function. Return the position of the first occurrence of an
	  // item in an array, or -1 if the item is not included in the array.
	  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = function(array, item, isSorted) {
	    if (array == null) return -1;
	    var i = 0, length = array.length;
	    if (isSorted) {
	      if (typeof isSorted == 'number') {
	        i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
	      } else {
	        i = _.sortedIndex(array, item);
	        return array[i] === item ? i : -1;
	      }
	    }
	    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
	    for (; i < length; i++) if (array[i] === item) return i;
	    return -1;
	  };

	  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
	  _.lastIndexOf = function(array, item, from) {
	    if (array == null) return -1;
	    var hasIndex = from != null;
	    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
	      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
	    }
	    var i = (hasIndex ? from : array.length);
	    while (i--) if (array[i] === item) return i;
	    return -1;
	  };

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (arguments.length <= 1) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = arguments[2] || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var idx = 0;
	    var range = new Array(length);

	    while(idx < length) {
	      range[idx++] = start;
	      start += step;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Reusable constructor function for prototype setting.
	  var ctor = function(){};

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    var args, bound;
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError;
	    args = slice.call(arguments, 2);
	    return bound = function() {
	      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
	      ctor.prototype = func.prototype;
	      var self = new ctor;
	      ctor.prototype = null;
	      var result = func.apply(self, args.concat(slice.call(arguments)));
	      if (Object(result) === result) return result;
	      return self;
	    };
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context.
	  _.partial = function(func) {
	    var args = slice.call(arguments, 1);
	    return function() {
	      return func.apply(this, args.concat(slice.call(arguments)));
	    };
	  };

	  // Bind all of an object's methods to that object. Useful for ensuring that
	  // all callbacks defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var funcs = slice.call(arguments, 1);
	    if (funcs.length === 0) throw new Error("bindAll must be passed function names");
	    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memo = {};
	    hasher || (hasher = _.identity);
	    return function() {
	      var key = hasher.apply(this, arguments);
	      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
	    };
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){ return func.apply(null, args); }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = function(func) {
	    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
	  };

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    options || (options = {});
	    var later = function() {
	      previous = options.leading === false ? 0 : new Date;
	      timeout = null;
	      result = func.apply(context, args);
	    };
	    return function() {
	      var now = new Date;
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0) {
	        clearTimeout(timeout);
	        timeout = null;
	        previous = now;
	        result = func.apply(context, args);
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = new Date();
	      var later = function() {
	        var last = (new Date()) - timestamp;
	        if (last < wait) {
	          timeout = setTimeout(later, wait - last);
	        } else {
	          timeout = null;
	          if (!immediate) result = func.apply(context, args);
	        }
	      };
	      var callNow = immediate && !timeout;
	      if (!timeout) {
	        timeout = setTimeout(later, wait);
	      }
	      if (callNow) result = func.apply(context, args);
	      return result;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = function(func) {
	    var ran = false, memo;
	    return function() {
	      if (ran) return memo;
	      ran = true;
	      memo = func.apply(this, arguments);
	      func = null;
	      return memo;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return function() {
	      var args = [func];
	      push.apply(args, arguments);
	      return wrapper.apply(this, args);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var funcs = arguments;
	    return function() {
	      var args = arguments;
	      for (var i = funcs.length - 1; i >= 0; i--) {
	        args = [funcs[i].apply(this, args)];
	      }
	      return args[0];
	    };
	  };

	  // Returns a function that will only be executed after being called N times.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Object Functions
	  // ----------------

	  // Retrieve the names of an object's properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = nativeKeys || function(obj) {
	    if (obj !== Object(obj)) throw new TypeError('Invalid object');
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = new Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = new Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = function(obj) {
	    each(slice.call(arguments, 1), function(source) {
	      if (source) {
	        for (var prop in source) {
	          obj[prop] = source[prop];
	        }
	      }
	    });
	    return obj;
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(obj) {
	    var copy = {};
	    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
	    each(keys, function(key) {
	      if (key in obj) copy[key] = obj[key];
	    });
	    return copy;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj) {
	    var copy = {};
	    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
	    for (var key in obj) {
	      if (!_.contains(keys, key)) copy[key] = obj[key];
	    }
	    return copy;
	  };

	  // Fill in a given object with default properties.
	  _.defaults = function(obj) {
	    each(slice.call(arguments, 1), function(source) {
	      if (source) {
	        for (var prop in source) {
	          if (obj[prop] === void 0) obj[prop] = source[prop];
	        }
	      }
	    });
	    return obj;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a == 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className != toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, dates, and booleans are compared by value.
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return a == String(b);
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
	        // other numeric values.
	        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a == +b;
	      // RegExps are compared by their source patterns and flags.
	      case '[object RegExp]':
	        return a.source == b.source &&
	               a.global == b.global &&
	               a.multiline == b.multiline &&
	               a.ignoreCase == b.ignoreCase;
	    }
	    if (typeof a != 'object' || typeof b != 'object') return false;
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] == a) return bStack[length] == b;
	    }
	    // Objects with different constructors are not equivalent, but `Object`s
	    // from different frames are.
	    var aCtor = a.constructor, bCtor = b.constructor;
	    if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
	                             _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
	      return false;
	    }
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	    var size = 0, result = true;
	    // Recursively compare objects and arrays.
	    if (className == '[object Array]') {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      size = a.length;
	      result = size == b.length;
	      if (result) {
	        // Deep compare the contents, ignoring non-numeric properties.
	        while (size--) {
	          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
	        }
	      }
	    } else {
	      // Deep compare objects.
	      for (var key in a) {
	        if (_.has(a, key)) {
	          // Count the expected number of properties.
	          size++;
	          // Deep compare each member.
	          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
	        }
	      }
	      // Ensure that both objects contain the same number of properties.
	      if (result) {
	        for (key in b) {
	          if (_.has(b, key) && !(size--)) break;
	        }
	        result = !size;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return result;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b, [], []);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
	    for (var key in obj) if (_.has(obj, key)) return false;
	    return true;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) == '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    return obj === Object(obj);
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
	  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) == '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return !!(obj && _.has(obj, 'callee'));
	    };
	  }

	  // Optimize `isFunction` if appropriate.
	  if (true) {
	    _.isFunction = function(obj) {
	      return typeof obj === 'function';
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj != +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iterators.
	  _.identity = function(value) {
	    return value;
	  };

	  // Run a function **n** times.
	  _.times = function(n, iterator, context) {
	    var accum = Array(Math.max(0, n));
	    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // List of HTML entities for escaping.
	  var entityMap = {
	    escape: {
	      '&': '&amp;',
	      '<': '&lt;',
	      '>': '&gt;',
	      '"': '&quot;',
	      "'": '&#x27;'
	    }
	  };
	  entityMap.unescape = _.invert(entityMap.escape);

	  // Regexes containing the keys and values listed immediately above.
	  var entityRegexes = {
	    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
	    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
	  };

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  _.each(['escape', 'unescape'], function(method) {
	    _[method] = function(string) {
	      if (string == null) return '';
	      return ('' + string).replace(entityRegexes[method], function(match) {
	        return entityMap[method][match];
	      });
	    };
	  });

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property) {
	    if (object == null) return void 0;
	    var value = object[property];
	    return _.isFunction(value) ? value.call(object) : value;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result.call(this, func.apply(_, args));
	      };
	    });
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\t':     't',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  _.template = function(text, data, settings) {
	    var render;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = new RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset)
	        .replace(escaper, function(match) { return '\\' + escapes[match]; });

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      }
	      if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      }
	      if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }
	      index = offset + match.length;
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + "return __p;\n";

	    try {
	      render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    if (data) return render(data, _);
	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled function source as a convenience for precompilation.
	    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function, which will delegate to the wrapper.
	  _.chain = function(obj) {
	    return _(obj).chain();
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(obj) {
	    return this._chain ? _(obj).chain() : obj;
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
	      return result.call(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result.call(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  _.extend(_.prototype, {

	    // Start chaining a wrapped Underscore object.
	    chain: function() {
	      this._chain = true;
	      return this;
	    },

	    // Extracts the result from a wrapped and chained object.
	    value: function() {
	      return this._wrapped;
	    }

	  });

	}).call(this);


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {

		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}

		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,

		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},

		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,

		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}

		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;

				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);

			}

			return ucs2encode(output);
		}

		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;

			}
			return output.join('');
		}

		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}

		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module)), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}

	}(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(63)(module), (function() { return this; }())))

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */

	var base64 = __webpack_require__(66)
	var ieee754 = __webpack_require__(64)
	var isArray = __webpack_require__(65)

	exports.Buffer = Buffer
	exports.SlowBuffer = Buffer
	exports.INSPECT_MAX_BYTES = 50
	Buffer.poolSize = 8192 // not used by this implementation

	var kMaxLength = 0x3fffffff

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Note:
	 *
	 * - Implementation must support adding new properties to `Uint8Array` instances.
	 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
	 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *    incorrect length in some situations.
	 *
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
	 * get the Object implementation, which is slower but will work correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = (function () {
	  try {
	    var buf = new ArrayBuffer(0)
	    var arr = new Uint8Array(buf)
	    arr.foo = function () { return 42 }
	    return 42 === arr.foo() && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	})()

	/**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */
	function Buffer (subject, encoding, noZero) {
	  if (!(this instanceof Buffer))
	    return new Buffer(subject, encoding, noZero)

	  var type = typeof subject

	  // Find the length
	  var length
	  if (type === 'number')
	    length = subject > 0 ? subject >>> 0 : 0
	  else if (type === 'string') {
	    if (encoding === 'base64')
	      subject = base64clean(subject)
	    length = Buffer.byteLength(subject, encoding)
	  } else if (type === 'object' && subject !== null) { // assume object is array-like
	    if (subject.type === 'Buffer' && isArray(subject.data))
	      subject = subject.data
	    length = +subject.length > 0 ? Math.floor(+subject.length) : 0
	  } else
	    throw new TypeError('must start with number, buffer, array or string')

	  if (this.length > kMaxLength)
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	      'size: 0x' + kMaxLength.toString(16) + ' bytes')

	  var buf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Preferred: Return an augmented `Uint8Array` instance for best performance
	    buf = Buffer._augment(new Uint8Array(length))
	  } else {
	    // Fallback: Return THIS instance of Buffer (created by `new`)
	    buf = this
	    buf.length = length
	    buf._isBuffer = true
	  }

	  var i
	  if (Buffer.TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number') {
	    // Speed optimization -- use set if we're copying from a typed array
	    buf._set(subject)
	  } else if (isArrayish(subject)) {
	    // Treat array-ish objects as a byte array
	    if (Buffer.isBuffer(subject)) {
	      for (i = 0; i < length; i++)
	        buf[i] = subject.readUInt8(i)
	    } else {
	      for (i = 0; i < length; i++)
	        buf[i] = ((subject[i] % 256) + 256) % 256
	    }
	  } else if (type === 'string') {
	    buf.write(subject, 0, encoding)
	  } else if (type === 'number' && !Buffer.TYPED_ARRAY_SUPPORT && !noZero) {
	    for (i = 0; i < length; i++) {
	      buf[i] = 0
	    }
	  }

	  return buf
	}

	Buffer.isBuffer = function (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b))
	    throw new TypeError('Arguments must be Buffers')

	  var x = a.length
	  var y = b.length
	  for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {}
	  if (i !== len) {
	    x = a[i]
	    y = b[i]
	  }
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'raw':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function (list, totalLength) {
	  if (!isArray(list)) throw new TypeError('Usage: Buffer.concat(list[, length])')

	  if (list.length === 0) {
	    return new Buffer(0)
	  } else if (list.length === 1) {
	    return list[0]
	  }

	  var i
	  if (totalLength === undefined) {
	    totalLength = 0
	    for (i = 0; i < list.length; i++) {
	      totalLength += list[i].length
	    }
	  }

	  var buf = new Buffer(totalLength)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var item = list[i]
	    item.copy(buf, pos)
	    pos += item.length
	  }
	  return buf
	}

	Buffer.byteLength = function (str, encoding) {
	  var ret
	  str = str + ''
	  switch (encoding || 'utf8') {
	    case 'ascii':
	    case 'binary':
	    case 'raw':
	      ret = str.length
	      break
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      ret = str.length * 2
	      break
	    case 'hex':
	      ret = str.length >>> 1
	      break
	    case 'utf8':
	    case 'utf-8':
	      ret = utf8ToBytes(str).length
	      break
	    case 'base64':
	      ret = base64ToBytes(str).length
	      break
	    default:
	      ret = str.length
	  }
	  return ret
	}

	// pre-set for values that may exist in the future
	Buffer.prototype.length = undefined
	Buffer.prototype.parent = undefined

	// toString(encoding, start=0, end=buffer.length)
	Buffer.prototype.toString = function (encoding, start, end) {
	  var loweredCase = false

	  start = start >>> 0
	  end = end === undefined || end === Infinity ? this.length : end >>> 0

	  if (!encoding) encoding = 'utf8'
	  if (start < 0) start = 0
	  if (end > this.length) end = this.length
	  if (end <= start) return ''

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'binary':
	        return binarySlice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase)
	          throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.equals = function (b) {
	  if(!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max)
	      str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  return Buffer.compare(this, b)
	}

	// `get` will be removed in Node 0.13+
	Buffer.prototype.get = function (offset) {
	  console.log('.get() is deprecated. Access using array indexes instead.')
	  return this.readUInt8(offset)
	}

	// `set` will be removed in Node 0.13+
	Buffer.prototype.set = function (v, offset) {
	  console.log('.set() is deprecated. Access using array indexes instead.')
	  return this.writeUInt8(v, offset)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; i++) {
	    var byte = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(byte)) throw new Error('Invalid hex string')
	    buf[offset + i] = byte
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  var charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length)
	  return charsWritten
	}

	function asciiWrite (buf, string, offset, length) {
	  var charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length)
	  return charsWritten
	}

	function binaryWrite (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  var charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length)
	  return charsWritten
	}

	function utf16leWrite (buf, string, offset, length) {
	  var charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length, 2)
	  return charsWritten
	}

	Buffer.prototype.write = function (string, offset, length, encoding) {
	  // Support both (string, offset, length, encoding)
	  // and the legacy (string, encoding, offset, length)
	  if (isFinite(offset)) {
	    if (!isFinite(length)) {
	      encoding = length
	      length = undefined
	    }
	  } else {  // legacy
	    var swap = encoding
	    encoding = offset
	    offset = length
	    length = swap
	  }

	  offset = Number(offset) || 0
	  var remaining = this.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	  encoding = String(encoding || 'utf8').toLowerCase()

	  var ret
	  switch (encoding) {
	    case 'hex':
	      ret = hexWrite(this, string, offset, length)
	      break
	    case 'utf8':
	    case 'utf-8':
	      ret = utf8Write(this, string, offset, length)
	      break
	    case 'ascii':
	      ret = asciiWrite(this, string, offset, length)
	      break
	    case 'binary':
	      ret = binaryWrite(this, string, offset, length)
	      break
	    case 'base64':
	      ret = base64Write(this, string, offset, length)
	      break
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      ret = utf16leWrite(this, string, offset, length)
	      break
	    default:
	      throw new TypeError('Unknown encoding: ' + encoding)
	  }
	  return ret
	}

	Buffer.prototype.toJSON = function () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  var res = ''
	  var tmp = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    if (buf[i] <= 0x7F) {
	      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
	      tmp = ''
	    } else {
	      tmp += '%' + buf[i].toString(16)
	    }
	  }

	  return res + decodeUtf8Char(tmp)
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function binarySlice (buf, start, end) {
	  return asciiSlice(buf, start, end)
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; i++) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len;
	    if (start < 0)
	      start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0)
	      end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start)
	    end = start

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    return Buffer._augment(this.subarray(start, end))
	  } else {
	    var sliceLen = end - start
	    var newBuf = new Buffer(sliceLen, undefined, true)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	    return newBuf
	  }
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0)
	    throw new RangeError('offset is not uint')
	  if (offset + ext > length)
	    throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUInt8 = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	      ((this[offset + 1] << 16) |
	      (this[offset + 2] << 8) |
	      this[offset + 3])
	}

	Buffer.prototype.readInt8 = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80))
	    return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16) |
	      (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	      (this[offset + 1] << 16) |
	      (this[offset + 2] << 8) |
	      (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
	  if (value > max || value < min) throw new TypeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new TypeError('index out of range')
	}

	Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = value
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value
	    this[offset + 1] = (value >>> 8)
	  } else objectWriteUInt16(this, value, offset, true)
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = value
	  } else objectWriteUInt16(this, value, offset, false)
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = value
	  } else objectWriteUInt32(this, value, offset, true)
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = value
	  } else objectWriteUInt32(this, value, offset, false)
	  return offset + 4
	}

	Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = value
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value
	    this[offset + 1] = (value >>> 8)
	  } else objectWriteUInt16(this, value, offset, true)
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = value
	  } else objectWriteUInt16(this, value, offset, false)
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else objectWriteUInt32(this, value, offset, true)
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = value
	  } else objectWriteUInt32(this, value, offset, false)
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (value > max || value < min) throw new TypeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new TypeError('index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert)
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert)
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function (target, target_start, start, end) {
	  var source = this

	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (!target_start) target_start = 0

	  // Copy 0 bytes; we're done
	  if (end === start) return
	  if (target.length === 0 || source.length === 0) return

	  // Fatal error conditions
	  if (end < start) throw new TypeError('sourceEnd < sourceStart')
	  if (target_start < 0 || target_start >= target.length)
	    throw new TypeError('targetStart out of bounds')
	  if (start < 0 || start >= source.length) throw new TypeError('sourceStart out of bounds')
	  if (end < 0 || end > source.length) throw new TypeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length)
	    end = this.length
	  if (target.length - target_start < end - start)
	    end = target.length - target_start + start

	  var len = end - start

	  if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < len; i++) {
	      target[i + target_start] = this[i + start]
	    }
	  } else {
	    target._set(this.subarray(start, start + len), target_start)
	  }
	}

	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function (value, start, end) {
	  if (!value) value = 0
	  if (!start) start = 0
	  if (!end) end = this.length

	  if (end < start) throw new TypeError('end < start')

	  // Fill 0 bytes; we're done
	  if (end === start) return
	  if (this.length === 0) return

	  if (start < 0 || start >= this.length) throw new TypeError('start out of bounds')
	  if (end < 0 || end > this.length) throw new TypeError('end out of bounds')

	  var i
	  if (typeof value === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = value
	    }
	  } else {
	    var bytes = utf8ToBytes(value.toString())
	    var len = bytes.length
	    for (i = start; i < end; i++) {
	      this[i] = bytes[i % len]
	    }
	  }

	  return this
	}

	/**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */
	Buffer.prototype.toArrayBuffer = function () {
	  if (typeof Uint8Array !== 'undefined') {
	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      return (new Buffer(this)).buffer
	    } else {
	      var buf = new Uint8Array(this.length)
	      for (var i = 0, len = buf.length; i < len; i += 1) {
	        buf[i] = this[i]
	      }
	      return buf.buffer
	    }
	  } else {
	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
	  }
	}

	// HELPER FUNCTIONS
	// ================

	var BP = Buffer.prototype

	/**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */
	Buffer._augment = function (arr) {
	  arr.constructor = Buffer
	  arr._isBuffer = true

	  // save reference to original Uint8Array get/set methods before overwriting
	  arr._get = arr.get
	  arr._set = arr.set

	  // deprecated, will be removed in node 0.13+
	  arr.get = BP.get
	  arr.set = BP.set

	  arr.write = BP.write
	  arr.toString = BP.toString
	  arr.toLocaleString = BP.toString
	  arr.toJSON = BP.toJSON
	  arr.equals = BP.equals
	  arr.compare = BP.compare
	  arr.copy = BP.copy
	  arr.slice = BP.slice
	  arr.readUInt8 = BP.readUInt8
	  arr.readUInt16LE = BP.readUInt16LE
	  arr.readUInt16BE = BP.readUInt16BE
	  arr.readUInt32LE = BP.readUInt32LE
	  arr.readUInt32BE = BP.readUInt32BE
	  arr.readInt8 = BP.readInt8
	  arr.readInt16LE = BP.readInt16LE
	  arr.readInt16BE = BP.readInt16BE
	  arr.readInt32LE = BP.readInt32LE
	  arr.readInt32BE = BP.readInt32BE
	  arr.readFloatLE = BP.readFloatLE
	  arr.readFloatBE = BP.readFloatBE
	  arr.readDoubleLE = BP.readDoubleLE
	  arr.readDoubleBE = BP.readDoubleBE
	  arr.writeUInt8 = BP.writeUInt8
	  arr.writeUInt16LE = BP.writeUInt16LE
	  arr.writeUInt16BE = BP.writeUInt16BE
	  arr.writeUInt32LE = BP.writeUInt32LE
	  arr.writeUInt32BE = BP.writeUInt32BE
	  arr.writeInt8 = BP.writeInt8
	  arr.writeInt16LE = BP.writeInt16LE
	  arr.writeInt16BE = BP.writeInt16BE
	  arr.writeInt32LE = BP.writeInt32LE
	  arr.writeInt32BE = BP.writeInt32BE
	  arr.writeFloatLE = BP.writeFloatLE
	  arr.writeFloatBE = BP.writeFloatBE
	  arr.writeDoubleLE = BP.writeDoubleLE
	  arr.writeDoubleBE = BP.writeDoubleBE
	  arr.fill = BP.fill
	  arr.inspect = BP.inspect
	  arr.toArrayBuffer = BP.toArrayBuffer

	  return arr
	}

	var INVALID_BASE64_RE = /[^+\/0-9A-z]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function isArrayish (subject) {
	  return isArray(subject) || Buffer.isBuffer(subject) ||
	      subject && typeof subject === 'object' &&
	      typeof subject.length === 'number'
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    var b = str.charCodeAt(i)
	    if (b <= 0x7F) {
	      byteArray.push(b)
	    } else {
	      var start = i
	      if (b >= 0xD800 && b <= 0xDFFF) i++
	      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
	      for (var j = 0; j < h.length; j++) {
	        byteArray.push(parseInt(h[j], 16))
	      }
	    }
	  }
	  return byteArray
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(str)
	}

	function blitBuffer (src, dst, offset, length, unitSize) {
	  if (unitSize) length -= length % unitSize;
	  for (var i = 0; i < length; i++) {
	    if ((i + offset >= dst.length) || (i >= src.length))
	      break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function decodeUtf8Char (str) {
	  try {
	    return decodeURIComponent(str)
	  } catch (err) {
	    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56).Buffer))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(61);
	exports.encode = exports.stringify = __webpack_require__(62);


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	(function( glob, undefined ) {

	var rnumber = /[0-9]/,
		rnewline = /(\r\n|\r|\n)/,
		revidence = /\r\n|\r|\n/,
		rwhitespace = /(\s|\t)/,
		rvalidsolidus = /\\("|\\|\/|b|f|n|r|t|u[0-9]{4})/,
		rE = /^(\-|\+)?[0-9]/;


	// Leeeeeeerrrrroooyy Jennkkkiiinnnss
	function JSONLint( json, options ) {
		var self = this;

		if ( ! ( self instanceof JSONLint ) ) {
			return new JSONLint( json, options );
		}

		// Argument handling
		self.json = json || '';
		self.options = options || {};
		self.lower = self.json.toLowerCase();

		// Allow comments by default
		if ( ! self.options.hasOwnProperty( 'comments' ) ) {
			self.options.comments = true;
		}

		// Internals
		self.c = '';
		self.i = -1;
		self.length = self.json.length;
		self.line = 1;
		self.character = 0;
		self._evidence = self.json.split( revidence );
		self.endblock = '';
		self.commabreak = false;

		try {
			self.render();
		} catch ( e ) {
			if ( typeof e != 'string' ) {
				throw e;
			}
			self.error = e;
			self.setEvidence();
		}
	}


	// Meta (Please change contact info for republishing with changes)
	JSONLint.contact = "Corey Hart (corey@codenothing.com)";
	JSONLint.version = '[VERSION]';
	JSONLint.date = '[DATE]';


	// Methods
	JSONLint.prototype = {

		// Rendering Start
		render: function(){
			var self = this, peek = '', content = false;

			for ( ; ++self.i < self.length; ) {
				self.c = self.json[ self.i ];
				self.character++;

				if ( self.options.comments && self.c == '/' ) {
					peek = self.json[ self.i + 1 ];
					if ( peek == '*' ) {
						self.multicomment();
					}
					else if ( peek == '/' ) {
						self.comment();
					}
					else {
						throw "Unknown character '/', maybe a comment?";
					}
				}
				else if ( rnewline.exec( self.c ) ) {
					self.line++;
					self.character = 0;
				}
				else if ( rwhitespace.exec( self.c ) ) {
					continue;
				}
				else if ( content ) {
					throw "Unknown character '" + self.c + "', expecting end of file.";
				}
				else if ( self.c == '[' ) {
					content = true;
					self.array();
				}
				else if ( self.c == '{' ) {
					content = true;
					self.object();
				}
				else {
					throw "Unknown character '" + self.c + "', expecting opening block '{' or '[', or maybe a comment";
				}
			}

			// Check for pure whitespace
			if ( ! content ) {
				throw "Invalid JSON, no content.";
			}
		},

		// Multi line comment
		multicomment: function(){
			var self = this;

			for ( ; ++self.i < self.length; ) {
				self.c = self.json[ self.i ];
				self.character++;

				if ( self.c == "*" && self.json[ self.i + 1 ] == "/" ) {
					self.i++;
					self.character++;
					break;
				}
				else if ( rnewline.exec( self.c ) ) {
					self.line++;
					self.character = 0;
				}
			}
		},

		// Single line comment
		comment: function(){
			var self = this;

			for ( ; ++self.i < self.length; ) {
				self.c = self.json[ self.i ];
				self.character++;

				if ( rnewline.exec( self.c ) ) {
					self.line++;
					self.character = 0;
					break;
				}
			}
		},

		// Array Block
		array: function(){
			// Keep reference of current endblock
			var self = this,
				_endblock = self.endblock,
				_commabreak = self.commabreak,
				ended = false;

			self.endblock = ']';
			self.commabreak = false;
			while ( ( ended = self.value() ) !== true && self.i < self.length ) {
				// Do nothing, just wait for array values to finish
			}

			if ( ! ended ) {
				throw "EOF Error. Expecting closing ']'";
			}

			// Reset previous endblock
			self.endblock = _endblock;
			self.commabreak = _commabreak;
		},

		// Object Block
		object: function(){
			// Keep reference of current endblock
			var self = this,
				_endblock = self.endblock,
				_commabreak = self.commabreak,
				found = false, peek = '', empty = true;

			self.endblock = '}';
			self.commabreak = false;
			for ( ; ++self.i < self.length; ) {
				self.c = self.json[ self.i ];
				self.character++;

				if ( self.options.comments && self.c == '/' ) {
					peek = self.json[ self.i + 1 ];
					if ( peek == '*' ) {
						self.multicomment();
					}
					else if ( peek == '/' ) {
						self.comment();
					}
					else {
						throw "Unknown character '/', maybe a comment?";
					}
				}
				else if ( rnewline.exec( self.c ) ) {
					self.line++;
					self.character = 0;
				}
				else if ( rwhitespace.exec( self.c ) ) {
					continue;
				}
				else if ( self.c == '"' ) {
					empty = false;
					if ( self.key() === true ) {
						// Reset old endblock
						self.endblock = _endblock;
						self.commabreak = _commabreak;
						found = true;
						break;
					}
				}
				else if ( empty && self.c == '}' ) {
					self.endblock = _endblock;
					self.commabreak = _commabreak;
					found = true;
					break;
				}
				else {
					throw "Unknown Character '" + self.c + "', expecting a string for key statement.";
				}
			}

			if ( ! found ) {
				throw "EOF Error, expecting closing '}'.";
			}
		},

		// Key Statement
		key: function(){
			var self = this;
			self.string();

			for ( var peek = ''; ++self.i < self.length; ) {
				self.c = self.json[ self.i ];
				self.character++;

				if ( self.options.comments && self.c == '/' ) {
					peek = self.json[ self.i + 1 ];
					if ( peek == '*' ) {
						self.multicomment();
					}
					else if ( peek == '/' ) {
						self.comment();
					}
					else {
						throw "Unknown character '/', maybe a comment?";
					}
				}
				else if ( rnewline.exec( self.c ) ) {
					self.line++;
					self.character = 0;
				}
				else if ( rwhitespace.exec( self.c ) ) {
					continue;
				}
				else if ( self.c == ":" ) {
					return self.value();
				}
				else {
					throw "Unknown Character '" + self.c + "', expecting a semicolon.";
				}
			}
		},

		// Value statement
		value: function(){
			var self = this, peek = '';

			for ( ; ++self.i < self.length; ) {
				self.c = self.json[ self.i ];
				self.character++;

				if ( self.options.comments && self.c == '/' ) {
					peek = self.json[ self.i + 1 ];
					if ( peek == '*' ) {
						self.multicomment();
					}
					else if ( peek == '/' ) {
						self.comment();
					}
					else {
						throw "Unknown character '/', maybe a comment?";
					}
				}
				else if ( rnewline.exec( self.c ) ) {
					self.line++;
					self.character = 0;
				}
				else if ( rwhitespace.exec( self.c ) ) {
					continue;
				}
				else if ( self.c == '{' ) {
					self.object();
					return self.endval();
				}
				else if ( self.c == '[' ) {
					self.array();
					return self.endval();
				}
				else if ( self.c == '"' ) {
					self.string();
					return self.endval();
				}
				else if ( self.json.indexOf( 'true', self.i ) === self.i ) {
					self.i += 3;
					self.character += 3;
					return self.endval();
				}
				else if ( self.json.indexOf( 'false', self.i ) === self.i ) {
					self.i += 4;
					self.character += 4;
					return self.endval();
				}
				else if ( self.json.indexOf( 'null', self.i ) === self.i ) {
					self.i += 3;
					self.character += 3;
					return self.endval();
				}
				else if ( self.c == '-' || rnumber.exec( self.c ) ) {
					return self.numeric();
				}
				else if ( self.c == ']' && self.endblock == ']' ) {
					if ( self.commabreak ) {
						throw "Unexpected End Of Array Error. Expecting a value statement.";
					}
					return true;
				}
				else {
					throw "Unknown Character '" + self.c + "', expecting a value.";
				}
			}
		},

		// String statement
		string: function(){
			var self = this, found = false, m;

			for ( ; ++self.i < self.length; ) {
				self.c = self.json[ self.i ];
				self.character++;

				if ( self.c == "\\" ) {
					if ( ( m = rvalidsolidus.exec( self.json.substr( self.i ) ) ) && m.index === 0 ) {
						self.i += m[ 1 ].length;
						self.character += m[ 1 ].length;
					}
					else {
						throw "Invalid Reverse Solidus '\\' declaration.";
					}
				}
				else if ( rnewline.exec( self.c ) ) {
					self.line++;
					self.character = 0;
				}
				else if ( self.c == '"' ) {
					found = true;
					break;
				}
			}

			// Make sure close string is found
			if ( ! found ) {
				throw "EOF: No close string '\"' found.";
			}
		},

		// Numeric Value
		numeric: function(){
			var self = this,
				negative = true,
				decimal = null,
				e = null,
				peek = '';

			// We need to jump back a character to catch the whole number
			self.i--;
			self.character--;
			for ( ; ++self.i < self.length; ) {
				self.c = self.json[ self.i ];
				self.character++;

				// Handle initial negative sign
				if ( negative ) {
					negative = false;
					if ( self.c == '-' ) {
						if ( ! rnumber.exec( self.json[ self.i + 1 ] ) ) {
							throw "Unknown Character '" + self.c + "' following a negative, expecting a numeric value.";
						}
						continue;
					}
				}

				// Only a single decimal is allowed in a numeric value
				if ( decimal && self.c == '.' ) {
					decimal = false;
					e = true;
					continue;
				}
				// Only a single e notation is allowed in a numeric value
				else if ( e && self.c.toLowerCase() == 'e' ) {
					e = false;
					negative = true;
					if ( rE.exec( self.json.substr( self.i + 1, 2 ) ) ) {
						self.character++;
						self.i++;
					}
					else {
						self.character++;
						throw "Unknown Character '" + self.json[ self.i + 1 ] + "' following e notation, expecting a numeric value.";
					}
				}
				// Normal Digit
				else if ( rnumber.exec( self.c ) ) {
					if ( decimal === null ) {
						decimal = true;
					}
				}
				// Assume end of number, and allow endval to handle it
				else {
					// Jump back a character to include the current one
					self.i--;
					self.character--;
					return self.endval();
				}
			}
		},

		// Ending a value statement
		endval: function(){
			var self = this, peek = '';
			self.commabreak = false;

			for ( ; ++self.i < self.length; ) {
				self.c = self.json[ self.i ];
				self.character++;

				if ( self.options.comments && self.c == '/' ) {
					peek = self.json[ self.i + 1 ];
					if ( peek == '*' ) {
						self.multicomment();
					}
					else if ( peek == '/' ) {
						self.comment();
					}
					else {
						throw "Unknown character '/', maybe a comment?";
					}
				}
				else if ( rnewline.exec( self.c ) ) {
					self.line++;
					self.character = 0;
				}
				else if ( rwhitespace.exec( self.c ) ) {
					continue;
				}
				else if ( self.c == ',' ) {
					self.commabreak = true;
					break;
				}
				else if ( self.c == self.endblock ) {
					return true;
				}
				else {
					throw "Unknown Character '" + self.c + "', expecting a comma or a closing '" + self.endblock + "'";
				}
			}
		},

		// Expose line of the error
		setEvidence: function(){
			var self = this, start = self.line - 5, end = start + 8, evidence = '';

			// Min start
			if ( start < 0 ) {
				start = 0;
				end = 8;
			}

			// Max end
			if ( end >= self._evidence.length ) {
				end = self._evidence.length;
			}

			// Evidence display
			for ( ; start < end; start++ ) {
				evidence += ( start === ( self.line - 1 ) ? "-> " : "   " ) +
					( start + 1 ) + '| ' +
					self._evidence[ start ] + "\n";
			}

			// Set the evidence display
			self.evidence = evidence;
		}
	};


	// Check for nodejs module system
	if ( true ) {
		module.exports = JSONLint;
	}
	// In a browser
	else {
		glob.JSONLint = JSONLint;
	}

	})( this );


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/*global unescape, module, define, window, global*/

	/*
	 UriTemplate Copyright (c) 2012-2013 Franz Antesberger. All Rights Reserved.
	 Available via the MIT license.
	*/

	(function (exportCallback) {
	    "use strict";

	var UriTemplateError = (function () {

	    function UriTemplateError (options) {
	        this.options = options;
	    }

	    UriTemplateError.prototype.toString = function () {
	        if (JSON && JSON.stringify) {
	            return JSON.stringify(this.options);
	        }
	        else {
	            return this.options;
	        }
	    };

	    return UriTemplateError;
	}());

	var objectHelper = (function () {
	    function isArray (value) {
	        return Object.prototype.toString.apply(value) === '[object Array]';
	    }

	    function isString (value) {
	        return Object.prototype.toString.apply(value) === '[object String]';
	    }
	    
	    function isNumber (value) {
	        return Object.prototype.toString.apply(value) === '[object Number]';
	    }
	    
	    function isBoolean (value) {
	        return Object.prototype.toString.apply(value) === '[object Boolean]';
	    }
	    
	    function join (arr, separator) {
	        var
	            result = '',
	            first = true,
	            index;
	        for (index = 0; index < arr.length; index += 1) {
	            if (first) {
	                first = false;
	            }
	            else {
	                result += separator;
	            }
	            result += arr[index];
	        }
	        return result;
	    }

	    function map (arr, mapper) {
	        var
	            result = [],
	            index = 0;
	        for (; index < arr.length; index += 1) {
	            result.push(mapper(arr[index]));
	        }
	        return result;
	    }

	    function filter (arr, predicate) {
	        var
	            result = [],
	            index = 0;
	        for (; index < arr.length; index += 1) {
	            if (predicate(arr[index])) {
	                result.push(arr[index]);
	            }
	        }
	        return result;
	    }

	    function deepFreezeUsingObjectFreeze (object) {
	        if (typeof object !== "object" || object === null) {
	            return object;
	        }
	        Object.freeze(object);
	        var property, propertyName;
	        for (propertyName in object) {
	            if (object.hasOwnProperty(propertyName)) {
	                property = object[propertyName];
	                // be aware, arrays are 'object', too
	                if (typeof property === "object") {
	                    deepFreeze(property);
	                }
	            }
	        }
	        return object;
	    }

	    function deepFreeze (object) {
	        if (typeof Object.freeze === 'function') {
	            return deepFreezeUsingObjectFreeze(object);
	        }
	        return object;
	    }


	    return {
	        isArray: isArray,
	        isString: isString,
	        isNumber: isNumber,
	        isBoolean: isBoolean,
	        join: join,
	        map: map,
	        filter: filter,
	        deepFreeze: deepFreeze
	    };
	}());

	var charHelper = (function () {

	    function isAlpha (chr) {
	        return (chr >= 'a' && chr <= 'z') || ((chr >= 'A' && chr <= 'Z'));
	    }

	    function isDigit (chr) {
	        return chr >= '0' && chr <= '9';
	    }

	    function isHexDigit (chr) {
	        return isDigit(chr) || (chr >= 'a' && chr <= 'f') || (chr >= 'A' && chr <= 'F');
	    }

	    return {
	        isAlpha: isAlpha,
	        isDigit: isDigit,
	        isHexDigit: isHexDigit
	    };
	}());

	var pctEncoder = (function () {
	    var utf8 = {
	        encode: function (chr) {
	            // see http://ecmanaut.blogspot.de/2006/07/encoding-decoding-utf8-in-javascript.html
	            return unescape(encodeURIComponent(chr));
	        },
	        numBytes: function (firstCharCode) {
	            if (firstCharCode <= 0x7F) {
	                return 1;
	            }
	            else if (0xC2 <= firstCharCode && firstCharCode <= 0xDF) {
	                return 2;
	            }
	            else if (0xE0 <= firstCharCode && firstCharCode <= 0xEF) {
	                return 3;
	            }
	            else if (0xF0 <= firstCharCode && firstCharCode <= 0xF4) {
	                return 4;
	            }
	            // no valid first octet
	            return 0;
	        },
	        isValidFollowingCharCode: function (charCode) {
	            return 0x80 <= charCode && charCode <= 0xBF;
	        }
	    };

	    /**
	     * encodes a character, if needed or not.
	     * @param chr
	     * @return pct-encoded character
	     */
	    function encodeCharacter (chr) {
	        var
	            result = '',
	            octets = utf8.encode(chr),
	            octet,
	            index;
	        for (index = 0; index < octets.length; index += 1) {
	            octet = octets.charCodeAt(index);
	            result += '%' + (octet < 0x10 ? '0' : '') + octet.toString(16).toUpperCase();
	        }
	        return result;
	    }

	    /**
	     * Returns, whether the given text at start is in the form 'percent hex-digit hex-digit', like '%3F'
	     * @param text
	     * @param start
	     * @return {boolean|*|*}
	     */
	    function isPercentDigitDigit (text, start) {
	        return text.charAt(start) === '%' && charHelper.isHexDigit(text.charAt(start + 1)) && charHelper.isHexDigit(text.charAt(start + 2));
	    }

	    /**
	     * Parses a hex number from start with length 2.
	     * @param text a string
	     * @param start the start index of the 2-digit hex number
	     * @return {Number}
	     */
	    function parseHex2 (text, start) {
	        return parseInt(text.substr(start, 2), 16);
	    }

	    /**
	     * Returns whether or not the given char sequence is a correctly pct-encoded sequence.
	     * @param chr
	     * @return {boolean}
	     */
	    function isPctEncoded (chr) {
	        if (!isPercentDigitDigit(chr, 0)) {
	            return false;
	        }
	        var firstCharCode = parseHex2(chr, 1);
	        var numBytes = utf8.numBytes(firstCharCode);
	        if (numBytes === 0) {
	            return false;
	        }
	        for (var byteNumber = 1; byteNumber < numBytes; byteNumber += 1) {
	            if (!isPercentDigitDigit(chr, 3*byteNumber) || !utf8.isValidFollowingCharCode(parseHex2(chr, 3*byteNumber + 1))) {
	                return false;
	            }
	        }
	        return true;
	    }

	    /**
	     * Reads as much as needed from the text, e.g. '%20' or '%C3%B6'. It does not decode!
	     * @param text
	     * @param startIndex
	     * @return the character or pct-string of the text at startIndex
	     */
	    function pctCharAt(text, startIndex) {
	        var chr = text.charAt(startIndex);
	        if (!isPercentDigitDigit(text, startIndex)) {
	            return chr;
	        }
	        var utf8CharCode = parseHex2(text, startIndex + 1);
	        var numBytes = utf8.numBytes(utf8CharCode);
	        if (numBytes === 0) {
	            return chr;
	        }
	        for (var byteNumber = 1; byteNumber < numBytes; byteNumber += 1) {
	            if (!isPercentDigitDigit(text, startIndex + 3 * byteNumber) || !utf8.isValidFollowingCharCode(parseHex2(text, startIndex + 3 * byteNumber + 1))) {
	                return chr;
	            }
	        }
	        return text.substr(startIndex, 3 * numBytes);
	    }

	    return {
	        encodeCharacter: encodeCharacter,
	        isPctEncoded: isPctEncoded,
	        pctCharAt: pctCharAt
	    };
	}());

	var rfcCharHelper = (function () {

	    /**
	     * Returns if an character is an varchar character according 2.3 of rfc 6570
	     * @param chr
	     * @return (Boolean)
	     */
	    function isVarchar (chr) {
	        return charHelper.isAlpha(chr) || charHelper.isDigit(chr) || chr === '_' || pctEncoder.isPctEncoded(chr);
	    }

	    /**
	     * Returns if chr is an unreserved character according 1.5 of rfc 6570
	     * @param chr
	     * @return {Boolean}
	     */
	    function isUnreserved (chr) {
	        return charHelper.isAlpha(chr) || charHelper.isDigit(chr) || chr === '-' || chr === '.' || chr === '_' || chr === '~';
	    }

	    /**
	     * Returns if chr is an reserved character according 1.5 of rfc 6570
	     * or the percent character mentioned in 3.2.1.
	     * @param chr
	     * @return {Boolean}
	     */
	    function isReserved (chr) {
	        return chr === ':' || chr === '/' || chr === '?' || chr === '#' || chr === '[' || chr === ']' || chr === '@' || chr === '!' || chr === '$' || chr === '&' || chr === '(' ||
	            chr === ')' || chr === '*' || chr === '+' || chr === ',' || chr === ';' || chr === '=' || chr === "'";
	    }

	    return {
	        isVarchar: isVarchar,
	        isUnreserved: isUnreserved,
	        isReserved: isReserved
	    };

	}());

	/**
	 * encoding of rfc 6570
	 */
	var encodingHelper = (function () {

	    function encode (text, passReserved) {
	        var
	            result = '',
	            index,
	            chr = '';
	        if (typeof text === "number" || typeof text === "boolean") {
	            text = text.toString();
	        }
	        for (index = 0; index < text.length; index += chr.length) {
	            chr = text.charAt(index);
	            result += rfcCharHelper.isUnreserved(chr) || (passReserved && rfcCharHelper.isReserved(chr)) ? chr : pctEncoder.encodeCharacter(chr);
	        }
	        return result;
	    }

	    function encodePassReserved (text) {
	        return encode(text, true);
	    }

	    function encodeLiteralCharacter (literal, index) {
	        var chr = pctEncoder.pctCharAt(literal, index);
	        if (chr.length > 1) {
	            return chr;
	        }
	        else {
	            return rfcCharHelper.isReserved(chr) || rfcCharHelper.isUnreserved(chr) ? chr : pctEncoder.encodeCharacter(chr);
	        }
	    }

	    function encodeLiteral (literal) {
	        var
	            result = '',
	            index,
	            chr = '';
	        for (index = 0; index < literal.length; index += chr.length) {
	            chr = pctEncoder.pctCharAt(literal, index);
	            if (chr.length > 1) {
	                result += chr;
	            }
	            else {
	                result += rfcCharHelper.isReserved(chr) || rfcCharHelper.isUnreserved(chr) ? chr : pctEncoder.encodeCharacter(chr);
	            }
	        }
	        return result;
	    }

	    return {
	        encode: encode,
	        encodePassReserved: encodePassReserved,
	        encodeLiteral: encodeLiteral,
	        encodeLiteralCharacter: encodeLiteralCharacter
	    };

	}());


	// the operators defined by rfc 6570
	var operators = (function () {

	    var
	        bySymbol = {};

	    function create (symbol) {
	        bySymbol[symbol] = {
	            symbol: symbol,
	            separator: (symbol === '?') ? '&' : (symbol === '' || symbol === '+' || symbol === '#') ? ',' : symbol,
	            named: symbol === ';' || symbol === '&' || symbol === '?',
	            ifEmpty: (symbol === '&' || symbol === '?') ? '=' : '',
	            first: (symbol === '+' ) ? '' : symbol,
	            encode: (symbol === '+' || symbol === '#') ? encodingHelper.encodePassReserved : encodingHelper.encode,
	            toString: function () {
	                return this.symbol;
	            }
	        };
	    }

	    create('');
	    create('+');
	    create('#');
	    create('.');
	    create('/');
	    create(';');
	    create('?');
	    create('&');
	    return {
	        valueOf: function (chr) {
	            if (bySymbol[chr]) {
	                return bySymbol[chr];
	            }
	            if ("=,!@|".indexOf(chr) >= 0) {
	                return null;
	            }
	            return bySymbol[''];
	        }
	    };
	}());


	/**
	 * Detects, whether a given element is defined in the sense of rfc 6570
	 * Section 2.3 of the RFC makes clear defintions:
	 * * undefined and null are not defined.
	 * * the empty string is defined
	 * * an array ("list") is defined, if it is not empty (even if all elements are not defined)
	 * * an object ("map") is defined, if it contains at least one property with defined value
	 * @param object
	 * @return {Boolean}
	 */
	function isDefined (object) {
	    var
	        propertyName;
	    if (object === null || object === undefined) {
	        return false;
	    }
	    if (objectHelper.isArray(object)) {
	        // Section 2.3: A variable defined as a list value is considered undefined if the list contains zero members
	        return object.length > 0;
	    }
	    if (typeof object === "string" || typeof object === "number" || typeof object === "boolean") {
	        // falsy values like empty strings, false or 0 are "defined"
	        return true;
	    }
	    // else Object
	    for (propertyName in object) {
	        if (object.hasOwnProperty(propertyName) && isDefined(object[propertyName])) {
	            return true;
	        }
	    }
	    return false;
	}

	var LiteralExpression = (function () {
	    function LiteralExpression (literal) {
	        this.literal = encodingHelper.encodeLiteral(literal);
	    }

	    LiteralExpression.prototype.expand = function () {
	        return this.literal;
	    };

	    LiteralExpression.prototype.toString = LiteralExpression.prototype.expand;

	    return LiteralExpression;
	}());

	var parse = (function () {

	    function parseExpression (expressionText) {
	        var
	            operator,
	            varspecs = [],
	            varspec = null,
	            varnameStart = null,
	            maxLengthStart = null,
	            index,
	            chr = '';

	        function closeVarname () {
	            var varname = expressionText.substring(varnameStart, index);
	            if (varname.length === 0) {
	                throw new UriTemplateError({expressionText: expressionText, message: "a varname must be specified", position: index});
	            }
	            varspec = {varname: varname, exploded: false, maxLength: null};
	            varnameStart = null;
	        }

	        function closeMaxLength () {
	            if (maxLengthStart === index) {
	                throw new UriTemplateError({expressionText: expressionText, message: "after a ':' you have to specify the length", position: index});
	            }
	            varspec.maxLength = parseInt(expressionText.substring(maxLengthStart, index), 10);
	            maxLengthStart = null;
	        }

	        operator = (function (operatorText) {
	            var op = operators.valueOf(operatorText);
	            if (op === null) {
	                throw new UriTemplateError({expressionText: expressionText, message: "illegal use of reserved operator", position: index, operator: operatorText});
	            }
	            return op;
	        }(expressionText.charAt(0)));
	        index = operator.symbol.length;

	        varnameStart = index;

	        for (; index < expressionText.length; index += chr.length) {
	            chr = pctEncoder.pctCharAt(expressionText, index);

	            if (varnameStart !== null) {
	                // the spec says: varname =  varchar *( ["."] varchar )
	                // so a dot is allowed except for the first char
	                if (chr === '.') {
	                    if (varnameStart === index) {
	                        throw new UriTemplateError({expressionText: expressionText, message: "a varname MUST NOT start with a dot", position: index});
	                    }
	                    continue;
	                }
	                if (rfcCharHelper.isVarchar(chr)) {
	                    continue;
	                }
	                closeVarname();
	            }
	            if (maxLengthStart !== null) {
	                if (index === maxLengthStart && chr === '0') {
	                    throw new UriTemplateError({expressionText: expressionText, message: "A :prefix must not start with digit 0", position: index});
	                }
	                if (charHelper.isDigit(chr)) {
	                    if (index - maxLengthStart >= 4) {
	                        throw new UriTemplateError({expressionText: expressionText, message: "A :prefix must have max 4 digits", position: index});
	                    }
	                    continue;
	                }
	                closeMaxLength();
	            }
	            if (chr === ':') {
	                if (varspec.maxLength !== null) {
	                    throw new UriTemplateError({expressionText: expressionText, message: "only one :maxLength is allowed per varspec", position: index});
	                }
	                if (varspec.exploded) {
	                    throw new UriTemplateError({expressionText: expressionText, message: "an exploeded varspec MUST NOT be varspeced", position: index});
	                }
	                maxLengthStart = index + 1;
	                continue;
	            }
	            if (chr === '*') {
	                if (varspec === null) {
	                    throw new UriTemplateError({expressionText: expressionText, message: "exploded without varspec", position: index});
	                }
	                if (varspec.exploded) {
	                    throw new UriTemplateError({expressionText: expressionText, message: "exploded twice", position: index});
	                }
	                if (varspec.maxLength) {
	                    throw new UriTemplateError({expressionText: expressionText, message: "an explode (*) MUST NOT follow to a prefix", position: index});
	                }
	                varspec.exploded = true;
	                continue;
	            }
	            // the only legal character now is the comma
	            if (chr === ',') {
	                varspecs.push(varspec);
	                varspec = null;
	                varnameStart = index + 1;
	                continue;
	            }
	            throw new UriTemplateError({expressionText: expressionText, message: "illegal character", character: chr, position: index});
	        } // for chr
	        if (varnameStart !== null) {
	            closeVarname();
	        }
	        if (maxLengthStart !== null) {
	            closeMaxLength();
	        }
	        varspecs.push(varspec);
	        return new VariableExpression(expressionText, operator, varspecs);
	    }

	    function parse (uriTemplateText) {
	        // assert filled string
	        var
	            index,
	            chr,
	            expressions = [],
	            braceOpenIndex = null,
	            literalStart = 0;
	        for (index = 0; index < uriTemplateText.length; index += 1) {
	            chr = uriTemplateText.charAt(index);
	            if (literalStart !== null) {
	                if (chr === '}') {
	                    throw new UriTemplateError({templateText: uriTemplateText, message: "unopened brace closed", position: index});
	                }
	                if (chr === '{') {
	                    if (literalStart < index) {
	                        expressions.push(new LiteralExpression(uriTemplateText.substring(literalStart, index)));
	                    }
	                    literalStart = null;
	                    braceOpenIndex = index;
	                }
	                continue;
	            }

	            if (braceOpenIndex !== null) {
	                // here just { is forbidden
	                if (chr === '{') {
	                    throw new UriTemplateError({templateText: uriTemplateText, message: "brace already opened", position: index});
	                }
	                if (chr === '}') {
	                    if (braceOpenIndex + 1 === index) {
	                        throw new UriTemplateError({templateText: uriTemplateText, message: "empty braces", position: braceOpenIndex});
	                    }
	                    try {
	                        expressions.push(parseExpression(uriTemplateText.substring(braceOpenIndex + 1, index)));
	                    }
	                    catch (error) {
	                        if (error.prototype === UriTemplateError.prototype) {
	                            throw new UriTemplateError({templateText: uriTemplateText, message: error.options.message, position: braceOpenIndex + error.options.position, details: error.options});
	                        }
	                        throw error;
	                    }
	                    braceOpenIndex = null;
	                    literalStart = index + 1;
	                }
	                continue;
	            }
	            throw new Error('reached unreachable code');
	        }
	        if (braceOpenIndex !== null) {
	            throw new UriTemplateError({templateText: uriTemplateText, message: "unclosed brace", position: braceOpenIndex});
	        }
	        if (literalStart < uriTemplateText.length) {
	            expressions.push(new LiteralExpression(uriTemplateText.substr(literalStart)));
	        }
	        return new UriTemplate(uriTemplateText, expressions);
	    }

	    return parse;
	}());

	var VariableExpression = (function () {
	    // helper function if JSON is not available
	    function prettyPrint (value) {
	        return (JSON && JSON.stringify) ? JSON.stringify(value) : value;
	    }

	    function isEmpty (value) {
	        if (!isDefined(value)) {
	            return true;
	        }
	        if (objectHelper.isString(value)) {
	            return value === '';
	        }
	        if (objectHelper.isNumber(value) || objectHelper.isBoolean(value)) {
	            return false;
	        }
	        if (objectHelper.isArray(value)) {
	            return value.length === 0;
	        }
	        for (var propertyName in value) {
	            if (value.hasOwnProperty(propertyName)) {
	                return false;
	            }
	        }
	        return true;
	    }

	    function propertyArray (object) {
	        var
	            result = [],
	            propertyName;
	        for (propertyName in object) {
	            if (object.hasOwnProperty(propertyName)) {
	                result.push({name: propertyName, value: object[propertyName]});
	            }
	        }
	        return result;
	    }

	    function VariableExpression (templateText, operator, varspecs) {
	        this.templateText = templateText;
	        this.operator = operator;
	        this.varspecs = varspecs;
	    }

	    VariableExpression.prototype.toString = function () {
	        return this.templateText;
	    };

	    function expandSimpleValue(varspec, operator, value) {
	        var result = '';
	        value = value.toString();
	        if (operator.named) {
	            result += encodingHelper.encodeLiteral(varspec.varname);
	            if (value === '') {
	                result += operator.ifEmpty;
	                return result;
	            }
	            result += '=';
	        }
	        if (varspec.maxLength !== null) {
	            value = value.substr(0, varspec.maxLength);
	        }
	        result += operator.encode(value);
	        return result;
	    }

	    function valueDefined (nameValue) {
	        return isDefined(nameValue.value);
	    }

	    function expandNotExploded(varspec, operator, value) {
	        var
	            arr = [],
	            result = '';
	        if (operator.named) {
	            result += encodingHelper.encodeLiteral(varspec.varname);
	            if (isEmpty(value)) {
	                result += operator.ifEmpty;
	                return result;
	            }
	            result += '=';
	        }
	        if (objectHelper.isArray(value)) {
	            arr = value;
	            arr = objectHelper.filter(arr, isDefined);
	            arr = objectHelper.map(arr, operator.encode);
	            result += objectHelper.join(arr, ',');
	        }
	        else {
	            arr = propertyArray(value);
	            arr = objectHelper.filter(arr, valueDefined);
	            arr = objectHelper.map(arr, function (nameValue) {
	                return operator.encode(nameValue.name) + ',' + operator.encode(nameValue.value);
	            });
	            result += objectHelper.join(arr, ',');
	        }
	        return result;
	    }

	    function expandExplodedNamed (varspec, operator, value) {
	        var
	            isArray = objectHelper.isArray(value),
	            arr = [];
	        if (isArray) {
	            arr = value;
	            arr = objectHelper.filter(arr, isDefined);
	            arr = objectHelper.map(arr, function (listElement) {
	                var tmp = encodingHelper.encodeLiteral(varspec.varname);
	                if (isEmpty(listElement)) {
	                    tmp += operator.ifEmpty;
	                }
	                else {
	                    tmp += '=' + operator.encode(listElement);
	                }
	                return tmp;
	            });
	        }
	        else {
	            arr = propertyArray(value);
	            arr = objectHelper.filter(arr, valueDefined);
	            arr = objectHelper.map(arr, function (nameValue) {
	                var tmp = encodingHelper.encodeLiteral(nameValue.name);
	                if (isEmpty(nameValue.value)) {
	                    tmp += operator.ifEmpty;
	                }
	                else {
	                    tmp += '=' + operator.encode(nameValue.value);
	                }
	                return tmp;
	            });
	        }
	        return objectHelper.join(arr, operator.separator);
	    }

	    function expandExplodedUnnamed (operator, value) {
	        var
	            arr = [],
	            result = '';
	        if (objectHelper.isArray(value)) {
	            arr = value;
	            arr = objectHelper.filter(arr, isDefined);
	            arr = objectHelper.map(arr, operator.encode);
	            result += objectHelper.join(arr, operator.separator);
	        }
	        else {
	            arr = propertyArray(value);
	            arr = objectHelper.filter(arr, function (nameValue) {
	                return isDefined(nameValue.value);
	            });
	            arr = objectHelper.map(arr, function (nameValue) {
	                return operator.encode(nameValue.name) + '=' + operator.encode(nameValue.value);
	            });
	            result += objectHelper.join(arr, operator.separator);
	        }
	        return result;
	    }


	    VariableExpression.prototype.expand = function (variables) {
	        var
	            expanded = [],
	            index,
	            varspec,
	            value,
	            valueIsArr,
	            oneExploded = false,
	            operator = this.operator;

	        // expand each varspec and join with operator's separator
	        for (index = 0; index < this.varspecs.length; index += 1) {
	            varspec = this.varspecs[index];
	            value = variables[varspec.varname];
	            // if (!isDefined(value)) {
	            // if (variables.hasOwnProperty(varspec.name)) {
	            if (value === null || value === undefined) {
	                continue;
	            }
	            if (varspec.exploded) {
	                oneExploded = true;
	            }
	            valueIsArr = objectHelper.isArray(value);
	            if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
	                expanded.push(expandSimpleValue(varspec, operator, value));
	            }
	            else if (varspec.maxLength && isDefined(value)) {
	                // 2.4.1 of the spec says: "Prefix modifiers are not applicable to variables that have composite values."
	                throw new Error('Prefix modifiers are not applicable to variables that have composite values. You tried to expand ' + this + " with " + prettyPrint(value));
	            }
	            else if (!varspec.exploded) {
	                if (operator.named || !isEmpty(value)) {
	                    expanded.push(expandNotExploded(varspec, operator, value));
	                }
	            }
	            else if (isDefined(value)) {
	                if (operator.named) {
	                    expanded.push(expandExplodedNamed(varspec, operator, value));
	                }
	                else {
	                    expanded.push(expandExplodedUnnamed(operator, value));
	                }
	            }
	        }

	        if (expanded.length === 0) {
	            return "";
	        }
	        else {
	            return operator.first + objectHelper.join(expanded, operator.separator);
	        }
	    };

	    return VariableExpression;
	}());

	var UriTemplate = (function () {
	    function UriTemplate (templateText, expressions) {
	        this.templateText = templateText;
	        this.expressions = expressions;
	        objectHelper.deepFreeze(this);
	    }

	    UriTemplate.prototype.toString = function () {
	        return this.templateText;
	    };

	    UriTemplate.prototype.expand = function (variables) {
	        // this.expressions.map(function (expression) {return expression.expand(variables);}).join('');
	        var
	            index,
	            result = '';
	        for (index = 0; index < this.expressions.length; index += 1) {
	            result += this.expressions[index].expand(variables);
	        }
	        return result;
	    };

	    UriTemplate.parse = parse;
	    UriTemplate.UriTemplateError = UriTemplateError;
	    return UriTemplate;
	}());

	    exportCallback(UriTemplate);

	}(function (UriTemplate) {
	        "use strict";
	        // export UriTemplate, when module is present, or pass it to window or global
	        if (true) {
	            module.exports = UriTemplate;
	        }
	        else if (typeof define === "function") {
	            define([],function() {
	                return UriTemplate;
	            });
	        }
	        else if (typeof window !== "undefined") {
	            window.UriTemplate = UriTemplate;
	        }
	        else {
	            global.UriTemplate = UriTemplate;
	        }
	    }
	));


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * inflection
	 * Copyright(c) 2011 Ben Lin <ben@dreamerslab.com>
	 * MIT Licensed
	 *
	 * @fileoverview
	 * A port of inflection-js to node.js module.
	 */

	( function ( root, factory ){
	  if( true ){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (factory.apply(null, __WEBPACK_AMD_DEFINE_ARRAY__)), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }else if( typeof exports === 'object' ){
	    module.exports = factory();
	  }else{
	    root.inflection = factory();
	  }
	}( this, function (){

	  /**
	   * @description This is a list of nouns that use the same form for both singular and plural.
	   *              This list should remain entirely in lower case to correctly match Strings.
	   * @private
	   */
	  var uncountable_words = [
	    'equipment', 'information', 'rice', 'money', 'species',
	    'series', 'fish', 'sheep', 'moose', 'deer', 'news'
	  ];

	  /**
	   * @description These rules translate from the singular form of a noun to its plural form.
	   * @private
	   */
	  var plural_rules = [

	    // do not replace if its already a plural word
	    [ new RegExp( '(m)en$',      'gi' )],
	    [ new RegExp( '(pe)ople$',   'gi' )],
	    [ new RegExp( '(child)ren$', 'gi' )],
	    [ new RegExp( '([ti])a$',    'gi' )],
	    [ new RegExp( '((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$','gi' )],
	    [ new RegExp( '(hive)s$',           'gi' )],
	    [ new RegExp( '(tive)s$',           'gi' )],
	    [ new RegExp( '(curve)s$',          'gi' )],
	    [ new RegExp( '([lr])ves$',         'gi' )],
	    [ new RegExp( '([^fo])ves$',        'gi' )],
	    [ new RegExp( '([^aeiouy]|qu)ies$', 'gi' )],
	    [ new RegExp( '(s)eries$',          'gi' )],
	    [ new RegExp( '(m)ovies$',          'gi' )],
	    [ new RegExp( '(x|ch|ss|sh)es$',    'gi' )],
	    [ new RegExp( '([m|l])ice$',        'gi' )],
	    [ new RegExp( '(bus)es$',           'gi' )],
	    [ new RegExp( '(o)es$',             'gi' )],
	    [ new RegExp( '(shoe)s$',           'gi' )],
	    [ new RegExp( '(cris|ax|test)es$',  'gi' )],
	    [ new RegExp( '(octop|vir)i$',      'gi' )],
	    [ new RegExp( '(alias|status)es$',  'gi' )],
	    [ new RegExp( '^(ox)en',            'gi' )],
	    [ new RegExp( '(vert|ind)ices$',    'gi' )],
	    [ new RegExp( '(matr)ices$',        'gi' )],
	    [ new RegExp( '(quiz)zes$',         'gi' )],

	    // original rule
	    [ new RegExp( '(m)an$', 'gi' ),                 '$1en' ],
	    [ new RegExp( '(pe)rson$', 'gi' ),              '$1ople' ],
	    [ new RegExp( '(child)$', 'gi' ),               '$1ren' ],
	    [ new RegExp( '^(ox)$', 'gi' ),                 '$1en' ],
	    [ new RegExp( '(ax|test)is$', 'gi' ),           '$1es' ],
	    [ new RegExp( '(octop|vir)us$', 'gi' ),         '$1i' ],
	    [ new RegExp( '(alias|status)$', 'gi' ),        '$1es' ],
	    [ new RegExp( '(bu)s$', 'gi' ),                 '$1ses' ],
	    [ new RegExp( '(buffal|tomat|potat)o$', 'gi' ), '$1oes' ],
	    [ new RegExp( '([ti])um$', 'gi' ),              '$1a' ],
	    [ new RegExp( 'sis$', 'gi' ),                   'ses' ],
	    [ new RegExp( '(?:([^f])fe|([lr])f)$', 'gi' ),  '$1$2ves' ],
	    [ new RegExp( '(hive)$', 'gi' ),                '$1s' ],
	    [ new RegExp( '([^aeiouy]|qu)y$', 'gi' ),       '$1ies' ],
	    [ new RegExp( '(x|ch|ss|sh)$', 'gi' ),          '$1es' ],
	    [ new RegExp( '(matr|vert|ind)ix|ex$', 'gi' ),  '$1ices' ],
	    [ new RegExp( '([m|l])ouse$', 'gi' ),           '$1ice' ],
	    [ new RegExp( '(quiz)$', 'gi' ),                '$1zes' ],

	    [ new RegExp( 's$', 'gi' ), 's' ],
	    [ new RegExp( '$', 'gi' ),  's' ]
	  ];

	  /**
	   * @description These rules translate from the plural form of a noun to its singular form.
	   * @private
	   */
	  var singular_rules = [

	    // do not replace if its already a singular word
	    [ new RegExp( '(m)an$',                 'gi' )],
	    [ new RegExp( '(pe)rson$',              'gi' )],
	    [ new RegExp( '(child)$',               'gi' )],
	    [ new RegExp( '^(ox)$',                 'gi' )],
	    [ new RegExp( '(ax|test)is$',           'gi' )],
	    [ new RegExp( '(octop|vir)us$',         'gi' )],
	    [ new RegExp( '(alias|status)$',        'gi' )],
	    [ new RegExp( '(bu)s$',                 'gi' )],
	    [ new RegExp( '(buffal|tomat|potat)o$', 'gi' )],
	    [ new RegExp( '([ti])um$',              'gi' )],
	    [ new RegExp( 'sis$',                   'gi' )],
	    [ new RegExp( '(?:([^f])fe|([lr])f)$',  'gi' )],
	    [ new RegExp( '(hive)$',                'gi' )],
	    [ new RegExp( '([^aeiouy]|qu)y$',       'gi' )],
	    [ new RegExp( '(x|ch|ss|sh)$',          'gi' )],
	    [ new RegExp( '(matr|vert|ind)ix|ex$',  'gi' )],
	    [ new RegExp( '([m|l])ouse$',           'gi' )],
	    [ new RegExp( '(quiz)$',                'gi' )],

	    // original rule
	    [ new RegExp( '(m)en$', 'gi' ),                                                       '$1an' ],
	    [ new RegExp( '(pe)ople$', 'gi' ),                                                    '$1rson' ],
	    [ new RegExp( '(child)ren$', 'gi' ),                                                  '$1' ],
	    [ new RegExp( '([ti])a$', 'gi' ),                                                     '$1um' ],
	    [ new RegExp( '((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$','gi' ), '$1$2sis' ],
	    [ new RegExp( '(hive)s$', 'gi' ),                                                     '$1' ],
	    [ new RegExp( '(tive)s$', 'gi' ),                                                     '$1' ],
	    [ new RegExp( '(curve)s$', 'gi' ),                                                    '$1' ],
	    [ new RegExp( '([lr])ves$', 'gi' ),                                                   '$1f' ],
	    [ new RegExp( '([^fo])ves$', 'gi' ),                                                  '$1fe' ],
	    [ new RegExp( '(m)ovies$', 'gi' ),                                                    '$1ovie' ],
	    [ new RegExp( '([^aeiouy]|qu)ies$', 'gi' ),                                           '$1y' ],
	    [ new RegExp( '(s)eries$', 'gi' ),                                                    '$1eries' ],
	    [ new RegExp( '(x|ch|ss|sh)es$', 'gi' ),                                              '$1' ],
	    [ new RegExp( '([m|l])ice$', 'gi' ),                                                  '$1ouse' ],
	    [ new RegExp( '(bus)es$', 'gi' ),                                                     '$1' ],
	    [ new RegExp( '(o)es$', 'gi' ),                                                       '$1' ],
	    [ new RegExp( '(shoe)s$', 'gi' ),                                                     '$1' ],
	    [ new RegExp( '(cris|ax|test)es$', 'gi' ),                                            '$1is' ],
	    [ new RegExp( '(octop|vir)i$', 'gi' ),                                                '$1us' ],
	    [ new RegExp( '(alias|status)es$', 'gi' ),                                            '$1' ],
	    [ new RegExp( '^(ox)en', 'gi' ),                                                      '$1' ],
	    [ new RegExp( '(vert|ind)ices$', 'gi' ),                                              '$1ex' ],
	    [ new RegExp( '(matr)ices$', 'gi' ),                                                  '$1ix' ],
	    [ new RegExp( '(quiz)zes$', 'gi' ),                                                   '$1' ],
	    [ new RegExp( 'ss$', 'gi' ),                                                          'ss' ],
	    [ new RegExp( 's$', 'gi' ),                                                           '' ]
	  ];

	  /**
	   * @description This is a list of words that should not be capitalized for title case.
	   * @private
	   */
	  var non_titlecased_words = [
	    'and', 'or', 'nor', 'a', 'an', 'the', 'so', 'but', 'to', 'of', 'at','by',
	    'from', 'into', 'on', 'onto', 'off', 'out', 'in', 'over', 'with', 'for'
	  ];

	  /**
	   * @description These are regular expressions used for converting between String formats.
	   * @private
	   */
	  var id_suffix         = new RegExp( '(_ids|_id)$', 'g' );
	  var underbar          = new RegExp( '_', 'g' );
	  var space_or_underbar = new RegExp( '[\ _]', 'g' );
	  var uppercase         = new RegExp( '([A-Z])', 'g' );
	  var underbar_prefix   = new RegExp( '^_' );

	  var inflector = {

	  /**
	   * A helper method that applies rules based replacement to a String.
	   * @private
	   * @function
	   * @param {String} str String to modify and return based on the passed rules.
	   * @param {Array: [RegExp, String]} rules Regexp to match paired with String to use for replacement
	   * @param {Array: [String]} skip Strings to skip if they match
	   * @param {String} override String to return as though this method succeeded (used to conform to APIs)
	   * @returns {String} Return passed String modified by passed rules.
	   * @example
	   *
	   *     this._apply_rules( 'cows', singular_rules ); // === 'cow'
	   */
	    _apply_rules : function ( str, rules, skip, override ){
	      if( override ){
	        str = override;
	      }else{
	        var ignore = ( inflector.indexOf( skip, str.toLowerCase()) > -1 );

	        if( !ignore ){
	          var i = 0;
	          var j = rules.length;

	          for( ; i < j; i++ ){
	            if( str.match( rules[ i ][ 0 ])){
	              if( rules[ i ][ 1 ] !== undefined ){
	                str = str.replace( rules[ i ][ 0 ], rules[ i ][ 1 ]);
	              }
	              break;
	            }
	          }
	        }
	      }

	      return str;
	    },



	  /**
	   * This lets us detect if an Array contains a given element.
	   * @public
	   * @function
	   * @param {Array} arr The subject array.
	   * @param {Object} item Object to locate in the Array.
	   * @param {Number} from_index Starts checking from this position in the Array.(optional)
	   * @param {Function} compare_func Function used to compare Array item vs passed item.(optional)
	   * @returns {Number} Return index position in the Array of the passed item.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.indexOf([ 'hi','there' ], 'guys' ); // === -1
	   *     inflection.indexOf([ 'hi','there' ], 'hi' ); // === 0
	   */
	    indexOf : function ( arr, item, from_index, compare_func ){
	      if( !from_index ){
	        from_index = -1;
	      }

	      var index = -1;
	      var i     = from_index;
	      var j     = arr.length;

	      for( ; i < j; i++ ){
	        if( arr[ i ]  === item || compare_func && compare_func( arr[ i ], item )){
	          index = i;
	          break;
	        }
	      }

	      return index;
	    },



	  /**
	   * This function adds pluralization support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @param {String} plural Overrides normal output with said String.(optional)
	   * @returns {String} Singular English language nouns are returned in plural form.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.pluralize( 'person' ); // === 'people'
	   *     inflection.pluralize( 'octopus' ); // === 'octopi'
	   *     inflection.pluralize( 'Hat' ); // === 'Hats'
	   *     inflection.pluralize( 'person', 'guys' ); // === 'guys'
	   */
	    pluralize : function ( str, plural ){
	      return inflector._apply_rules( str, plural_rules, uncountable_words, plural );
	    },



	  /**
	   * This function adds singularization support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @param {String} singular Overrides normal output with said String.(optional)
	   * @returns {String} Plural English language nouns are returned in singular form.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.singularize( 'people' ); // === 'person'
	   *     inflection.singularize( 'octopi' ); // === 'octopus'
	   *     inflection.singularize( 'Hats' ); // === 'Hat'
	   *     inflection.singularize( 'guys', 'person' ); // === 'person'
	   */
	    singularize : function ( str, singular ){
	      return inflector._apply_rules( str, singular_rules, uncountable_words, singular );
	    },



	  /**
	   * This function adds camelization support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @param {Boolean} low_first_letter Default is to capitalize the first letter of the results.(optional)
	   *                                 Passing true will lowercase it.
	   * @returns {String} Lower case underscored words will be returned in camel case.
	   *                  additionally '/' is translated to '::'
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.camelize( 'message_properties' ); // === 'MessageProperties'
	   *     inflection.camelize( 'message_properties', true ); // === 'messageProperties'
	   */
	    camelize : function ( str, low_first_letter ){
	      var str_path = str.split( '/' );
	      var i        = 0;
	      var j        = str_path.length;
	      var str_arr, init_x, k, l, first;

	      for( ; i < j; i++ ){
	        str_arr = str_path[ i ].split( '_' );
	        k       = 0;
	        l       = str_arr.length;

	        for( ; k < l; k++ ){
	          if( k !== 0 ){
	            str_arr[ k ] = str_arr[ k ].toLowerCase();
	          }

	          first = str_arr[ k ].charAt( 0 );
	          first = low_first_letter && i === 0 && k === 0
	            ? first.toLowerCase() : first.toUpperCase();
	          str_arr[ k ] = first + str_arr[ k ].substring( 1 );
	        }

	        str_path[ i ] = str_arr.join( '' );
	      }

	      return str_path.join( '::' );
	    },



	  /**
	   * This function adds underscore support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @param {Boolean} all_upper_case Default is to lowercase and add underscore prefix.(optional)
	   *                  Passing true will return as entered.
	   * @returns {String} Camel cased words are returned as lower cased and underscored.
	   *                  additionally '::' is translated to '/'.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.underscore( 'MessageProperties' ); // === 'message_properties'
	   *     inflection.underscore( 'messageProperties' ); // === 'message_properties'
	   *     inflection.underscore( 'MP', true ); // === 'MP'
	   */
	    underscore : function ( str, all_upper_case ){
	      if( all_upper_case && str === str.toUpperCase()) return str;

	      var str_path = str.split( '::' );
	      var i        = 0;
	      var j        = str_path.length;

	      for( ; i < j; i++ ){
	        str_path[ i ] = str_path[ i ].replace( uppercase, '_$1' );
	        str_path[ i ] = str_path[ i ].replace( underbar_prefix, '' );
	      }

	      return str_path.join( '/' ).toLowerCase();
	    },



	  /**
	   * This function adds humanize support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @param {Boolean} low_first_letter Default is to capitalize the first letter of the results.(optional)
	   *                                 Passing true will lowercase it.
	   * @returns {String} Lower case underscored words will be returned in humanized form.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.humanize( 'message_properties' ); // === 'Message properties'
	   *     inflection.humanize( 'message_properties', true ); // === 'message properties'
	   */
	    humanize : function ( str, low_first_letter ){
	      str = str.toLowerCase();
	      str = str.replace( id_suffix, '' );
	      str = str.replace( underbar, ' ' );

	      if( !low_first_letter ){
	        str = inflector.capitalize( str );
	      }

	      return str;
	    },



	  /**
	   * This function adds capitalization support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @returns {String} All characters will be lower case and the first will be upper.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.capitalize( 'message_properties' ); // === 'Message_properties'
	   *     inflection.capitalize( 'message properties', true ); // === 'Message properties'
	   */
	    capitalize : function ( str ){
	      str = str.toLowerCase();

	      return str.substring( 0, 1 ).toUpperCase() + str.substring( 1 );
	    },



	  /**
	   * This function adds dasherization support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @returns {String} Replaces all spaces or underbars with dashes.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.dasherize( 'message_properties' ); // === 'message-properties'
	   *     inflection.dasherize( 'Message Properties' ); // === 'Message-Properties'
	   */
	    dasherize : function ( str ){
	      return str.replace( space_or_underbar, '-' );
	    },



	  /**
	   * This function adds titleize support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @returns {String} Capitalizes words as you would for a book title.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.titleize( 'message_properties' ); // === 'Message Properties'
	   *     inflection.titleize( 'message properties to keep' ); // === 'Message Properties to Keep'
	   */
	    titleize : function ( str ){
	      str         = str.toLowerCase().replace( underbar, ' ' );
	      var str_arr = str.split( ' ' );
	      var i       = 0;
	      var j       = str_arr.length;
	      var d, k, l;

	      for( ; i < j; i++ ){
	        d = str_arr[ i ].split( '-' );
	        k = 0;
	        l = d.length;

	        for( ; k < l; k++){
	          if( inflector.indexOf( non_titlecased_words, d[ k ].toLowerCase()) < 0 ){
	            d[ k ] = inflector.capitalize( d[ k ]);
	          }
	        }

	        str_arr[ i ] = d.join( '-' );
	      }

	      str = str_arr.join( ' ' );
	      str = str.substring( 0, 1 ).toUpperCase() + str.substring( 1 );

	      return str;
	    },



	  /**
	   * This function adds demodulize support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @returns {String} Removes module names leaving only class names.(Ruby style)
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.demodulize( 'Message::Bus::Properties' ); // === 'Properties'
	   */
	    demodulize : function ( str ){
	      var str_arr = str.split( '::' );

	      return str_arr[ str_arr.length - 1 ];
	    },



	  /**
	   * This function adds tableize support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @returns {String} Return camel cased words into their underscored plural form.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.tableize( 'MessageBusProperty' ); // === 'message_bus_properties'
	   */
	    tableize : function ( str ){
	      str = inflector.underscore( str );
	      str = inflector.pluralize( str );

	      return str;
	    },



	  /**
	   * This function adds classification support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @returns {String} Underscored plural nouns become the camel cased singular form.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.classify( 'message_bus_properties' ); // === 'MessageBusProperty'
	   */
	    classify : function ( str ){
	      str = inflector.camelize( str );
	      str = inflector.singularize( str );

	      return str;
	    },



	  /**
	   * This function adds foreign key support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @param {Boolean} drop_id_ubar Default is to seperate id with an underbar at the end of the class name,
	                                 you can pass true to skip it.(optional)
	   * @returns {String} Underscored plural nouns become the camel cased singular form.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.foreign_key( 'MessageBusProperty' ); // === 'message_bus_property_id'
	   *     inflection.foreign_key( 'MessageBusProperty', true ); // === 'message_bus_propertyid'
	   */
	    foreign_key : function ( str, drop_id_ubar ){
	      str = inflector.demodulize( str );
	      str = inflector.underscore( str ) + (( drop_id_ubar ) ? ( '' ) : ( '_' )) + 'id';

	      return str;
	    },



	  /**
	   * This function adds ordinalize support to every String object.
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @returns {String} Return all found numbers their sequence like '22nd'.
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.ordinalize( 'the 1 pitch' ); // === 'the 1st pitch'
	   */
	    ordinalize : function ( str ){
	      var str_arr = str.split( ' ' );
	      var i       = 0;
	      var j       = str_arr.length;

	      for( ; i < j; i++ ){
	        var k = parseInt( str_arr[ i ], 10 );

	        if( !isNaN( k )){
	          var ltd = str_arr[ i ].substring( str_arr[ i ].length - 2 );
	          var ld  = str_arr[ i ].substring( str_arr[ i ].length - 1 );
	          var suf = 'th';

	          if( ltd != '11' && ltd != '12' && ltd != '13' ){
	            if( ld === '1' ){
	              suf = 'st';
	            }else if( ld === '2' ){
	              suf = 'nd';
	            }else if( ld === '3' ){
	              suf = 'rd';
	            }
	          }

	          str_arr[ i ] += suf;
	        }
	      }

	      return str_arr.join( ' ' );
	    },

	  /**
	   * This function performs multiple inflection methods on a string
	   * @public
	   * @function
	   * @param {String} str The subject string.
	   * @param {Array} arr An array of inflection methods.
	   * @returns {String}
	   * @example
	   *
	   *     var inflection = require( 'inflection' );
	   *
	   *     inflection.transform( 'all job', [ 'pluralize', 'capitalize', 'dasherize' ]); // === 'All-jobs'
	   */
	    transform : function ( str, arr ){
	      var i = 0;
	      var j = arr.length;

	      for( ;i < j; i++ ){
	        var method = arr[ i ];

	        if( this.hasOwnProperty( method )){
	          str = this[ method ]( str );
	        }
	      }

	      return str;
	    }
	  };

	/**
	 * @public
	 */
	  inflector.version = '1.3.8';

	  return inflector;
	}));


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	exports.read = function(buffer, offset, isLE, mLen, nBytes) {
	  var e, m,
	      eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      nBits = -7,
	      i = isLE ? (nBytes - 1) : 0,
	      d = isLE ? -1 : 1,
	      s = buffer[offset + i];

	  i += d;

	  e = s & ((1 << (-nBits)) - 1);
	  s >>= (-nBits);
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

	  m = e & ((1 << (-nBits)) - 1);
	  e >>= (-nBits);
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity);
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	};

	exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c,
	      eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
	      i = isLE ? 0 : (nBytes - 1),
	      d = isLE ? 1 : -1,
	      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

	  value = Math.abs(value);

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }

	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

	  e = (e << mLen) | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

	  buffer[offset + i - d] |= s * 128;
	};


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * isArray
	 */

	var isArray = Array.isArray;

	/**
	 * toString
	 */

	var str = Object.prototype.toString;

	/**
	 * Whether or not the given `val`
	 * is an array.
	 *
	 * example:
	 *
	 *        isArray([]);
	 *        // > true
	 *        isArray(arguments);
	 *        // > false
	 *        isArray('');
	 *        // > false
	 *
	 * @param {mixed} val
	 * @return {bool}
	 */

	module.exports = isArray || function (val) {
	  return !! val && '[object Array]' == str.call(val);
	};


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	;(function (exports) {
		'use strict';

	  var Arr = (typeof Uint8Array !== 'undefined')
	    ? Uint8Array
	    : Array

		var PLUS   = '+'.charCodeAt(0)
		var SLASH  = '/'.charCodeAt(0)
		var NUMBER = '0'.charCodeAt(0)
		var LOWER  = 'a'.charCodeAt(0)
		var UPPER  = 'A'.charCodeAt(0)

		function decode (elt) {
			var code = elt.charCodeAt(0)
			if (code === PLUS)
				return 62 // '+'
			if (code === SLASH)
				return 63 // '/'
			if (code < NUMBER)
				return -1 //no match
			if (code < NUMBER + 10)
				return code - NUMBER + 26 + 26
			if (code < UPPER + 26)
				return code - UPPER
			if (code < LOWER + 26)
				return code - LOWER + 26
		}

		function b64ToByteArray (b64) {
			var i, j, l, tmp, placeHolders, arr

			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4')
			}

			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders)

			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length

			var L = 0

			function push (v) {
				arr[L++] = v
			}

			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
				push((tmp & 0xFF0000) >> 16)
				push((tmp & 0xFF00) >> 8)
				push(tmp & 0xFF)
			}

			if (placeHolders === 2) {
				tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
				push(tmp & 0xFF)
			} else if (placeHolders === 1) {
				tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
				push((tmp >> 8) & 0xFF)
				push(tmp & 0xFF)
			}

			return arr
		}

		function uint8ToBase64 (uint8) {
			var i,
				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
				output = "",
				temp, length

			function encode (num) {
				return lookup.charAt(num)
			}

			function tripletToBase64 (num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
			}

			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
				output += tripletToBase64(temp)
			}

			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1]
					output += encode(temp >> 2)
					output += encode((temp << 4) & 0x3F)
					output += '=='
					break
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
					output += encode(temp >> 10)
					output += encode((temp >> 4) & 0x3F)
					output += encode((temp << 2) & 0x3F)
					output += '='
					break
			}

			return output
		}

		exports.toByteArray = b64ToByteArray
		exports.fromByteArray = uint8ToBase64
	}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))


/***/ }
/******/ ])