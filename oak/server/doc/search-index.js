var searchIndex = JSON.parse('{\
"oak_loader":{"doc":"A utility binary to run Oak Runtime.","i":[[5,"main","oak_loader","Main execution point for the Oak loader.",null,[[],["result",6]]],[0,"options","","Helper functions to parse input arguments and create an…",null,null],[3,"Opt","oak_loader::options","Command line options for the Oak loader.",null,null],[12,"application","","",0,null],[12,"grpc_tls_private_key","","",0,null],[12,"grpc_tls_certificate","","",0,null],[12,"root_tls_certificate","","",0,null],[12,"oidc_client","","",0,null],[12,"metrics_port","","",0,null],[12,"no_metrics","","",0,null],[12,"introspect_port","","",0,null],[12,"no_introspect","","",0,null],[12,"config_files","","",0,null],[3,"ConfigEntry","","A specification of a configuration entry as human readable…",null,null],[12,"key","","",1,null],[12,"filename","","",1,null],[5,"create_runtime_config","","Parse input options and create a `RuntimeConfiguration`.",null,[[],[["runtimeconfiguration",3],["result",6]]]],[5,"parse_config_map","","Parse a collection of configuration entries and return the…",null,[[],[["result",6],["configmap",3]]]],[5,"create_grpc_config","","Create the overall [`oak_runtime::GrpcConfiguration`] from…",null,[[["opt",3]],[["grpcconfiguration",3],["result",6]]]],[5,"get_root_tls_certificate_or_default","","If `oak_debug` is enabled, read root TLS certificate from…",null,[[["opt",3]],[["result",6],["string",3]]]],[5,"get_oidc_client_info","","Parse OpenID Connect client configuration file into a…",null,[[["opt",3]],[["result",6],["option",4]]]],[5,"get_default_root_tls_certs","","Gets the default root TLS certificates from the embedded…",null,[[],[["result",6],["string",3]]]],[5,"create_app_config","","Parse application configuration into an instance of…",null,[[["opt",3]],[["result",6],["applicationconfiguration",3]]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"into_request","","",0,[[],["request",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"into_request","","",1,[[],["request",3]]],[11,"equivalent","","",1,[[]]],[11,"clone","","",0,[[],["opt",3]]],[11,"clone","","",1,[[],["configentry",3]]],[11,"eq","","",1,[[["configentry",3]]]],[11,"ne","","",1,[[["configentry",3]]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"from_str","","",1,[[],["result",4]]],[11,"clap","","",0,[[],["app",3]]],[11,"from_clap","","",0,[[["argmatches",3]]]],[11,"augment_clap","","",0,[[["app",3]],["app",3]]],[11,"is_subcommand","","",0,[[]]]],"p":[[3,"Opt"],[3,"ConfigEntry"]]},\
"oak_runtime":{"doc":"Oak Runtime implementation","i":[[3,"ChannelHalf","oak_runtime","A reference to one half of a [`Channel`].",null,null],[12,"direction","","",0,null],[3,"RuntimeProxy","","A proxy object that binds together a reference to the…",null,null],[12,"runtime","","",1,null],[12,"node_id","","",1,null],[3,"RuntimeConfiguration","","Configuration options that govern the behaviour of the…",null,null],[12,"metrics_port","","Port to run a metrics server on, if provided.",2,null],[12,"introspect_port","","Port to run an introspection server on, if provided.",2,null],[12,"grpc_config","","gRPC-specific options.",2,null],[12,"app_config","","Application configuration.",2,null],[12,"config_map","","Start-of-day configuration to feed to the running…",2,null],[3,"GrpcConfiguration","","Configuration options related to gRPC pseudo-Nodes.",null,null],[12,"grpc_server_tls_identity","","TLS identity to use for all gRPC Server Nodes.",3,null],[12,"oidc_client_info","","OpenID Connect Authentication client information.",3,null],[12,"grpc_client_root_tls_certificate","","Root TLS certificate to use for all gRPC Client Nodes.",3,null],[3,"NodePrivilege","","The downgrading (declassification + endorsement) privilege…",null,null],[3,"NodeId","","A unique internal identifier for a Node or pseudo-Node…",null,null],[12,"0","","",4,null],[3,"AuxServer","","Information for managing an associated server.",null,null],[12,"name","","",5,null],[12,"join_handle","","",5,null],[12,"termination_notificiation_sender","","",5,null],[3,"Runtime","","Runtime structure for configuring and running a set of Oak…",null,null],[12,"metrics_data","","",6,null],[4,"ChannelHalfDirection","","The direction of a [`ChannelHalf`].",null,null],[13,"Read","","",7,null],[13,"Write","","",7,null],[4,"NodeReadStatus","","Helper types to indicate whether a channel read operation…",null,null],[13,"Success","","",8,null],[13,"NeedsCapacity","","",8,null],[4,"ReadStatus","","",null,null],[13,"Success","","",9,null],[13,"NeedsCapacity","","",9,null],[0,"auth","","Authentication functionality.",null,null],[0,"oidc_utils","oak_runtime::auth","OpenID Connect utilities for exchanging authorisation…",null,null],[3,"Claims","oak_runtime::auth::oidc_utils","Claims encoded into the identity token. Reference:…",null,null],[3,"ClientInfo","","The OpenID Connect client ID and client secret contained…",null,null],[12,"client_id","","The client ID.",10,null],[12,"client_secret","","The client secret.",10,null],[3,"TokenError","","Represents a token validation error.",null,null],[5,"parse_client_info_json","","Parses the content of the downloaded OpenID Connect client…",null,[[],[["result",4],["clientinfo",3],["box",3]]]],[5,"exchange_code_for_token","","Exchanges an authorisation code for an ID token and…",null,[[]]],[11,"new","","",11,[[],["tokenerror",3]]],[11,"new","oak_runtime","Constructor for [`ChannelHalf`] keeps the underlying…",0,[[["arc",3],["channelhalfdirection",4],["channel",3]]]],[11,"get_channel_id","","Get the ID of the underlying channel. For…",0,[[]]],[11,"get_messages","","Get read-only access to the channel\'s messages. For…",0,[[],[["vecdeque",3],["rwlockreadguard",3]]]],[11,"visit_halves","","Visit all channel halves that are reachable via this…",0,[[]]],[11,"wake_waiters","","Wake any threads waiting on the underlying channel.",0,[[]]],[0,"config","","Functionality covering configuration of a Runtime instance.",null,null],[5,"configure_and_run","oak_runtime::config","Configures a [`Runtime`] from the given…",null,[[["runtimeconfiguration",3]],[["result",4],["arc",3],["oakstatus",4]]]],[5,"load_certificate","","Load a PEM encoded TLS certificate, performing (minimal)…",null,[[],[["result",4],["certificate",3]]]],[11,"graph","oak_runtime","Generate a Graphviz dot graph that shows the current shape…",6,[[],["string",3]]],[11,"html","","Generate an HTML page that describes the internal state of…",6,[[],["string",3]]],[11,"object_counts","","Return counts of the number of Nodes and channels…",6,[[]]],[11,"introspection_event","","Generates an introspection event recording a modification…",6,[[["eventdetails",4]]]],[11,"create_runtime","","Creates a [`Runtime`] instance with a single initial Node…",1,[[["grpcconfiguration",3],["applicationconfiguration",3]],["runtimeproxy",3]]],[11,"start_runtime","","Configures and runs the protobuf specified…",1,[[["runtimeconfiguration",3]],[["oakstatus",4],["result",4],["handle",6]]]],[11,"is_terminating","","See [`Runtime::is_terminating`].",1,[[]]],[11,"node_create","","See [`Runtime::node_create`].",1,[[["label",3],["handle",6],["nodeconfiguration",3]],[["oakstatus",4],["result",4]]]],[11,"channel_create","","See [`Runtime::channel_create`].",1,[[["label",3]],[["oakstatus",4],["result",4]]]],[11,"channel_close","","See [`Runtime::channel_close`].",1,[[["handle",6]],[["oakstatus",4],["result",4]]]],[11,"wait_on_channels","","See [`Runtime::wait_on_channels`].",1,[[],[["oakstatus",4],["vec",3],["result",4]]]],[11,"channel_write","","See [`Runtime::channel_write`].",1,[[["nodemessage",3],["handle",6]],[["oakstatus",4],["result",4]]]],[11,"channel_read","","See [`Runtime::channel_read`].",1,[[["handle",6]],[["oakstatus",4],["result",4],["option",4]]]],[11,"channel_try_read_message","","See [`Runtime::channel_try_read_message`].",1,[[["handle",6]],[["oakstatus",4],["option",4],["result",4]]]],[11,"channel_direction","","Return the direction of an ABI handle.",1,[[["handle",6]],[["channelhalfdirection",4],["result",4],["oakstatus",4]]]],[11,"metrics_data","","",1,[[],["metrics",3]]],[0,"time","","Roughtime client implementation to provide a source of…",null,null],[3,"RoughtimeServer","oak_runtime::time","Specifies the details of a Roughtime server.",null,null],[3,"RoughtimeClient","","A client for requesting Roughtime from multiple servers.",null,null],[4,"RoughtimeError","","Possible errors returned by the Roughtime client.",null,null],[13,"Base64Error","","",12,null],[13,"InvalidSignature","","",12,null],[13,"IoError","","",12,null],[13,"MidPointTooSmall","","",12,null],[13,"NotEnoughOverlappingIntervals","","",12,null],[12,"actual","oak_runtime::time::RoughtimeError","",13,null],[12,"expected","","",13,null],[13,"RadiusTooLarge","oak_runtime::time","",12,null],[13,"RoughenoughError","","",12,null],[13,"TimeoutError","","",12,null],[5,"get_default_servers","","Gets the default Roughtime servers in the ecosystem.",null,[[],[["vec",3],["roughtimeserver",3]]]],[6,"MicrosSinceEpoch","","Time is given as microseconds since the UNIX epoch…",null,null],[17,"DEFAULT_MIN_OVERLAPPING_INTERVALS","","",null,null],[17,"DEFAULT_MAX_RADIUS_MICROSECONDS","","",null,null],[17,"DEFAULT_TIMEOUT_SECONDS","","",null,null],[17,"DEFAULT_SERVER_RETRIES","","",null,null],[11,"default","","Creates a new Roughtime client with the default settings.",14,[[]]],[11,"new","","Creates a new Roughtime client.",14,[[["vec",3],["roughtimeserver",3]]]],[11,"get_roughtime","","Gets the Roughtime from multiple servers.",14,[[],[["microssinceepoch",6],["result",4],["roughtimeerror",4]]]],[11,"new","","Creates a new instance.",15,[[]]],[11,"new","oak_runtime","",16,[[["hashset",3],["tag",3]]]],[11,"gather_metrics","","Return the accumulated metrics for the `Runtime`.",6,[[],[["metricfamily",3],["vec",3]]]],[11,"is_terminating","","Return whether the [`Runtime`] is terminating.",6,[[]]],[11,"stop","","Signal termination to a [`Runtime`] and wait for its Node…",6,[[]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"into_request","","",0,[[],["request",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"into_request","","",1,[[],["request",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"into_request","","",2,[[],["request",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"vzip","","",3,[[]]],[11,"into_request","","",3,[[],["request",3]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"vzip","","",16,[[]]],[11,"into_request","","",16,[[],["request",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"into_request","","",4,[[],["request",3]]],[11,"equivalent","","",4,[[]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"into_request","","",5,[[],["request",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"vzip","","",6,[[]]],[11,"into_request","","",6,[[],["request",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"vzip","","",7,[[]]],[11,"into_request","","",7,[[],["request",3]]],[11,"equivalent","","",7,[[]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"vzip","","",8,[[]]],[11,"into_request","","",8,[[],["request",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"vzip","","",9,[[]]],[11,"into_request","","",9,[[],["request",3]]],[11,"from","oak_runtime::auth::oidc_utils","",17,[[]]],[11,"into","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"vzip","","",17,[[]]],[11,"into_request","","",17,[[],["request",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"vzip","","",10,[[]]],[11,"into_request","","",10,[[],["request",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"to_string","","",11,[[],["string",3]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"vzip","","",11,[[]]],[11,"into_request","","",11,[[],["request",3]]],[11,"from","oak_runtime::time","",15,[[]]],[11,"into","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"vzip","","",15,[[]]],[11,"into_request","","",15,[[],["request",3]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"vzip","","",14,[[]]],[11,"into_request","","",14,[[],["request",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_string","","",12,[[],["string",3]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"vzip","","",12,[[]]],[11,"into_request","","",12,[[],["request",3]]],[11,"drop","oak_runtime","",0,[[]]],[11,"drop","","Dropping an auxiliary server involves notifying it that it…",5,[[]]],[11,"drop","","",6,[[]]],[11,"from","oak_runtime::time","",12,[[["error",3]]]],[11,"from","","",12,[[["error",4]]]],[11,"from","","",12,[[["decodeerror",4]]]],[11,"clone","oak_runtime::auth::oidc_utils","",10,[[],["clientinfo",3]]],[11,"clone","","",11,[[],["tokenerror",3]]],[11,"clone","oak_runtime","",0,[[]]],[11,"clone","","",7,[[],["channelhalfdirection",4]]],[11,"clone","","",1,[[],["runtimeproxy",3]]],[11,"clone","","",2,[[],["runtimeconfiguration",3]]],[11,"clone","","",3,[[],["grpcconfiguration",3]]],[11,"clone","","",16,[[],["nodeprivilege",3]]],[11,"clone","","",4,[[],["nodeid",3]]],[11,"default","","",2,[[],["runtimeconfiguration",3]]],[11,"default","","",3,[[],["grpcconfiguration",3]]],[11,"default","","",16,[[],["nodeprivilege",3]]],[11,"cmp","","",4,[[["nodeid",3]],["ordering",4]]],[11,"eq","","",7,[[["channelhalfdirection",4]]]],[11,"eq","","",4,[[["nodeid",3]]]],[11,"ne","","",4,[[["nodeid",3]]]],[11,"partial_cmp","","",4,[[["nodeid",3]],[["ordering",4],["option",4]]]],[11,"lt","","",4,[[["nodeid",3]]]],[11,"le","","",4,[[["nodeid",3]]]],[11,"gt","","",4,[[["nodeid",3]]]],[11,"ge","","",4,[[["nodeid",3]]]],[11,"fmt","oak_runtime::auth::oidc_utils","",17,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","oak_runtime","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","oak_runtime::time","",12,[[["formatter",3]],["result",6]]],[11,"fmt","oak_runtime","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","oak_runtime::auth::oidc_utils","",11,[[["formatter",3]],["result",6]]],[11,"fmt","oak_runtime::time","",12,[[["formatter",3]],["result",6]]],[11,"hash","oak_runtime","",7,[[]]],[11,"hash","","",4,[[]]],[11,"source","oak_runtime::auth::oidc_utils","",11,[[],[["option",4],["error",8]]]],[11,"deserialize","","",17,[[],["result",4]]],[11,"deserialize","","",10,[[],["result",4]]]],"p":[[3,"ChannelHalf"],[3,"RuntimeProxy"],[3,"RuntimeConfiguration"],[3,"GrpcConfiguration"],[3,"NodeId"],[3,"AuxServer"],[3,"Runtime"],[4,"ChannelHalfDirection"],[4,"NodeReadStatus"],[4,"ReadStatus"],[3,"ClientInfo"],[3,"TokenError"],[4,"RoughtimeError"],[13,"NotEnoughOverlappingIntervals"],[3,"RoughtimeClient"],[3,"RoughtimeServer"],[3,"NodePrivilege"],[3,"Claims"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);